import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's your overview.</p>
          
          {/* TaskList */}
          <TaskList />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;