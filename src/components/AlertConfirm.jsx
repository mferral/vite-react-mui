import { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { forwardRef, useImperativeHandle } from 'react'

const AlertConfirm = forwardRef(({ titulo, contenido, accion }, ref) => {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const items = {
        contenido: contenido ? contenido : 'Esta seguro de realizar esta accion ?',
        titulo: titulo ? titulo : 'Ventana de Dialogo',
        accion: accion ? accion : () => { console.log('Action Trigger') }
    }

    useImperativeHandle(ref, () => ({
        handleClickOpen() {
            setOpen(true);
            setDisabled(false);
        }
    }));
    const handleClose = (event, reason) => {
        if (reason != "backdropClick") {
            setOpen(false);
            setDisabled(false);
        }
    };

    const handleSubmit = async () => {
        setDisabled(true);
        await items.accion()
        setOpen(false);
    };
    return (
    <>
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title"  fullWidth={true} maxWidth={'xs'}>
            <DialogTitle id="responsive-dialog-title">
                { items.titulo }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { items.contenido }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} disabled={disabled} >
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} disabled={disabled} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
})

export default AlertConfirm 