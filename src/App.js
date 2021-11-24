import "./App.css";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";
import { Routes } from "./routes";

const styles = {
  appBar: {
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px 0",
    alignItems: "center",
    padding: "10px",
    borderRadius: "15px",
  },
  title: {
    marginLeft: "20px",
  },
};

const App = () => {
  const title = "Expenses Calculator";
  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <AppBar sx={styles.appBar} position="static" color="inherit">
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
        </AppBar>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
