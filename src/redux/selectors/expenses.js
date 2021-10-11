const getVisibleExpenses = (
  expenses,
  { description, sortBy, startDate, endDate, expensesType }
) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const descriptionMatch = expense.description
        .toLowerCase()
        .includes(description.toLowerCase());
      const expensesTypeMatch =
        expensesType === "" || expensesType === expense.expenseType;
      return (
        startDateMatch && endDateMatch && descriptionMatch && expensesTypeMatch
      );
    })
    .sort((a, b) => {
      if (sortBy === "dateNew") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "dateOld") {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else if (sortBy === "amountHigh") {
        return a.amount < b.amount ? 1 : -1;
      } else if (sortBy === "amountLow") {
        return a.amount > b.amount ? 1 : -1;
      } else {
        return null;
      }
    });
};
export default getVisibleExpenses;
