import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { login } from '@/store/auth/thunk'
import { useSelector, useDispatch } from 'react-redux'
import { useValidate } from '@/core/hooks/useValidate'
import { schemaLogin } from './schema'
// import { useNavigate } from "react-router-dom";

function Form() {    
    // const navigate = useNavigate();
    const dispatch = useDispatch()
    const authState = useSelector((state) => state.auth)
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { isValidate, errors } = useValidate()

    const handleChange = (event) => {
        const { name, value, type } = event.target;    
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleSubmit = async (event) => {                
        event.preventDefault();
        if (isValidate(formData, schemaLogin)){
            await dispatch(login(formData))
        }        
        
    }
    
    return (
        <Box component="form" onSubmit={handleSubmit} id="formLogin" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" error={errors.email?.error} helperText={errors.email?.message}  onChange={handleChange} value={formData.email}  autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth id="password" name="password" label="Password" error={errors.password?.error} helperText={errors.password?.message}  onChange={handleChange} value={formData.password} type="password" autoComplete="current-password" />            
            {
            authState.error &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error" name="alert-error">This is an error alert — check it out!</Alert>
                </Stack>
            }
            <FormControlLabel control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button type="submit" name="submit" fullWidth disabled={authState.loading} variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Form