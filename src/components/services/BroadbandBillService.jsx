import React, { useState } from "react";
import { FaWifi } from "react-icons/fa";

export const BroadbandBillService = () => {
  // State for tracking input value
  const [amount, setAmount] = useState("");

  // Function to handle input change
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  // Function to handle payment
  const handlePayment = () => {
    // Perform payment logic here
    console.log("Payment processed for Broadband & Landline Bill. Amount:", amount);
    // Reset input field after payment
    setAmount("");
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-md border border-gray-300 shadow-lg">
      <FaWifi className="text-3xl text-blue-500" />
      <div>
        <span className="text-lg font-semibold">Pay Broadband & Landline Bill</span>
        <div className="flex items-center mt-2">
          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={handleInputChange}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handlePayment}
            className="ml-4 px-4 py-2 bg-blue-gradient text-white rounded-md  focus:outline-none focus:bg-blue-600"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
