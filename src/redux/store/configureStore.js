import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import deleteListReducer from "../reducers/deleteListReducer";
import undoable from "redux-undo";

const reducers = combineReducers({
  expenses: undoable(expensesReducer),
  filters: filtersReducer,
  deleteList: deleteListReducer,
});

const configureStore = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
export const store = configureStore();
