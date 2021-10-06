import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage";
import ExpenseDashboardPage from "./components/ExpenseDashboard";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

const styles = {
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 0",
    alignItems: "center",
    padding: "10px",
    borderRadius: "15px",
  },
};

const App = () => {
  const title = "Expenses";
  return (
    <Container>
      <BrowserRouter>
        <AppBar sx={styles.appBar} position="static" color="inherit">
          <Typography variant="h2">{title}</Typography>
          <Navbar />
        </AppBar>
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
