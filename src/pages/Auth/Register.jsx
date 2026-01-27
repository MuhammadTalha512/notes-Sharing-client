import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "../../components/message";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";


const api = import.meta.env.VITE_API_URL
const initialState = {firstName: "",lastName: "",email: "",password: "",confirmPassword: ""};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const {handleLogin} = useAuthContext();
  const navigate = useNavigate();

  const handleChange = e =>
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleRegister = () => {
    let { firstName, lastName, email, password, confirmPassword } = state;

    if (firstName.trim().length < 3)
      return Toastify("First name too short", "error");
    if (lastName.trim().length < 3)
      return Toastify("Last name too short", "error");
    if (!email) return Toastify("Email is required", "error");
    if (!password) return Toastify("Password is required", "error");
    if (password !== confirmPassword)
      return Toastify("Passwords do not match", "error");

    setIsProcessing(true);

    const userData = { firstName, lastName, email, password };

    axios.post(`${api}/api/auth/register`, userData)
  .then(res => {
    Toastify("Account created successfully", "success")

    localStorage.setItem("Token", res.data.token)
    handleLogin(res.data.user, res.data.token)
    navigate("/")
  })
  .catch(err => {
    Toastify(err.response?.data?.message || "Registration failed","error")
  })
  .finally(() => {
    setIsProcessing(false)
  })

    
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Join Notes Sharing
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Create your free account
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            className="rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
            className="rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="space-y-4 mt-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            onClick={handleRegister}
            disabled={isProcessing}
            className={`w-full py-3 rounded-xl text-white font-semibold ${
              isProcessing
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isProcessing ? "Creating account..." : "Register"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
