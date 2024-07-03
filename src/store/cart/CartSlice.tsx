import { ICartState, isString } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsWithItems from "./act/actGetProductsWithItems";

const initialState: ICartState = {
  items: {},
  productsInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items[action.payload] = (state.items[action.payload] || 0) + 1;
    },

    updateQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },

    removeFromCart: (state, action) => {
      delete state.items[action.payload];
      state.productsInfo = state.productsInfo.filter(
        (item) => item.id !== action.payload
      );
    },

    cartCleanUp: (state) => {
      state.productsInfo = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsWithItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    }),
      builder.addCase(actGetProductsWithItems.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productsInfo = action.payload;
      }),
      builder.addCase(actGetProductsWithItems.rejected, (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export { actGetProductsWithItems };

export const { addToCart, updateQuantity, removeFromCart, cartCleanUp } = cartSlice.actions;

export default cartSlice.reducer;
