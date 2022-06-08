import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import AlertConfirm from '@/components/AlertConfirm';
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from 'react'
import { articulosList } from '@/store/articulos/thunk'
import { useSelector, useDispatch } from 'react-redux'
import { articulosDelete } from '@/store/articulos/thunk'

function Articulos() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alertRef = useRef()
    const articulos = useSelector((state) => state.articulos)

    const [deleteId, setDeleteId] = useState(0);
    const [filter, setFilter] = useState('');
    const [searchParams, setSearchParams] = useState({
        textSearch: '',
        clear: true
    });

    useEffect(() => {
        dispatch(articulosList({page: 1}))
    }, [])

    const handleChangeSearch  = (prop) =>  (event) => {
        const { value } = event.target; 
        let clear = true
        if(value === ''){
            clear = true
        }else clear =false

        setSearchParams({
            ...searchParams,
            [prop]: value,
            clear
        })
    };

    const clearSearch  = async () => {        
        setSearchParams({
            ...searchParams,
            textSearch: '',
            clear: true
        })
        setFilter('')
        await dispatch(articulosList({page: 1}))
    };

    const keyDown  = async (e) => {
        if(e.keyCode == 13){
            setFilter(e.target.value)
            setSearchParams({
                ...searchParams,
                textSearch: e.target.value,
            })
            await dispatch(articulosList({page: 1, filter: e.target.value}))                        
        }
    }

    const handleDelete = async (id) => {
        setDeleteId(id)                
        alertRef.current.handleClickOpen()
    }

    const deleteSubmit = async () => {        
        await dispatch(articulosDelete(deleteId))
        await dispatch(articulosList({page: 1}))
    }

    const handleChangePage = async (event, newPage) => {        
            setSearchParams({
                ...searchParams,
                textSearch: filter,
                clear: filter == '' ?  true : false,
            })        
        await dispatch(articulosList({page: newPage + 1, filter: filter}))
    };
    return (    
        <>
            <Grid container alignItems="baseline" direction="row" justifyContent="space-between">
                <Grid item>
                    <Typography component="h4" variant="h4" align="left" color="text.primary" gutterBottom>
                        Articulos
                    </Typography>
                </Grid>
                <Grid item>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab size="small" color="secondary" aria-label="add" onClick={()=> navigate("/admin/articulo")}>
                            <AddIcon />
                        </Fab>
                    </Box>
                </Grid>
            </Grid>
            
            <FormControl fullWidth size="small" sx={{ mt: 2, mb: 2}} variant="outlined">
                <InputLabel htmlFor="search">Buscar</InputLabel>
                <OutlinedInput
                    id="search"                    
                    type={'text'}
                    value={searchParams.textSearch} 
                    onChange={handleChangeSearch('textSearch')}                           
                    onKeyDown={keyDown}
                    endAdornment={                        
                        <InputAdornment position="end">
                            {!searchParams.clear &&
                            <IconButton
                                aria-label="toggle"
                                onClick={clearSearch}
                                edge="end"
                                size="small"
                                id="clear"
                            >
                                <CloseIcon fontSize="inherit"  /> 
                            </IconButton>
                        }
                        </InputAdornment>
                        }
                    label="Buscar"
                    />                    
            </FormControl>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" name="table-articulos">
                    <TableHead>
                        <TableRow>
                            <TableCell width={20}>Id</TableCell>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right"></TableCell>                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {articulos.list.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                        
                        >
                            <TableCell>
                                {row.id}
                            </TableCell>
                            <TableCell>{row.attributes.titulo}</TableCell>
                            <TableCell>{row.attributes.descripcion}</TableCell>
                            <TableCell align="right">{row.attributes.precio}</TableCell>
                            <TableCell align="right">
                            <IconButton aria-label="edit" size="small" onClick={()=> navigate(`/admin/articulo/${row.id}`)} className="articulo-edit">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="small" onClick={() => handleDelete(row.id)}>
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={articulos.pagination.total}
                rowsPerPage={articulos.pagination.pageSize}
                page={articulos.pagination.page - 1}
                onPageChange={handleChangePage}
            />        
            <AlertConfirm ref={alertRef} accion={deleteSubmit}  titulo={'Eliminar'} contenido={'Desea eliminar este registro ?'} />
        </>
    )
}

export default Articulos