import { Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h3" color="error">
        404 - Página Não Encontrada
      </Typography>
      <Typography variant="body1">
        A página que você tentou acessar não existe ou foi movida.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
      >
        Voltar para a Página Inicial
      </Button>
    </Stack>
  );
};

export default NotFound;
