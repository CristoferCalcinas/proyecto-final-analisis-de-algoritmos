'use client';

import { Button } from "../ui/button"

interface Props {
    setMergeSort: any;
    setQuickSort: any;
}

export const OptionsButtons = ({ setMergeSort, setQuickSort }: Props) => {

    const handleMergeSort = () => {
        setMergeSort(true);
    }

    const handleQuickSort = () => {
        setQuickSort(true);
    }

    return (
        <div className="space-x-5">
            <Button
                variant={"destructive"}
                onClick={handleMergeSort}
            >
                Ordenar usando Merge Sort
            </Button>
            <Button
                variant={"destructive"}
                onClick={handleQuickSort}
            >
                Ordenar usando Quick Sort
            </Button>
        </div>
    )
}
