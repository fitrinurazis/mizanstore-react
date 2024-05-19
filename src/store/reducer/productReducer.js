import { createSlice } from "@reduxjs/toolkit";
import {
  getDataCategoryCall,
  getDataDetailCall,
  getDataProductCall,
  getDataDetailCallById,
} from "../action/productAction";

const initialState = {
  productAll: [],
  category: [],
  detail: [],
  detailById: [],
};

export const productReducer = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataProductCall.fulfilled, (state, action) => {
      state.productAll = action.payload.data;
    }),
      builder.addCase(getDataCategoryCall.fulfilled, (state, action) => {
        state.category = action.payload.data;
      }),
      builder.addCase(getDataDetailCall.fulfilled, (state, action) => {
        state.detail = action.payload.data;
      });
    builder.addCase(getDataDetailCallById.fulfilled, (state, action) => {
      state.detailById = action.payload;
    });
  },
});

export default productReducer.reducer;
