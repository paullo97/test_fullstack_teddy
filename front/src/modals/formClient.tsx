import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useSnackbar } from "../components/snackBar";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { adicionarClienteAPI, atualizarClienteAPI, fetchClienteById } from "../services/client.service";
import { Cliente } from "../models/client.model";

interface IModalProps {
  open: boolean;
  handleClose: () => void;
  idClient?: string;
}

interface IInitialState {
  id?: string;
  name: string;
  salary: string;
  enterpriseValue: string;
}

const INITIAL_STATE: IInitialState = {
  name: "",
  salary: "",
  enterpriseValue: "",
};

const ModalFormClient: React.FC<IModalProps> = ({
  open,
  handleClose,
  idClient,
}) => {
  const [initialValues] = useState({ ...INITIAL_STATE });
  const nameUser = useSelector((state: RootState) => state.name.name);

  const isEditMode = !!Number(idClient);
  const { showSnackbar } = useSnackbar();
  const dispatch = useDispatch<AppDispatch>();


  const onSubmit = async (data: IInitialState) => {
    const dataRework = {
      ...(data.id && {
        id: data.id,
      }),
      nome: data.name,
      enterpriseValue: data.enterpriseValue,
      salary: data.salary,
      user: nameUser,
      selected: false,
    };
    
    const promise = isEditMode
      ? atualizarClienteAPI(dataRework)
      : adicionarClienteAPI(dataRework);
    await dispatch(promise);

    showSnackbar(
      isEditMode
        ? "Cliente Editado com Sucesso"
        : "Cliente Registrado com Sucesso",
      "success"
    );
    resetForm();
    handleClose();
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm, setValues } = useFormik({
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    async function fetchId() {
      try {
        const action = await dispatch(fetchClienteById(idClient!));

        if (fetchClienteById.fulfilled.match(action)) {
          const cliente: Cliente = action.payload;
          setValues({
            id: cliente.id!,
            enterpriseValue: cliente.enterpriseValue,
            name: cliente.nome,
            salary: cliente.salary
          })
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (isEditMode) {
      fetchId();
    }
  }, [dispatch, idClient, isEditMode, setValues]);

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
        <strong>{isEditMode ? "Editar" : "Criar"} Cliente:</strong>
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
        <form onSubmit={handleSubmit}>
          <Stack direction="column" sx={{ gap: "10px" }}>
            <TextField
              fullWidth
              label="Digite o Nome:"
              variant="outlined"
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="Digite o Salário:"
              variant="outlined"
              value={values.salary}
              name="salary"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.salary && Boolean(errors.salary)}
              helperText={touched.salary && errors.salary}
            />

            <TextField
              fullWidth
              label="Digite o Valor da Empresa:"
              variant="outlined"
              value={values.enterpriseValue}
              name="enterpriseValue"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.enterpriseValue && Boolean(errors.enterpriseValue)}
              helperText={touched.enterpriseValue && errors.enterpriseValue}
            />
          </Stack>

          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
            >
              {isEditMode ? "Editar" : "Criar"} Cliente
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("O nome é obrigatório"),
  salary: Yup.string().trim().required("O salário é obrigatório"),
  enterpriseValue: Yup.string().trim().required("O valor da empresa é obrigatório"),
});

export default ModalFormClient;
