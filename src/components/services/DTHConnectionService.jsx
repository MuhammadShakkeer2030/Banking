import React, { useState } from "react";
import { FaTv } from "react-icons/fa";

export const DTHConnectionService = () => {
  // Sample DTH operators array
  const operators = ["Operator A", "Operator B", "Operator C"];

  // Sample plans array
  const plans = ["Plan X", "Plan Y", "Plan Z"];

  // State variables to store selected values
  const [operator, setOperator] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment logic here
    console.log("Payment submitted");
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 rounded-md bg-gray-gradient hover:bg-black-gradient transition duration-300 ease-in-out transform">
      <FaTv className="text-3xl text-white" />
      <div>
        <h2 className="text-lg font-semibold text-white">
          Recharge DTH Connection
        </h2>
        <form onSubmit={handleSubmit} className="text-black">
          {/* DTH operator selection */}
          <div className="mb-4">
            <label
              htmlFor="operator"
              className="block text-gray-300 text-sm mb-2"
            >
              Select DTH Operator
            </label>
            <select
              id="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="form-select px-4 py-2 rounded-md"
            >
              <option value="">Select Operator</option>
              {operators.map((op, index) => (
                <option key={index} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
          {/* Customer ID input */}
          <div className="mb-4">
            <label
              htmlFor="customerId"
              className="block text-gray-300 text-sm mb-2"
            >
              Enter Customer ID
            </label>
            <input
              type="text"
              id="customerId"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="form-input  px-4 py-2 rounded-md"
              placeholder="Customer ID"
            />
          </div>
          {/* Plan selection */}
          <div className="mb-4">
            <label htmlFor="plan" className="block text-gray-300 text-sm mb-2">
              Select Plan
            </label>
            <select
              id="plan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="form-select  px-4 py-2 rounded-md"
            >
              <option value="">Select Plan</option>
              {plans.map((plan, index) => (
                <option key={index} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>
          {/* Proceed payment button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-gradient hover:bg-white text-white hover:text-blue-500 rounded-md border border-transparent hover:border-blue-500 transition duration-300 ease-in-out"
          >
            Proceed Payment
          </button>
        </form>
      </div>
    </div>
  );
};
