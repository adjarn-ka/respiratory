import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Full Service",
    description: "Comprehensive 50-point check including oil, filters, brakes, fluids, and a full safety inspection.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    price: "From R850",
  },
  {
    title: "Brake Service",
    description: "Brake pad replacement, disc resurfacing, and complete brake system inspection for your safety.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.231-.833-3 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z",
    price: "From R650",
  },
  {
    title: "Engine Diagnostics",
    description: "Computerised fault finding and diagnostics for warning lights, performance issues, and engine problems.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    price: "From R450",
  },
  {
    title: "Major Service",
    description: "Everything in a full service plus timing belt check, clutch inspection, and cooling system flush.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    price: "From R1,450",
  },
  {
    title: "Aircon Recharge",
    description: "Air conditioning gas recharge, leak testing, and system performance check to keep you cool.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    price: "From R550",
  },
  {
    title: "Wheel Alignment",
    description: "Precision wheel alignment and balancing to extend tyre life and improve fuel efficiency.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    price: "From R350",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Our Services</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything your car needs, under one roof
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From routine maintenance to complex repairs, our certified technicians handle it all with genuine parts and a workmanship guarantee.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group border-slate-200 bg-white transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <CardTitle className="mt-4 text-xl font-semibold text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-amber-600">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}