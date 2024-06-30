import axios from "axios";
import { IProduct, IWishlistItem } from "@/types";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TResponse = IProduct[];

const actGetWishlistItems = createAsyncThunk(
  "wishlist/getWishlistItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    const userWishlist = await axios.get<IWishlistItem[]>(`/wishlist?userId=1`);

    if (!userWishlist.data.length) {
      return fulfillWithValue([]);
    }

    const formattedIds = userWishlist.data
      .map((el) => `id=${el.productId}`)
      .join("&");

    try {
      const response = await axios.get<TResponse>(`/products?${formattedIds}`, {
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlistItems;
