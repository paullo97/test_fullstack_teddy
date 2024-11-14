import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useFormik } from "formik";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  idClient?: number;
}

interface IInitialState {
  name: string;
  salary: string;
  enterpriseValue: string;
}

const INITIAL_STATE: IInitialState = {
  name: "",
  salary: "",
  enterpriseValue: "",
};

const ModalFormClient: React.FC<IModalProps> = ({ open, handleClose, idClient }) => {
  const [initialValues] = useState({ ...INITIAL_STATE });
  
  const isEditMode = !!Number(idClient);
  
  const onSubmit = (data: IInitialState) => {
    console.log(data);
  };

  const { values, handleBlur, handleChange } = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    enableReinitialize: true,
    initialValues,
    onSubmit,
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { width: "30%", maxHeight: 435 } }}
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          <strong>{isEditMode ? 'Editar' : 'Criar'} Cliente:</strong>
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

      <DialogContent>
        <Stack direction="column" sx={{ gap: '10px' }}>
          <TextField
            fullWidth
            label="Digite o Nome:"
            variant="outlined"
            value={values.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            fullWidth
            label="Digite o Salário:"
            variant="outlined"
            value={values.salary}
            name="salary"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            fullWidth
            label="Digite o Valor da Empresa:"
            variant="outlined"
            value={values.enterpriseValue}
            name="enterpriseValue"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={handleClose}
          fullWidth
          color="secondary"
        >
          {isEditMode ? 'Editar' : 'Criar'} Cliente
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalFormClient;
