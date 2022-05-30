import Snackbar from '@mui/material/Snackbar';
import { useSelector, useDispatch } from 'react-redux'
import { closeSnakbar } from '@/store/general'
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackMessage() {
    const general = useSelector((state) => state.general)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    dispatch(closeSnakbar())
    };
    const vertical = 'bottom'
    const horizontal = 'center'
    return (
    <>    
        <Snackbar open={general.snackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
            <Alert onClose={handleClose} severity={general.snackType} sx={{ width: '100%' }}>
                {general.snackText}
            </Alert>
        </Snackbar>
    </>
    );
}