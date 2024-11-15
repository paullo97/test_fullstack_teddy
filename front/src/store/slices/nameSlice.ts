import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IName } from '../../models/name.model';

const initialState: IName = {
    name: ''
  };

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        registrarNome: (state, action: PayloadAction<IName>) => {
            state.name = action.payload.name;
        }
    }
})

export const { registrarNome } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;