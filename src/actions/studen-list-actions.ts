'use server';

import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const list_students = async () => {
    const students = await prisma.estudiante.findMany();

    const formattedStudents = students.map((student) => {
        const fechaNacimiento = student.fecha_nacimiento ? new Date(student.fecha_nacimiento) : null;
        const edad = fechaNacimiento ? new Date().getFullYear() - fechaNacimiento.getFullYear() : null;
        return {
            id: student.id,
            nombre_estudiante: `${student.nombre} ${student.apellido}`,
            numero_carnet: student.carnet,
            email: student.email,
            direccion: student.direccion,
            edad,
        };
    });

    return formattedStudents;
}

export const add_student = async (student:
    {
        nombre: string;
        apellido: string;
        carnet: string;
        fecha_nacimiento: string;
        telefono: string;
        direccion: string;
    }) => {

    try {

        await prisma.$queryRaw`
            Call insertar_estudiantes(
                ${student.nombre},
                ${student.apellido},
                ${student.carnet},
                ${new Date(student.fecha_nacimiento).toISOString().split('T')[0]}::DATE,
                ${student.telefono},
                ${student.direccion})
            `
        return {
            message: 'Estudiante agregado correctamente',
            status: 200
        };
    } catch (error) {
        console.log('\n\n-------------------------ERROR-ADD-STUDENT--------------------------')
        console.error(error);
        console.log('-------------------------ERROR-ADD-STUDENT--------------------------\n\n')

        // Manejar errores específicos de Prisma
        if (error instanceof PrismaClientKnownRequestError) {
            // Aquí puedes acceder a las propiedades específicas del error
            const errorMessage = error.meta as { message: string };

            return {
                error: errorMessage?.message,
                status: 400
            };
        }

        // Manejar otros tipos de errores si es necesario
        return {
            error: 'An unknown error occurred',
            status: 500
        };
    }

}

