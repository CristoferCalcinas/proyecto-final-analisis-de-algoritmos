
interface Props {
    id: string;
    nombre_estudiante: string;
    numero_carnet: string | null;
    email: string | null;
    direccion: string | null;
    edad: number | null;
}


export const ShowTableForIndexStudent = (
    {
        id,
        nombre_estudiante,
        numero_carnet,
        email,
        direccion,
        edad
    }: Props) => {
    return (
        <div className="mb-5">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 text-center text-sm font-semibold text-gray-900">
                            Nombre
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            N° Carnet
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Direccion
                        </th>
                        <th scope="col" className="py-3.5 text-center text-sm font-semibold text-gray-900">
                            Edad
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className={'relative py-4 px-2 text-sm'}
                        >
                            <div className="font-medium text-gray-900 text-center">
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
                            className={'border-t border-gray-200 text-center'}
                        >
                            {numero_carnet}
                        </td>
                        <td
                            className={'border-t border-gray-200 text-center'}
                        >
                            {email}
                        </td>
                        <td
                            className={'border-t border-gray-200 text-center'}
                        >
                            {direccion}
                        </td>
                        <td
                            className={'border-t border-gray-200 text-center px-3w'}
                        >
                            <div className="sm:hidden">{edad}</div>
                            <div className="hidden sm:block">{edad}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
