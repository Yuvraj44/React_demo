import { useState } from "react";

export default function UpdateEmployee() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    hireDate: "",
    departmentId: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeId = formData.id; // Get ID from form

    const dataToSend = {
      ...formData,
      id: Number(employeeId),
      departmentId: Number(formData.departmentId),
      salary: Number(formData.salary),
    };

    try {
      const response = await fetch(
        `https://localhost:44315/api/employees/${employeeId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        alert("Employee updated successfully!");
      } else {
        alert("Failed to update employee.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="id" className="block text-sm font-medium text-gray-900">
                ID
              </label>
              <input
                id="id"
                name="id"
                type="text"
                value={formData.id}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="hireDate" className="block text-sm font-medium text-gray-900">
                Hire Date
              </label>
              <input
                id="hireDate"
                name="hireDate"
                type="date"
                value={formData.hireDate}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="departmentId" className="block text-sm font-medium text-gray-900">
                Department Id
              </label>
              <input
                id="departmentId"
                name="departmentId"
                type="text"
                value={formData.departmentId}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-900">
                Salary
              </label>
              <input
                id="salary"
                name="salary"
                type="text"
                value={formData.salary}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 px-3 py-1.5 border-1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          Save
        </button>
      </div>
    </form>
  );
}
