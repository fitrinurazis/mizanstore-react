import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProductCall = createAsyncThunk(
  "product/getDataCall",
  async () => {
    const data = await axios.get(`localhost:8080/barang/`);
    return data;
  }
);

export const getDataCategoryCall = createAsyncThunk(
  "category/getDataCategoryCall",
  async () => {
    const response = await axios.get(`localhost:8080/kategori/`);
    return response.data;
  }
);
export const getDataDetailCall = createAsyncThunk(
  "detail/getDataDetailCall",
  async () => {
    const data = await axios.get(`localhost:8080/barang/`);
    return data;
  }
);
