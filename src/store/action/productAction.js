import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataProductCall = createAsyncThunk(
  "product/getDataCall",
  async () => {
    const data = await axios.get(
      `https://mocki.io/v1/06fa080d-3fc1-4e61-a07d-0153cf52a292`
    );
    return data;
  }
);

export const getDataCategoryCall = createAsyncThunk(
  "category/getDataCategoryCall",
  async () => {
    const data = await axios.get(
      `https://mocki.io/v1/79d0d4b9-fb89-4a3f-9fdb-c66db76df118`
    );
    return data;
  }
);

export const getDataDetailCall = createAsyncThunk(
  "detail/getDataDetailCall",
  async () => {
    const data = await axios.get(
      `https://mocki.io/v1/f460ee8d-848e-46c7-9f76-aabec0617370`
    );
    return data;
  }
);
