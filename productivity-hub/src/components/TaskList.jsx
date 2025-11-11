import React from "react";
import {Plus} from "lucide-react"; 

const ListTable = () => {
  const tableData = [
    { Id: 1, Checked: true, Description: "My first task", Priority: "Normal" },
    { Id: 2, Checked: false, Description: "My second task", Priority: "High" },
    { Id: 3, Checked: false, Description: "My third task", Priority: "Low" },
  ];

  return (
    <table className="container mt-4 w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 h-10">
          <th className="px-2 text-left font-semibold text-gray-700">Done</th>
          <th className="px-2 text-left font-semibold text-gray-700">Description</th>
          <th className="px-2 text-left font-semibold text-gray-700">Priority</th>
          <th className="px-2 text-left font-semibold text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.Id} className="border-b">
            <td className="px-2">
              <input type="checkbox" checked={row.Checked} readOnly />
            </td>
            <td className="px-2">{row.Description}</td>
            <td className="px-2">{row.Priority}</td>
            <td className="px-2">—</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TaskList = () =>{
    return (
        <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-800 mb-4">My Tasks</h1>
            
            <div className="grid grid-cols-4 container gap-2">
                <input
                    type="text"
                    placeholder="Add a new Task"
                    className="border rounded-lg px-4 py-2 text-sm col-span-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button className="flex font-bold justify-center p-2 bg-blue-600 border rounded-lg text-white text-sm"><Plus className="font-bold w-5 h-5"/> Add Task</button>
            </div>
            
            {/* List Filter */}
            <div className="mt-4 grid grid-cols-3 gap-2 bg-gray-200 border rounded-lg px-1 h-8">
                <a href="#" className="text-center m-auto hover:bg-gray-100 hover:border hover:rounded-md container text-gray-700">
                    All
                </a>
                <a href="#" className="text-center m-auto hover:bg-gray-100 hover:border hover:rounded-md container text-gray-700">
                    Completed
                </a>
                <a href="#" className="text-center m-auto hover:bg-gray-100 hover:border hover:rounded-md container text-gray-700">
                    Pending
                </a>
            </div>

            <ListTable />

        </div>
    );
}

export default TaskList;