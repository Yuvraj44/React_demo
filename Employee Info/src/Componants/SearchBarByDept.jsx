import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SearchBarByDept({ placeholder }) {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (query.trim() && !isNaN(query)) {
      fetch(`https://localhost:44315/api/employees/searchByDept/${query}`)
        .then((res) => {
          if (!res.ok) throw new Error("No employees found");
          return res.json();
        })
        .then((data) => {
          setEmployees(Array.isArray(data) ? data : [data]); // Ensure it's an array
          setError(null);
        })
        .catch((err) => {
          console.error("Error fetching employees:", err);
          setEmployees([]);
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

      {employees.length > 0 && (
        <div className="mt-4 p-4 border rounded-md shadow-md bg-gray-100">
          {employees.map((emp) => (
            <div key={emp.id} className="mb-4 p-3 border-b">
              <p className="text-lg font-semibold">
                {emp.firstName} {emp.lastName}
              </p>
              <p>Email: {emp.email}</p>
              <p>Job Title: {emp.jobTitle}</p>
              <p>Phone: {emp.phoneNumber}</p>
              <p>Hired: {new Date(emp.hireDate).toLocaleDateString()}</p>
              <p>Salary: {emp.salary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
