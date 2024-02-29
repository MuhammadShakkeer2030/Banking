import React from "react";
import {
  LoanRepaymentCalculator,
  BudgetCalculator,
  SIPCalculator,
} from "../../paths";
const FinancialTools = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-8 text-white">Financial Tools</h1>
      <div className="flex flex-col xl:flex-row">
        <LoanRepaymentCalculator />
        <BudgetCalculator />
        <SIPCalculator />
      </div>
    </div>
  );
};

export default FinancialTools;
