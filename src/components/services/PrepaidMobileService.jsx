import React from "react";
import { FaMobile } from "react-icons/fa";

export const PrepaidMobileService = () => {
  return (
    <div className="flex items-center gap-2 p-4 rounded-md shadow-lg bg-gray-gradient ">
      <FaMobile className="text-xl " />
      <span className="text-lg font-semibold  text-white">Prepaid Mobile</span>
    </div>
  );
};
