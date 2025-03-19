import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: IFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.post("/register", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;
