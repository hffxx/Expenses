import uuid from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = undefined,
  expenseType = "Bill",
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
    expenseType,
  },
});
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
export const removeExpense = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id, //id:id
});
