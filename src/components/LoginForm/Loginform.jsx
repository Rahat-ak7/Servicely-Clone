
import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex h-screen items-center bg-blue-200 justify-center">
      <div className="w-full max-w-md bg-gray-200 p-5 rounded-md shadow-md">
        <div className="text-center">
          <img
            src="/src/assets/images/logo.png" 
            alt="Logo"
            className="mx-auto h-16 mb-4"
          />
          <p className="text-[#1B3358] font-bold text-xl">
            Welcome! to Captain Home Services
          </p>
        </div>
        <form className="mt-6">
          {/* Add your form fields here */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="HOME@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-purple-500">
              Sign up here.
            </a>
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default LoginForm;


