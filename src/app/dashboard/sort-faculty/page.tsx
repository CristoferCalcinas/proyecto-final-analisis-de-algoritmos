import { TableFaculties } from "@/components";

export default function SortFacultyPage() {
    return (
        <div>
            <div className="flex flex-col items-center space-y-5">
                <h1 className="text-4xl font-bold">Ordenar Facultads por Id</h1>
                <div>
                    <TableFaculties />
                </div>
            </div>
        </div>
    );
}