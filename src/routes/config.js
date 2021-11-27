import ExpenseDashboardPage from "../components/Pages/ExpenseDashboard";
import HelpPage from "../components/Pages/HelpPage";
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
