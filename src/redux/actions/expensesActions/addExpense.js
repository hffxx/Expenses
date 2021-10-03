import uuid from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = undefined,
  expenseType = undefined,
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
