import { createSelector } from "@reduxjs/toolkit"

import { selectNameFilter } from "../filters/slice"
import { selectContacts } from "./slice"
import { toStandartRegister } from "../../utils/toStandartRegister"

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    return contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(filterValue))
    )
  }
)
