import React from "react";
import { Fab, Typography } from "@mui/material";
import { reset } from "../../redux/actions/filterActions";
import { useDispatch } from "react-redux";

const styles = {
  button: {
    marginTop: "10px",
    color: "white",
    background: "#0066ff",
    transition: "0.5s",
    "&:hover": {
      background: "#0047b3",
    },
  },
};
function ResetFilter() {
  const dispatch = useDispatch();
  return (
    <Fab
      disableRipple={true}
      sx={styles.button}
      variant="extended"
      onClick={() => dispatch(reset())}
    >
      <Typography variant="string">Reset Filters</Typography>
    </Fab>
  );
}

export default ResetFilter;
