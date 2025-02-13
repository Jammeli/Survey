import React from "react";
import { HeroSection } from "@/components/home/HeroSection.tsx";
import { FeaturesSection } from "./Home/FeaturesSection";
import { ProductsSection } from "./Home/ProductsSection";
import { IndustriesSection } from "./Home/IndustriesSection";
import { PricingSection } from "./Home/PricingSection";
import { TemplatesSection } from "./Home/TemplatesSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section - Dark */}
      <div className="py-20 bg-gray-900">{<FeaturesSection />}</div>

      {/* Products Section - Light */}
      <div className="py-20 bg-white">{<ProductsSection />}</div>

      {/* Industries Section - Dark */}
      <div className="py-20 bg-gray-900">{<IndustriesSection />}</div>

      {/* Pricing Section - Light */}
      <div className="py-0 bg-white">{<PricingSection />}</div>

      {/* Templates Section - Dark */}
      <div className="py-20 bg-gray-900">{<TemplatesSection />}</div>
    </div>
  );
}
