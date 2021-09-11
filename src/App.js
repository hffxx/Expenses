import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";

import Navbar from "./components/Navbar/Navbar";
import AddExpensePage from "./components/AddExpense";
import EditExpensePage from "./components/EditExpense";
import ExpenseDashboardPage from "./components/ExpenseDashboard";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const classes = useStyles();

  const handleClick = () => {
    console.log("test");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography
            className={classes.heading}
            variant="h2"
            onClick={handleClick}
          >
            Expenses
          </Typography>
          <Navbar />
        </AppBar>
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
