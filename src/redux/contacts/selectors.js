import { createSelector } from "@reduxjs/toolkit"
import { selectContacts } from "./slice"
import { toStandartRegister } from "../../utils/toStandartRegister"
import { selectFilteredName } from "../filters/selectors"

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilteredName],
  (contacts, filterValue) => {
    return contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(filterValue))
    )
  }
)
