"use client";
import CustomInput from "@/components/CustomInput";
import LimeButton from "@/components/LimeButton";
import React, { useState } from "react";

const PenaltyCalculator: React.FC = () => {
  const [bankName, setBankName] = useState<string>("");
  const [requiredMAB, setRequiredMAB] = useState<string>("");
  const [accountBalance, setAccountBalance] = useState<string>("");
  const [shortfallAmount, setShortfallAmount] = useState<string>("");
  const [serviceTaxPercentage, setServiceTaxPercentage] = useState<string>("");
  const [penaltyAmount, setPenaltyAmount] = useState<number | null>(null);
  const [radio, setRadio] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    maxLength: number
  ) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setState(inputValue);
      if (setState === setAccountBalance) {
        calculateShortfallAmount(inputValue);
      }
    }
  };

  const calculateShortfallAmount = (accountBalance: string) => {
    const requiredMABFloat: number = parseFloat(requiredMAB);
    const accountBalanceFloat: number = parseFloat(accountBalance);
    const shortfall: number = requiredMABFloat - accountBalanceFloat;
    setShortfallAmount(shortfall.toFixed(2)); // Round to 2 decimal places
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);

    if (e.target.value === "savings") {
      setServiceTaxPercentage("6");
    } else if (e.target.value === "current") {
      setServiceTaxPercentage("7");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const shortfallAmountFloat: number = parseFloat(shortfallAmount);
    const serviceTaxPercentageFloat: number = parseFloat(serviceTaxPercentage);

    // Calculate penalty amount
    const penalty: number = Math.min(
      shortfallAmountFloat * (serviceTaxPercentageFloat / 100),
      500
    );
    setPenaltyAmount(penalty);
    setRequiredMAB("");
    setAccountBalance("");
    setShortfallAmount("");
    setBankName("");
    setServiceTaxPercentage("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 md:divide-x-2 ml-4 mr-4">
      <div className="container mx-auto mt-8 lg:mt-0 lg:ml-40">
        <h2 className="text-2xl font-bold mb-4 text-lime-500">
          Penalty Calculator
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <CustomInput
            label="Bank Name:"
            htmlFor="bankName"
            id="bankName"
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            maxLength={50}
            min={0}
          />
          <CustomInput
            label="Required MAB:"
            htmlFor="requiredMAB"
            id="requiredMAB"
            type="number"
            value={requiredMAB}
            onChange={(e) => handleChange(e, setRequiredMAB, 5)}
            maxLength={5}
            min={0}
           
          />
          <CustomInput
            label="Account Balance:"
            htmlFor="accountBalance"
            id="accountBalance"
            type="number"
            value={accountBalance}
            onChange={(e) => handleChange(e, setAccountBalance, 7)}
            maxLength={7}
            min={0}
          />
          <div className="mb-4">
            <label
              htmlFor="radio"
              className="block text-lime-500 font-bold mb-2"
            >
              Select Account Type:
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  value="savings"
                  checked={radio === "savings"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Savings Account</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  value="current"
                  checked={radio === "current"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Current Account</span>
              </label>
            </div>
          </div>
          <CustomInput
            label="Shortfall Amount:"
            htmlFor="shortfallAmount"
            id="shortfallAmount"
            type="number"
            value={shortfallAmount}
            onChange={(e) => {
              handleChange(e, setShortfallAmount, 5);
              calculateShortfallAmount(e.target.value);
            }}
            maxLength={5}
            min={0}
          />
          <CustomInput
            label="Service Tax Percentage:"
            htmlFor="serviceTaxPercentage"
            id="serviceTaxPercentage"
            type="number"
            value={serviceTaxPercentage}
            onChange={(e) => setServiceTaxPercentage(e.target.value)}
            maxLength={2}
            min={0}
          />
          <LimeButton name="Calculate Penalty" type="submit" />
        </form>
        {penaltyAmount !== null && (
          <div className="mt-2">
            <h3 className="text-xl font-semibold">Penalty Amount:</h3>
            <p className="text-lg inline-block relative overflow-hidden bg-gradient-to-r from-yellow-400 to-green-500 text-black font-extrabold px-4 py-2">
              Rs. {penaltyAmount}
            </p>
          </div>
        )}
      </div>
      <div className="mt-8 lg:p-10 ">
        <p className="text-lime-500 font-bold">On this page</p>
        <ol className="list-disc pl-5 text-black">
          <li>The project is in its initial stage</li>
          <li>This small initiative represents a real-world scenario</li>
          <li>I want to solve a real-world problem</li>
        </ol>
      </div>
    </div>
  );
};

export default PenaltyCalculator;
