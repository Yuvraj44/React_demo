import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SearchBarById({ placeholder }) {
  const [query, setQuery] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (query.trim() && !isNaN(query)) {
      fetch(`https://localhost:44315/api/employees/${query}`)
        .then((res) => {
          if (!res.ok) throw new Error("Employee not found");
          return res.json();
        })
        .then((data) => {
          setEmployee(data);
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching employee:", err);
          setEmployee(null);
          setError(err.message);
        });
    }
  };

  return (
    <div className="px-30 mt-30 ml-80">
      <div className="flex items-center rounded-md bg-white pl-3 border border-gray-300 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full py-3 px-4 text-lg text-gray-900 placeholder:text-gray-400 border-none focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-black rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {employee && (
        <div className="mt-4 p-4 border rounded-md shadow-md bg-gray-100">
          <p className="text-lg font-semibold">{employee.firstName} {employee.lastName}</p>
          <p>Email: {employee.email}</p>
          <p>Job Title: {employee.jobTitle}</p>
          <p>Phone: {employee.phoneNumber}</p>
          <p>Hired: {new Date(employee.hireDate).toLocaleDateString()}</p>
          <p>Salary: {employee.salary}</p>
        </div>
      )}
    </div>
  );
}
