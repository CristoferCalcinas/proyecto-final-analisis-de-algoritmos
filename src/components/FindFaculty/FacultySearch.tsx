'use client';

import { useEffect, useState } from "react";
import { list_faculty } from "@/actions/faculty-list-actions";
import { ShowTableForNameFaculty } from "./ShowTableForNameFaculty"
import { linearSearch } from "@/lib/linearSearch";

interface Faculty {
    id: number;
    nombre: string | null;
    descripcion: string | null;
}

export const FacultySearch = () => {
    const [query, setQuery] = useState('');

    const [faculties, setFaculty] = useState<Faculty[]>([]);

    const [indexStudentList, setIndexStudentList] = useState<Faculty[]>([]);

    useEffect(() => {
        list_faculty().then((response) => {
            setFaculty(response);
        });
    }, [])

    const onSubmitSearchFaculty = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const list_name_faculties_split = faculties.map((faculty) => faculty?.nombre?.split(' '));
        let faculty_list_aux: Faculty[] = [];
        list_name_faculties_split.forEach((
            names_split,
            index
        ) => {
            // Aplicando la búsqueda lineal
            const is_found = linearSearch(names_split!, query);
            if (is_found) {
                faculty_list_aux.push(faculties[index]);
            }
        })
        setIndexStudentList(faculty_list_aux);
    }

    return (
        <div>
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Buscar Facultad
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        Ingrese el nombre de la facultad que desea buscar.
                    </p>
                </div>
                <form
                    onSubmit={onSubmitSearchFaculty}
                    className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <label htmlFor="user" className="sr-only">
                            Usuario
                        </label>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
                            type="text"
                            name="user"
                            id="user"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                            placeholder="Nombre de la facultad"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                    >
                        Buscar
                    </button>
                </form>
            </div>
            <div>
                {
                    indexStudentList.map((faculty) => (
                        <ShowTableForNameFaculty key={faculty.id} {...faculty} />
                    ))
                }
            </div>
        </div>
    )
}
