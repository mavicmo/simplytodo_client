import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Menu } from "@headlessui/react";
const HomePage = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-teal-50">
      {/* NavBar */}
      <div className="flex flex-col space-y-0 bg-white shadow-2xl rounded-2xl  md:flex-row md:space-y-0 md:m-0 md:justify-between md:items-center">
        <div className="md:block md:text-left m-auto p-5 font-bold text-6xl text-teal-700 ">
          SimplyToDo.
        </div>
        <Menu>
          <Menu.Button className=" m-auto p-5 font-bold text-5xl text-teal-700  ">
            <RiAccountCircleFill className="hover:cursor-pointer" />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm")
                  }
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      {/* End of NavBar */}
    </div>
  );
};

export default HomePage;
