
interface Props {
    id: number;
    nombre: string | null;
    descripcion: string | null;
}

export const ShowTableForNameFaculty = ({ id, nombre, descripcion }: Props) => {
    return (
        <div className="mb-5">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 text-center text-sm font-semibold text-gray-900">
                            Id
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Nombre
                        </th>
                        <th
                            scope="col"
                            className="hidden py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Descripcion
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            className={'relative py-4 px-2 text-sm'}
                        >
                            <div className="font-medium text-gray-900 text-center">
                                {id}
                            </div>
                            <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                <span>
                                    {nombre}
                                </span>
                                <span className="hidden sm:inline">{" - "}</span>
                                <span>{descripcion}</span>
                            </div>
                        </td>
                        <td
                            className={'border-t border-gray-200 text-center'}
                        >
                            {nombre}
                        </td>
                        <td
                            className={'border-t border-gray-200 text-center'}
                        >
                            {descripcion}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
