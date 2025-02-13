import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/src/Redux/hooks";

// TypeScript : Type pour un plan
interface Plan {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: boolean;
}

// Données des plans
const plans: Plan[] = [
  {
    title: "Free",
    price: "$0",
    frequency: "/monthly",
    features: [
      "Limited surveys & respondents",
      "Basic question types",
      "Email verification",
      "Basic security features",
      "Limited reporting (Excel, CSV)",
    ],
  },
  {
    title: "Basic",
    price: "$49",
    frequency: "/monthly",
    popular: true,
    features: [
      "Unlimited surveys & respondents",
      "Advanced question types and logic",
      "Email/SMS campaigns",
      "A/B testing",
      "Social media links, custom email templates",
      "Enhanced reporting (Bar/Pie Charts, Cross-tab, Excel export)",
    ],
  },
  {
    title: "Advanced",
    price: "$99",
    frequency: "/monthly",
    features: [
      "Full survey logic",
      "AI-generated questions",
      "Conversational questions",
      "Full reporting suite",
      "Multi-language (2 languages)",
      "SMS/Email with A/B testing",
      "TURF & NPS analysis",
    ],
  },
  {
    title: "Premium",
    price: "$199",
    frequency: "/monthly",
    features: [
      "All features unlocked",
      "Unlimited users & languages",
      "Advanced integrations",
      "Dynamic real-time reporting",
      "Role-based access control",
      "Full API access",
      "GDPR compliance",
    ],
  },
];

// Stripe initialisation
const stripePromise = loadStripe(
  "pk_test_51Mr6FuBX82yYbD23by3O6UsbmgcUWMG10w5HrBrTJgtJkTqvA6tNY4Yu0eXeQ7ZQUw9EsxBgIIpqhSbNlOLv8XwJ00WZqM36Qo"
);

// Composant Pricing
const Pricing: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  const icons = {
    Free: "🎁",
    Basic: "🔥",
    Advanced: "🚀",
    Premium: "👑",
  };
  return (
    <div className="py-10 bg-gradient-to-b from-blue-50 to-white">
      <div className="mb-10 text-center">
        <h1 className="mb-6 text-5xl font-bold text-customGray font-poppins">
          Choose your right plan!
        </h1>
        <p className="font-medium text-gray-600 font-poppins">
          Choose the perfect plan for your needs. All plans include a{" "}
          <span className="px-3 py-1 ml-1 font-semibold text-blue-500 bg-blue-100 rounded-md">
            14-day free trial
          </span>
        </p>
      </div>

      <Elements stripe={stripePromise}>
        {/* Grille des plans */}
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-b from-blue-50 to-white">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-lg p-6 shadow-md bg-white flex flex-col justify-between h-full ${
                plan.popular ? "border-blue-500" : "border-gray-200"
              }`}
            >
              {/* Badge uniquement pour les plans populaires */}
              {plan.popular && (
                <span className="absolute top-2 right-2 px-3 py-1 text-sm font-semibold text-[#EE1D52] bg-[#FFE6E2] rounded-md shadow-sm">
                  Most popular
                </span>
              )}

              {/* Titre du plan */}
              <h2 className="flex items-center gap-2 text-2xl font-bold text-left font-poppins">
                <span className="text-3xl">{icons[plan.title]}</span>
                <span
                  className={
                    plan.title === "Premium"
                      ? "premium-title"
                      : "text-customGray"
                  }
                >
                  {plan.title}
                </span>
              </h2>

              {/* Prix et fréquence */}
              <div className="mt-4 text-left">
                <span className="text-4xl font-extrabold font-poppins text-customGray">
                  {plan.price}
                </span>
                <span className="text-xl font-normal font-poppins text-customGray">
                  {" "}
                  {plan.frequency}
                </span>
              </div>

              {/* Fonctionnalités */}
              <div className="flex-grow mt-4 text-left">
                <h3 className="font-bold font-poppins text-customGray">
                  What's included
                </h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center font-poppins">
                      <span className="flex items-center justify-center w-4 h-4 mr-2 text-white bg-[#3068FF] rounded-full">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lien vers la souscription (sauf pour Free) */}
              {plan.title !== "Free" && (
                <div className="mt-6">
                  <Link
                    to={`/subscribe/${plan.title}`}
                    className="w-full inline-block px-4 py-2 text-center text-white bg-[#3068FF] rounded-lg hover:bg-blue-600 font-poppins font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </Elements>
      <div className="px-4 mt-12 md:px-20">
        <h2 className="mb-6 text-4xl font-bold text-center text-customGray font-poppins">
          Compare Plan Features
        </h2>
        <div className="overflow-auto">
          <table className="w-full text-left border border-collapse border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border text-customGray font-poppins">
                  Features
                </th>
                <th className="p-4 border text-customGray font-poppins">
                  Free
                </th>
                <th className="p-4 border text-customGray font-poppins">
                  Basic
                </th>
                <th className="p-4 border text-customGray font-poppins">
                  Advanced
                </th>
                <th className="p-4 border text-customGray font-poppins">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200 font-poppins">
                  Survey Creation
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Basic
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Advanced
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Full Logic
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Enterprise
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-poppins">
                  Response Limit
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  100/mo
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Unlimited
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Unlimited
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Unlimited
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-poppins">
                  Question Types
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Basic
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Advanced
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  All Types
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Custom Types
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-poppins">
                  AI Features
                </td>
                <td className="p-3 border border-gray-200 font-poppins">—</td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Basic
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Advanced
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Enterprise
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200 font-poppins">
                  Analytics
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Basic
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Enhanced
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Advanced
                </td>
                <td className="p-3 border border-gray-200 font-poppins">
                  Custom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Composant Subscribe

// Export par défaut
export default Pricing;
