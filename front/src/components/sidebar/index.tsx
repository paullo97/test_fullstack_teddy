import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import './index.css';
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ open, setOpen }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: (theme) => theme.spacing(1),
          justifyContent: "flex-end",
          height: '10%',
        }}
      >
        <img
          src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png"
          alt="Logo"
          className="logo-sideMenu"
        />
        <IconButton onClick={handleDrawerClose} style={{ backgroundColor: 'black', color: 'white', marginTop: '50%' }}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            navigate('/dashboard')
          }}>
            <ListItemIcon>
              <HomeIcon  sx={{
              color: isActiveRoute('/dashboard') ? '#EC6724' : 'inherit'
            }}/>
            </ListItemIcon>
            <ListItemText primary={"Home"} sx={{
              color: isActiveRoute('/dashboard') ? '#EC6724' : 'inherit'
            }}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            navigate('/dashboard/selecteds')
          }}>
            <ListItemIcon>
              <PersonIcon sx={{
              color: isActiveRoute('/dashboard/selecteds') ? '#EC6724' : 'inherit'
            }}/>
            </ListItemIcon>
            <ListItemText primary={"Clientes"}  sx={{
              color: isActiveRoute('/dashboard/selecteds') ? '#EC6724' : 'inherit'
            }}/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => { navigate('/products')}}>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary={"Produtos"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
