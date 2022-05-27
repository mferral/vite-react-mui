import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from './Form'
import Footer from '@/layouts/admin/Footer'
// import Button from '@mui/material/Button';
const theme = createTheme();

export default function Login() {    
    // const submitForm = (name) => {        
    //     document.getElementById(name).submit.click()
    // } 
    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Form />
            </Box>
            <Footer sx={{ pt: 4 }}  />
            {/* <Button type="button" onClick={() => submitForm('formLogin')} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit Form
            </Button> */}
        </Container>
    </ThemeProvider>
    );
}