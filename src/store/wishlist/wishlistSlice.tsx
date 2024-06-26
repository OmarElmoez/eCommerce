import { IWishlistState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";

const initialState: IWishlistState = {
  itemsIds: [],
  error: null
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });

    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === 'add') {
        state.itemsIds.push(action.payload.id)
      } else {
        state.itemsIds = state.itemsIds.filter(id => id !== action.payload.id)
      }
    });

    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload
      }
    });
  }
});

export { actLikeToggle };

export default wishlistSlice.reducer;
