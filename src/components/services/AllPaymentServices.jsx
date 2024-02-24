import React from "react";
import { FaMoneyBill } from "react-icons/fa";

export const AllPaymentServices = () => {
  return (
    <div className="flex items-center gap-2 p-4  rounded-md">
      <FaMoneyBill className="text-xl" />
      <span className="text-lg font-semibold">All Payment Services</span>
    </div>
  );
};

