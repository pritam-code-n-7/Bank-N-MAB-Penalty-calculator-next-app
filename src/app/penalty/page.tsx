"use client";
import React, { useState } from "react";

const PenaltyCalculator: React.FC = () => {
  //create a state
  const [isLoading, setIsLoading] = useState(false);
  //create a normal function to handle the click event
  function Loading() {
    setIsLoading(true);
  }
  //set a time duration for processing
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
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
    <div className="flex flex-col lg:flex-row gap-2 divide-x-2 ml-4">
      <div className="container mx-auto mt-8 lg:mt-0 lg:ml-40">
        <h2 className="text-2xl font-bold mb-4 text-lime-500">
          Penalty Calculator
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="bankName" className="block text-white">
              Bank Name:
            </label>
            <input
              id="bankName"
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="rounded-md border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-2  bg-neutral-950 text-white"
              maxLength={50}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="requiredMAB" className="block text-white">
              Required MAB:
            </label>
            <input
              id="requiredMAB"
              type="number"
              value={requiredMAB}
              onChange={(e) => handleChange(e, setRequiredMAB, 5)}
              className="rounded-md border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-2  bg-neutral-950 text-white"
              required
              maxLength={5}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountBalance" className="block text-white">
              Account Balance:
            </label>
            <input
              id="accountBalance"
              type="number"
              value={accountBalance}
              onChange={(e) => handleChange(e, setAccountBalance, 7)}
              className="rounded-md border border-neutral-500  w-full relative z-10  mt-2 bg-neutral-950 text-white focus:ring-2 focus:ring-teal-500"
              required
              maxLength={7}
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="shortfallAmount" className="block text-white">
              Shortfall Amount:
            </label>
            <input
              id="shortfallAmount"
              type="number"
              value={shortfallAmount}
              onChange={(e) => {
                handleChange(e, setShortfallAmount, 5);
                calculateShortfallAmount(e.target.value);
              }}
              className="rounded-md border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-2  bg-neutral-950 text-white"
              required
              maxLength={5}
              readOnly // Make it read-only so that the user cannot edit
            />
          </div>
          <div className="mb-4">
            <label htmlFor="serviceTaxPercentage" className="block text-white">
              Service Tax Percentage:
            </label>
            <input
              id="serviceTaxPercentage"
              type="number"
              value={serviceTaxPercentage}
              onChange={(e) => setServiceTaxPercentage(e.target.value)}
              className="rounded-md border border-neutral-500 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-2  bg-neutral-950 text-white"
              required
              maxLength={2}
              readOnly // Make it read-only so that the user cannot edit
            />
          </div>
          <button
            onClick={Loading}
            type="submit"
            className="bg-lime-500 p-2 rounded flex "
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Calculating Penalty...
              </>
            ) : (
              "Calculate Penalty"
            )}
          </button>
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
        <p className="text-purple-600 font-bold">On this page</p>
        <ol className="list-disc pl-5 text-[#E3E3E3]">
          <li>The project is in its initial stage</li>
          <li>This small initiative represents a real-world scenario</li>
          <li>I want to solve a real-world problem</li>
        </ol>
      </div>
    </div>
  );
};

export default PenaltyCalculator;
