import { defaultExpensesState } from "../defaultState/defaultState";
import { LS_EXPENSE } from "../../config";

const updateExpensesLocalStorage = (state) => {
  localStorage.setItem(LS_EXPENSE, JSON.stringify(state));
};

const expensesReducer = (state = defaultExpensesState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_EXPENSE":
      newState = [...state, action.expense];
      break;
    case "REMOVE_EXPENSE":
      newState = state.filter(
        (expense) => !action.deleteList.includes(expense.id)
      );
      break;
    case "EDIT_EXPENSE":
      newState = state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
      break;
    case "SET_EXPENSES":
      newState = action.list;
      break;
    default:
      return state;
  }
  updateExpensesLocalStorage(newState);
  return newState;
};

export default expensesReducer;
