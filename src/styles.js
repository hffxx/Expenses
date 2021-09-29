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

  image: {
    marginLeft: "15px",
  },
  container: {
    margin: "15px 0px",
  },
  formControl: {
    minWidth: 120,
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& Button": {
      width: "120px",
      margin: "5px",
    },
  },
  filterList: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "10px",
  },
  textFilter: {
    width: "25rem",
  },
}));
