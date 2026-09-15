import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onBook={() => setBookingOpen(true)} />
      <main>
        <Hero onBook={() => setBookingOpen(true)} />
        <Services />
        <Pricing />
        <section id="book" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close booking form"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}