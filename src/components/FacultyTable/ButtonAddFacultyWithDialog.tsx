'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { add_faculty } from "@/actions/faculty-list-actions";
import { AlertForAddFaculty } from "./AlertForAddFaculty";

interface Props {
    reloadTables: () => void;
}

interface Faculty {
    nombre: string;
    descripcion: string;
}


export const ButtonAddFacultyWithDialog = ({ reloadTables }: Props) => {

    const [dialogOpen, setDialogOpen] = useState(false);

    const [error, setError] = useState<{ status: boolean; message: unknown; }>({
        status: false,
        message: '',
    });

    const [newFaculty, setNewFaculty] = useState<Faculty>({
        nombre: "Neurobiologia",
        descripcion: "Descripcion de la Facultad"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewFaculty({
            ...newFaculty,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(newFaculty);
        const response = await add_faculty(newFaculty);
        if (response && response.status && response.status === 200) {
            setDialogOpen(false);
            setError({ status: false, message: '' });
            console.log('Facultad agregado correctamente');
            reloadTables();
            return;
        };
        setError({ status: true, message: response.error });
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open) }}>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-2 border-black" >
                    Agregar Facultad
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="space-y-3">
                    <DialogTitle>
                        Nueva Facultad
                    </DialogTitle>
                    <DialogDescription>
                        Agrega una nueva facultad a la lista de Facultades
                    </DialogDescription>
                    {error.status && <AlertForAddFaculty titleError={error.message} />}
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nombre" className="text-right">
                            Nombre
                        </Label>
                        <Input
                            id="nombre"
                            name="nombre"
                            defaultValue={newFaculty.nombre}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="descripcion" className="text-right">
                            Descripcion
                        </Label>
                        <Input
                            id="descripcion"
                            name="descripcion"
                            defaultValue={newFaculty.descripcion}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Agregar Facultad
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
