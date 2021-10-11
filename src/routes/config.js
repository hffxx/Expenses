import ExpenseDashboardPage from "../components/ExpenseDashboard";
import LoginPage from "../components/LoginPage";
import HelpPage from "../components/HelpPage";
import AddExpenseModal from "../components/AddExpenseModal";

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
  { component: AddExpenseModal, path: "/addexpense" },
  //   { exact: false, component: NotFoundPage },
];
