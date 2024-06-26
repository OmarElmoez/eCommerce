import { TProductsResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProducts = createAsyncThunk("products/getProducts", async (prefix: string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {

    const response = await axios.get<TProductsResponse>(`/products/?cat_prefix=${prefix}`);
    return response.data;

  } catch (error) {

    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message || error.response?.data.message)
    } else {
      return rejectWithValue("An unexpected error occurred")
    }

  }
})

export default actGetProducts