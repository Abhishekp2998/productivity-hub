import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between pr-6">
      <h3 className="text-lg font-semibold text-gray-800">Welcome, Abhishek</h3>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;