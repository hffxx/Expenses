import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import { Container } from "@material-ui/core";
import useStyles from "../styles";

const ExpenseDashboardPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <ExpenseListFilter />
      <ExpenseList />
    </Container>
  );
};
export default ExpenseDashboardPage;
