import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
   removeFromBasket: (state, action) => {
      state.items -= 1;
    },
  },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;

 