import CardClient from "../../components/card";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import "./index.css";
import PaginationComponent from "../../components/pagination";
import ModalExcludeClient from "../../modals/excludeClient";
import { useEffect, useState } from "react";
import ModalFormClient from "../../modals/formClient";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  Cliente,
  fetchClientes,
  handleSelectedClient,
} from "../../store/slices/clienteSlice";
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
  const nameUser = useSelector((state: RootState) => state.name.name);
  const { clientes, status, error, total } = useSelector(
    (state: RootState) => state.clientes
  );
  const { showSnackbar } = useSnackbar();
  const [page, setPage] = useState(1);
  const [limit, setLimit ] = useState(5)
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(
      fetchClientes({
        user: nameUser,
        page,
        limit,
      })
    );
  }, [dispatch, nameUser, page, limit]);

  const handleSelected = async (id: string) => {
    try {
      const action = await dispatch(handleSelectedClient(id));
      if (handleSelectedClient.fulfilled.match(action)) {
        const cliente: Cliente = action.payload;
        showSnackbar(
          `Cliente ${
            cliente.selected ? "Selecionado" : "Declinado"
          } com Sucesso!`,
          "success"
        );
      }
    } catch (error) {
      showSnackbar(error as string, "error");
    }
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  if (status === "loading") return <p>Carregando...</p>;
  if (status === "failed") return <p>Erro: {error}</p>;

  return (
    <>
      <div className="conatiner-dashboard">
        <div className="content">
          <div className="found-count">
            <Typography variant="h6">
              Clientes encontrados: <strong>{total}</strong>
            </Typography>
            <Typography variant="h6">
              Clientes por página:{" "}
              <Select
                value={limit}
                onChange={(e) => setLimit(parseInt(e.target.value.toString()))}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={16}>16</MenuItem>
              </Select>
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
            onClick={() => setModalClient({ show: true, client: "" })}
          >
            Criar Cliente
          </Button>

          <PaginationComponent
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>

      <ModalExcludeClient
        open={modalExclude.show}
        handleClose={() => setModalExclude({ show: false, client: "" })}
        cliente={modalExclude.client}
      />

      <ModalFormClient
        open={modalClient.show}
        handleClose={() => setModalClient({ show: false, client: "" })}
        idClient={modalClient.client}
      />
    </>
  );
};

export default Dashboard;
