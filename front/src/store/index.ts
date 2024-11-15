import { configureStore } from '@reduxjs/toolkit';
import { clienteReducer } from './slices/clienteSlice';
import { nameReducer } from './slices/nameSlice';

const store = configureStore({
  reducer: {
    clientes: clienteReducer,
    name: nameReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
