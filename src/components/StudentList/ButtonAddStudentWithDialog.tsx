'use client';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
// import { DialogClose } from "@radix-ui/react-dialog";

import { add_student } from "@/actions/studen-list-actions";
import { AlertForAddStudent } from "./AlertForAddStudent";

interface Student {
    nombre: string;
    apellido: string;
    carnet: string;
    fecha_nacimiento: string;
    telefono: string;
    direccion: string;
}

export const ButtonAddStudentWithDialog = () => {

    // Estado para controlar si el dialogo esta abierto o cerrado
    const [dialogOpen, setDialogOpen] = useState(false)

    // Estado para controlar el error al agregar un estudiante
    const [error, setError] = useState<{ status: boolean; message: unknown;}>({
        status: false,
        message: '',
        // itemError: ''
    });

    // Estado para controlar el nuevo estudiante a agregar
    const [newStudent, setNewStudent] = useState<Student>({
        nombre: "Pedro",
        apellido: "Duarte",
        carnet: "CARNET000",
        fecha_nacimiento: "2000-01-01",
        telefono: "555-000000",
        direccion: "Calle Falsa XXX"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(newStudent);
        const response = await add_student(newStudent);
        if (response && response.status && response.status === 200) {
            setDialogOpen(false);
            setError({ status: false, message: ''});
            console.log('Estudiante agregado correctamente');
            return;
        }
        setError({ status: true, message: response.error });
        // // const errorField = response?.error?.split(" ")[1].split("=")[0].replace(")", "").replace("(","");
        // setError({ status: true, message: response.error, itemError: errorField!});   
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open) }}>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-2 border-black" >Agregar Estudiante</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="space-y-3">
                    <DialogTitle>Nuevo Estudiante</DialogTitle>
                    <DialogDescription>
                        Agrega un nuevo estudiante a la lista de estudiantes activos
                    </DialogDescription>
                    {error.status && <AlertForAddStudent titleError={error.message} />}
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nombre" className="text-right">
                            Nombre
                        </Label>
                        <Input
                            id="nombre"
                            name="nombre"
                            defaultValue={newStudent.nombre}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="apellido" className="text-right">
                            Apellido
                        </Label>
                        <Input
                            id="apellido"
                            name="apellido"
                            defaultValue={newStudent.apellido}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="carnet_identidad" className="text-right">
                            CI
                        </Label>
                        <Input
                            id="carnet"
                            name="carnet"
                            defaultValue={newStudent.carnet}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fecha_nacimiento" className="text-right">
                            Fecha de Nacimiento
                        </Label>
                        <Input
                            className="col-span-3"
                            id="fecha_nacimiento"
                            name="fecha_nacimiento"
                            type="date"
                            onChange={handleChange}
                            defaultValue={newStudent.fecha_nacimiento}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="telefono" className="text-right">
                            Telefono
                        </Label>
                        <Input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            defaultValue="555-000000"
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="direccion" className="text-right">
                            Direccion
                        </Label>
                        <Input
                            id="direccion"
                            name="direccion"
                            defaultValue={newStudent.direccion}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    {/* <DialogClose asChild> */}
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Agregar Estudiante
                    </Button>
                    {/* </DialogClose> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
