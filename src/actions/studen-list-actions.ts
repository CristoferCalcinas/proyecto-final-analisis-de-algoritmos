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