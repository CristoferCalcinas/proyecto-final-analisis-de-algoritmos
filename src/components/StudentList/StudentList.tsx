'use client';
import { useDashboardStore } from "@/store";
import { ButtonAddStudent } from "./ButtonAddStudent"
import { TableStudents } from "./TableStudents";

export const StudentList = () => {

    const has_permission = useDashboardStore(state => state.is_admin)

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Lista de estudiantes Activos
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Todos estos estudiantes estan registrados en la web del{" "}
                        <span className="font-semibold">Proyecto Final</span>
                    </p>
                </div>
                {/* Boton para listar todos los estudiantes */}
                {
                    has_permission ? <ButtonAddStudent /> : null
                }
            </div>
            <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                <TableStudents has_authorization={false} />
            </div>
        </div>
    )
}
