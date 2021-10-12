import ExpenseDashboardPage from "../components/ExpenseDashboard";
import LoginPage from "../components/LoginPage";
import HelpPage from "../components/HelpPage";

export const routeConfig = [
  {
    exact: true,
    component: ExpenseDashboardPage,
    path: "/",
  },
  {
    component: LoginPage,
    path: "/login",
  },
  {
    component: HelpPage,
    path: "/help",
  },

  //   { exact: false, component: NotFoundPage },
];
