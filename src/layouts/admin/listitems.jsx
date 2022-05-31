import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";
import AlertConfirm from '@/components/AlertConfirm';
import { useRef } from 'react'

export const MainListItems = () =>{
  const navigateTo = useNavigate();
  const alertRef = useRef();
  const handleClick = (e) => navigateTo(e.currentTarget.getAttribute('url'))

  const handleClickLogout = (e) => {
    localStorage.removeItem('token')
    navigateTo('/login')
  }
  
  return(
    <>
        <ListItemButton onClick={handleClick} url='/admin/dashboard'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} url='/admin/articulos'>          
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Articulos" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} url='/admin/usuarios'>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItemButton>
        <ListItemButton onClick={() => alertRef.current.handleClickOpen()}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </ListItemButton>
        <AlertConfirm 
            ref={alertRef}
            titulo={'Salir'}
            contenido={'Esta seguro que desea salir ?'}
            accion={handleClickLogout}
        />  
    </>
)
};

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);