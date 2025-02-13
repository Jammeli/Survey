import React from "react";

const NewPricing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-600 to-blue-400">
      {/* Hero Section */}
      <h2 className="mb-10 text-5xl font-extrabold text-center text-white drop-shadow-lg">
        Create unlimited forms at no cost
      </h2>

      {/* Free Plan Card */}
      <div className="w-full max-w-lg p-10 text-center bg-white border border-gray-200 shadow-xl rounded-2xl">
        <div className="flex items-center justify-center mb-6 space-x-4">
          <div className="flex items-center justify-center bg-blue-200 rounded-full w-14 h-14">
            <div className="bg-blue-600 rounded-full w-7 h-7"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Always, free</h3>
        </div>

        <p className="text-6xl font-extrabold text-gray-900">
          $0<span className="text-2xl font-medium"> /monthly</span>
        </p>

        <div className="mt-8 text-left">
          <h4 className="mb-4 text-xl font-bold text-gray-800">
            What's included
          </h4>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
              <span className="mr-3 text-2xl text-blue-600">✓</span> Limited
              surveys and respondents
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl text-blue-600">✓</span> Basic
              question types
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl text-blue-600">✓</span> Email
              verification
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl text-blue-600">✓</span> Basic
              security features
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl text-blue-600">✓</span> Limited
              reporting (Excel, CSV)
            </li>
          </ul>
        </div>

        <button className="w-full px-8 py-4 mt-8 text-lg font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
          Get started
        </button>
      </div>

      {/* Logos Section */}
      <div className="mt-16 text-lg text-center text-gray-200">
        Explore premium features
      </div>
      <div className="flex mt-6 space-x-10 text-lg font-semibold text-gray-300">
        <span>blend</span>
        <span>bloomreach</span>
        <span>cameo</span>
        <span>hippo</span>
        <span>bitpanda</span>
        <span>Chargebee</span>
      </div>
    </div>
  );
};

export default NewPricing;
