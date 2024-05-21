"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { MdLightbulbOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Redirect to the penalty page within a timeout
    setTimeout(() => {
      router.push("/penalty");
    }, 500);
  };

  return (
    <div className="flex flex-col p-2 items-center gap-14 min-h-screen">
      <div className="md:text-lg lg:text-xl">
        <Marquee style={{ color: "black", fontWeight: "bold" }}>
          **you can choose MAB from your choice of any bank**
        </Marquee>
      </div>

      <div
        className={`transition ease-in-out duration-300 font-bold font-sans text-white p-2 rounded ${
          isClicked ? "bg-purple-500 translate-y-1 scale-110" : "bg-indigo-500"
        }`}
      >
        <button onClick={handleClick}>
          {isClicked
            ? "Redirecting..."
            : "Click now to know your N-MAB Penalty!"}
        </button>
      </div>

      <div className="bg-emerald-950 flex flex-col p-6 rounded-lg items-center justify-center pb-20 border-l-8 border-lime-500">
        <div className="flex items-center mb-4">
          <MdLightbulbOutline size={30} />
          <h2 className="text-green-300 text-2xl font-bold uppercase">TIP</h2>
        </div>
        <div className="text-white">
          <ul>
            <li className="mb-4">
              <span className="text-green-300 font-bold underline">
                Minimum Balance Requirement:
              </span>{" "}
              Banks set a minimum balance for accounts. This varies based on the
              account type and bank policy.
            </li>
            <li className="mb-4 ">
              <span className="text-green-300 font-bold underline">
                Penalty Calculation:
              </span>{" "}
              NMAB penalties are levied if the average balance falls below the
              required threshold over a specified period.
            </li>
            <li className="mb-4">
              <span className="text-green-300 font-bold underline">
                Penalty Charges:
              </span>{" "}
              Banks impose fees for non-maintenance, ranging from fixed amounts
              to a percentage of the shortfall.
            </li>
            <li className="mb-4">
              <span className="text-green-300 font-bold underline">
                Mitigation Strategies:
              </span>{" "}
              Monitor balances regularly, explore account options, and consider
              services that waive penalties.
            </li>
          </ul>
          <p className="text-base">
            Conclusion: Understanding NMAB penalties helps manage finances
            effectively, avoiding unnecessary charges and maintaining a healthy
            banking relationship.
          </p>
        </div>
      </div>
    </div>
  );
}
