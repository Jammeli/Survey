import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { store } from "./Redux/store";
import { useSelector } from "react-redux";
const Subscribe: React.FC = () => {
  const { plan } = useParams<{ plan: string }>(); // Récupère le nom du plan
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const userId = useSelector((state) => state.auth.user.id_user);
  const userEmail = useSelector((state) => state.auth.user.email);

  useEffect(() => {
    if (plan) {
      console.log("Plan sélectionné :", plan);
      console.log("User ID :", userId);
      console.log("User Email :", userEmail);

      axios
        .get(`http://localhost:5000/subscribe`, {
          params: { plan, userId, userEmail },
        })
        .then((response) => {
          console.log("Réponse de l'API :", response.data);
          if (response.data.url) {
            // Ajoute un délai avant la redirection (3 secondes)
            let time = 0;
            const interval = setInterval(() => {
              time += 1;
              setProgress((prev) => Math.min(prev + 20, 100)); // Augmente la barre de progression
              if (time === 3) {
                clearInterval(interval);
                window.location.href = response.data.url; // Redirection vers Stripe après 5 sec
              }
            }, 1000);
          } else {
            console.error(
              "🔴 URL de paiement non reçue. Réponse :",
              response.data
            );
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(
            "🔴 Erreur lors de la souscription :",
            error.response?.data || error.message
          );
          setLoading(false);
        });
    } else {
      console.error("🔴 Aucun plan sélectionné.");
      setLoading(false);
    }
  }, [plan]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300">
      <div className="relative flex flex-col items-center w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
        {loading ? (
          <>
            {/* Loader Animation */}
            <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>

            <h1 className="mt-6 text-2xl font-bold text-gray-800 font-blmelody">
              Processing your subscription...
            </h1>

            {plan && (
              <p className="flex flex-col items-center mt-4 text-lg text-gray-600">
                <span className="font-extrabold text-indigo-500 font-blmelody">
                  {plan}
                </span>{" "}
                plan
                <span className="mt-2 text-sm text-gray-500 font-blmelody">
                  This won't take long, please wait...
                </span>
              </p>
            )}

            {/* Barre de progression */}
            <div className="w-full mt-6 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        ) : (
          <h1 className="text-xl text-red-600 font-blmelody">
            An error occurred. Please try again.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
