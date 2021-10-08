import { defaultFilterState } from "../defaultState/defaultState";

const filtersReducer = (state = defaultFilterState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        description: action.description,
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
    case "SET_EXPENSES_TYPE":
      return {
        ...state,
        expensesType: action.expensesType,
      };
    default:
      return state;
  }
};

export default filtersReducer;
