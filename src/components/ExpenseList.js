import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../redux/selectors/expenses";

function ExpenseList({ visibleExpenses }) {
  return (
    <div>
      {visibleExpenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    visibleExpenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);
