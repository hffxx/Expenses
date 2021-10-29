import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../../redux/actions/expensesActions";
import { removeAllFromDeleteList } from "../../redux/actions/deleteListActions";

function DeleteButton() {
  const dispatch = useDispatch();
  const deleteList = useSelector((state) => state.deleteList);
  return (
    <Button
      onClick={() => {
        dispatch(removeAllFromDeleteList());
        dispatch(removeExpense(deleteList));
      }}
    >
      Delete
    </Button>
  );
}

export default DeleteButton;
