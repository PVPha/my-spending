import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { spending } from "@/service";

export interface HomeState {
  command: object[];
  result: object[];
  directory: string;
  loading: boolean;
  pageOrDatabase: object;
  spending: spending | object;
}
export interface Command {
  id?: string;
  value?: string;
}
export interface Result {
  id?: string;
  value?: string;
}
const initialState: HomeState = {
  command: [],
  result: [],
  directory: '',
  loading: false,
  pageOrDatabase: {},
  spending: {}
};

const addCommand = (state: HomeState, action: PayloadAction<Command>) => {
  state.command?.push(action?.payload);
};
const addResult = (state: HomeState, action: PayloadAction<Result>) => {
  state.result?.push(action?.payload);
};
const clearScreen = (state: HomeState, action: PayloadAction<string>) => {
  state.command = [];
  state.result = [];
};
const changeDirectory = (state: HomeState, action: PayloadAction<string>) => {
  state.directory = action?.payload
}
const setLoading = (state: HomeState, action: PayloadAction<boolean>) => {
    state.loading = action?.payload;
}; 
const setPageOrDatabase = (state: HomeState, action: PayloadAction<object>) => {
    state.pageOrDatabase = action?.payload;
};
const setSpending = (state: HomeState, action: PayloadAction<object>) => {
    state.spending = {...state?.spending, ...action?.payload} ;
};
export const HomeSlicer = createSlice({
  name: "Home",
  initialState,
  reducers: { addCommand, addResult, clearScreen, changeDirectory, setLoading , setPageOrDatabase, setSpending},
});

export default HomeSlicer.reducer;
