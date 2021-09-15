import React from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../redux/selectors/expenses";

function ExpenseList() {
  const visibleExpenses = useSelector((state) =>
    getVisibleExpenses(state.expenses, state.filters)
  );
  return (
    <div>
      {visibleExpenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}

export default ExpenseList;

/* stare podejscie =>  

 const mapStateToProps = (state) => {
   return {
     visibleExpenses: getVisibleExpenses(state.expenses, state.filters),
   };
 };
export default connect(mapStateToProps)(ExpenseList)
... function ExpenseList({visibleExpenses}) {... jako props
  */
