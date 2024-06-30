import axios from "axios";
import { TProductsResponse } from "@/types";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetProducts = createAsyncThunk(
  "products/getProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const response = await axios.get<TProductsResponse>(
        `/products/?cat_prefix=${prefix}`, { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
