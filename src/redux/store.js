import { configureStore } from "@reduxjs/toolkit"

import contactsSlice from "../redux/contacts/slice"
import filtersSlice from "../redux/filters/slice"
import authSlice from "../redux/auth/slice"

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
    auth: authSlice,
  },
})

export default store
