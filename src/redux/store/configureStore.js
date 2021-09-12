import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};
export default configureStore;
