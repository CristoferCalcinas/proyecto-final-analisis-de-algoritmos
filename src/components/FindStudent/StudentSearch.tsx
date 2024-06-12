'use client'
import { useEffect, useState } from 'react'
import { list_students } from '@/actions/studen-list-actions';
import { linearSearch } from '@/lib/linearSearch';
import { ShowTableForIndexStudent } from './ShowTableForIndexStudent';


interface Student {
    id: string;
    nombre_estudiante: string;
    numero_carnet: string | null;
    email: string | null;
    direccion: string | null;
    edad: number | null;
}

export const StudentSearch = () => {
    const [query, setQuery] = useState('');

    const [students, setStudents] = useState<Student[]>([]);

    const [indexStudentList, setIndexStudentList] = useState<Student[]>([]);

    useEffect(() => {
        list_students().then((response) => {
            setStudents(response);
        });
    }, [])

    // Funcion para la busqueda de estudiantes aplicando el algoritmo de busqueda(linearSearch)
    const onSubmitSearchStudent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const list_name_students_split = students.map((student) => student.nombre_estudiante.split(' '));
        let student_list_aux: Student[] = [];
        list_name_students_split.forEach((
            names_split,
            index
        ) => {
            // Aplicando la búsqueda lineal
            const is_found = linearSearch(names_split, query);
            if (is_found) {
                student_list_aux.push(students[index]);
            }
        })
        setIndexStudentList(student_list_aux);
    }

    // const filteredPeople =
    //     query === ''
    //         ? []
    //         : students.filter((person) => {
    //             return person.name.toLowerCase().includes(query.toLowerCase())
    //         })

    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Buscar Estudiante
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>
                        Ingrese el correo electrónico del estudiante que desea buscar.
                    </p>
                </div>
                <form
                    onSubmit={onSubmitSearchStudent}
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
                            placeholder="you.lastname@uab.edu.bo"
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
            <div className=''>
                {
                    indexStudentList.map((student) => (
                        <ShowTableForIndexStudent key={student.id} {...student} />
                    ))
                }
            </div>
        </div>
    )
}
