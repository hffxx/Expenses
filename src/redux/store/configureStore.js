import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filters"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
