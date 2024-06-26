import { IProduct, IWishlistItem } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = IProduct[]

const actGetWishlistItems = createAsyncThunk(
  "wishlist/getWishlistItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    const userWishlist = await axios.get<IWishlistItem[]>(`/wishlist?userId=1`);

    if (!userWishlist.data.length) {
        return fulfillWithValue([])
    }
    
    const formattedIds = userWishlist.data.map((el) => `id=${el.productId}`)


    try {
        const response = await axios.get<TResponse>(`/products?${formattedIds}`);
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message || error.response?.data.message)
        } else {
            return rejectWithValue("An error occurred")
        }
    }
  }
);

export default actGetWishlistItems;
