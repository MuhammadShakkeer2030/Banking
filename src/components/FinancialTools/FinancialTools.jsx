import React from "react";
import {LoanRepaymentCalculator,BudgetCalculator} from '../../paths'
const FinancialTools = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8 text-white">Financial Tools</h1>
      <div className="flex">
        <LoanRepaymentCalculator/>
        <BudgetCalculator />
      </div>
    </div>
  );
};

export default FinancialTools;
