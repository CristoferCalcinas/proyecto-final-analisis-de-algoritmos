'use server';

import prisma from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const list_faculty = async () => {
    const facultades = await prisma.facultad.findMany();
    return facultades;
}

export const add_faculty = async (faculty: { nombre: string; descripcion: string; }) => {
    try {
        await prisma.$queryRaw`
            Call insertar_facultad(
                    ${faculty.nombre},
                    ${faculty.descripcion}
                )
            `
        return {
            status: 200,
            message: 'Facultad agregada correctamente'
        }
    } catch (error) {
        console.log('\n\n-------------------------ERROR-ADD-FACULTY--------------------------');
        console.log(error);
        console.log('\n\n-------------------------ERROR-ADD-FACULTY--------------------------');

        if (error instanceof Error) {
            return {
                status: 500,
                message: 'Error Desconocido'
            }
        };

        if (error instanceof PrismaClientKnownRequestError) {
            const errorMessage = error.meta as { message: string };

            return {
                error: errorMessage?.message,
                status: 400
            };
        };

        return {
            status: 500,
            message: 'Error desconocido'
        };
    }
}

export const update_faculty = async (faculty: { id: number; nombre: string; descripcion: string; }) => {
    try {
        await prisma.$queryRaw`
            Call actualizar_facultad(
                    ${faculty.id},
                    ${faculty.nombre},
                    ${faculty.descripcion}
                )
            `
        return {
            status: 200,
            message: 'Facultad actualizada correctamente'
        }
    } catch (error) {
        console.log('\n\n-------------------------ERROR-UPDATE-FACULTY--------------------------');
        console.log(error);
        console.log('\n\n-------------------------ERROR-UPDATE-FACULTY--------------------------');

        if (error instanceof Error) {
            return {
                status: 500,
                message: 'Error Desconocido'
            }
        };

        if (error instanceof PrismaClientKnownRequestError) {
            const errorMessage = error.meta as { message: string };

            return {
                error: errorMessage?.message,
                status: 400
            };
        };

        return {
            status: 500,
            message: 'Error desconocido'
        };
    }
}

export const delete_faculty = async (faculty: { id: number; }) => {
    try {
        await prisma.facultad.deleteMany({
            where: {
                id: faculty.id
            }
        });
    } catch (error) {
        console.log('\n\n-------------------------ERROR-DELETE-FACULTY--------------------------');
        console.log(error);
        console.log('\n\n-------------------------ERROR-DELETE-FACULTY--------------------------');

        if (error instanceof Error) {
            return {
                status: 500,
                message: 'Error Desconocido'
            }
        };

        if (error instanceof PrismaClientKnownRequestError) {
            const errorMessage = error.meta as { message: string };

            return {
                error: errorMessage?.message,
                status: 400
            };
        };

        return {
            status: 500,
            message: 'Error desconocido'
        };
    }
}