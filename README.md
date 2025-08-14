# New-U Wellness & Beauty

A modern, responsive website for New-U Wellness & Beauty, a comprehensive wellness and beauty business located in Paarl, South Africa.

## About New-U Wellness & Beauty

New-U offers two main service categories:

- **Wellness & Beauty Services**: Therapeutic massages, facial treatments, waxing services, and beauty packages
- **Inch by Inch Services**: Specialized isometric bed exercises for body transformation and targeted toning

## Features

- Modern, responsive design with smooth animations
- Dual-service approach with section transitions
- Interactive booking system
- Gallery showcase
- Testimonials section
- Contact information and location details

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **State Management**: React Query for data fetching

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd New-U
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── AboutUs.tsx     # About section
│   ├── ServicesSection.tsx # Services showcase
│   ├── Gallery.tsx     # Image gallery
│   ├── Testimonials.tsx # Customer testimonials
│   ├── ContactSection.tsx # Contact form
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Contact Information

- **Address**: 87 Matthews Street, Klein Nederbury, Paarl 7646
- **Phone**: (27) 71-952-9055
- **Email**: info@new-u.com

## License

This project is private and proprietary to New-U Wellness & Beauty.
