import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

function Articulos() {
    const navigate = useNavigate();

    return (
    <div>
        <h1>
            Articulos!
        </h1>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab size="small" color="secondary" aria-label="add" onClick={() => navigate("/articulo")}>
                <AddIcon />
            </Fab>
        </Box>
    </div>
    )
}

export default Articulos