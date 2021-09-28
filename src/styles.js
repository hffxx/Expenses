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
    margin: "20px 10px",
  },
  formControl: {
    minWidth: 120,
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  },
  filterList: {
    display: "flex",
    justifyContent: "space-between",
  },
  textFilter: {
    width: "20rem",
  },
}));
