// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../context/AuthContext';
// import { Space } from 'antd';

// const Navbar = () => {
//   const { state, handleLogout } = useAuthContext();
//   const { isAuth, user} = state;
//   console.log(isAuth, user)

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-black text-white">
//       <nav className="container mx-auto flex items-center justify-between p-4">
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <Link to="/" className="text-xl font-bold">Notes Sharing</Link>
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         <div
//           className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto ${
//             isOpen ? 'flex' : 'hidden'
//           } mt-4 md:mt-0`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6">
//             <li>
//               <Link to="/" className="hover:text-gray-200">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-gray-200">About</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-gray-200">Contact</Link>
//             </li>
//           </ul>

//           <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 md:ml-6">
//             {isAuth ? (
//               <>
//                 <Link
//                   to="/dashboard/todos"
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//                 >
//                   Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Space>
//                 <Link
//                   to="/auth/login"
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/auth/register"
//                   className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//                 >
//                   Register
//                 </Link>
//               </Space>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";
// import { Popover } from "antd";
// import { UserOutlined } from "@ant-design/icons";

// const Navbar = () => {
//   const { state, handleLogout } = useAuthContext();
//   const { isAuth } = state || {};
//   const [isOpen, setIsOpen] = useState(false);

//   const userContent = isAuth ? (
//     <div className="flex flex-col space-y-2">
//       <Link
//         to="/dashboard/todos"
//         className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
//       >
//         Dashboard
//       </Link>
//       <button
//         onClick={handleLogout}
//         className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
//       >
//         Logout
//       </button>
//     </div>
//   ) : (
//     <div className="flex flex-col space-y-2">
//       <Link
//         to="/auth/login"
//         className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
//       >
//         Login
//       </Link>
//       <Link
//         to="/auth/register"
//         className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//       >
//         Register
//       </Link>
//     </div>
//   );

//   return (
//     <header className="bg-[#4F39F6] text-white shadow-md">
//       <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
//         {/* Logo & Mobile Menu */}
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <Link
//             to="/"
//             className="text-2xl font-bold hover:text-gray-300 transition"
//           >
//             Notes Sharing
//           </Link>
//           <button
//             className="md:hidden p-2 rounded hover:bg-gray-700 transition"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   isOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Menu Links */}
//         <div
//           className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto ${
//             isOpen ? "flex" : "hidden"
//           } mt-4 md:mt-0`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
//             {["Home", "About", "Contact"].map((item) => (
//               <li key={item}>
//                 <Link
//                   to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                   className="block py-2 md:py-0 hover:text-gray-300 transition"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* User Icon with Popover */}
//           <div className="flex items-center md:ml-6 mt-4 md:mt-0">
//             <Popover
//               content={userContent}
//               trigger="click"
//               placement="bottomRight"
//             >
//               <UserOutlined className="text-2xl p-2 rounded-full hover:bg-gray-700 cursor-pointer transition" />
//             </Popover>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Badge } from "antd";
import {
  UserOutlined,
  BellOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../../context/AuthContext";

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Browse Notes", path: "/notes" },
  { name: "Preview", path: "/preview" },
  { name: "Upload Notes", path: "/notes/create" },
  { name: "Messages", path: "/messages" },
  { name: "Favorites", path: "/favorites" },
];

const Navbar = () => {
  const { state, handleLogout } = useAuthContext();
  const { isAuth } = state || {};
  const [isOpen, setIsOpen] = useState(false);

  const userMenu = (
    <div className="flex flex-col gap-2 min-w-[140px]">
      {isAuth ? (
        <>
          <Link to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="text-left text-red-500 hover:text-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/register">Register</Link>
        </>
      )}
    </div>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <ReadOutlined className="text-blue-600" />
          Notes Platform
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Badge count={3}>
            <BellOutlined className="text-xl cursor-pointer" />
          </Badge>

          <Popover content={userMenu} trigger="click" placement="bottomRight">
            <UserOutlined className="text-xl cursor-pointer" />
          </Popover>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 border-b"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
