import ExpenseDashboardPage from "../components/ExpenseDashboard";
import HelpPage from "../components/HelpPage";
// import NotFoundPage from "../components/NotFoundPage";

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

  // { exact: false, component: NotFoundPage },
];
