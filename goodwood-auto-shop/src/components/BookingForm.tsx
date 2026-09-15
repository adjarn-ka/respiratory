import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900">Booking Request Received!</h3>
          <p className="mt-2 text-slate-600">
            Thanks {formData.name}! We'll confirm your {formData.service} appointment for {formData.date} at {formData.time} within the next hour.
          </p>
          <Button
            className="mt-6 bg-amber-500 hover:bg-amber-600"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                vehicle: "",
                service: "",
                date: "",
                time: "",
                notes: "",
              });
            }}
          >
            Make Another Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200 shadow-xl">
      <CardHeader className="bg-slate-900 rounded-t-2xl">
        <CardTitle className="font-serif text-2xl text-white">Book Your Service</CardTitle>
        <CardDescription className="text-slate-300">
          Fill in your details and we'll confirm your appointment within the hour.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                required
                type="tel"
                placeholder="+27 82 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              required
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Vehicle Make & Model</Label>
              <Input
                id="vehicle"
                required
                placeholder="Toyota Corolla 2019"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Service Type</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full Service">Full Service</SelectItem>
                  <SelectItem value="Major Service">Major Service</SelectItem>
                  <SelectItem value="Brake Service">Brake Service</SelectItem>
                  <SelectItem value="Engine Diagnostics">Engine Diagnostics</SelectItem>
                  <SelectItem value="Aircon Recharge">Aircon Recharge</SelectItem>
                  <SelectItem value="Wheel Alignment">Wheel Alignment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                id="date"
                required
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input
                id="time"
                required
                type="time"
                min="07:00"
                max="17:00"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any specific issues or requests? (optional)"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full bg-amber-500 py-6 text-lg hover:bg-amber-600">
            Request Booking
          </Button>
          <p className="text-center text-xs text-slate-500">
            No payment required now. We'll call to confirm price and availability.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}