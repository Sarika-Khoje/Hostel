import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login Page</h1>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ padding: "10px", marginTop: "20px" }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
