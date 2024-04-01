import { createSelector } from "@reduxjs/toolkit"
// import { selectNameFilter } from "./slice"

const selectNameFilter = (state) => state

export const selectFilteredName = createSelector(
  selectNameFilter,
  (state) => state.filters.name
)
