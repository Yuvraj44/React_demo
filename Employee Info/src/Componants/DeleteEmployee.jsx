import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteEmployee() {
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = async () => {
    if (!deleteId) {
      alert("Please enter an Employee ID.");
      return;
    }

    try {
      const response = await fetch(`https://localhost:44315/api/employees/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Employee deleted successfully!");
      } else {
        alert("Failed to delete employee.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-md shadow">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-red-500">
        <TrashIcon className="h-6 w-6 text-gray-500" />
        <input
          id="deleteId"
          name="deleteId"
          type="text"
          placeholder="Enter Employee ID"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          className="block w-full text-lg text-gray-900 placeholder-gray-400 border-none focus:outline-none px-3"
        />
      </div>

      <button
        onClick={handleDelete}
        className="mt-4 w-full !bg-red-600 text-white py-2 rounded-md hover:!bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
