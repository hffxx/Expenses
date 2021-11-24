const getSortConditional = (value1, value2, isTrue) => {
  if (isTrue) {
    return value1 < value2 ? 1 : -1;
  }
  return value1 > value2 ? 1 : -1;
};

const getVisibleExpenses = (
  expenses,
  { description, sortBy, startDate, endDate, expensesType }
) => {
  const filterFunc = (expense) => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const descriptionMatch = expense.description
      .toLowerCase()
      .includes(description.toLowerCase());
    const expensesTypeMatch =
      expensesType === "" ||
      expensesType === "all" ||
      expensesType === expense.expenseType;
    return (
      startDateMatch && endDateMatch && descriptionMatch && expensesTypeMatch
    );
  };

  const sortFunc = (a, b) => {
    if (["dateNew", "dateOld"].indexOf(sortBy) > -1) {
      return getSortConditional(a.createdAt, b.createdAt, sortBy === "dateNew");
    } else if (["amountHigh", "amountLow"].indexOf(sortBy) > -1) {
      return getSortConditional(a.amount, b.amount, sortBy === "amountHigh");
    }
  };

  return expenses.filter(filterFunc).sort(sortFunc);
};

export default getVisibleExpenses;
