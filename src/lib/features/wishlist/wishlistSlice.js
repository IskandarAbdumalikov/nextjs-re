import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const wishlistSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
    defaultWishlistValues: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleHeart, defaultWishlistValues } = wishlistSlice.actions;
export default wishlistSlice.reducer;
