import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "white",
  },
  heading: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  container: {
    margin: "15px 0px",
  },
}));
