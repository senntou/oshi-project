'use client';
import { useAuthContext } from '@/app/context/AuthProvider';
import { login, logout } from '@/app/lib/auth/auth';
import React from 'react';

const Header: React.FC = () => {
  const { user } = useAuthContext();

  const loginHandler = () => {
    login();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hello World!</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            {user ? (
              <li>
                <a onClick={logoutHandler} className="hover:text-gray-300">
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a onClick={loginHandler} className="hover:text-gray-300">
                  Login
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
