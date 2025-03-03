import { useState } from "react";

export default function AddEmployee() {


  const [formData, setFormData] = useState({
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
    const dataToSend = {
      id: 0,
      ...formData,
      departmentId: Number(formData.departmentId),
      salary: Number(formData.salary),
    };

    try {
      const response = await fetch("https://localhost:44315/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Employee added successfully!");
      } else {
        alert("Failed to add employee.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form class>
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        {/* <h2 className="text-base/7 font-semibold text-gray-900">Add Employee Details</h2> */}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          

          <div className="col-span-full">
            <label
              htmlFor="phoneNumber"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                autoComplete="phoneNumber"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="hireDate"
              className="block text-sm font-medium text-gray-900"
            >
              Hire Date
            </label>
            <div className="mt-2">
              <input
                id="hireDate"
                name="hireDate"
                type="date"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="departmentId"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Department Id
            </label>
            <div className="mt-2">
              <input
                id="departmentId"
                name="departmentId"
                type="text"
                autoComplete="address-level1"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="salary"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Salary
            </label>
            <div className="mt-2">
              <input
                id="salary"
                name="salary"
                type="text"
                autoComplete="salary"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
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
