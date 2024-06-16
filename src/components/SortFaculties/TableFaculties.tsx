'use client';

import { useEffect, useState } from "react";
import { OptionsButtons } from "./OptionsButtons";
import { list_faculty } from "@/actions/faculty-list-actions";
import { mergeSort } from "@/lib/mergeSort";
import { quickSort } from "@/lib/quickSort";

interface Faculty {
    id: number;
    nombre: string | null;
    descripcion: string | null;
}

export const TableFaculties = () => {
    const [listFaculties, setListFaculties] = useState<Faculty[]>([]);

    useEffect(() => {

        list_faculty().then((response) => {
            setListFaculties(response);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    const [boolMergeSort, setMergeSort] = useState(false);
    const [boolQuickSort, setQuickSort] = useState(false);

    if (boolMergeSort) {
        console.time('MergeSortExecutionTime');
        const listName = listFaculties.map((faculty) => (faculty.id) ? faculty.id : 0);
        const sortedList = mergeSort(listName);
        setMergeSort(false);
        const newListStudents = sortedList.map((age) => {
            return listFaculties.find((faculty) => faculty.id === age)!;
        });
        setListFaculties(newListStudents);
        console.timeEnd('MergeSortExecutionTime');
    }
    if (boolQuickSort) {
        console.time('QuickSortExecutionTime');
        const listAge = listFaculties.map((faculty) => (faculty.id) ? faculty.id : 0);
        const sortedList = quickSort(listAge);
        setQuickSort(false);
        const newListStudents = sortedList.map((age) => {
            return listFaculties.find((faculty) => faculty.id === age)!;
        });
        setListFaculties(newListStudents);
        console.timeEnd('QuickSortExecutionTime');
    }

    return (
        <div>
            <OptionsButtons
                setMergeSort={setMergeSort}
                setQuickSort={setQuickSort}
            />
            <pre>
                {JSON.stringify(listFaculties, null, 2)}
            </pre>
        </div>
    )
}





