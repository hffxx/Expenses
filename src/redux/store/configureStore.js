import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import deleteListReducer from "../reducers/deleteListReducer";

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  deleteList: deleteListReducer,
});

export const configureStore = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
