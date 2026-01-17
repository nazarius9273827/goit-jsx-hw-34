import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./authOperations";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
      }),
});

export default authSlice.reducer;
