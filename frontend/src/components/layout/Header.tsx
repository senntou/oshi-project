'use client';
import { useAuthContext } from '@/context/AuthProvider';
import { login, logout } from '@/lib/auth/auth';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const onClickHomeHandler = () => {
    router.push('/');
  };
  const loginHandler = () => {
    login();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <header className="bg-basecolor p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-HachiMaruPop text-2xl font-bold">推しプロ！</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={onClickHomeHandler}
                className="hover:text-gray-300"
              >
                Home
              </button>
            </li>
            {user ? (
              <li>
                <button onClick={logoutHandler} className="hover:text-gray-300">
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button onClick={loginHandler} className="hover:text-gray-300">
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
