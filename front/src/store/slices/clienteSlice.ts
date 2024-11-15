import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cliente {
  id: number;
  nome: string;
  salary: string;
  enterpriseValue: string;
}

interface ClientesState {
  clientes: Cliente[];
}

const initialState: ClientesState = {
  clientes: [],
};

const clienteSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    adicionarCliente: (state, action: PayloadAction<Cliente>) => {
      state.clientes.push(action.payload);
    },
    atualizarCliente: (state, action: PayloadAction<Cliente>) => {
      const index = state.clientes.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.clientes[index] = action.payload;
      }
    },
    removerCliente: (state, action: PayloadAction<number>) => {
      state.clientes = state.clientes.filter((cliente) => cliente.id !== action.payload);
    },
  },
});

export const { adicionarCliente, atualizarCliente, removerCliente } = clienteSlice.actions;
export const clienteReducer = clienteSlice.reducer;
