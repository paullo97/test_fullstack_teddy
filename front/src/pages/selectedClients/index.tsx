import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { useSnackbar } from "../../components/snackBar";
import CardClient from "../../components/card";
import { useEffect } from "react";
import { findAllSelectedClients, handleSelectedClient, resetSelecteds } from "../../services/client.service";

const SelectedClients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedClientes } = useSelector((state: RootState) => state.clientes);
  const nameUser = useSelector((state: RootState) => state.name.name )
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(findAllSelectedClients(nameUser));
  }, [dispatch, nameUser]);

  const handleSelected = async (id: string) => {
    try {
      await dispatch(handleSelectedClient(id));
      showSnackbar(`Cliente Declinado com Sucesso!`, "success");
    } catch (error) {
      showSnackbar(error as string, "error");
    }
  };

  const handleResetSelecteds = async () => {
    try {
      await dispatch(resetSelecteds(nameUser));
      showSnackbar(`Clientes Declinados com Sucesso!`, "success");
    } catch (error) {
      showSnackbar(error as string, "error");
    }
  }

  return (
    <div className="conatiner-dashboard">
      <div className="content">
        <div className="found-count">
          <Typography variant="h5">
            <strong>Clientes Selecionados:</strong>
          </Typography>
        </div>

        <div
          style={{
            margin: "20px 0",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {selectedClientes.filter((cliente) => cliente.selected)
            .map((cliente, index) => (
              <CardClient
                key={`${cliente.id}_${index}`}
                client={cliente}
                handleSelected={handleSelected}
              />
            ))}
        </div>

        <Button
          variant="outlined"
          fullWidth
          color="secondary"
          sx={{ borderWidth: "4px" }}
          onClick={handleResetSelecteds}
        >
          Limpar Clientes Selecionados
        </Button>
      </div>
    </div>
  );
};

export default SelectedClients;
