import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Form from './Form'

function Articulo() {
    return (
    <>
        <Grid container alignItems="baseline" direction="row">
            <Grid item>
                <Typography component="h4" variant="h4" align="left" color="text.primary" gutterBottom>
                    Articulo
                </Typography>
            </Grid>
        </Grid>        
        <Form />        
    </>
    )
}

export default Articulo