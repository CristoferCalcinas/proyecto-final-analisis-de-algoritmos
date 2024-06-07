'use server';

import prisma from "@/lib/prisma";

export const list_faculty = async () => {
    const facultades = await prisma.facultad.findMany();
    return facultades;
}