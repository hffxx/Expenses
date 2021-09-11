import { defaultExpensesState } from "../defaultState";
const expensesReducer = (state = defaultExpensesState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default expensesReducer;
