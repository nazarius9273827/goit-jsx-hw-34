import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, updateUser } from "../../api/auth";
import { setAuthToken } from "../../api/contacts";

const token = localStorage.getItem("token");

const initialState = {
  user: null,
  token: token || null,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    const data = await registerUser(userData);
    setAuthToken(data.token);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const data = await loginUser(userData);
    setAuthToken(data.token);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  setAuthToken(null);
  localStorage.removeItem("token");
  return;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(register.fulfilled, (state, action) => { state.isLoading = false; state.user = action.payload.user; state.token = action.payload.token; })
      .addCase(register.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(login.pending, (state) => { state.isLoading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => { state.isLoading = false; state.user = action.payload.user; state.token = action.payload.token; })
      .addCase(login.rejected, (state, action) => { state.isLoading = false; state.error = action.payload; })

      .addCase(logout.fulfilled, (state) => { state.user = null; state.token = null; });
  },
});

export const authReducer = authSlice.reducer;