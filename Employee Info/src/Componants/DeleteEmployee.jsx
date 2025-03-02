import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteEmployee() {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-red-500">
        <TrashIcon className="h-6 w-6 text-gray-500" />
        <input
          id="deleteId"
          name="deleteId"
          type="text"
          placeholder="Enter Employee ID"
          className="block w-full text-lg text-gray-900 placeholder-gray-400 border-none focus:outline-none px-3"
        />
      </div>

      <button className="mt-4 w-full !bg-red-600 text-white py-2 rounded-md hover:!bg-red-700">
          Delete
        </button>
    </div>
  );
}
