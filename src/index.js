import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./redux/store/configureStore";
import { addExpense } from "./redux/actions/expensesActions/addExpense";

//dummy data
const store = configureStore();
store.dispatch(
  addExpense({ description: "Benzyna", amount: 4500, createdAt: 12000 })
);
store.dispatch(
  addExpense({
    description: "Rachunki za dom",
    amount: 50000,
    createdAt: 15000,
  })
);
store.dispatch(
  addExpense({ description: "Biedronka zakupy", amount: 2400, createdAt: 500 })
);
store.dispatch(
  addExpense({
    description: "Zabka zakupy",
    amount: 5444000,
    createdAt: 20000,
  })
);
store.dispatch(
  addExpense({ description: "Mechanik", amount: 1500, createdAt: 12000 })
);
store.dispatch(
  addExpense({
    description: "Wizyta u lekarza",
    amount: 500,
    createdAt: 32000,
  })
);
store.dispatch(
  addExpense({
    description: "Mandat",
    amount: 4325325500,
    createdAt: 53000,
  })
);
store.dispatch(
  addExpense({ description: "Bilety do kina", amount: 4500, createdAt: 44000 })
);
store.dispatch(
  addExpense({
    description: "Mc'donalds",
    amount: 432535500,
    createdAt: 89000,
  })
);
store.dispatch(
  addExpense({
    description: "Sushi",
    amount: 1551500,
    createdAt: 1000000,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
