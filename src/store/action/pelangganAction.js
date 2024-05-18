import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailPelanggan = createAsyncThunk(
  "pelanggan/getDetail",
  async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8080/users/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePelanggan = createAsyncThunk(
  "pelanggan/update",
  async (id, data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8080/users/updateuser/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
