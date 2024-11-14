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

interface CardClientProps {
    name: string;
    salary: string,
    enterprise: string
}

const CardClient: React.FC<CardClientProps> = ({
    name, 
    salary, 
    enterprise
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
            {name}
          </Typography>

          <Typography variant="h6" component="div">
            Salário: R${salary} 
          </Typography>

          <Typography variant="h6" component="div">
            Empresa: R${enterprise}
          </Typography>
        </CardContent>

        <CardActions
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton aria-label="delete">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ color: red[500] }} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardClient;
