'use server';

import prisma from "@/lib/prisma";

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

    console.log(student)
    try {

        const newStudent = await prisma.$queryRaw`
            Call insertar_estudiantes(
                ${student.nombre},
                ${student.apellido},
                ${student.carnet},
                ${new Date(student.fecha_nacimiento).toISOString().split('T')[0]}::DATE,
                ${student.telefono},
                ${student.direccion})
            `

        return newStudent;
    } catch (error) {
        console.log('---------------------------------------------------')
        console.error(error);
        console.log('---------------------------------------------------')
        return null;
    }

}