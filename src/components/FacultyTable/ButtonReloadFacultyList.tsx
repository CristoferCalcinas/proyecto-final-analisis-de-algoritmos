import { UpdateIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface Props {
    reloadTables: () => void;
}

export const ButtonReloadFacultyList = ({ reloadTables }: Props) => {
    return (
        <Button
            variant='outline'
            size="icon"
            onClick={reloadTables}
        >
            <UpdateIcon className='h-4 w-4' />
        </Button>
    )
}
