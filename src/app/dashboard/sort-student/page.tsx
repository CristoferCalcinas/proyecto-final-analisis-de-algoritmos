import { TableStrundets } from "@/components";

export default function SortStudentPage() {
    return (
        <div className="flex flex-col items-center space-y-5">
            <h1 className="text-4xl font-bold">Ordenar Alunos por Edad</h1>
            <div>
                <TableStrundets />
            </div>
        </div>
    );
}