'use client';

import { useEffect, useState } from "react";
import { list_students } from "@/actions/studen-list-actions";
import { OptionsButtons } from "./OptionsButtons";
import { mergeSort } from "@/lib/mergeSort";
import { quickSort } from "@/lib/quickSort";

interface Student {
    id: string;
    nombre_estudiante: string;
    numero_carnet: string | null;
    email: string | null;
    direccion: string | null;
    edad: number | null;
}

export const TableStrundets = () => {
    const [listStudents, setListStudents] = useState<Student[]>([]);

    useEffect(() => {

        list_students().then((response) => {
            setListStudents(response);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    const [boolMergeSort, setMergeSort] = useState(false);
    const [boolQuickSort, setQuickSort] = useState(false);

    if (boolMergeSort) {
        console.time('MergeSortExecutionTime');
        const listAge = listStudents.map((student) => (student.edad) ? student.edad : 0);
        const sortedList = mergeSort(listAge);
        setMergeSort(false);
        const newListStudents = sortedList.map((age) => {
            return listStudents.find((student) => student.edad === age)!;
        });
        setListStudents(newListStudents);
        console.timeEnd('MergeSortExecutionTime');
    }
    if(boolQuickSort){
        console.time('QuickSortExecutionTime');
        const listAge = listStudents.map((student) => (student.edad) ? student.edad : 0);
        const sortedList = quickSort(listAge);
        setQuickSort(false);
        const newListStudents = sortedList.map((age) => {
            return listStudents.find((student) => student.edad === age)!;
        });
        setListStudents(newListStudents);
        console.timeEnd('QuickSortExecutionTime');
    }
    
    return (
        <div>
            <OptionsButtons
                setMergeSort={setMergeSort}
                setQuickSort={setQuickSort}
            />
            <pre>
                {JSON.stringify(listStudents, null, 2)}
            </pre>
        </div>
    )
}
