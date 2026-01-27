// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Toastify from '../../components/message';

// const initialState = { email: "", password: "" };

// const Login = () => {
//   const [state, setState] = useState(initialState);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setState((s) => ({ ...s, [e.target.name]: e.target.value }));

//   const handleLogin = () => {
//     let { email, password } = state;

//     email = email.trim();
//     password = password.trim();

//     if (!email) return Toastify('Email is required', 'error');
//     if (!password) return Toastify('Password is required', 'error');

//     setIsProcessing(true);

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const foundUser = users.find(u => u.email === email);

//     if (!foundUser) {
//       Toastify("User not found. Please register first.", "error");
//       setIsProcessing(false);
//       return;
//     }

//     Toastify("Login successful", "success");

//     localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

//     setIsProcessing(false);
//     navigate('/');
//   };

//   return (
//     <main className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Please enter your Email"
//               value={state.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Please enter your Password"
//               value={state.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             onClick={handleLogin}
//             disabled={isProcessing}
//             className={`w-full py-2 rounded text-white font-semibold ${
//               isProcessing ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {isProcessing ? 'Processing...' : 'Login'}
//           </button>
//         </div>

//         <p className="text-center text-gray-600 mt-4">
//           Don’t have an account?{' '}
//           <Link to="/auth/register" className="text-blue-600 hover:underline">
//             Register now
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "../../components/message";

const initialState = { email: "", password: "" };

const Login = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = e =>
    setState(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleLogin = () => {
    let { email, password } = state;
    email = email.trim();
    password = password.trim();

    if (!email) return Toastify("Email is required", "error");
    if (!password) return Toastify("Password is required", "error");

    setIsProcessing(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(u => u.email === email);

    if (!foundUser) {
      Toastify("User not found. Please register first.", "error");
      setIsProcessing(false);
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    Toastify("Welcome back 👋", "success");
    setIsProcessing(false);
    navigate("/");
  };

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
            onClick={handleLogin}
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
