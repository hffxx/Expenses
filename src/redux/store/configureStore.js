import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

const configureStore = () => {
  const store = createStore(reducers);
  return store;
};
export default configureStore;
