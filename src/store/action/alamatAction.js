import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

export const getDetailAlamat = createAsyncThunk("alamat/detail", async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      `http://localhost:8080/address/detailAlamat/${id}`,
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
});

export const createNewAlamat = createAsyncThunk(
  "alamat/create",
  async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `http://localhost:8080/address/addAlamat`,
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

export const editAlamat = createAsyncThunk("alamat/edit", async (id) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `http://localhost:8080/address/updateAlamat/${id}`,
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
});
