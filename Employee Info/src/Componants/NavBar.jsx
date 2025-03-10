import { useState, useEffect } from "react";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Home", href: "" },
  { name: "Search", href: "view" },
];

const adminNav = [{ name: "Admin", href: "admin" }];

const userNav = [
  { name: "Your Profile", href: "user" },
  { name: "Settings", href: "settings" },
  { name: "Sign out", href: "signout" },
];

const adminOptions = [
  { name: "Add Employee", href: "add" },
  { name: "Edit Employee", href: "edit" },
  { name: "Delete Employee", href: "delete" },
];

const searchOptions = [
  { name: "Search By Id", href: "searchById" },
  { name: "Search By Department ID", href: "searchByDept" },
  { name: "Search By Name", href: "searchByName" },
];

export default function NavBar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(localStorage.getItem("role") || "");
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 w-screen">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Search Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <ChevronDownIcon className="size-5" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                  {searchOptions.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              {/* Admin Navigation (Only for Admins) */}
              {role === "admin" && (
                <>
                  {adminNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Admin Dropdown */}
                  <Menu as="div" className="relative">
                    <MenuButton className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      <ChevronDownIcon className="size-5" />
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                      {adminOptions.map((item) => (
                        <MenuItem key={item.name}>
                          <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="hidden md:block">
              <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                  {userNav.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
