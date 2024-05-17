import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await axios.post("http://localhost:8080/users/login", data);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    return res;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
});
