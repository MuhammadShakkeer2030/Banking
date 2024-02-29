import React, { useState } from 'react';

export const BudgetCalculator = () => {
  // State for tracking budget values
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [budget, setBudget] = useState(0);

  // Function to calculate budget
  const calculateBudget = () => {
    const totalIncome = parseFloat(income);
    const totalExpenses = parseFloat(expenses);
    const totalSavings = parseFloat(savings);

    const totalBudget = totalIncome - (totalExpenses + totalSavings);
    setBudget(totalBudget);
  };

  return (
    <div className="p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">Budget Calculator</h2>
      <div className="mb-4">
        <label htmlFor="income" className="block text-gray-600">Income:</label>
        <input
          type="number"
          id="income"
          className="appearance-none w-full border-gray-300 rounded-md px-3 py-2"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expenses" className="block text-gray-600">Expenses:</label>
        <input
          type="number"
          id="expenses"
          className="w-full border-gray-300 rounded-md px-3 py-2"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="savings" className="block text-gray-600">Savings:</label>
        <input
          type="number"
          id="savings"
          className="w-full border-gray-300 rounded-md px-3 py-2"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
        />
      </div>
      <button
        onClick={calculateBudget}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Calculate Budget
      </button>
      {budget !== 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">Budget:</h3>
          <p className={`text-xl ${budget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {budget >= 0 ? `₹${budget.toFixed(2)}` : `-₹${Math.abs(budget).toFixed(2)}`}
          </p>
        </div>
      )}
    </div>
  );
};
