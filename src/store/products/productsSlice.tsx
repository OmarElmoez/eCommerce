import { IProductsState, isString } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.records = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null
    })

    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload
      }
    })

    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    })
  }
})

export const { productsCleanUp } = productsSlice.actions

export { actGetProducts }

export default productsSlice.reducer