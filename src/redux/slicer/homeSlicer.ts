import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface HomeState {
    value: string[]
};
const initialState: HomeState = {
    value: []
};

const updateValue = (state: HomeState, action: PayloadAction<string>) => {
  state.value?.push(action?.payload);
};
export const HomeSlicer = createSlice({
    name: 'Home',
    initialState,
    reducers: {updateValue}
})

export default HomeSlicer.reducer