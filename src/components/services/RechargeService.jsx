import React, { useState } from "react";
import { FaBook, FaSearch } from "react-icons/fa";

// Define RechargeService as a named export
export const RechargeService = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [successMessage, SetSuccessMessage] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setMobileNumber(value);

    if (value.length !== 10) {
      setError("Mobile number must be 10 digits");
    } else {
      setError("");
    }
  };

  const serviceProviders = ["AT&T", "Verizon", "T-Mobile", "Sprint"];
  const plans = {
    "AT&T": ["Plan A", "Plan B", "Plan C"],
    Verizon: ["Plan X", "Plan Y", "Plan Z"],
    "T-Mobile": ["Plan P", "Plan Q", "Plan R"],
    Sprint: ["Plan M", "Plan N", "Plan O"],
  };

  const handleOperatorChange = (event) => {
    const { value } = event.target;
    setOperator(value);
    setSelectedPlan("");
  };

  const handlePlanChange = (event) => {
    const { value } = event.target;
    setSelectedPlan(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle recharge
    SetSuccessMessage(true);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 mt-10 rounded-lg box-shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Recharge Service</h2>
      <p className="text-gray-700 mb-4">
        Welcome to our recharge service. Here you can recharge your mobile
        phones or other services conveniently.
      </p>
      {!successMessage ? (
        <form className="mb-4 text-black" onSubmit={handleSubmit}>
          <div className="relative flex items-center">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-300" />
            </span>
            <input
              type="tel"
              value={mobileNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md mb-3 "
            />
            <FaBook className="absolute right-0 z-50 text-gray-300" />
            {error && (
              <p className="text-red-500 text-sm absolute mt-2">{error}</p>
            )}
          </div>

          <select
            value={operator}
            onChange={handleOperatorChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          >
            <option value="">Select operator</option>
            {serviceProviders.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>

          <select
            value={selectedPlan}
            onChange={handlePlanChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          >
            <option value="">Select plan</option>
            {plans[operator] &&
              plans[operator].map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Recharge Now
          </button>
        </form>
      ) : (
        <div className="text-green-500 text-center mt-3">
          Recharge successful!
          <button
            className="bg-blue-gradient text-white font-bold py-2 px-4 rounded"
            onClick={() => SetSuccessMessage(false)}
          >
            Recharge
          </button>
        </div>
      )}
    </div>
  );
};
