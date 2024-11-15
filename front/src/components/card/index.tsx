import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";
import RemoveIcon from '@mui/icons-material/Remove';
import { Cliente } from "../../models/client.model";

interface CardClientProps {
    client: Cliente;
    exclude?: (id: string) => void;
    edit?: (idClient: string) => void;
    handleSelected: (id: string) => void;
}

const CardClient: React.FC<CardClientProps> = ({
    client,
    exclude,
    edit,
    handleSelected
}) => {

  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined">
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {client.name}
          </Typography>

          <Typography variant="h6" component="div">
            Salário: R${client.salary} 
          </Typography>

          <Typography variant="h6" component="div">
            Empresa: R${client.enterpriseValue}
          </Typography>
        </CardContent>

        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={() => handleSelected(client.id!)}>
            {client.selected ? (<RemoveIcon />) : (<AddIcon />)}
          </IconButton>
          {edit && (
            <IconButton onClick={() => edit(client.id!)}>
              <EditIcon />
            </IconButton>
          )}
          { exclude && (
            <IconButton onClick={() => exclude(client.id!)}>
              <DeleteIcon sx={{ color: red[500] }} />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardClient;
