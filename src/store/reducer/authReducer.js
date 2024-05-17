import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../action/authAction";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
    }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.token = action.payload;
      });
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export default authReducer.reducer;
