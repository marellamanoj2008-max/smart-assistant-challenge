# AI Celebration & Event Planner (Challenge 5)

## 📌 Problem Statement Alignment
This project directly solves **[Challenge 5] Celebration & Event Planner**. 
It utilizes a simulated **Generative AI** engine to target core event management objectives: automating party schedules, calculating venue budgets, managing guest RSVP workflows, and generating intelligent celebration itineraries. By providing AI-powered planning insights, it fulfills the core user need for seamless event management and budgeting.

## ⚙️ Efficiency & Architecture
* **Time & Memory Optimization:** Utilizes asynchronous JavaScript (`async/await`) to ensure non-blocking DOM updates and hardware-accelerated CSS rendering to minimize reflows.
* **Resource Utilization:** Scripts are deferred to optimize First Contentful Paint (FCP).

## 🔒 Security
* **Safe Practices:** Enforces strict XSS (Cross-Site Scripting) prevention by relying strictly on `textContent` DOM manipulation instead of `innerHTML` for user inputs.
* **Vulnerability Mitigation:** Implements a strict `Content-Security-Policy` (CSP) via HTML meta tags to block unauthorized inline scripts. 

## 🧪 Testing & Maintainability
* Includes a robust test suite (`tests.js`) that validates event prompt sanitization logic.
* Integrated with GitHub Actions CI/CD workflows (`.github/workflows/evaluate.yml`) to ensure continuous validation and maintainability over time.

## ♿ Accessibility (a11y)
* Implements comprehensive WAI-ARIA labels (`aria-live`, `aria-label`).
* Utilizes semantic HTML5 architecture (`<header>`, `<main>`, `<aside>`) and high-contrast CSS focus states for full keyboard navigation support.

## 💻 Code Quality
* Written in strict ES6 vanilla JavaScript (`"use strict";`).
* Fully documented with professional JSDoc comments for readability and clean code formatting.