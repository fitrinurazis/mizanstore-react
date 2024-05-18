import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await axios.post("http://localhost:8080/users/login", data);
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    return res;
  }
});

export const register = createAsyncThunk("auth/register", async (data) => {
  const res = await axios.post("http://localhost:8080/users/register", data);
  return res;
});

export const infoMe = createAsyncThunk("auth/infoMe", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token") ?? "";
    const res = await axios.get("http://localhost:8080/users/info/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.errors);
  }
});
export const logout = createAsyncThunk("auth/logout", () => {
  localStorage.removeItem("token");
});
