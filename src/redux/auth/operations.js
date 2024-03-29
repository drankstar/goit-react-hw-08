import { createAsyncThunk } from "@reduxjs/toolkit"
import { api, setAuthHeader } from "../../api"

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", payload)
      setAuthHeader(data.token)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.post("/users/login", payload)
      setAuthHeader(data.token)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("/users/logout")

    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users/current")

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
