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
import UploadImage from '@/components/UploadImage'
import env from '@/core/config'

import { useValidate } from '@/core/hooks/useValidate'
import { schema } from './schema'
import { useRef, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";

import { articulosCreate, articulosGet, articulosUpdate } from '@/store/articulos/thunk'
import { uploadFile } from '@/store/uploads/thunk'

function Form() {
    const alertRef = useRef();
    const uploadRef = useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const articulo = useSelector((state) => state.articulos)
    const { id } = useParams();    

    useEffect( () => {
        async function check() {
            const {payload} = await dispatch(articulosGet(id))            
            if (!payload.error) {                
                setFormData({
                    id: payload.data.id,
                    titulo: payload.data.attributes.titulo,
                    descripcion: payload.data.attributes.descripcion,
                    precio: payload.data.attributes.precio,
                    foto: payload.data.attributes.foto.data ? payload.data.attributes.foto?.data[0].id : null,
                    url: payload.data.attributes.foto.data ? `${env.baseUrl}${payload.data.attributes.foto?.data[0].attributes.url}` : '',
                })                
            }
        }
        if (id) check()
    }, [])

    const { isValidate, errors } = useValidate()

    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        precio: '0.00',
        foto: null,
        // url: ''
    });

    const handleChange  = (prop) =>  (event) => {
        const { value } = event.target;    
        setFormData({
            ...formData,
            [prop]: value,
        })
    };
    
    const handleValidate = async () => {        
        if (isValidate(formData, schema)){
            alertRef.current.handleClickOpen()
        }
    }

    const submit = async () => {
        let params = {
            ...formData
        };
        if (uploadRef.current.getUploadFile()){
            const { payload } = await dispatch(uploadFile(uploadRef.current.getUploadFile()))                                    
            params ={
                ...params,
                foto: payload[0].id
            }
        }        
        if (!id) await dispatch(articulosCreate(params)); else await dispatch(articulosUpdate(params));               
        navigate("/admin/articulos")
    };

    return (
    <>        
        <Box component="form" id="formArticulo"  sx={{ pt: 2, pb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <UploadImage ref={uploadRef} url={formData.url} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField margin="normal" size="small" required fullWidth id="titulo" name="titulo" label="Titulo" onChange={handleChange('titulo')} value={formData.titulo} error={errors.titulo?.error} helperText={errors.titulo?.message}  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField margin="normal" size="small" required fullWidth id="descripcion" name="descripcion" label="Descripcion" onChange={handleChange('descripcion')} value={formData.descripcion} error={errors.descripcion?.error} helperText={errors.descripcion?.message}  />
                </Grid>
                <Grid item xs={12} sm={2}>
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
                <Button variant="outlined" onClick={() => navigate(-1) } >Regresar</Button>
                <Button variant="contained" onClick={handleValidate}>Guardar</Button>
            </Stack>
        </Box>
        <AlertConfirm ref={alertRef} titulo={'Guardar Articulo'} // contenido={'Los datos son correctos ?'}
            accion={submit} />
    </>
    )
}

export default Form