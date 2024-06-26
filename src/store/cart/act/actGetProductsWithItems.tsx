import { RootState } from "@/store";
import { TProductsResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsWithItems = createAsyncThunk(
  "cart/getProductsWithItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState() as RootState;

    const relattedIds = Object.keys(cart.items);

    const formattedIds = relattedIds
      .map(el => `id=${el}`)
      .join("&");


    if (!relattedIds.length) {
      return fulfillWithValue([]);
    }

    try {
      const response = await axios.get<TProductsResponse>(`/products?${formattedIds}`);

      return response.data;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message || error.response?.data.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export default actGetProductsWithItems;
