import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricing = [
  {
    name: "Oil Change",
    price: "R450",
    includes: ["Full synthetic oil", "New oil filter", "Fluid top-up", "Basic inspection"],
    popular: false,
  },
  {
    name: "Full Service",
    price: "R850",
    includes: ["Everything in oil change", "Air & fuel filters", "Brake inspection", "50-point check", "Road test"],
    popular: true,
  },
  {
    name: "Major Service",
    price: "R1,450",
    includes: ["Everything in full service", "Timing belt check", "Clutch inspection", "Cooling system flush", "Battery test"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Transparent Pricing</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            No surprises, no hidden costs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Clear, upfront pricing for our most popular services. Every quote is confirmed before work begins.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-slate-200 ${
                plan.popular ? "border-amber-500 shadow-lg ring-2 ring-amber-500" : "bg-white"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">{plan.name}</CardTitle>
                <p className="mt-2">
                  <span className="font-serif text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500"> / service</span>
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Prices include VAT. Final quote may vary based on vehicle make, model, and condition.
        </p>
      </div>
    </section>
  );
}