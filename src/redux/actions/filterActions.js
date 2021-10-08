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
export const setTextFilter = (description = "") => ({
  type: "SET_TEXT_FILTER",
  description,
});
export const setSortBy = (sortBy) => ({
  type: "SET_SORT_BY",
  sortBy,
});
export const setExpensesType = (expensesType) => ({
  type: "SET_EXPENSES_TYPE",
  expensesType,
});
