import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { Layout } from "@/components/Layout";

// Import pages
import Home from "@/components/pages/Home";
import { store } from "./Redux/store";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import Dashboard from "@/components/pages/Dashboard";
import Forms from "@/components/pages/Forms";
import FormBuilder from "@/components/pages/FormBuilder";
import FormResults from "@/components/pages/FormResults";
import Templates from "@/components/pages/Templates";
import Account from "@/components/pages/Account";
import Help from "@/components/pages/HelpAndSupport";
import Terms from "@/components/pages/Terms";
import Privacy from "@/components/pages/Privacy";
import Cookies from "@/components/pages/Cookies";
import Pricing from "@/components/pages/Pricing";
import CreateForm from "@/components/pages/CreateForm";
import AIFormCreator from "@/components/pages/AIFormCreator";
import FormBuilderProduct from "@/components/pages/products/FormBuilder";
import SurveyMaker from "@/components/pages/products/SurveyMaker";
import AIForms from "@/components/pages/products/AIForms";
import Education from "@/components/pages/industries/Education";
import Healthcare from "@/components/pages/industries/Healthcare";
import Retail from "@/components/pages/industries/Retail";
import HRRecruiting from "@/components/pages/industries/HRRecruiting";
import Enterprise from "@/components/pages/industries/Enterprise";
import RealEstate from "@/components/pages/industries/RealEstate";
import NonProfit from "@/components/pages/industries/NonProfit";
import Docs from "@/components/pages/docs/index";
import ReferPage from "@/components/pages/ReferFriend";
import ForgotPassword from "@/components/pages/ForgotPassword";
import Subscribe from "@/components/pages/Subscribe";
import Billinguser from "@/components/pages/Billinguser";
import NewPricing from "@/components/pages/NewPricing";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billinguser" element={<Billinguser />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/forms/new" element={<FormBuilder />} />
            <Route path="/forms/create" element={<CreateForm />} />
            <Route path="/forms/ai-create" element={<AIFormCreator />} />
            <Route path="/forms/:formId/results" element={<FormResults />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/account" element={<Account />} />
            <Route path="/help" element={<Help />} />
            <Route path="/subscribe/:plan" element={<Subscribe />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/newpricing" element={<NewPricing />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            <Route
              path="products/form-builder"
              element={<FormBuilderProduct />}
            />
            <Route path="/products/survey-maker" element={<SurveyMaker />} />
            <Route path="/products/ai-forms" element={<AIForms />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route
              path="/industries/hr---recruiting"
              element={<HRRecruiting />}
            />
            <Route path="/industries/enterprise" element={<Enterprise />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/non-profit" element={<NonProfit />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/refer" element={<ReferPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
