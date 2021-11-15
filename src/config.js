export const LS_EXPENSE = "expense";
export const loadExpenses = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_EXPENSE) || "[]");
  } catch (e) {
    console.error("err");
    localStorage.setItem(LS_EXPENSE, "[]");
  }
};
