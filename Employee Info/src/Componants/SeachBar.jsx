export default function SearchBar() {
  return (
    <div>
      <label htmlFor="Employee" className="block text-5xl font-bold text-gray-900 py-2">
        Find Someone
      </label>
      <div className="mt-2 py-2">
        <div className="flex items-center rounded-md bg-white pl-3 border border-gray-300 outline-none focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600">
          <span className="shrink-0 text-base text-gray-500 select-none"></span>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Enter Employee Name"
            className="block w-full py-3 px-4 text-lg text-gray-900 placeholder:text-gray-400 border-none focus:outline-none"
          />
        </div>
      </div>

    </div>

  )
}
