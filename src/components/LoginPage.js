import { useHistory } from "react-router";
const LoginPage = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Login Page
      <button onClick={() => history.push("/")}>Go to dashboard</button>
    </div>
  );
};
export default LoginPage;
