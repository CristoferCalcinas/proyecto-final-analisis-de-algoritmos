import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from '@radix-ui/react-icons'


export const AlertForAddFaculty = ({ titleError }: { titleError: any }) => {
    return (
        <Alert variant="destructive">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>{titleError}</AlertTitle>
            <AlertDescription>
                Por favor, verifique los datos ingresados
            </AlertDescription>
        </Alert>
    )
}
