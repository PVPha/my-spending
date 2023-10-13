import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import HomeSlicer from "./slicer/homeSlicer";
export const Store = configureStore({
  reducer: {
    HomeSlicer,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
