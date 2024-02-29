import React, { useState } from 'react';

export const LoanRepaymentCalculator = () => {
  // State for tracking loan details
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Function to calculate monthly payment
  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;

    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="p-4  rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">Loan Repayment Calculator</h2>
      <div className="mb-4">
        <label htmlFor="principal" className="block text-gray-600">Principal amount:</label>
        <input
          type="number"
          id="principal"
          className="w-full border-gray-300 rounded-md px-3 py-2"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="interestRate" className="block text-gray-600">Annual interest rate (%):</label>
        <input
          type="number"
          id="interestRate"
          className="w-full border-gray-300 rounded-md px-3 py-2"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="term" className="block text-gray-600">Loan term (years):</label>
        <input
          type="number"
          id="term"
          className="w-full border-gray-300 rounded-md px-3 py-2"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <button
        onClick={calculateMonthlyPayment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Calculate Monthly Payment
      </button>
      {monthlyPayment !== 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">Monthly Payment:</h3>
          <p className="text-xl text-green-600">₹{monthlyPayment}</p>
        </div>
      )}
    </div>
  );
};
