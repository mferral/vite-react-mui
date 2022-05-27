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

const AlertConfirm = forwardRef(({ titulo, contenido, submit }, ref) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useImperativeHandle(ref, () => ({
        handleClickOpen() {
            setOpen(true);
        }
    }));
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        submit()
        setOpen(false);
    };
    return (
    <>
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title"  fullWidth={true} maxWidth={'xs'}>
            <DialogTitle id="responsive-dialog-title">
                { titulo }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { contenido }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
})

export default AlertConfirm 