import React from "react";
import { Home, CheckSquare, BarChart2, Settings } from "lucide-react"; 

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold text-blue-600 mb-8">ProductivityHub</h2>

        <nav className="space-y-4 p-2">
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 hover:rounded hover:border hover:p-2">
            <Home className="w-5 h-5 mr-3" /> Dashboard
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 hover:rounded hover:border hover:p-2">
            <CheckSquare className="w-5 h-5 mr-3" /> Tasks
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 hover:rounded hover:border hover:p-2">
            <BarChart2 className="w-5 h-5 mr-3" /> Analytics
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 hover:rounded hover:border hover:p-2">
            <Settings className="w-5 h-5 mr-3" /> Settings
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="text-sm text-gray-500">
        <p>© 2025 ProductivityHub</p>
      </div>
    </aside>
  );
};

export default Sidebar;