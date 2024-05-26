import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-[#7CB9E8] flex justify-end items-end h-24 p-4 font-medium ">
   
      <ul className="flex space-x-6 mr-[45px]">
        <li>
          <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Our Customers
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            SpArts Advantage
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200 px-3 py-2 rounded-md">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};
