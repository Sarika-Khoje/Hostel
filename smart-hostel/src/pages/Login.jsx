import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // temporary redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded px-3 py-2 focus:outline-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2 focus:outline-purple-500"
            required
          />

          <select
            className="w-full border rounded px-3 py-2 focus:outline-purple-500"
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
