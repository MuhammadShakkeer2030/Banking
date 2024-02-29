import React, { useState } from "react";
import { FaGasPump } from "react-icons/fa";

export const GasCylinderService = () => {
  // Sample gas cylinder providers array
  const providers = ["Provider X", "Provider Y", "Provider Z"];

  // Sample cylinder sizes array
  const sizes = ["Size A", "Size B", "Size C"];

  // State variables to store selected values
  const [provider, setProvider] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment logic here
    console.log("Payment submitted");
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-md bg-gray-gradient hover:bg-black-gradient transition duration-300 ease-in-out transform text-black">
      <FaGasPump className="text-3xl text-white" />
      <div>
        <h2 className="text-lg font-semibold text-white">
          Recharge Gas Cylinder
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Gas cylinder provider selection */}
          <div className="mb-4">
            <label
              htmlFor="provider"
              className="block text-gray-300 text-sm mb-2"
            >
              Select Gas Cylinder Provider
            </label>
            <select
              id="provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="form-select"
            >
              <option value="">Select Provider</option>
              {providers.map((prov, index) => (
                <option key={index} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          {/* Customer ID input */}
          <div className="mb-4">
            <label
              htmlFor="customerID"
              className="block text-gray-300 text-sm mb-2"
            >
              Enter Customer ID
            </label>
            <input
              type="text"
              id="customerID"
              value={customerID}
              onChange={(e) => setCustomerID(e.target.value)}
              className="form-input"
              placeholder="Customer ID"
            />
          </div>
          {/* Cylinder size selection */}
          <div className="mb-4">
            <label htmlFor="size" className="block text-gray-300 text-sm mb-2">
              Select Cylinder Size
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="form-select"
            >
              <option value="">Select Size</option>
              {sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
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
