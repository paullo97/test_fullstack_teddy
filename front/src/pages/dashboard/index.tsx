import CardClient from "../../components/card";
import { Button, Typography } from "@mui/material";
import "./index.css";
import PaginationComponent from "../../components/pagination";
import ModalExcludeClient from "../../modals/excludeClient";
import { useState } from "react";
import ModalFormClient from "../../modals/formClient";

const Dashboard = () => {
  const [modalExclude, setModalExclude] = useState({
    show: false,
    client: "",
  });

  const [modalClient, setModalClient] = useState(false);

  return (
    <>
      <div className="conatiner-dashboard">
        <div className="content">
          <div className="found-count">
            <Typography variant="h6">
              <strong>16</strong> Clientes encontrados:
            </Typography>
            <Typography variant="h6">Clientes por página: 16</Typography>
          </div>

          {/* Include here the logic of cards */}
          <div
            style={{
              margin: "20px 0",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <CardClient
              name="Edurado"
              salary="3.500,00"
              enterprise="120.000,00"
              exclude={(e) => setModalExclude({ show: true, client: e })}
            />
          </div>

          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            sx={{ borderWidth: "4px" }}
            onClick={() => setModalClient(true)}
          >
            Criar Cliente
          </Button>

          <PaginationComponent />
        </div>
      </div>

      <ModalExcludeClient
        open={modalExclude.show}
        handleClose={() => setModalExclude({ show: false, client: "" })}
        cliente={modalExclude.client}
      />

      <ModalFormClient
        open={modalClient}
        handleClose={() => setModalClient(false)} 
      />
    </>
  );
};

export default Dashboard;
