import { defaultFilterState } from "./defaultExpensesState";

const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT_HIGH":
      return {
        ...state,
        sortBy: "amountHigh",
      };
    case "SORT_BY_AMOUNT_LOW":
      return {
        ...state,
        sortBy: "amountLow",
      };
    case "SORT_BY_DATE_NEW":
      return {
        ...state,
        sortBy: "dateNew",
      };
    case "SORT_BY_DATE_OLD":
      return {
        ...state,
        sortBy: "dateOld",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    case "RESET":
      return {
        ...defaultFilterState,
      };
    default:
      return state;
  }
};

export default filtersReducer;
