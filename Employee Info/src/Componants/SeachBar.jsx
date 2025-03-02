import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div>
      <div className=" px-30 mt-30">
        <div className="flex items-center rounded-md bg-white pl-3 border border-gray-300 outline-none focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600">
          {/* Search Icon */}
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
          
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Enter Employee Name"
            className="block w-full py-3 px-4 text-lg text-gray-900 placeholder:text-gray-400 border-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
