import { Plan } from './pricing/pricingData';
//import { ComparisonTable } from './pricing/ComparisonTable';
import { plans } from './pricing/pricingData';

export const PricingSection = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for youuuuuuuuuuuuuuuuuuu
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600">
            Start with our free plan and scale as you grow. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid max-w-md grid-cols-1 mx-auto mt-16 isolate gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {plans.map((tier) => (
            <Plan key={tier.title} {...tier} />
          ))}
        </div>

        
      </div>
    </div>
  );
};