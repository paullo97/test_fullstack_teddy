import CardClient from "../../components/card";
import { Button, Typography } from "@mui/material";
import "./index.css";
import PaginationComponent from "../../components/pagination";
import ModalExcludeClient from "../../modals/excludeClient";
import { useEffect, useState } from "react";
import ModalFormClient from "../../modals/formClient";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Cliente, fetchClientes, handleSelectedClient } from "../../store/slices/clienteSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "../../components/snackBar";

const Dashboard = () => {
  const [modalExclude, setModalExclude] = useState({
    show: false,
    client: "",
  });

  const [modalClient, setModalClient] = useState({
    show: false,
    client: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const nameUser = useSelector((state: RootState) => state.name.name )
  const { clientes, status, error } = useSelector((state: RootState) => state.clientes);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(fetchClientes(nameUser));
  }, [dispatch, nameUser]);

  const handleSelected = async (id: string) => {
    try {
      const action = await dispatch(handleSelectedClient(id));
      if(handleSelectedClient.fulfilled.match(action)) { 
        const cliente: Cliente = action.payload;
        showSnackbar(`Cliente ${cliente.selected ? 'Selecionado' : 'Declinado'} com Sucesso!`, 'success');
      }
    } catch (error) {
      showSnackbar(error as string, 'error');
    }
  }

  if (status === 'loading') return <p>Carregando...</p>;
  if (status === 'failed') return <p>Erro: {error}</p>;

  return (
    <>
      <div className="conatiner-dashboard">
        <div className="content">
          <div className="found-count">
            <Typography variant="h6">
              <strong>{clientes.length}</strong> Clientes encontrados:
            </Typography>
            <Typography variant="h6">Clientes por página: ??</Typography>
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
            {clientes.map((cliente, index) => (
              <CardClient
                key={`${cliente.id}_${index}`}
                client={cliente}
                exclude={(e) => setModalExclude({ show: true, client: e })}
                edit={(e) => setModalClient({ show: true, client: e })}
                handleSelected={handleSelected}
              />
            ))}
          </div>

          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            sx={{ borderWidth: "4px" }}
            onClick={() => setModalClient({ show: true, client: '' })}
          >
            Criar Cliente
          </Button>

          <PaginationComponent />
        </div>
      </div>

      <ModalExcludeClient
        open={modalExclude.show}
        handleClose={() => setModalExclude({ show: false, client: '' })}
        cliente={modalExclude.client}
      />

      <ModalFormClient
        open={modalClient.show}
        handleClose={() => setModalClient({ show: false, client: '' })}
        idClient={modalClient.client}
      />
    </>
  );
};

export default Dashboard;
