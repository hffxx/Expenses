import { createStore, combineReducers } from "react-redux";
import expensesReducer from "./reducers/expensesReducer";
import filtersReducer from "./reducers/filtersReducer";

export const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);
