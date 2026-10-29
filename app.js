"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatWindow = document.getElementById("chat-window");
    const actionBtns = document.querySelectorAll(".action-btn");

    const sanitizeHTML = (text) => {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    };

    const appendMessage = (sender, text, className) => {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.innerHTML = `<strong>${sanitizeHTML(sender)}:</strong> ${text}`;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const processEventPrompt = async (prompt) => {
        appendMessage("You", sanitizeHTML(prompt), "user-message");
        userInput.value = "";
        await new Promise(resolve => setTimeout(resolve, 400));

        const lowerPrompt = prompt.toLowerCase();
        
        // Extract numbers dynamically from user input (default to 100 guests, $5000 budget if not typed)
        const numbers = prompt.match(/\d+/g);
        const guestCount = numbers && numbers[0] ? parseInt(numbers[0]) : 100;
        const totalBudget = numbers && numbers[1] ? parseFloat(numbers[1]) : guestCount * 50;

        const venue = (totalBudget * 0.40).toLocaleString();
        const catering = (totalBudget * 0.35).toLocaleString();
        const decor = (totalBudget * 0.15).toLocaleString();
        const contingency = (totalBudget * 0.10).toLocaleString();

        let responseHTML = "";

        if (lowerPrompt.includes("wedding")) {
            responseHTML = `
                <br><strong>💒 Customized Wedding Plan (${guestCount} Guests):</strong><br>
                • <strong>Dynamic Budget ($${totalBudget.toLocaleString()}):</strong> Venue ($${venue}), Catering ($${catering}), Decor ($${decor}), Contingency ($${contingency})<br>
                • <strong>Timeline:</strong> Ceremony (04:00 PM) → Cocktail Hour (06:00 PM) → Reception (08:00 PM)<br>
                • <strong>Vendor Checklist:</strong> Caterer for ${guestCount} guests, Photographer, Florist, DJ/Band, Venue Manager<br>
                • <strong>Personalized Idea:</strong> Interactive digital guestbook with photo slideshow for ${guestCount} guests.
            `;
        } else if (lowerPrompt.includes("birthday")) {
            responseHTML = `
                <br><strong>🎂 Customized Birthday Plan (${guestCount} Guests):</strong><br>
                • <strong>Dynamic Budget ($${totalBudget.toLocaleString()}):</strong> Hall ($${venue}), Food/Cake ($${catering}), Decor ($${decor}), Games ($${contingency})<br>
                • <strong>Timeline:</strong> Arrival (05:00 PM) → Games (06:30 PM) → Cake Cutting (07:30 PM)<br>
                • <strong>Vendor Checklist:</strong> Cake Designer, Balloon Artist, Entertainer, Caterer<br>
                • <strong>Personalized Idea:</strong> Instant photo booth station tailored for ${guestCount} guests.
            `;
        } else {
            responseHTML = `
                <br><strong>🎈 Customized Community Event (${guestCount} Guests):</strong><br>
                • <strong>Dynamic Budget ($${totalBudget.toLocaleString()}):</strong> Stage & Audio ($${venue}), Food Stalls ($${catering}), Marketing ($${decor}), Permits ($${contingency})<br>
                • <strong>Timeline:</strong> Volunteer Setup (09:00 AM) → Welcome (10:00 AM) → Workshops (01:00 PM)<br>
                • <strong>Vendor Checklist:</strong> Audio/Visual Team, Food Trucks, Security Staff, City Permits<br>
                • <strong>Personalized Idea:</strong> Interactive artisan workshops and community feedback wall.
            `;
        }

        appendMessage("Event Planner AI", responseHTML, "ai-message");
    };

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (text) processEventPrompt(text);
    });

    actionBtns.forEach(btn => btn.addEventListener("click", () => processEventPrompt(btn.getAttribute("data-prompt"))));
});