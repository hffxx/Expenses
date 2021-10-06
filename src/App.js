import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage";
import ExpenseDashboardPage from "./components/ExpenseDashboard";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    borderRadius: 15,
    margin: "10px 0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "white",
  },
}));

const App = () => {
  const classes = useStyles();
  const title = "Expenses";
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/login" component={LoginPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
