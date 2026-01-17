import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader, clearAuthHeader } from "../../services/api";

export const register = createAsyncThunk(
  "auth/register",
  async (data) => {
    const res = await api.post("/users/signup", data);
    setAuthHeader(res.data.token);
    return res.data;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data) => {
    const res = await api.post("/users/login", data);
    setAuthHeader(res.data.token);
    return res.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await api.post("/users/logout");
  clearAuthHeader();
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue();

    setAuthHeader(token);
    const res = await api.get("/users/current");
    return res.data;
  }
);