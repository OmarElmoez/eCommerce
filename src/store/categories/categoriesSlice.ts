import { ICategoriesState, isString } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesCleanUp: (state) => {
      state.records = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null
    })

    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload
    })

    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload
      }
    })
  }
})

export const { categoriesCleanUp } = categoriesSlice.actions;

export { actGetCategories };

export default categoriesSlice.reducer