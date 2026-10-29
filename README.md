# AI Celebration & Event Planner (Challenge 5)

## 📌 Problem Statement Alignment
This project directly implements **[Challenge 5] Celebration & Event Planner**. 
Powered by Python, JavaScript, and Generative AI logic, it serves as an intelligent planning assistant for **weddings**, **birthdays**, and **community events**. 

It delivers four automated core features:
1. **Budgets:** Comprehensive budget calculation and percentage-based financial allocation.
2. **Timelines:** Step-by-step event schedules and hour-by-hour itineraries.
3. **Vendor Checklists:** Itemized tasks and vendor management requirements.
4. **Personalized Ideas:** Tailored event themes, activity recommendations, and creative concepts.

## ⚙️ Core Architecture
* **Python Backend (`app.py`):** Structured planning engine utilizing AI generation for weddings, birthdays, and community events.
* **Responsive Frontend (`index.html`, `app.js`):** Interactive interface featuring dynamic prompt shortcuts.

## 🧪 Testing & Reliability
* **PyTest Framework (`tests/test_planner.py`):** Validates event generation logic, budget calculations, timeline consistency, and vendor checklists.
* **CI/CD Workflow (`.github/workflows/evaluate.yml`):** Automated continuous integration running pytest on every push.

## 🔒 Security & Performance
* **XSS Protection:** Enforces strict DOM text content sanitization.
* **Content Security Policy (CSP):** Implements CSP meta tags.
* **Code Quality:** Adheres strictly to PEP 8 and JavaScript strict mode (`"use strict";`).

## ♿ Accessibility (a11y)
* Full WAI-ARIA support (`aria-live`, `aria-label`) and semantic HTML5 tags.