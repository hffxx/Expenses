import { defaultFilterState } from "./defaultExpensesState";

const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
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
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
};

export default filtersReducer;
