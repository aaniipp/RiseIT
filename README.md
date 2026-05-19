# RiseIT Consulting Website

A modern, premium landing page and single-page application (SPA) built for **RiseIT Consulting** — the premier student-led IT consulting sandbox. 

This platform bridges the gap between classroom learning and real industry practice by offering specialized mentoring tracks (Advisory, Implementation, Assurance) and connecting students with top industry experts.

## 🚀 Key Features

- **Consulting Sandbox Aesthetic**: A sleek, dark-mode, glassmorphism design that establishes premium professional credibility.
- **Single-Page Architecture**: Fast, lightweight routing handled entirely client-side via Vanilla JavaScript (`showPage` logic).
- **Zero Build-Step Setup**: Built using pure HTML, Vanilla JS, and Tailwind CSS (via CDN) for instant development and easy deployment.
- **Conversion-Optimized Funnels**: Targeted user journeys for three distinct personas:
  - IT Students (Mentees & Associates)
  - Industry Professionals (Mentors)
  - Corporations & Universities (Partners)

## 📁 Project Structure

Currently, the application relies on a streamlined architecture for rapid prototyping:

```
RiseIT/
├── index.html           # Main entry point: Contains all HTML markup and structure
├── style.css            # Custom CSS styling and Tailwind integration via CDN
├── script.js            # Vanilla JavaScript for page transitions and form logic
├── RiseIT Logo.jpg      # Main brand logo
└── README.md            # Project documentation (this file)
```

## 🛠️ Getting Started

Since this project does not rely on Node.js build tools (like Vite or Webpack) in its current iteration, getting started is incredibly simple.

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd RiseIT
   ```

2. **Run Locally:**
   Simply double-click the `index.html` file to open it in your browser, or use a local development server like VS Code's "Live Server" extension for hot-reloading.

## 📱 Page & Navigation Flow

The site navigation has been modernized to support scalable programs:

- **Home**: Impactful hero, Trust Bar, "The Sandbox Approach" (Value Prop), Specialty Tracks, and B2B/Mentor split CTA.
- **About**: The core mission ("The Golden Circle" approach to consulting).
- **Programs**:
  - **Mentoring Program**: 12-week intensive curriculum covering Advisory, Implementation, and Assurance tracks.
  - **RiseTalk Events**: Industry webinars and digital transformation masterclasses.
- **For Partners**: Information on collaborating for real-world case studies and talent pipelining.
- **Apply Now / Join Us**: Recruitment funnels for Mentees (Sandbox Participants) and Internal Associates (Managing Partners, Delivery Leads, etc.).

## 🎨 Design System

- **Framework**: Tailwind CSS (loaded via CDN)
- **Typography**: Inter (Primary) and Open Sans (Secondary)
- **Color Palette**: 
  - Deep Purples (`#240046`, `#3C096C`, `#5A189A`)
  - Accent Yellow (`#EDF67D` and `#FFFF3F`)
- **UI Elements**: Glassmorphism (`backdrop-blur`), subtle gradients, and CSS micro-animations.

## 🔮 Future Roadmap

While the current architecture is a lightweight HTML file for rapid deployment, future iterations plan to migrate this codebase into a component-based structure using **React** and **Vite** for better maintainability as the platform's features (e.g., dynamic Mentor Directories and Blog platforms) expand.

## 📄 License

This project is licensed under the MIT License.