export const reset = () => ({
  type: "RESET",
});
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
export const setSortBy = (sortBy) => ({
  type: "SET_SORT_BY",
  sortBy,
});
