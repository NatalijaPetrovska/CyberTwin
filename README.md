# CyberTwin

An interactive cybersecurity awareness app that helps users reflect on their online habits, see what could realistically happen because of them, and learn how to improve.

**Live demo:** https://natalijapetrovska.github.io/CyberTwin/

## What it does

A short quiz about everyday online behavior builds your personal digital twin. From there, the app shows how safe your habits are and what you should work on first.

- **Quiz** – 18 questions across 6 categories (Passwords, Phishing, Social Engineering, Network, Privacy, Malware), answered on a 5-point scale from Always to Never.
- **Digital twin** – your answers become a profile with a risk level shown as your twin status.
- **Dashboard** – an overview with previews of the lessons and attacks from your weakest categories.
- **Learning Center** – lessons for each category, with the most relevant ones for you first.
- **Attack Simulator** – interactive branching stories that show what could happen to you depending on the choices you make, styled as a retro terminal.

## Built with

- React
- Vite
- React Router
- JavaScript and CSS
- localStorage to keep your results after a refresh
- GitHub Pages and GitHub Actions for deployment

## What I learned

Building CyberTwin taught me how to create an application from scratch. The biggest lesson was how much thinking and planning has to happen before writing any code: deciding the user flow, how the pages and components are structured, and how data moves between them. Getting that structure right first made the actual coding much clearer.

## Run locally

    npm install
    npm run dev
