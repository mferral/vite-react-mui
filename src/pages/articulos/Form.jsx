import AlertConfirm from '@/components/AlertConfirm';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { useValidate } from '@/core/hooks/useValidate'
import { schemaLogin } from './schema'

import { articulosCreate } from '@/store/articulos/thunk'
import { useRef } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

function Form() {
    const alertRef = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isValidate, errors } = useValidate()

    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        precio: '0.00',
    });

    const handleChange  = (prop) =>  (event) => {
        const { value } = event.target;    
        setFormData({
            ...formData,
            [prop]: value,
        })
    };
    
    const handleValidate = () => {
        if (isValidate(formData, schemaLogin)){
            alertRef.current.handleClickOpen()
        }
    }

    const submit = async () => {
        await dispatch(articulosCreate(formData))        
        navigate("/admin/articulos")
    };

    return (
    <>
        <Box component="form" id="formArticulo"  sx={{ pt: 2, pb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField margin="normal" size="small" required fullWidth id="titulo" name="titulo" label="Titulo" onChange={handleChange('titulo')} value={formData.titulo} error={errors.titulo?.error} helperText={errors.titulo?.message}  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField margin="normal" size="small" required fullWidth id="descripcion" name="descripcion" label="Descripcion" onChange={handleChange('descripcion')} value={formData.descripcion} error={errors.descripcion?.error} helperText={errors.descripcion?.message}  />
                </Grid>
                <Grid item xs={12} sm={2}>
                    {/* <TextField margin="normal" size="small" required fullWidth id="precio" name="precio" label="Precio" onChange={handleChange}  /> */}
                    <FormControl fullWidth size="small" sx={{ mt: 2 }} variant="outlined" error={errors.precio?.error}>
                        <InputLabel htmlFor="precio">Precio</InputLabel>
                        <OutlinedInput
                            id="precio"
                            value={formData.precio} 
                            onChange={handleChange('precio')} 
                            startAdornment={
                                <InputAdornment position="start">$</InputAdornment>
                            }
                            label="Precio"
                        />
                        <FormHelperText>{errors.precio?.message}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Stack direction="row" justifyContent="right" alignItems="center" spacing={2}>
                <Button variant="contained" onClick={handleValidate}>Guardar</Button>
            </Stack>
        </Box>
        <AlertConfirm ref={alertRef} titulo={'Agregar Articulo'} // contenido={'Los datos son correctos ?'}
            accion={submit} />
    </>
    )
}

export default Form