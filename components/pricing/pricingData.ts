export interface Plan {
  title: string;
  price: string;
  frequency: string;
  features: string[];
  popular?: boolean;
}

export const plans: Plan[] = [
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
