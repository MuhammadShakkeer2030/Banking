import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export const EducationFeeService = () => {
  // Function to handle payment
  const handlePayment = () => {
    // Perform payment logic here
    console.log("Payment processed for Education Fee");
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-md shadow-lg feature-card hover:feature-card:hover">
      <div className="text-3xl text-gradient">
        <FaGraduationCap />
      </div>
      <span className="text-lg font-semibold mt-2 mb-4">Pay Education Fee</span>
      <button onClick={handlePayment} className="bg-blue-gradient text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out">
        Pay Now
      </button>
    </div>
  );
};
