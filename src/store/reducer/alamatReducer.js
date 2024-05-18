import { createSlice } from "@reduxjs/toolkit";
import {
  createNewAlamat,
  editAlamat,
  getDetailAlamat,
} from "../action/alamatAction";

const initialState = {
  detail: [],
  alamat: null,
};

const alamatReducer = createSlice({
  name: "alamat",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetailAlamat.fulfilled, (state, action) => {
      state.detail = action.payload.data;
    });
    builder.addCase(createNewAlamat.fulfilled, (state, action) => {
      state.alamat = action.payload;
    });
    builder.addCase(editAlamat.fulfilled, (state, action) => {
      state.alamat = action.payload;
    });
  },
});

export default alamatReducer.reducer;
