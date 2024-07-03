import { IWishlistState, isString } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlistItems from "./act/actGetWishlistItems";

const initialState: IWishlistState = {
  itemsIds: [],
  productsInfo: [],
  error: null,
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistCleanUp: (state) => {
      state.productsInfo = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });

    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === 'add') {
        state.itemsIds.push(action.payload.id)
      } else {
        state.itemsIds = state.itemsIds.filter(id => id !== action.payload.id)
        state.productsInfo = state.productsInfo.filter(product => product.id !== action.payload.id)
      }
    });

    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload
      }
    });
    // Get wishlist items
    builder.addCase(actGetWishlistItems.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });

    builder.addCase(actGetWishlistItems.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.productsInfo = action.payload;
    });

    builder.addCase(actGetWishlistItems.rejected, (state, action) => {
      state.loading = 'failed';
      if (isString(action.payload)) {
        state.error = action.payload
      }
    });
  }
});

export const { wishlistCleanUp } = wishlistSlice.actions
export { actLikeToggle, actGetWishlistItems };

export default wishlistSlice.reducer;
