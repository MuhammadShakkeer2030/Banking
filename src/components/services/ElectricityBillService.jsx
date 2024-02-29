import React, { useState } from "react";

export const ElectricityBillService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [providers, setProviders] = useState([]);
  const [consumerNumber, setConsumerNumber] = useState("");
  const [dueAmount, setDueAmount] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const inputBoxStyle = `px-4 py-2 rounded-md`;

  // Function to simulate fetching providers based on search query
  const handleSearch = () => {
    // Simulate fetching providers based on search query (replace with actual API call)
    // Example: fetchProviders(searchQuery).then(providers => setProviders(providers));
    const providers = [
      { name: "KSEB", state: "Kerala" },
      { name: "TNEB", state: "Tamil Nadu" },
      { name: "MSEB", state: "Maharashtra" },
    ];
    setProviders(providers);
  };

  // Function to simulate submitting payment
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate submitting payment (replace with actual payment processing logic)
    // Example: submitPayment(accountNumber, consumerNumber).then(response => handlePaymentResponse(response));
    const randomAmount = Math.floor(Math.random() * 1000);
    setDueAmount(randomAmount);
    setPaymentStatus(Math.random() >= 0.5 ? "success" : "fail");
  };

  return (
    <div className="p-8 box-shadow rounded-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Pay Electricity Bill
      </h2>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4">
          <label
            htmlFor="searchQuery"
            className="block text-gray-700 font-medium mb-2"
          >
            Search by Biller Name or State
          </label>
          <input
            type="text"
            id="searchQuery"
            className={`form-input ${inputBoxStyle}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <button
            type="button"
            className="btn bg-blue-gradient mt-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {providers.length > 0 && (
          <div className="mb-4">
            <label
              htmlFor="provider"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Provider
            </label>
            <select id="provider" className={`form-select ${inputBoxStyle}`}>
              {providers.map((provider, index) => (
                <option key={index} value={provider.name}>
                  {provider.name} - {provider.state}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="consumerNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Consumer Number
          </label>
          <input
            type="text"
            id="consumerNumber"
            className={`form-input ${inputBoxStyle}`}
            value={consumerNumber}
            onChange={(e) => setConsumerNumber(e.target.value)}
          />
        </div>
        {dueAmount !== null && (
          <div className="mb-4">
            <p className="text-gray-700">Due Amount: {dueAmount} INR</p>
          </div>
        )}
        <button type="submit" className="btn bg-blue-gradient">
          Pay Now
        </button>
      </form>
      {paymentStatus && (
        <div
          className={`mt-4 ${
            paymentStatus === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {paymentStatus === "success"
            ? "Payment successful!"
            : "Payment failed. Please try again."}
        </div>
      )}
    </div>
  );
};
