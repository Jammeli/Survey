import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { store } from "../../src/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setPlan } from "../../src/Redux/Slices/authSlice";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51Mr6FuBX82yYbD23by3O6UsbmgcUWMG10w5HrBrTJgtJkTqvA6tNY4Yu0eXeQ7ZQUw9EsxBgIIpqhSbNlOLv8XwJ00WZqM36Qo"
);

const plans = [
  {
    title: "Free",
    price: "$0",
    yearlyPrice: "$0",
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
    yearlyPrice: "$529",
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
    yearlyPrice: "$1069",
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
    yearlyPrice: "$2149",
    features: [
      "All features unlocked",
      "Unlimited users & languages",
      "Advanced integrations",
      "Dynamic real-time reporting",
      "Role-based access control",
      "Full API access",
      "GDPR compliance",
    ],
    premium: true,
    popular: true,
  },
];

const Pricing = () => {
  const dispatch = useDispatch();
  const userPlan = useSelector((state) => state.auth.user.plan);
  const userId = useSelector((state) => state.auth.user.id_user);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/user/plan/${userId}`
        );
        dispatch(setPlan(data.plan));
        setEndDate(new Date(data.endDate).toLocaleDateString("fr-FR"));
        console.log(userPlan); // ✅ Met à jour Redux avec le plan actif
      } catch (error) {
        console.error("Erreur lors de la récupération du plan :", error);
      }
    };

    if (userId) fetchUserPlan();
  }, [userId, dispatch]);

  return (
    <div className="">
      <div className="relative flex flex-col items-center w-full pt-20 pb-12 overflow-hidden bg-white">
        {/* Background avec image */}
        <div
          className="absolute top-0 left-0 w-full h-[300px] bg-cover bg-center"
          style={{ backgroundImage: "url('/src/images/head.jpg')" }}
        ></div>

        {/* Titre principal immédiatement après la navbar */}
        <h1 className="relative z-10 text-5xl font-bold text-center text-white font-blmelody">
          Create unlimited forms at no cost
        </h1>

        {/* Bloc du pricing monté plus haut */}
        <div className="relative flex flex-col items-start max-w-4xl gap-12 p-10 mx-auto mt-6  bg-[#ECECEC] md:flex-row rounded-3xl z-10">
          {/* Colonne gauche : Avantages */}
          <div className="flex-1 space-y-5 text-left">
            <h2 className="text-lg font-bold text-customGray font-blmelody">
              What’s included
            </h2>
            <ul className="space-y-4 text-gray-700 font-blmelody">
              {[
                "Limited surveys and respondents",
                "Basic question types",
                "Email verification",
                "Basic security features",
                "Limited reporting (Excel, CSV)",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne droite : Prix aligné avec "What’s included" */}
          <div className="flex flex-col items-end flex-1 space-y-4">
            <div className="flex items-center justify-end w-full space-x-3">
              <div className="relative p-3 bg-gray-200 rounded-xl">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-[#D0BFFF] rounded-full"></div>
                </div>
              </div>
              <h2 className="text-xl font-extrabold text-customGray font-blmelody">
                Always, free
              </h2>
            </div>

            <div className="flex items-baseline justify-end w-full space-x-2 font-poppins">
              <p className="text-5xl font-black leading-tight text-customGray">
                $0
              </p>
              <p className="text-lg text-customGray font-blmelody">/monthly</p>
            </div>
          </div>

          {/* Bouton Call-to-Action */}
          <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2">
            <button className="py-3 font-bold text-white transition bg-blue-600 shadow-md rounded-xl px-7 hover:bg-blue-700 font-blmelody">
              Get started
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 text-center">
        <p className="mt-6 mb-6 text-lg text-center text-gray-600 font-blmelody">
          Explore premium features
        </p>
        <div className="flex items-center justify-center w-full py-4">
          <div className="relative w-full overflow-hidden max-w-7xl">
            <div className="flex gap-4 animate-marquee">
              {/* Utilisation des nouvelles images */}
              {[
                "/src/images/1.png",
                "/src/images/2.png",
                "/src/images/3.png",
                "/src/images/4.png",
                "/src/images/5.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-24"
                />
              ))}
            </div>

            <style>
              {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: marquee 10s linear infinite;
          will-change: transform;
        }
      `}
            </style>
          </div>
        </div>

        <div className="inline-block px-4 py-2 text-sm font-semibold text-[#3D3B3B] bg-[#DAD4FF] rounded-full mb-4 mt-6 font-blmelody">
          Plans & Pricing
        </div>
        <h1 className="text-5xl font-black from-neutral-950 font-blmelody">
          Unlimited users, just one fixed cost
        </h1>
        <p className="text-lg text-[#3D3B3B] mt-4 font-blmelody">
          Start free and upgrade based on your needs. Pay monthly or save with
          an annual plan.
        </p>

        <div className="flex justify-center p-1 mx-auto mt-6 bg-white border border-gray-300 rounded-full shadow-md w-fit font-blmelody">
          <button
            className={`px-6 py-2 rounded-full text-gray-700 font-bold ${
              billingCycle === "monthly" ? "bg-gray-200" : "bg-transparent"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Pay monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-gray-700 font-bold ${
              billingCycle === "yearly" ? "bg-[#B0C5FF]" : "bg-transparent"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Pay yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl font-blmelody">
        {plans.map((plan, index) => {
          const isCurrentPlan = plan.title === userPlan;

          return (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl p-8 flex flex-col h-full justify-between 
                ${
                  isCurrentPlan
                    ? "border-4 border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200"
                }
               
                ${plan.premium ? "bg-cover bg-center" : "bg-white"}
              `}
              style={{
                backgroundImage: plan.premium
                  ? "url('/src/images/bg.png')"
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Badge "Current Plan" */}
              {isCurrentPlan && (
                <div className="absolute flex flex-col items-end top-2 right-2">
                  <div className="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-full">
                    Current Plan
                  </div>
                  {endDate && (
                    <div className="px-1 py-1 mt-1 text-xs font-thin text-white bg-gray-700 rounded-full">

                      {endDate}
                    </div>
                  )}
                </div>
              )}

              {/* Titre du plan */}
              <h2 className="text-2xl font-bold text-gray-800">{plan.title}</h2>

              {/* Prix */}
              <div className="flex items-baseline mt-4 text-gray-800">
                <span className="text-4xl font-bold">
                  {billingCycle === "monthly" ? plan.price : plan.yearlyPrice}
                </span>
                <span className="ml-1 text-lg">
                  {billingCycle === "monthly" ? "/month" : "/year"}
                </span>
              </div>

              {/* Liste des fonctionnalités */}
              <ul className="mt-6 space-y-3 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-lg">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bouton */}
              {!isCurrentPlan ? (
                <Link to={`/subscribe/${plan.title}`}>
                  <button className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-xl hover:bg-blue-700">
                    Get Started
                  </button>
                </Link>
              ) : (
                <button
                  className="w-full px-4 py-2 mt-6 text-white bg-gray-400 cursor-not-allowed rounded-xl"
                  disabled
                >
                  {isCurrentPlan ? "Current Plan" : "Not Available"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Tableau de comparaison des plans */}

      <div className="px-6 mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-5 gap-6 pb-4 border-b border-gray-300 font-blmelody">
          {/* Colonne de gauche */}
          <h2 className="col-span-1 font-bold text-customGray text-1xl">
            Explore all features <br /> and compare pricing <br /> plans
          </h2>

          {/* Titres des colonnes des plans */}
          <div className="grid grid-cols-4 col-span-4 gap-6 text-customGray">
            {[
              { title: "Free", desc: "For individuals who need basic forms." },
              {
                title: "Basic",
                desc: "The basics to create any form with Survey.",
              },
              {
                title: "Advanced",
                desc: "Make your forms on-brand and unlock powerful features.",
              },
              {
                title: "Premium",
                desc: "Analyze performance and scale your data intake.",
              },
            ].map((plan, index) => (
              <div key={index} className="text-left">
                <h3 className="text-lg font-bold">{plan.title}</h3>
                <p className="text-sm text-gray-500">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tableau des fonctionnalités */}
        <div className="overflow-x-auto font-blmelody">
          <table className="w-full border-collapse">
            <tbody className="text-gray-700">
              {[
                [
                  "Survey Creation",
                  "Basic",
                  "Advanced",
                  "Full Logic",
                  "Enterprise",
                ],
                [
                  "Response Limit",
                  "100/mo",
                  "Unlimited",
                  "Unlimited",
                  "Unlimited",
                ],
                [
                  "Question Types",
                  "Basic",
                  "Advanced",
                  "All Types",
                  "Custom Types",
                ],
                ["AI Features", "—", "Basic", "Advanced", "Enterprise"],
                ["Analytics", "Basic", "Enhanced", "Advanced", "Custom"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-300">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`p-4 ${
                        j === 0 ? "font-medium text-gray-600" : "text-gray-900"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Témoignage */}

      <div className="relative max-w-4xl px-6 mx-auto mt-12 font-blmelody">
        <div className="bg-[#F6F6F6] rounded-3xl  p-10 flex items-center shadow-md relative">
          {/* Image de profil (bien positionnée à l'intérieur du box) */}

          <div className="relative left-0 flex-shrink-0">
            <img
              src="src/images/avatar.png"
              alt="User"
              className="w-32 h-32 rounded-full border-[8px] border-[#97B0F3] object-cover"
            />
          </div>

          {/* Contenu du témoignage */}
          <div className="relative flex-1 ml-8 text-gray-700">
            {/* Guillemets au début */}
            <span className="text-6xl font-bold text-gray-800 font-serif block mt-[-10px] ">
              “
            </span>

            {/* Texte du témoignage */}
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nost
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              met, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nost
            </p>

            {/* Nom et description */}
            <p className="mt-4 font-bold text-gray-900">
              met, consectetur adipiscing
            </p>
            <p className="text-sm text-gray-500">Ut enim ad minim venia</p>

            {/* Guillemets à la fin */}
            <span className="absolute font-serif text-6xl font-bold text-gray-800 bottom-4 right-4">
              ”
            </span>
          </div>
        </div>
      </div>
      {/* Section Services */}
      <div className="relative bg-[#020617] py-20 text-white overflow-hidden font-blmelody mt-12">
        {/* Icônes décoratives */}
        <div className="absolute flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-md top-10 left-10 rotate-12">
          <svg
            width="35"
            height="35"
            viewBox="0 0 56 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.5225 23.0297C43.7258 16.3695 36.8639 12.4078 30.2262 14.1984C25.5751 15.4205 22.254 19.126 21.2517 23.5031L10.6536 26.3429C9.90123 26.5566 9.01944 27.3245 8.72334 28.0685L7.35294 31.4325C6.91593 32.5526 7.31249 34.0777 8.25924 34.8149L11.1281 37.043C11.7565 37.5393 12.8959 37.7778 13.6708 37.558L15.5198 37.0626C15.9625 36.9561 16.2267 36.4986 16.1058 36.0476L14.9337 31.6731C14.7584 31.0192 15.1546 30.333 15.8085 30.1578C16.4625 29.9825 17.1486 30.3787 17.3239 31.0326L18.5021 35.4297C18.6169 35.8581 19.0743 36.1223 19.5027 36.0075L24.2749 34.7408C27.3089 38.0365 32.0461 39.5706 36.6829 38.3403C43.3349 36.5579 47.3049 29.6817 45.5225 23.0297ZM31.5389 29.7855C29.5661 28.6466 28.8894 26.1211 30.0284 24.1483C31.1674 22.1755 33.6929 21.4988 35.6657 22.6378C37.6384 23.7768 38.3151 26.3023 37.1762 28.275C36.0372 30.2478 33.5117 30.9245 31.5389 29.7855Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute flex items-center justify-center w-12 h-12 bg-green-500 rounded-md top-1/3 right-16 -rotate-12">
          <svg
            width="35"
            height="35"
            viewBox="0 0 56 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.5225 23.0297C43.7258 16.3695 36.8639 12.4078 30.2262 14.1984C25.5751 15.4205 22.254 19.126 21.2517 23.5031L10.6536 26.3429C9.90123 26.5566 9.01944 27.3245 8.72334 28.0685L7.35294 31.4325C6.91593 32.5526 7.31249 34.0777 8.25924 34.8149L11.1281 37.043C11.7565 37.5393 12.8959 37.7778 13.6708 37.558L15.5198 37.0626C15.9625 36.9561 16.2267 36.4986 16.1058 36.0476L14.9337 31.6731C14.7584 31.0192 15.1546 30.333 15.8085 30.1578C16.4625 29.9825 17.1486 30.3787 17.3239 31.0326L18.5021 35.4297C18.6169 35.8581 19.0743 36.1223 19.5027 36.0075L24.2749 34.7408C27.3089 38.0365 32.0461 39.5706 36.6829 38.3403C43.3349 36.5579 47.3049 29.6817 45.5225 23.0297ZM31.5389 29.7855C29.5661 28.6466 28.8894 26.1211 30.0284 24.1483C31.1674 22.1755 33.6929 21.4988 35.6657 22.6378C37.6384 23.7768 38.3151 26.3023 37.1762 28.275C36.0372 30.2478 33.5117 30.9245 31.5389 29.7855Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute flex items-center justify-center w-12 h-12 bg-purple-500 rounded-md bottom-12 left-1/3 rotate-6">
          <svg
            width="35"
            height="35"
            viewBox="0 0 56 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.5225 23.0297C43.7258 16.3695 36.8639 12.4078 30.2262 14.1984C25.5751 15.4205 22.254 19.126 21.2517 23.5031L10.6536 26.3429C9.90123 26.5566 9.01944 27.3245 8.72334 28.0685L7.35294 31.4325C6.91593 32.5526 7.31249 34.0777 8.25924 34.8149L11.1281 37.043C11.7565 37.5393 12.8959 37.7778 13.6708 37.558L15.5198 37.0626C15.9625 36.9561 16.2267 36.4986 16.1058 36.0476L14.9337 31.6731C14.7584 31.0192 15.1546 30.333 15.8085 30.1578C16.4625 29.9825 17.1486 30.3787 17.3239 31.0326L18.5021 35.4297C18.6169 35.8581 19.0743 36.1223 19.5027 36.0075L24.2749 34.7408C27.3089 38.0365 32.0461 39.5706 36.6829 38.3403C43.3349 36.5579 47.3049 29.6817 45.5225 23.0297ZM31.5389 29.7855C29.5661 28.6466 28.8894 26.1211 30.0284 24.1483C31.1674 22.1755 33.6929 21.4988 35.6657 22.6378C37.6384 23.7768 38.3151 26.3023 37.1762 28.275C36.0372 30.2478 33.5117 30.9245 31.5389 29.7855Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Contenu centré */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Bouton "About us" */}
          <button className="px-6 py-2 mb-6 text-sm text-white bg-[#97B0F3] rounded-full">
            About us
          </button>

          {/* Titre principal */}
          <h2 className="text-5xl font-bold">
            <span className="px-1 mr-[-0.2em] text-white bg-purple-500">
              Survey C
            </span>{" "}
            <span className="relative">ompany</span>
          </h2>

          <p className="mt-4 text-gray-400">
            For organizations with high security & complex data needs.
          </p>

          {/* Liste des services */}
          <div className="grid grid-cols-3 gap-8 mt-10">
            {[1, 2, 3].map((col, index) => (
              <ul key={index} className="space-y-4">
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3">Unlimited surveys & respondents</span>
                </li>
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3">
                    Advanced question types and logic
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3">Email/SMS campaigns</span>
                </li>
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-3">A/B testing</span>
                </li>
              </ul>
            ))}
          </div>

          {/* Bouton d'action */}
          <button className="px-6 py-2 mt-8 text-xs text-white bg-[#3068FF] rounded-lg">
            Learn more
          </button>
        </div>

        {/* Bordures décoratives */}
      </div>
      <section className="max-w-4xl py-16 mx-auto font-blmelody">
        {/* Titre */}
        <h2 className="text-5xl font-bold text-center">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Can’t find the answer you’re looking for? Ask us.
        </p>

        {/* Liste des questions */}
        <div className="mt-10 space-y-4">
          {/* Question ouverte avec contenu visible */}
          <div className="p-6 border border-gray-300 shadow-md rounded-xl">
            <button className="flex items-center justify-between w-full font-semibold">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              </span>
              <span className="flex items-center justify-center w-10 h-10 bg-black rounded-full shadow-md">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.78076 1.83789L12.3134 12.323L22.8461 1.83789"
                    stroke="white"
                    stroke-width="2.55134"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Elementum felis, sed ullamcorper
              tempus faucibus in imperdiet. Semper justo mauris sed fusce erat
              aenean tristique.
            </p>
          </div>

          {/* Questions fermées avec boutons identiques */}
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d",
          ].map((question, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white shadow-md rounded-xl"
            >
              <span className="font-semibold">{question}</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full shadow-md">
                <svg
                  width="8"
                  height="25"
                  viewBox="0 0 14 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.34619 23.0273L11.8313 12.4947L1.34619 1.96199"
                    stroke="#282828"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
