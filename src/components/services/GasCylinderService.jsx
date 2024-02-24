import React from "react";
import { FaGasPump } from "react-icons/fa";

export const GasCylinderService = () => {
  return (
    <div className="flex items-center gap-4 p-4  rounded-md shadow-md hover:shadow-xl transition duration-300">
      <FaGasPump className="text-3xl text-blue-500" />
      <div>
        <h2 className="text-lg font-semibold">Book Gas Cylinder</h2>
        <p className="text-gray-600">Order your gas cylinder hassle-free!</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Order Now</button>
      </div>
    </div>
  );
};
