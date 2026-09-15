import { Button } from "@/components/ui/button";

interface HeroProps {
  onBook: () => void;
}

export function Hero({ onBook }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 ring-1 ring-amber-500/20">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Open today · Goodwood, Cape Town
          </div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Honest mechanics for your daily driver
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Family-owned auto care in Goodwood. Transparent pricing, quality parts, and work done right the first time. Book your service online in under a minute.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={onBook} size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400">
              Book a Service
            </Button>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-base font-medium text-white hover:bg-slate-800"
            >
              View Services
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-700 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="mt-1 text-sm text-slate-400">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4.9</p>
              <p className="mt-1 text-sm text-slate-400">Google rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">2k+</p>
              <p className="mt-1 text-sm text-slate-400">Cars serviced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}