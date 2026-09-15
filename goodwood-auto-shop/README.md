# Goodwood Auto Care - Service Booking Website

A modern, responsive web application for Goodwood Auto Care, a family-owned auto repair shop in Cape Town, South Africa.

## Features

- **Service Showcase**: Display all available services with descriptions and pricing
- **Transparent Pricing**: Clear, upfront pricing for all service tiers
- **Online Booking**: Customers can book services directly from the website
- **Modal Booking Interface**: Book form accessible via multiple CTAs
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Professional Branding**: Amber and slate color scheme with quality UI components

## Services Offered

- Full Service (from R850)
- Major Service (from R1,450)
- Brake Service (from R650)
- Engine Diagnostics (from R450)
- Aircon Recharge (from R550)
- Wheel Alignment (from R350)

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Pre-built component library (Button, Card, Input, Select, etc.)
- **State Management**: React Hooks (useState)

## Project Structure

```
goodwood-auto-shop/
├── src/
│   ├── App.tsx                 # Main app component
│   └── components/
│       ├── Header.tsx          # Navigation and branding
│       ├── Hero.tsx            # Hero section with CTA
│       ├── Services.tsx        # Service grid showcase
│       ├── Pricing.tsx         # Pricing tiers
│       ├── BookingForm.tsx     # Booking form component
│       └── Footer.tsx          # Footer with contact info
└── README.md
```

## Contact

- **Location**: 123 Main Road, Goodwood, Cape Town 7460
- **Phone**: +27 21 555 0123
- **Email**: info@goodwoodautocare.co.za
- **Hours**: Mon-Fri 7:30 AM - 5:30 PM | Sat 8:00 AM - 1:00 PM | Sun Closed

## Features in Detail

### Booking Form
- Collects customer name, phone, email, vehicle details
- Service type selection
- Date/time picker with business hours constraints
- Additional notes field
- Success confirmation screen

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts (1 → 2 → 3 columns)
- Touch-friendly navigation and forms
- Optimized typography and spacing
