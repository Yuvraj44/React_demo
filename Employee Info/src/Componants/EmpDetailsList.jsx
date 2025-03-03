import { useState, useEffect } from "react";

export default function EmpDetailsList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44315/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-[calc(50vh-100px)]">
      <ul role="list" className="divide-y divide-red-100-l">
        {employees.map((emp) => (
          <li key={emp.id} className="flex justify-between gap-x-40 py-5">
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-6">
                {emp.id}
              </p>
            </div>
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold text-gray-900 leading-6">
                  {emp.firstName} {emp.lastName}
                </p>
                <p className="mt-1 truncate text-xs text-gray-500 leading-5">
                  {emp.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{emp.jobTitle}</p>
              <p className="mt-1 text-xs/5 text-gray-500">
                Phone: {emp.phoneNumber}
              </p>
            </div>
            <div>
              <p className="mt-1 text-xs/5 text-gray-500">
                Hired: {new Date(emp.hireDate).toLocaleDateString()}
              </p>
              <p className="mt-1 text-xs/5 text-gray-500">Salary: {emp.salary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
