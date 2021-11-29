import { textAlign } from "@mui/system";
import { text } from "dom-helpers";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  setSortBy,
  reset,
} from "../../redux/actions/filterActions";

test("ACTION: reset filters", () => {
  const action = reset();
  expect(action).toEqual({
    type: "RESET",
  });
});
test("ACTION: Generate set start date object", () => {
  const action = setStartDate(123123123);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: 123123123,
  });
});
test("ACTION: Generate set end date object", () => {
  const action = setEndDate(123123123);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: 123123123,
  });
});
test("ACTION: set text filter", () => {
  const description = "cygan";
  const action = setTextFilter(description);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    description,
  });
});
test("ACTION: set default text filter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    description: "",
  });
});
test("ACTION: set sortBy", () => {
  const sortBy = "amountLow";
  const action = setSortBy(sortBy);
  expect(action).toEqual({
    type: "SET_SORT_BY",
    sortBy,
  });
});
