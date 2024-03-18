import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const ServiceComponent = ({
  serviceName,
  serviceIcon,
  // serviceProviders,
  // plans,
}) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showPaymentBox, setShowPaymentBox] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const serviceProviders = ["AT&T", "Verizon", "T-Mobile", "Sprint"];
  const plans = {
    "AT&T": ["Plan A", "Plan B", "Plan C"],
    Verizon: ["Plan X", "Plan Y", "Plan Z"],
    "T-Mobile": ["Plan P", "Plan Q", "Plan R"],
    Sprint: ["Plan M", "Plan N", "Plan O"],
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMobileNumber(value);
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

  const handleContinue = (e) => {
    e.preventDefault();
    setShowPaymentBox(true);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    // Add logic to handle payment
    alert(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <div className="w-full max-w-md mx-auto xl:p-8 xl:mt-10 rounded-lg box-shadow text-center">
      <h2 className="text-2xl font-bold mb-4">{serviceName}</h2>
      <form className="mb-4 text-black" onSubmit={handleContinue}>
        <div className="relative flex items-center xl:mb-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-300" />
          </span>
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md mb-3"
          />
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
          Continue
        </button>
      </form>

      {showPaymentBox && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md mb-3"
          >
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>

          <button
            onClick={handleProceed}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};
