import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector, useDispatch } from 'react-redux'
import { closeSnakbar } from '@/store/general'

export default function SnackMessage() {
    const general = useSelector((state) => state.general)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    dispatch(closeSnakbar())
    };

    const action = (
    <>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
    </>
    );

    return (
    <>    
        <Snackbar open={general.snackbar} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} />
    </>
    );
}