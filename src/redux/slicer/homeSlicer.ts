import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface HomeState {
  command: object[];
  result: object[];
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
export const HomeSlicer = createSlice({
  name: "Home",
  initialState,
  reducers: { addCommand, addResult, clearScreen },
});

export default HomeSlicer.reducer;
