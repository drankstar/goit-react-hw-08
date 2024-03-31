import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts")

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", newContact)

      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)