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

    useEffect(() => {
        dispatch(articulosList({page: 1}))
    }, [])

    const handleDelete = async (id) => {
        setDeleteId(id)                
        alertRef.current.handleClickOpen()
    }

    const deleteSubmit = async () => {        
        await dispatch(articulosDelete(deleteId))
        await dispatch(articulosList({page: 0}))
    }

    const handleChangePage = (event, newPage) => {
        dispatch(articulosList({page: newPage + 1}))
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
                            <IconButton aria-label="edit" size="small" onClick={()=> navigate(`/admin/articulo/${row.id}`)}>
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