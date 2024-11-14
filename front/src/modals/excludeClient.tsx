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
  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { width: '20%', maxHeight: 435 } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6"><strong>Excluir cliente:</strong></Typography>
        <IconButton onClick={handleClose} edge="end" color="inherit" size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Você está prestes a excluir o cliente: <strong>{cliente}</strong>
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
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
