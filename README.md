# ALX Listing App

An Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS.

## Project Description

This project is a modern web application that replicates the core functionality of Airbnb's property listing page. It features a responsive design, reusable components, and a well-structured codebase built with industry-standard technologies.

### Goals

- Create a responsive property listing interface
- Implement reusable UI components
- Demonstrate modern React and Next.js development practices
- Provide a foundation for further feature development

## Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component for actions
├── interfaces/
│   └── index.ts              # TypeScript interfaces for type safety
├── constants/
│   └── index.ts              # Application constants and configuration
├── pages/
│   ├── _app.tsx              # Next.js app wrapper
│   └── index.tsx             # Main landing page
├── public/
│   └── assets/               # Static assets (images, icons, etc.)
├── styles/
│   └── globals.css           # Global styles with Tailwind CSS
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

### Directory Purpose

- **`components/common/`**: Houses reusable UI components that can be used across multiple pages
- **`interfaces/`**: Contains TypeScript interface definitions for type safety and better development experience
- **`constants/`**: Stores application-wide constants, configuration settings, and static data
- **`public/assets/`**: Contains static files like images, icons, and other assets
- **`pages/`**: Next.js pages using the Pages Router (not App Router)
- **`styles/`**: Global styles and CSS files

## Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design
- **Type Safety**: Full TypeScript integration for better code quality
- **Component Architecture**: Modular, reusable components
- **Modern React**: Uses React 18 with Next.js 15
- **Code Quality**: ESLint configuration for consistent code style

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Technologies Used

- **Next.js 15** - React framework with server-side rendering
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Component Documentation

### Card Component

The Card component (`components/common/Card.tsx`) displays property information including:
- Property image
- Title and description
- Price per night
- Hover effects and click handlers

### Button Component

The Button component (`components/common/Button.tsx`) provides:
- Multiple variants (primary, secondary, outline)
- Different sizes (small, medium, large)
- Disabled states
- Customizable styling

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the ALX Software Engineering Program.

