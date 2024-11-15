import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../sidebar";
import './index.css';
import { useSelector } from "react-redux";
import { RootState } from '../../store';
import { useLocation, useNavigate } from "react-router-dom";

const AppBarComponent = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const nameUser = useSelector((state: RootState) => state.name.name )
  const isActiveRoute = (path: string) => location.pathname === path;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const logout = () => {
    navigate('/', { replace: true })
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "grey" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>

          <Box className="logo-and-links">
            <img
              src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png"
              alt="Logo"
              className="logo"
            />

            <Box className="nav-links" >
              <Typography variant="body1" color={isActiveRoute('/dashboard') ? "secondary" : "inherit" } style={{ textDecoration: 'underline' }} onClick={() => {
                navigate('/dashboard')
              }}>
                Clientes
              </Typography>
              <Typography variant="body1" color={isActiveRoute('/dashboard/selecteds') ? "secondary" : "inherit" } className="selected-clients" onClick={() => {
                navigate('/dashboard/selecteds')
              }}>
                Clientes selecionados
              </Typography>
              <Typography variant="body1" className="selected-clients" onClick={logout}>
                Sair
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" className="greeting">
            Olá, <strong>{nameUser}</strong>!
          </Typography>
        </Toolbar>
      </AppBar>

      <SideBar open={open} setOpen={setOpen} />
    </Box>
  );
};

export default AppBarComponent;
