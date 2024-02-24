import React from "react";
import { FaTv } from "react-icons/fa";

export const DTHConnectionService = () => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-md bg-gray-gradient hover:bg-black-gradient transition duration-300 ease-in-out transform hover:-translate-y-1">
      <FaTv className="text-3xl text-white" />
      <div>
        <h2 className="text-lg font-semibold text-white">Recharge DTH Connection</h2>
        <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="mt-2 px-4 py-2 bg-blue-gradient hover:bg-white text-white hover:text-blue-500 rounded-md border border-transparent hover:border-blue-500 transition duration-300 ease-in-out">Recharge Now</button>
      </div>
    </div>
  );
};
