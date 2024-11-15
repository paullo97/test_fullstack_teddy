import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Cliente {
  id?: string;
  nome: string;
  salary: string;
  enterpriseValue: string;
  selected: boolean;
  user: string;
}

interface ClientesState {
  clientes: Cliente[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ClientesState = {
  clientes: [],
  status: 'idle',
  error: null,
};

const API_URL = 'http://localhost:3000/clientes';

export const fetchClientes = createAsyncThunk('clientes/fetchClientes', async (name: string) => {
  const response = await axios.get<Cliente[]>(`${API_URL}?name=${name}`);
  return response.data;
});

export const adicionarClienteAPI = createAsyncThunk(
  'clientes/adicionarCliente',
  async (cliente: Omit<Cliente, 'id'>) => {
    const response = await axios.post<Cliente>(API_URL, cliente);
    return response.data;
  }
);

export const atualizarClienteAPI = createAsyncThunk(
  'clientes/atualizarCliente',
  async (cliente: Cliente) => {
    const response = await axios.put<Cliente>(`${API_URL}/${cliente.id}`, cliente);
    return response.data;
  }
);

export const removerClienteAPI = createAsyncThunk(
  'clientes/removerCliente',
  async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

export const fetchClienteById = createAsyncThunk<Cliente, string, { rejectValue: string }>(
  'clientes/fetchClienteById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<Cliente>(`${API_URL}/${id}`);
      return response.data; 
    } catch {
      return rejectWithValue('Erro ao buscar cliente');
    }
  }
);

export const handleSelectedClient = createAsyncThunk<Cliente, string, { rejectValue: string }>(
  'clientes/selectedClient',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.patch<Cliente>(`${API_URL}/${id}/selected`);
      return response.data;
    } catch {
      return rejectWithValue('Erro ao buscar cliente');
    }
  }
)

const clienteSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClientes.fulfilled, (state, action: PayloadAction<Cliente[]>) => {
        state.status = 'succeeded';
        state.clientes = action.payload;
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
        state.clientes = state.clientes.map((cliente) => {
          if(cliente.id?.toString() === action.payload?.id?.toString()) { 
            return {
              ...cliente,
              selected: !cliente.selected
            }
          }
          
          return cliente
        });
      });
  },
});

export const clienteReducer = clienteSlice.reducer;
