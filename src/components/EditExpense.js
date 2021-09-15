import { useHistory } from "react-router";
const EditExpensePage = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      EditExpensePage
      <button onClick={() => history.push("/")}>Go to dashboard</button>
    </div>
  );
};
export default EditExpensePage;
