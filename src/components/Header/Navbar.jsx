import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { Space } from 'antd';

const Navbar = () => {
  const { isAuth, handleLogout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-xl font-bold">Notes Sharing</Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto ${
            isOpen ? 'flex' : 'hidden'
          } mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">Contact</Link>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 md:ml-6">
            {isAuth ? (
              <>
                <Link
                  to="/dashboard/todos"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Space>
                <Link
                  to="/auth/login"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Register
                </Link>
              </Space>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
