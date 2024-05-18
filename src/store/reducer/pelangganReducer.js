import { createSlice } from "@reduxjs/toolkit";
import { getDetailPelanggan } from "../action/pelangganAction";

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
  },
});

export default pelangganReducer.reducer;
