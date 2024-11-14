import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarComponent = () => {
  return (
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

          <Box className="nav-links">
            <Typography
              variant="body1"
              className="selected-clients clientes-link"
            >
              Clientes
            </Typography>
            <Typography variant="body1" className="selected-clients">
              Clientes selecionados
            </Typography>
            <Typography variant="body1" className="selected-clients">
              Sair
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" className="greeting">
          Olá, <strong>Usuário</strong>!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
