import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalFormClient: React.FC<IModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { width: '100%', maxHeight: 435 } }} maxWidth='md'>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          <strong>Criar Cliente:</strong>
        </Typography>
        <IconButton
          onClick={handleClose}
          edge="end"
          color="inherit"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
          fullWidth
          color="secondary"
        >
          Criar Cliente
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalFormClient;
