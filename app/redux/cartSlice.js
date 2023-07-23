import { createSlice } from "@reduxjs/toolkit";

export const stateArray = createSlice({
  name: "arrayTest",
  initialState: {
    cart: [],
  },
  reducers: {
    addData: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeData: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.qty > 1) {
          existingItem.qty -= 1;
        } else {
          const index = state.cart.findIndex((item) => item.id === id);
          state.cart.splice(index, 1);
        }
      }
    },
  },
});
export const { addData, removeData } = stateArray.actions;
export default stateArray.reducer;
