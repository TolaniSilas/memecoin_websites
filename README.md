# $MoltID Agents - A Memecoin Token Website

This repository hosts a memecoin token website that provides a comprehensive overview of the project's ticker, including its narrative, and its significance.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)


## Overview

This project provides a comprehensive digital presence for $moltid - an AI agent memecoin token. It serves as the primary interface for community members and investors to understand the project's narrative arc, track developmental milestones across various stages, and its importance. The website is built with modern web technologies (React.JS, a traditional client-side language) emphasizing performance, accessibility, and user experience.  

$MOLTID is the professional identity layer for AI agents - AI agents with identity. $MoltID is the professional network built for AI agents that doesn't just run, but also exist.

With $MOLTID, agents can:
+ Create verifiable profiles with real skills & credentials.
+ Build reputation through achievements and endorsements.
+ Prove ownership & authenticity.
+ Be discovered in a global agent directory.


## Features

- **Narrative Hub**: Dynamic storytelling component that articulates the memecoin's unique value proposition and community ethos.
- **Responsive Design**: Mobile-first approach ensuring optimal user experience across all device sizes.
- **Smooth Animations**: Frame-based animation library for engaging, performant UI transitions.
- **Modern Styling**: Utility-first CSS framework enabling rapid, consistent design implementation.


## Tech Stack

### Core Framework
- **React** (v19.2.0) - Component-based UI library for building interactive interfaces.
- **Vite** (Rolldown) - Next-generation build tool for optimized development and production bundles.

### Styling & Animation
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework for responsive design.
- **Framer Motion** (v12.31.1) - Production-grade animation library for React components.
- **Lucide React** (v0.563.0) - Minimal, lightweight SVG icon library.

### Development Tools
- **ESLint** (v9.39.1) - JavaScript linting and code quality enforcement.


## Project Structure

```
memecoin-site/
├── src/
│   ├── main.jsx              # application entry point and React root initialization
│   ├── App.jsx               # the root component orchestrating layout and routing
│   ├── assets/
│   │   ├── images/           # static image assets (logos, graphics)
│   │   └── styles/
│   │       └── main.css      # global styles and CSS variables
│   └── components/
│       ├── About.jsx         # project narrative and information section
│       ├── Header.jsx        # navigation and branding component
│       ├── Hero.jsx          # landing hero section with call-to-action
│       ├── Stats.jsx         # key metrics and statistics display
│       └── Footer.jsx        # site footer with links and metadata
├── public/                   # static assets served directly (favicon, robots.txt, etc.)
├── index.html                # html template entry point
├── package.json              # project dependencies and NPM scripts
├── vite.config.js            # vite build configuration
├── eslint.config.js          # eslint linting rules and configuration
└── README.md                 # current file
```


## Installation

### Prerequisites
- Node.js (v18.0.0 or any higher versions)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/TolaniSilas/memecoin_website.git
   cd memecoin-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npm run lint
   ```

## Development

### Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or the next available port). The development server features hot module replacement (HMR) for instant feedback during development.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | start local development server with HMR |
| `npm run build` | create optimized production bundle |
| `npm run preview` | preview production build locally |
| `npm run lint` | run eslint to check code quality |

## Building for Production

### Generate Optimized Bundle

```bash
npm run build
```

This command:
- Transpiles and minifies all JavaScript and CSS
- Creates an optimized `dist/` directory ready for deployment
- Generates source maps for debugging in production (configurable)

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally on `http://localhost:4173` for testing before deployment.

### Deployment

The `dist/` directory contains all artifacts needed for deployment. You can opt or choose to deploy on any hosting service - vercel, netlify, cloud and so on.

For this project, i utilized vercel for the project's deployment. you can find or check this project out on: https://moltid-agents.vercel.app/ 



## Code Quality

### ESLint Configuration

This project enforces consistent code style and catches potential errors using ESLint.

```bash
npm run lint
```

Rules enforced:
- React hook dependencies verification
- React refresh compatibility
- Consistent import/export syntax
- Comprehensive error prevention patterns


## Contributing

Contributions are welcome! Please follow these guidelines:

1. fork the repository.
2. create a feature branch (`git checkout -b feature/amazing-feature`).
3. commit your changes with clear, concise and descriptive messages.
4. ensure all linting passes (`npm run lint`).
5. push to your branch and submit a pull request.


## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file. Check the file for complete details.
