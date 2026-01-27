import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "../../components/message";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const initialState = { email: "", password: "" };

const Login = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const { handleLogin } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = e =>
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleLogin1 = () => {
    let { email, password } = state;
    email = email.trim();
    password = password.trim();

    if (!email) return Toastify("Email is required", "error");
    if (!password) return Toastify("Password is required", "error");

    setIsProcessing(true);

    const API = import.meta.env.VITE_API_URL
    const userData  = { email, password };
   axios.post(`${API}/api/auth/login`, userData)
  .then(res => {
    Toastify("Login successful", "success")
    
    handleLogin(res.data.user, res.data.token)
    
    navigate("/") 
  })
  .catch(err => {
    Toastify(err.response?.data?.message || "Login failed","error")
  })
  .finally(() => setIsProcessing(false))
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Notes Sharing
        </h2>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Login to access shared notes
        </p>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={state.email}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            onClick={handleLogin1}
            disabled={isProcessing}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              isProcessing
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isProcessing ? "Signing in..." : "Login"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          New here?{" "}
          <Link to="/auth/register" className="text-indigo-600 font-semibold">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
