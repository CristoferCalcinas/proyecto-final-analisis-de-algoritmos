'use client';

import { UpdateIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

export const ButtonReloadStudentsList = ({ reloadTables }: { reloadTables: () => void }) => {
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
