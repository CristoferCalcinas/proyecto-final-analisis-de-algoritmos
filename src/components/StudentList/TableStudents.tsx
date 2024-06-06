'use client';
import { useState, useEffect } from "react";
import { list_students } from "@/actions/studen-list-actions";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const TableStudents = (
    { has_authorization = false }: { has_authorization: boolean }
) => {
    const [allStudents, setAllStudents] = useState<any[]>([]);

    useEffect(() => {
        list_students().then((response) => {
            setAllStudents(response);
        });
    }, [])

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                        Nombre del estudiante
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        N° Carnet
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Email
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Direccion
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                        Edad del estudiante
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Select</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {allStudents.map(({ id, nombre_estudiante, numero_carnet, email, direccion, edad }) => (
                    <tr key={id}>
                        <td
                            className={classNames(
                                nombre_estudiante === 0 ? '' : 'border-t border-transparent',
                                'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                            )}
                        >
                            <div className="font-medium text-gray-900">
                                {nombre_estudiante}
                            </div>
                            <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                <span>
                                    {direccion}
                                </span>
                                <span className="hidden sm:inline">{" - "}</span>
                                <span>{email}</span>
                            </div>
                        </td>
                        <td
                            className={classNames(
                                id === 0 ? '' : 'border-t border-gray-200',
                                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                            )}
                        >
                            {numero_carnet}
                        </td>
                        <td
                            className={classNames(
                                direccion === 0 ? '' : 'border-t border-gray-200',
                                'hidden px-1 py-3.5 text-sm text-gray-500 lg:table-cell text-center'
                            )}
                        >
                            {email}
                        </td>
                        <td
                            className={classNames(
                                'border-t border-gray-200',
                                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                            )}
                        >
                            {direccion}
                        </td>
                        <td
                            className={classNames(
                                'border-t border-gray-200',
                                'px-3 py-3.5 text-sm text-gray-500 text-center'
                            )}
                        >
                            <div className="sm:hidden">{edad}</div>
                            <div className="hidden sm:block">{edad}</div>
                        </td>
                        {
                            has_authorization && (
                                <td
                                    className={classNames(
                                        'border-t border-transparent',
                                        'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                                    )}
                                >
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                                        disabled={id}
                                    >
                                        Select<span className="sr-only">, {nombre_estudiante}</span>
                                    </button>
                                </td>
                            )
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
