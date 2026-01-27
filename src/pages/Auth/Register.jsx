// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Toastify from '../../components/message';

// const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

// const Register = () => {
//   const [state, setState] = useState(initialState);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

//   const handleRegister = async () => {
//     let { firstName, lastName, email, password, confirmPassword } = state;

//     firstName = firstName.trim();
//     lastName = lastName.trim();
//     email = email.trim();
//     password = password.trim();
//     confirmPassword = confirmPassword.trim();

//     if (firstName.length < 3) return Toastify('First Name must be at least 3 characters long', 'error');
//     if (lastName.length < 3) return Toastify('Last Name must be at least 3 characters long', 'error');
//     if (!email) return Toastify('Email is required', 'error');
//     if (!password) return Toastify('Password is required', 'error');
//     if (!confirmPassword || confirmPassword !== password) return Toastify("Passwords do not match", 'error');

//     setIsProcessing(true);

//     const user = { firstName, lastName, email };
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     let isFound = users.find(u => u.email === user.email);

//     if (!isFound) {
//       users.push(user);
//     } else {
//       Toastify("User Already Registered", "error");
//       setIsProcessing(false);
//       return;
//     }

//     localStorage.setItem("users", JSON.stringify(users));
//     setIsProcessing(false);
//     navigate("/");
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
//         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Register</h2>
//         <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleRegister(); }}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Please enter your First Name"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Please enter your Last Name"
//                 className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Please enter your Email"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Please enter your Password"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Please confirm your Password"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={isProcessing}
//             className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
//               isProcessing ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
//             }`}
//           >
//             {isProcessing ? 'Processing...' : 'Register'}
//           </button>
//           <p className="text-center text-sm text-gray-600 pt-2">
//             Already User? <Link to="/auth/login" className="text-blue-600 hover:underline">Login now</Link>
//           </p>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "../../components/message";
import axios from "axios";


const api = import.meta.env.VITE_API_URL
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
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


     axios.post(`${api}/api/auth/register`, {

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
