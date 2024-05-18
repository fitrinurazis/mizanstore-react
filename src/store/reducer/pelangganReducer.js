import { createSlice } from "@reduxjs/toolkit";
import { getDetailPelanggan, updatePelanggan } from "../action/pelangganAction";

const initialState = {
  detail: [],
};

export const pelangganReducer = createSlice({
  name: "pelanggan",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetailPelanggan.fulfilled, (state, action) => {
      state.detail = action.payload.data;
    });
    builder.addCase(updatePelanggan.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default pelangganReducer.reducer;
