import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./cartSlice";

export const store = configureStore({
  reducer: { array: arrayReducer },
});
