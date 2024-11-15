import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { useSnackbar } from "../components/snackBar";
import { removerClienteAPI } from "../services/client.service";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  cliente: string;
}

const ModalExcludeClient: React.FC<IModalProps> = ({
  open,
  handleClose,
  cliente,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { showSnackbar } = useSnackbar();

  const confirm = async () => {
    try {
      await dispatch(removerClienteAPI(cliente));
      showSnackbar('Sucesso ao Deletar Cliente', 'success');
    } catch (error) {
      showSnackbar(error as string, 'error');
    }
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { width: '20%', maxHeight: 435 } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <strong>Excluir cliente:</strong>
        <IconButton onClick={handleClose} edge="end" color="inherit" size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Você está prestes a excluir esse cliente
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={confirm}
          fullWidth
          color="secondary"
        >
          Excluir cliente
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalExcludeClient;
