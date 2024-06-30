import axios from "axios";
import { RootState } from "@/store";
import { TProductsResponse } from "@/types";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actGetProductsWithItems = createAsyncThunk(
  "cart/getProductsWithItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
    const { cart } = getState() as RootState;

    const relattedIds = Object.keys(cart.items);

    const formattedIds = relattedIds
      .map(el => `id=${el}`)
      .join("&");


    if (!relattedIds.length) {
      return fulfillWithValue([]);
    }

    try {
      const response = await axios.get<TProductsResponse>(`/products?${formattedIds}`, { signal });

      return response.data;

    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProductsWithItems;
