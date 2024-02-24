import React from "react";

export const ElectricityBillService = () => {
  // Functionality for the electricity bill service form
  return (
    <div className="p-8  box-shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pay Electricity Bill</h2>
      {/* Form elements for bill payment */}
      <form>
        <div className="mb-4">
          <label htmlFor="accountNumber" className="block text-gray-700 font-medium mb-2">Account Number</label>
          <input type="text" id="accountNumber" name="accountNumber" className="form-input" />
        </div>
        {/* Additional form fields */}
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
};
