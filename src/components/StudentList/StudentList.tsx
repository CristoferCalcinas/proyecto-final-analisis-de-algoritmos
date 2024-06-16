'use client';
import { useState } from "react";
import { useDashboardStore } from "@/store";
import { ButtonAddStudentWithDialog } from "./ButtonAddStudentWithDialog"
import { TableStudents } from "./TableStudents";
import { ButtonReloadStudentsList } from "./ButtonReloadStudentsList";

export const StudentList = () => {

    const has_permission = useDashboardStore(state => state.is_admin)
    const [reloadTableStudents, setReloadTableStudents] = useState(false)

    const handleReloadTableStudents = () => {
        setReloadTableStudents(!reloadTableStudents)
    }
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
                    has_permission ? <ButtonAddStudentWithDialog reloadTables={handleReloadTableStudents} /> : <ButtonReloadStudentsList reloadTables={handleReloadTableStudents} />
                }
            </div>
            <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                <TableStudents has_authorization={has_permission} reloadTables={reloadTableStudents} />
            </div>
        </div>
    )
}
