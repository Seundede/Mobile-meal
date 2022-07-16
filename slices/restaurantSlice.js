import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    shortDescription: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
        state.restaurant = action.payload
    }
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;


