import { FacultyAvatar } from "./FacultyAvatar";

interface Props {
    id: number;
    nombre: string | null;
    descripcion: string | null;
}


export const FacultyCard = ({ id, nombre, descripcion }: Props) => {
    return (
        <div>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg flex items-center justify-center">
                    <FacultyAvatar nombre={nombre} />
                </div>
                <div className="relative mt-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">{nombre}</h3>
                    <p className="mt-1 text-sm text-gray-500">{descripcion}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{id}</p>
                </div>
            </div>
            <div className="mt-6">
                <button
                    // onClick={traer_todas_facultades_test}
                    className="relative mx-auto flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    {nombre}
                </button>
            </div>
        </div>
    )
}
