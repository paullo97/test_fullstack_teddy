import CardClient from "../../components/card";
import { Button, Typography } from "@mui/material";
import "./index.css";
import PaginationComponent from "../../components/pagination";

const Dashboard = () => {
  return (
    <div className="conatiner-dashboard">
      <div className="content">
        <div className="found-count">
          <Typography variant="h6">
            <strong>16</strong> Clientes encontrados:
          </Typography>
          <Typography variant="h6">Clientes por página: 16</Typography>
        </div>

        {/* Include here the logic of cards */}
        <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '15px' }}>
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
          <CardClient name="Edurado" salary="3.500,00" enterprise="120.000,00" />
        </div>

        <Button
          variant="outlined"
          fullWidth
          color="secondary"
          sx={{ borderWidth: "4px" }}
        >
          Criar Cliente
        </Button>

        <PaginationComponent />
      </div>
    </div>
  );
};

export default Dashboard;
