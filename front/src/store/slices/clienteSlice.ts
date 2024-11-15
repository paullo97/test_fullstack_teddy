import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adicionarClienteAPI, atualizarClienteAPI, fetchClientes, findAllSelectedClients, handleSelectedClient, removerClienteAPI, resetSelecteds } from '../../services/client.service';
import { Cliente } from '../../models/client.model';

interface ClientesState {
  clientes: Cliente[];
  selectedClientes: Cliente[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  total: number;
}

const initialState: ClientesState = {
  clientes: [],
  selectedClientes: [],
  status: 'idle',
  error: null,
  total: 0,
};


const clienteSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientes.fulfilled, (state, action: PayloadAction<{data: Cliente[], total: number}>) => {
        state.status = 'succeeded';
        state.clientes = action.payload.data;
        state.total = action.payload.total
      })
      .addCase(fetchClientes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erro ao buscar clientes';
      })
      .addCase(adicionarClienteAPI.fulfilled, (state, action: PayloadAction<Cliente>) => {
        state.clientes.push(action.payload);
      })
      .addCase(atualizarClienteAPI.fulfilled, (state, action: PayloadAction<Cliente>) => {
        const index = state.clientes.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.clientes[index] = action.payload;
        }
      })
      .addCase(removerClienteAPI.fulfilled, (state, action: PayloadAction<string>) => {
        state.clientes = state.clientes.filter((cliente) => cliente.id?.toString() !== action.payload?.toString());
      })
      .addCase(handleSelectedClient.fulfilled, (state, action: PayloadAction<Cliente>) => {
        state.selectedClientes = state.selectedClientes.map((cliente) => {
          if(cliente.id?.toString() === action.payload?.id?.toString()) { 
            return {
              ...cliente,
              selected: !cliente.selected
            }
          }
          
          return cliente
        });
        
        state.clientes = state.clientes.map((cliente) => {
          if(cliente.id?.toString() === action.payload?.id?.toString()) { 
            return {
              ...cliente,
              selected: !cliente.selected
            }
          }
          
          return cliente
        });
      })
      .addCase(resetSelecteds.fulfilled, (state) => {
        state.selectedClientes = []
      })
      .addCase(findAllSelectedClients.fulfilled, (state, action: PayloadAction<Cliente[]>) => {
        state.selectedClientes = action.payload;
      });
  },
});

export const clienteReducer = clienteSlice.reducer;
