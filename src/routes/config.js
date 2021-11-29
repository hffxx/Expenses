import ExpenseDashboardPage from "../components/Pages/ExpenseDashboard";
import HelpPage from "../components/Pages/HelpPage";

export const routeConfig = [
  {
    exact: true,
    component: ExpenseDashboardPage,
    path: "/",
  },
  {
    component: HelpPage,
    path: "/help",
  },
];
