import React from "react";
import { plans } from "./pricingData"; // Adjust the path as needed
import { Plan } from "./pricingData";

const PricingTier: React.FC = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-customGray font-poppins">Choos your right plan!</h1>
        <p className="text-gray-600">
          Choose the perfect plan for your needs. All plans include a{" "}
          <span className="font-semibold">14-day free trial</span>.
        </p>
      </div>
      <div className="grid gap-6 px-4 md:grid-cols-4 md:px-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 text-center shadow-sm ${
              plan.popular ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-white bg-blue-500 rounded-full">
                Most popular
              </span>
            )}
            <h2 className="text-2xl font-bold">{plan.title}</h2>
            <div className="mt-4 text-4xl font-extrabold">
              {plan.price}
              <span className="text-xl font-normal">{plan.frequency}</span>
            </div>
            <ul className="mt-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-start">
                  <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs text-white bg-blue-500 rounded-full">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTier;
