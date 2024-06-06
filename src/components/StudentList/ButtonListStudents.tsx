'use client';

import { list_students } from "@/actions/studen-list-actions";
import { useState } from "react";


export const ButtonListStudents = () => {
    const [listStudents, setListStudents] = useState<any[]>([]);
    const onButtonClick = async () => {
        const students = await list_students();
        setListStudents(students);
    };
    console.log(listStudents);
    return (
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={onButtonClick}
            >
                Listar Estudiantes
            </button>
        </div>
    )
}
