import uuid from "uuid";
import moment from "moment";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt: moment(),
  },
});
