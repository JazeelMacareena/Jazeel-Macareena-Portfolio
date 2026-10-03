# Jazeel Macareena P — COMP229 React Portfolio

A polished React + Express personal portfolio built for COMP229 Assignment 1.

## Pages
- Home
- About Me
- Projects
- Education
- Services
- Contact Me

## Assignment coverage
- Responsive navigation across all six required pages
- Custom JM logo
- Personal home/welcome section
- About Me page with legal name, portrait and resume PDF
- Dedicated Projects page with four project visuals and descriptions
- Education and professional qualifications
- Services offered
- Contact information and interactive contact form
- React state handling for form input
- Express `/api/contact` endpoint and `/api/health` endpoint
- Contextual code comments and readable variable names
- Responsive UI and accessibility-minded reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

The development script starts Vite and the Express server together.

## Production

```bash
npm run build
npm start
```

Express serves the Vite `dist` folder after the production build.

## Contact form

The form posts to `/api/contact`. If the API is unavailable, the React app stores the demo submission in localStorage and returns the user to Home, matching the assignment's initial requirement that the form capture information and redirect back to Home.

## Design

The visual system intentionally uses the palette from the supplied reference image:
- Ink: `#15242B`
- Paper: `#F5F2ED`
- Sage: `#CAD3D0`
- Sand: `#D5C6AD`
- Accent: `#B27A3F`

The interface uses scroll reveals, page transitions, a continuous marquee, hover motion, animated orbital elements and responsive navigation without sacrificing the assignment's required page structure.

## COMP229 submission checklist
- [x] Six required React pages are included.
- [x] Custom portfolio logo is included in `public/assets` and used by the navigation.
- [x] Home page includes a welcome/mission-style message and navigation to portfolio content.
- [x] About page includes the student's name, portrait, biography and resume PDF link.
- [x] Projects page includes four project visuals, descriptions and roles.
- [x] Education page includes education history and certifications.
- [x] Services page includes a list of services/capabilities.
- [x] Contact page includes contact information and a controlled interactive form.
- [x] Express API validates contact submissions at `/api/contact`.
- [x] Code uses readable contextual names and comments where useful.
- [ ] Push the final project to GitHub and keep milestone commits.
- [ ] Deploy the final project to a cloud host and record the live URL.

## Netlify Deployment

This project is prepared for Netlify deployment with Vite + React on the frontend and Express running through a Netlify Function for the contact API.

### Netlify settings
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

The `/api/contact` and `/api/health` routes are rewritten to the deployed Express function. The final SPA rewrite keeps React Router routes such as `/about`, `/projects`, `/education`, `/services`, and `/contact` working after refresh.
