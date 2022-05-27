import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AlertConfirm from '@/components/AlertConfirm';
import { useRef } from 'react'

function Articulo() {
    const alertRef = useRef();

    const submit = () => {
        console.log('Submit Data');
    };

    return (
    <div>
        <h1>
            Add Articulo!
        </h1>
        <Stack spacing={2} direction="row">      
            <Button variant="contained" onClick={() => alertRef.current.handleClickOpen()}>Save</Button>
        </Stack>
        <AlertConfirm 
            ref={alertRef}
            titulo={'Agregar Articulo'}
            contenido={'Los datos son correctos ?'}
            submit={submit}
        />
    </div>
    )
}

export default Articulo