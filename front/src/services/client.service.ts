import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cliente } from "../models/client.model";

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