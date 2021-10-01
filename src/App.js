import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppBar, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";

import Navbar from "./components/Navbar/Navbar";
import EditExpensePage from "./components/EditExpense";
import ExpenseDashboardPage from "./components/ExpenseDashboard";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const classes = useStyles();
  const title = "Expenses";
  return (
    <Container>
      <BrowserRouter>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2">
            {title}
          </Typography>
          <Navbar />
        </AppBar>
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
