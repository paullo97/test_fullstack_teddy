import { configureStore } from '@reduxjs/toolkit';
import { clienteReducer } from './slices/clienteSlice';

const store = configureStore({
  reducer: {
    clientes: clienteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
