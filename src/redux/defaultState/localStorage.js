import { LS_EXPENSE } from "../../config";
export const loadExpenses = () => {
  try {
    return JSON.parse(localStorage.getItem(LS_EXPENSE) || "[]");
  } catch (e) {
    console.error("err");
    localStorage.setItem(LS_EXPENSE, "[]");
  }
};
