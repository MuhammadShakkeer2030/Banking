import React from "react";

// Define RechargeService as a named export
export const RechargeService = () => {
  // Define component functionalities here if needed

  return (
    <div className="w-full max-w-md mx-auto p-8 mt-10 rounded-lg box-shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Recharge Service</h2>
      <p className="text-gray-700 mb-4">
        Welcome to our recharge service. Here you can recharge your mobile
        phones or other services conveniently.
      </p>
      <form className="mb-4">
        {/* Add form elements for recharge functionality */}
        {/* For example: */}
        <input
          type="text"
          placeholder="Enter mobile number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="text"
          placeholder="Select operator"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
        />
        <input
          type="text"
          placeholder="Select plan"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Recharge Now
        </button>
      </form>
    </div>
  );
};
