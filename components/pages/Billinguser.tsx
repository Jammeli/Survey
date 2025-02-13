import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../../src/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setPlan } from "../../src/Redux/Slices/authSlice";
import axios from "axios";
const Billinguser = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const userPlan = useSelector((state) => state.auth.user.plan);
  const userId = useSelector((state) => state.auth.user.id_user);
  const [billingCycle, setBillingCycle] = useState("monthly");
  useEffect(() => {
    const fetchUserPlan = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/user/plan/${userId}`
        );
        dispatch(setPlan(data.plan));
        setSelectedPlan(data.plan);
        console.log(userPlan); // ✅ Met à jour Redux avec le plan actif
      } catch (error) {
        console.error("Erreur lors de la récupération du plan :", error);
      }
    };

    if (userId) fetchUserPlan();
  }, [userId, dispatch]);
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
        "Enhanced reporting (Bar/Pie Charts, Cross-tab)",
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
    },
  ];

  return (
    <div className="flex h-screen font-medium bg-gray-100 font-blmelody">
      {/* Sidebar */}
      <aside className="flex flex-col p-6 bg-white shadow-lg w-72">
        <button className="flex items-center p-3 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0003 20.6695C14.8103 20.6695 14.6203 20.5995 14.4703 20.4495L7.95027 13.9295C6.89027 12.8695 6.89027 11.1295 7.95027 10.0695L14.4703 3.54953C14.7603 3.25953 15.2403 3.25953 15.5303 3.54953C15.8203 3.83953 15.8203 4.31953 15.5303 4.60953L9.01027 11.1295C8.53027 11.6095 8.53027 12.3895 9.01027 12.8695L15.5303 19.3895C15.8203 19.6795 15.8203 20.1595 15.5303 20.4495C15.3803 20.5895 15.1903 20.6695 15.0003 20.6695Z"
              fill="#6B7280"
            />
          </svg>
          <span className="ml-2">Return to Dashboard</span>
        </button>

        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/team"
                className="flex items-center p-4 text-gray-600 bg-gray-100 rounded-lg hover:bg-[#E5E7EB] hover:text-[#3068FF]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.24967 1.83301C5.84801 1.83301 3.89551 3.78551 3.89551 6.18717C3.89551 8.54301 5.73801 10.4497 8.13968 10.5322C8.21301 10.523 8.28634 10.523 8.34134 10.5322C8.35968 10.5322 8.36884 10.5322 8.38717 10.5322C8.39634 10.5322 8.39634 10.5322 8.40551 10.5322C10.7522 10.4497 12.5947 8.54301 12.6038 6.18717C12.6038 3.78551 10.6513 1.83301 8.24967 1.83301Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M12.9069 12.9711C10.3494 11.2661 6.17854 11.2661 3.60271 12.9711C2.43854 13.7503 1.79688 14.8045 1.79688 15.932C1.79688 17.0595 2.43854 18.1045 3.59354 18.8745C4.87687 19.7361 6.56354 20.167 8.25021 20.167C9.93687 20.167 11.6235 19.7361 12.9069 18.8745C14.0619 18.0953 14.7035 17.0503 14.7035 15.9136C14.6944 14.7861 14.0619 13.7411 12.9069 12.9711Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M18.3246 6.72859C18.4712 8.50692 17.2062 10.0653 15.4554 10.2761C15.4462 10.2761 15.4462 10.2761 15.4371 10.2761H15.4096C15.3546 10.2761 15.2996 10.2761 15.2537 10.2944C14.3646 10.3403 13.5487 10.0561 12.9346 9.53359C13.8787 8.69025 14.4196 7.42525 14.3096 6.05025C14.2454 5.30775 13.9887 4.62942 13.6037 4.05192C13.9521 3.87775 14.3554 3.76775 14.7679 3.73109C16.5646 3.57525 18.1687 4.91359 18.3246 6.72859Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M20.1576 15.2075C20.0842 16.0967 19.5159 16.8667 18.5626 17.3892C17.6459 17.8934 16.4909 18.1317 15.3451 18.1042C16.0051 17.5084 16.3901 16.7659 16.4634 15.9775C16.5551 14.8409 16.0142 13.75 14.9326 12.8792C14.3184 12.3934 13.6034 12.0084 12.8242 11.7242C14.8501 11.1375 17.3984 11.5317 18.9659 12.7967C19.8092 13.475 20.2401 14.3275 20.1576 15.2075Z"
                    fill="#D1D5DB"
                  />
                </svg>

                <span className="ml-2 text-xs">Team members</span>
                <svg
                  className="ml-auto"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.835 21.9563C16.6133 21.9563 16.3916 21.8747 16.2166 21.6996C15.8783 21.3613 15.8783 20.8013 16.2166 20.463L22.68 13.9996L16.2166 7.53632C15.8783 7.19798 15.8783 6.63798 16.2166 6.29965C16.555 5.96132 17.115 5.96132 17.4533 6.29965L24.535 13.3813C24.8733 13.7196 24.8733 14.2796 24.535 14.618L17.4533 21.6996C17.2783 21.8747 17.0566 21.9563 16.835 21.9563Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M23.718 14.875H4.08301C3.60467 14.875 3.20801 14.4783 3.20801 14C3.20801 13.5217 3.60467 13.125 4.08301 13.125H23.718C24.1963 13.125 24.593 13.5217 24.593 14C24.593 14.4783 24.1963 14.875 23.718 14.875Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center p-4 text-gray-600 bg-gray-100 rounded-lg hover:bg-[#E5E7EB] hover:text-[#3068FF]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9997 1.83301C8.59801 1.83301 6.64551 3.78551 6.64551 6.18717C6.64551 8.54301 8.48801 10.4497 10.8897 10.5322C10.963 10.523 11.0363 10.523 11.0913 10.5322C11.1097 10.5322 11.1188 10.5322 11.1372 10.5322C11.1463 10.5322 11.1463 10.5322 11.1555 10.5322C13.5022 10.4497 15.3447 8.54301 15.3538 6.18717C15.3538 3.78551 13.4013 1.83301 10.9997 1.83301Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M15.6569 12.9711C13.0994 11.2661 8.92854 11.2661 6.35271 12.9711C5.18854 13.7503 4.54688 14.8045 4.54688 15.932C4.54688 17.0595 5.18854 18.1045 6.34354 18.8745C7.62688 19.7361 9.31354 20.167 11.0002 20.167C12.6869 20.167 14.3735 19.7361 15.6569 18.8745C16.8119 18.0953 17.4535 17.0503 17.4535 15.9136C17.4444 14.7861 16.8119 13.7411 15.6569 12.9711Z"
                    fill="#D1D5DB"
                  />
                </svg>

                <span className="ml-2 text-xs">Profile</span>
                <svg
                  className="ml-auto"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.835 21.9563C16.6133 21.9563 16.3916 21.8747 16.2166 21.6996C15.8783 21.3613 15.8783 20.8013 16.2166 20.463L22.68 13.9996L16.2166 7.53632C15.8783 7.19798 15.8783 6.63798 16.2166 6.29965C16.555 5.96132 17.115 5.96132 17.4533 6.29965L24.535 13.3813C24.8733 13.7196 24.8733 14.2796 24.535 14.618L17.4533 21.6996C17.2783 21.8747 17.0566 21.9563 16.835 21.9563Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M23.718 14.875H4.08301C3.60467 14.875 3.20801 14.4783 3.20801 14C3.20801 13.5217 3.60467 13.125 4.08301 13.125H23.718C24.1963 13.125 24.593 13.5217 24.593 14C24.593 14.4783 24.1963 14.875 23.718 14.875Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className="flex items-center p-4 text-gray-600 bg-gray-100 rounded-lg hover:bg-[#E5E7EB] hover:text-[#3068FF]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7281 13.2822L16.8115 11.7605C16.619 11.4213 16.4448 10.7797 16.4448 10.4038V8.08467C16.4448 5.93051 15.1798 4.06967 13.3556 3.19884C12.879 2.35551 11.999 1.83301 10.9906 1.83301C9.99145 1.83301 9.09312 2.37384 8.61645 3.22634C6.82895 4.11551 5.59145 5.95801 5.59145 8.08467V10.4038C5.59145 10.7797 5.41728 11.4213 5.22478 11.7513L4.29895 13.2822C3.93228 13.8963 3.84978 14.5747 4.07895 15.198C4.29895 15.8122 4.82145 16.2888 5.49978 16.518C7.27812 17.123 9.14812 17.4163 11.0181 17.4163C12.8881 17.4163 14.7581 17.123 16.5365 16.5272C17.1781 16.3163 17.6731 15.8305 17.9115 15.198C18.1498 14.5655 18.0856 13.8688 17.7281 13.2822Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M13.5942 18.3422C13.2092 19.4055 12.1917 20.1663 11 20.1663C10.2759 20.1663 9.56087 19.873 9.05671 19.3505C8.76337 19.0755 8.54337 18.7088 8.41504 18.333C8.53421 18.3513 8.65337 18.3605 8.78171 18.3788C8.99254 18.4063 9.21254 18.4338 9.43254 18.4522C9.95504 18.498 10.4867 18.5255 11.0184 18.5255C11.5409 18.5255 12.0634 18.498 12.5767 18.4522C12.7692 18.4338 12.9617 18.4247 13.145 18.3972C13.2917 18.3788 13.4384 18.3605 13.5942 18.3422Z"
                    fill="#D1D5DB"
                  />
                </svg>

                <span className="ml-2 text-xs">Notifications</span>
                <svg
                  className="ml-auto"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.835 21.9563C16.6133 21.9563 16.3916 21.8747 16.2166 21.6996C15.8783 21.3613 15.8783 20.8013 16.2166 20.463L22.68 13.9996L16.2166 7.53632C15.8783 7.19798 15.8783 6.63798 16.2166 6.29965C16.555 5.96132 17.115 5.96132 17.4533 6.29965L24.535 13.3813C24.8733 13.7196 24.8733 14.2796 24.535 14.618L17.4533 21.6996C17.2783 21.8747 17.0566 21.9563 16.835 21.9563Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M23.718 14.875H4.08301C3.60467 14.875 3.20801 14.4783 3.20801 14C3.20801 13.5217 3.60467 13.125 4.08301 13.125H23.718C24.1963 13.125 24.593 13.5217 24.593 14C24.593 14.4783 24.1963 14.875 23.718 14.875Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/billing"
                className="flex items-center p-4 text-gray-600 bg-gray-100 rounded-lg hover:bg-[#E5E7EB] hover:text-[#3068FF]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1663 6.92038C20.1663 7.52538 19.6713 8.02038 19.0663 8.02038H2.93301C2.32801 8.02038 1.83301 7.52538 1.83301 6.92038V6.91121C1.83301 4.81204 3.52884 3.11621 5.62801 3.11621H16.3622C18.4613 3.11621 20.1663 4.82121 20.1663 6.92038Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M1.83301 10.4955V15.088C1.83301 17.1872 3.52884 18.883 5.62801 18.883H16.3622C18.4613 18.883 20.1663 17.178 20.1663 15.0788V10.4955C20.1663 9.89051 19.6713 9.39551 19.0663 9.39551H2.93301C2.32801 9.39551 1.83301 9.89051 1.83301 10.4955ZM7.33301 15.8122H5.49967C5.12384 15.8122 4.81217 15.5005 4.81217 15.1247C4.81217 14.7488 5.12384 14.4372 5.49967 14.4372H7.33301C7.70884 14.4372 8.02051 14.7488 8.02051 15.1247C8.02051 15.5005 7.70884 15.8122 7.33301 15.8122ZM13.2913 15.8122H9.62467C9.24884 15.8122 8.93717 15.5005 8.93717 15.1247C8.93717 14.7488 9.24884 14.4372 9.62467 14.4372H13.2913C13.6672 14.4372 13.9788 14.7488 13.9788 15.1247C13.9788 15.5005 13.6672 15.8122 13.2913 15.8122Z"
                    fill="#D1D5DB"
                  />
                </svg>

                <span className="ml-2 text-xs">Billing</span>
                <svg
                  className="ml-auto"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.835 21.9563C16.6133 21.9563 16.3916 21.8747 16.2166 21.6996C15.8783 21.3613 15.8783 20.8013 16.2166 20.463L22.68 13.9996L16.2166 7.53632C15.8783 7.19798 15.8783 6.63798 16.2166 6.29965C16.555 5.96132 17.115 5.96132 17.4533 6.29965L24.535 13.3813C24.8733 13.7196 24.8733 14.2796 24.535 14.618L17.4533 21.6996C17.2783 21.8747 17.0566 21.9563 16.835 21.9563Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M23.718 14.875H4.08301C3.60467 14.875 3.20801 14.4783 3.20801 14C3.20801 13.5217 3.60467 13.125 4.08301 13.125H23.718C24.1963 13.125 24.593 13.5217 24.593 14C24.593 14.4783 24.1963 14.875 23.718 14.875Z"
                    fill="#D1D5DB"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <button
            className="w-full bg-[#FBBC0545] text-black p-3 rounded-lg font-semibold flex items-center justify-center border border-[#FBBC0545] text-sm"
            onClick={() => setIsPopupOpen(true)}
          >
            ⚡ Upgrade
          </button>
          <div className="flex items-center p-3 mt-4 bg-gray-100 rounded-lg">
            <img
              src="/src/images/avatar.png"
              alt="User"
              className="h-10 mr-3 rounded-full w-11"
            />
            <div>
              <p className="text-xs font-medium text-[#515151]">
                Nolan Baptista
              </p>
              <p className="text-xs  text-[#51515194]">
                Nolanbaptista@gmail.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center transition-all duration-700 ease-out scale-100 bg-black opacity-100 bg-opacity-80">
            <div className="w-1/2 max-h-[500px] p-6 bg-white rounded-lg shadow-lg overflow-auto transition-all duration-500 ease-out scale-100 opacity-100">
              {/* En-tête de la popup */}
              <div className="flex justify-between pb-3 mb-4">
                <h2 className="w-full text-xl font-black text-center text-[#3D3B3B] font-blmelody">
                  Pricing Plan
                </h2>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-lg text-gray-500"
                >
                  ✖
                </button>
              </div>

              {/* Navigation entre les plans */}
              <div className="flex justify-between bg-gray-100 rounded-lg min-h-[40px] items-center">
                {plans.map((plan) => (
                  <button
                    key={plan.title}
                    className={`relative px-2 py-4 font-medium text-center text-xs transition-all duration-300 w-full
                ${
                  selectedPlan === plan.title
                    ? "font-bold border-b-4 border-[#3068FF] bg-gray-300 rounded-lg"
                    : "text-[#3D3B3B] hover:bg-gray-200 hover:rounded-lg"
                }`}
                    onClick={() => setSelectedPlan(plan.title)}
                  >
                    <span className="relative flex items-center justify-center text-lg">
                      {plan.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Détails du plan sélectionné */}
              <div className="flex items-center justify-between gap-4 mt-6">
                {/* Récupération du plan actif */}
                {plans.find((plan) => plan.title === selectedPlan) && (
                  <>
                    <div className="flex-1">
                      <h3 className=" font-bold text-[#3D3B3B] text-4xl font-blmelody">
                        {selectedPlan}
                      </h3>
                    </div>

                    {/* Prix et bouton */}
                    <div className="flex items-center space-x-4 shrink-0">
                      <Link to={`/subscribe/${selectedPlan}`}>
                        <button
                          className={`px-4 py-2 text-sm font-semibold text-white rounded-md transition-all duration-300
        ${
          userPlan === selectedPlan
            ? "bg-gray-400 cursor-not-allowed opacity-50" // Bouton désactivé
            : "bg-blue-600 hover:bg-blue-700"
        } // Bouton actif
      `}
                          disabled={userPlan === selectedPlan} // Désactive le bouton
                        >
                          Choose Plan
                        </button>g
                      </Link>
                      <span className="text-5xl font-extrabold text-[#3D3B3B]">
                        {
                          plans.find((plan) => plan.title === selectedPlan)
                            ?.price
                        }
                        <span className="text-xs text-[#3D3B3B] font-normal">
                          /monthly
                        </span>
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Liste des fonctionnalités du plan sélectionné */}
              <div className="flex flex-col mt-8">
                <div className="grid grid-cols-2 gap-x-5 gap-y-4  font-normal text-[#3D3B3B] place-items-start">
                  {plans
                    .find((plan) => plan.title === selectedPlan)
                    ?.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-[#3D3B3B]"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15.067A7.067 7.067 0 108 0a7.067 7.067 0 000 15.067zM3.354 8.293a.5.5 0 01.708 0L7 11.293l4.938-4.938a.5.5 0 01.707.708l-5.646 5.646a.5.5 0 01-.708 0L3.354 9a.5.5 0 010-.707z"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billinguser;
