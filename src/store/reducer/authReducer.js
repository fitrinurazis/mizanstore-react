import { createSlice } from "@reduxjs/toolkit";
import { infoMe, login, logout, register } from "../action/authAction";

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
        state.user = action.payload;
      });
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(infoMe.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authReducer.actions;
export default authReducer.reducer;
