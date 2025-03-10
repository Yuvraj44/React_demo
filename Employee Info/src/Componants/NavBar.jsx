import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "", current: false },
  { name: "Search", href: "view", current: false },
];
const Adminn = [
  { name: "Admin", href: "admin", current: false },
 
];
const userNavigation = [
  { name: "Your Profile", href: "user" },
  { name: "Settings", href: "settings" },
  { name: "Sign out", href: "signout" },
];

const AdminNavigation = [
  { name: "Add Employee", href: "add" },
  { name: "Edit Employee", href: "edit" },
  { name: "Delete Employee", href: "delete" },
];

const SearchNavigation = [
  { name: "Search By Id", href: "searchById" },
  { name: "Search By Department ID", href: "searchByDept" },
  { name: "Search By Name", href: "searchByName" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const role = localStorage.getItem("role");
export default function NavBar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-screen">
        <Disclosure as="nav" className="bg-gray-800">
          {/* All elements in the navbar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* icon + options */}
              <div className="flex items-center">
                {/* Icon */}
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="size-8"
                  />
                </div>

                {/* 3 options */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <Menu as="div" className="relative ">
                  {/* //Usericon */}
                  <div className="bg-gray-800">
                    <MenuButton
                      className="bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium"
                    >
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 text-gray-800 -m-2"
                      />
                    </MenuButton>
                  </div>

                  {/* //Search Menu */}
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {SearchNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              {role === "admin" && (
                <>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {Adminn.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                          
              <Menu as="div" className="relative ml-4">
                <MenuButton className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                  <ChevronDownIcon className="size-5 text-gray-800 -m-2" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md py-1 shadow-lg ring-1 ring-black/5">
                  {AdminNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
              </>
            )}

              </div>

              {/* <DropDownMenu/> */}

              {/* Profile button */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {/* //Usericon */}
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="size-8 rounded-full"
                        />
                      </MenuButton>
                    </div>

                    {/* //Menu */}
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    </>
  );
}
