import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const heads = [
  { field: "title", headerName: "Title", align: "center", sort: false },
  { field: "amount", headerName: "Amount", align: "center", sort: true },
  { field: "note", headerName: "Note", align: "center", sort: false },
  { field: "createdAt", headerName: "Created At", align: "center", sort: true },
];
export const config = {
  amount: {
    amountLow: {
      component: ArrowDropDownIcon,
    },
    amountHigh: {
      component: ArrowDropUpIcon,
    },
  },
  createdAt: {
    dateOld: {
      component: ArrowDropDownIcon,
    },
    dateNew: {
      component: ArrowDropUpIcon,
    },
  },
};
