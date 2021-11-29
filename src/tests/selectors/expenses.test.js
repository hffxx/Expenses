import getVisibleExpenses from "../../redux/selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "123",
    amount: 1234,
    note: "",
    createdAt: 15,
    expensesType: "Bill",
  },
  {
    id: "2",
    description: "test",
    amount: 123,
    note: "",
    createdAt: 17,
    expensesType: "Earning",
  },
];

test("SELECTOR: filter by text value", () => {
  const filters = { description: "123" };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("SELECTOR: filter by startDate", () => {
  const filters = { description: "", startDate: 16 };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test("SELECTOR: Sort by date descending", () => {
  const filters = { description: "", sortBy: "dateNew" };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});
test("SELECTOR: Sort by amount ascending", () => {
  const filters = { description: "", sortBy: "amountLow" };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});
