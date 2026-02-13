# $VALONTINE - A Memecoin Token Website

This repository hosts a memecoin ($VALONTINE) token website that celebrates the intersection of love and Solana meme culture, providing a comprehensive digital presence for the community.


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

This project provides a dynamic digital presence for $VALONTINE - a memecoin token built on the Solana blockchain that merges Valentine's romance with meme culture. Inspired by "Alon needs a girlfriend for Valentines," the project transforms the concept of diamond hands into pure on-chain love. The website serves as the primary interface for community members and investors to understand the project's narrative arc, track developmental milestones, and engage with tokenomics. Built with modern web technologies emphasizing performance, accessibility, and user experience, $VALONTINE represents the first luxury meme protocol on Solana.

$VALONTINE is where love meets moonshots - a community-driven token that turns eternal holders into participants in a decentralized heart-shaped ecosystem. As the project motto states: "Love is the only candle that doesn't wick."


## Features

- **Love Story Narrative**: Dynamic storytelling component articulating the memecoin's journey from infatuation through commitment, establishing community connection and project purpose.
- **Live Price & Stats Dashboard**: Real-time token metrics including price, market cap, liquidity, and 24-hour volume updates via the Stats component.
- **Tokenomics Transparency**: Clear presentation of key contract features including LP burn status, ownership renunciation, zero tax structure, and community-first design through the Tokenomics component.
- **Interactive Animations**: Frame-based animation library for engaging, performant UI transitions throughout the site with Framer Motion.
- **Responsive Design**: Mobile-first approach ensuring optimal user experience across all device sizes and screen resolutions.
- **Modern Styling**: Utility-first CSS framework enabling rapid, consistent design implementation.
- **Trading Integration**: Direct links to major trading platforms (Pump.fun, GMGN.ai, DexScreener) for seamless user transactions.


## Tech Stack

### Core Framework
- **React** (v19.2.0 or higher) - Component-based UI library for building interactive interfaces.
- **Vite** - Next-generation build tool for optimized development and production bundles.

### Styling & Animation
- **Tailwind CSS** (v4.1.18 or higher) - Utility-first CSS framework for responsive design.
- **Framer Motion** (v12.31.1 or higher) - Production-grade animation library for React components.
- **Lucide React** (v0.563.0 or higher) - Minimal, lightweight SVG icon library.

### Development Tools
- **ESLint** (v9.39.1 or higher) - JavaScript linting and code quality enforcement.


## Project Structure
```
valontine/
├── src/
│   ├── main.jsx                 # application entry point and React root initialization.
│   ├── App.jsx                  # the root component orchestrating layout and routing.
│   ├── assets/
│   │   ├── images/              # static image assets (image).
│   │   └── styles/
│   │       └── main.css         # global styles and CSS variables.
│   └── components/
│       ├── About.tsx            # project narrative and love story section.
│       ├── FloatingHearts.tsx   # animated floating hearts component.
│       ├── Footer.tsx           # site footer with links and metadata.
│       ├── Header.tsx           # navigation and branding component.
│       ├── Hero.tsx             # landing hero section with call-to-action.
│       ├── Stats.tsx            # live price metrics and statistics display.
│       └── Tokenomics.tsx       # contract features and tokenomics display.
├── public/                      # static assets served directly (favicon, videos and images.)
├── index.html                   # html template entry point.
├── .gitignore                   # git ignore configuration.
├── eslint.config.js             # eslint linting rules and configuration.
├── package-lock.json            # locked dependency versions.
├── package.json                 # project dependencies and npm scripts.
├── README.md                    # project documentation.
├── vite.config.js               # vite build configuration.
├── LICENSE                      # project license.
└── README.md                    # current file.
```


## Installation

### Prerequisites
- Node.js (v18.0.0 or any higher versions)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/valontine.git
   cd valontine
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

This command performs the following operations: transpiles and minifies all JavaScript and CSS, creates an optimized `dist/` directory ready for deployment, and generates source maps for debugging in production (configurable).

### Preview Production Build
```bash
npm run preview
```

Serves the production build locally on `http://localhost:4173` for testing before deployment.

### Deployment

The `dist/` directory contains all artifacts needed for deployment. You can deploy on any hosting service including Vercel, Netlify, and traditional cloud providers. For optimal performance with this React-based project, Vercel or Netlify are recommended options.

Example deployment with Vercel:
```bash
npm install -g vercel
vercel
```


## Code Quality

### ESLint Configuration

This project enforces consistent code style and catches potential errors using ESLint.
```bash
npm run lint
```

Rules enforced: React hook dependencies verification, React refresh compatibility, consistent import/export syntax, and comprehensive error prevention patterns.


## Contract Information

- **Token Name**: $valontine
- **Blockchain**: solana
- **Contract Address**: `5fRPUQKVZEYUe66QT9UCmeGPcA2ijsRNAvCwbuZSpump`
- **Key Features**:
  - LP Burned: Liquidity Pool permanently burned for community trust
  - Ownership Renounced: Contract is public good and community-driven forever
  - 0% Tax: Zero transaction fees for pure trading freedom
  - Diamond Hands: Built for eternal holders


## Trading Platforms

Buy and trade $valontine on:
- [Pump.fun](https://pump.fun)
- [GMGN.ai](https://gmgn.ai)
- [DexScreener](https://dexscreener.com)


## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes with clear, concise, and descriptive messages.
4. Ensure all linting passes (`npm run lint`).
5. Push to your branch and submit a pull request.


## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file. Check the file for complete details.

---

**$valontine**: Where Love Meets Moonshots on Solana

*Love is the only candle that doesn't wick.*