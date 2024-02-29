import React, { useState } from 'react';

export const SIPCalculator = () => {
  // State for form inputs and results
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualInterestRate, setAnnualInterestRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  // Function to handle form submission and calculate future value
  const handleSubmit = (e) => {
    e.preventDefault();
    const monthlyAmount = parseFloat(monthlyInvestment);
    const interestRate = parseFloat(annualInterestRate) / 12 / 100; // Monthly interest rate
    const months = parseInt(investmentPeriod) * 12; // Total months of investment

    // Calculate future value using SIP formula
    const futureVal = monthlyAmount * ((Math.pow(1 + interestRate, months) - 1) / interestRate) * (1 + interestRate);
    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <div className="p-4  rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">SIP Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="monthlyInvestment" className="block text-gray-600">Monthly Investment:</label>
          <input
            type="number"
            id="monthlyInvestment"
            className="w-full border-gray-300 rounded-md px-3 py-2"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="annualInterestRate" className="block text-gray-600">Annual Interest Rate (%):</label>
          <input
            type="number"
            id="annualInterestRate"
            className="w-full border-gray-300 rounded-md px-3 py-2"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="investmentPeriod" className="block text-gray-600">Investment Period (years):</label>
          <input
            type="number"
            id="investmentPeriod"
            className="w-full border-gray-300 rounded-md px-3 py-2"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Calculate
        </button>
      </form>
      {futureValue && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Future Value:</h3>
          <p className="text-xl">{`$${futureValue}`}</p>
        </div>
      )}
    </div>
  );
};

