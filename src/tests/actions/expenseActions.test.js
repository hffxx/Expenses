import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../redux/actions/expensesActions";

describe("expense actions tests", () => {
  test("ACTION: Should setup remove expense with deleteList", () => {
    const action = removeExpense(["123test", "testtest"]);
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      deleteList: ["123test", "testtest"],
    });
  });
  test("ACTION: Should edit expense with id", () => {
    const action = editExpense("123", { note: "witam", description: "ciebie" });
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "123",
      updates: {
        note: "witam",
        description: "ciebie",
      },
    });
  });
  test("ACTION: Should setup add expense action object with provided values", () => {
    const action = addExpense({
      description: "siema",
      createdAt: 1,
      amount: 0,
    });
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        description: "siema",
        createdAt: 1,
        amount: 0,
        note: "",
        expenseType: "Bill",
        id: expect.any(String),
      },
    });
  });
  test("ACTION: Should setup add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        description: "",
        createdAt: undefined,
        amount: 0,
        note: "",
        expenseType: "Bill",
        id: expect.any(String),
      },
    });
  });
});
