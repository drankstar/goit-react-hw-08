import { createSelector } from "@reduxjs/toolkit"
import { toStandartRegister } from "../../utils/toStandartRegister"
import { selectNameFilter } from "../filters/slice"
import { selectContacts } from "./slice"

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    return contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(filterValue))
    )
  }
)
