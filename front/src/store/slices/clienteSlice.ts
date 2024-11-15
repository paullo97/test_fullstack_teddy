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

const API_URL = 'http://localhost:3000/clientes';

export const fetchClientes = createAsyncThunk('clientes/fetchClientes', async (
  { user, page = 1, limit = 10 }: { user: string; page: number; limit: number },
  { rejectWithValue },
) => {
  try {
    const response = await axios.get(`${API_URL}?name=${user}&page=${page}&limit=${limit}`)
    return response.data;
  } catch {
    return rejectWithValue('Erro ao buscar clientes paginados');
  }
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

export const resetSelecteds = createAsyncThunk('clientes/resetSelecteds', async (user: string) => {
  await axios.patch(`${API_URL}/selected/clear/${user}`)
  return;
})

export const findAllSelectedClients = createAsyncThunk('clientes/findAllSelectedClients', async (user: string) => {
  const response = await axios.get<Cliente[]>(`${API_URL}/selected?name=${user}`);
  return response.data;
})

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
