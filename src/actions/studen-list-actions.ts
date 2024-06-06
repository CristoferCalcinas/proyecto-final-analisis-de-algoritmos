'use server';

import prisma from "@/lib/prisma";

export const list_students = async () => {
    const students = await prisma.estudiante.findMany();
    console.log(students)
    return students;
}