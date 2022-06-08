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
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/styles';

export const MainListItems = () =>{
  const navigateTo = useNavigate();
  const alertRef = useRef();

  const theme = useTheme();
  const useStyles = makeStyles({
    listItem: {
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        '& .MuiListItemIcon-root': {
          color: theme.palette.primary.main,
        },
      },
      '&.active .MuiListItemIcon-root, &.active': {
        color: theme.palette.primary.main,
      },
      '&.active .MuiTypography-root': {
        fontWeight: 'bold',
      },
    },
  })

  const handleClickLogout = (e) => {
    localStorage.removeItem('token')
    navigateTo('/login')
  }
  const classes = useStyles();
  return(
    <>
        <ListItemButton component={NavLink} to={'/admin/dashboard'} className={classes.listItem} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={NavLink} to={'/admin/articulos'} className={classes.listItem} >          
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Articulos" />
        </ListItemButton>
        <ListItemButton component={NavLink} to={'/admin/usuarios'} className={classes.listItem}>
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