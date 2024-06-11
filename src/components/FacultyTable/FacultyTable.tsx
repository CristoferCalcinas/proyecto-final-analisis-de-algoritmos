'use client';

import { useEffect, useState } from "react";
import { list_faculty } from "@/actions/faculty-list-actions";
import { type facultad } from "@prisma/client";
import { useDashboardStore } from "@/store";

import { FacultyCard } from "./FacultyCard";
import { ButtonAddFacultyWithDialog } from "./ButtonAddFacultyWithDialog";
import { ButtonReloadFacultyList } from "./ButtonReloadFacultyList";


export const FacultyTable = () => {

    const [listFaculties, setListFaculties] = useState<facultad[]>([]);
    const has_permission = useDashboardStore(state => state.is_admin);
    const [reloadFaculties, setReloadFaculties] = useState(false);


    useEffect(() => {
        const traer_todas_facultades = async () => {
            const facultades = await list_faculty();
            setListFaculties(facultades);
        }
        traer_todas_facultades();
    }, [reloadFaculties]
    )

    const handleReloadFacultyTable = () => {
        setReloadFaculties(!reloadFaculties)
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Facultades
                    </h2>
                    {
                        has_permission ? <ButtonAddFacultyWithDialog reloadTables={handleReloadFacultyTable} /> : <ButtonReloadFacultyList reloadTables={handleReloadFacultyTable} />
                    }
                </div>

                <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {listFaculties.map(({ descripcion, id, nombre }) => (
                        <FacultyCard key={id} id={id} nombre={nombre} descripcion={descripcion} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
