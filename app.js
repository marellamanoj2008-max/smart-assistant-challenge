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
        await new Promise(resolve => setTimeout(resolve, 500));

        let responseHTML = "";
        const lowerPrompt = prompt.toLowerCase();

        if (lowerPrompt.includes("wedding")) {
            responseHTML = `<br><strong>💒 Wedding Plan:</strong><br>• <strong>Budget:</strong> Venue (40%), Catering (35%), Decor (15%), Contingency (10%)<br>• <strong>Timeline:</strong> Ceremony (04:00 PM) → Reception (06:00 PM)<br>• <strong>Vendor Checklist:</strong> Caterer, Photographer, Florist, DJ<br>• <strong>Personalized Idea:</strong> Digital memory guestbook.`;
        } else if (lowerPrompt.includes("birthday")) {
            responseHTML = `<br><strong>🎂 Birthday Plan:</strong><br>• <strong>Budget:</strong> Hall (40%), Cake/Food (35%), Balloons (15%), Games (10%)<br>• <strong>Timeline:</strong> Arrival (05:00 PM) → Cake Cutting (07:30 PM)<br>• <strong>Vendor Checklist:</strong> Cake Designer, Entertainer, Caterer<br>• <strong>Personalized Idea:</strong> Instant print photo booth.`;
        } else {
            responseHTML = `<br><strong>🎈 Community Event:</strong><br>• <strong>Budget:</strong> Stage (40%), Stalls (35%), Marketing (15%), Permits (10%)<br>• <strong>Timeline:</strong> Setup (09:00 AM) → Workshops (01:00 PM)<br>• <strong>Vendor Checklist:</strong> A/V Team, Food Trucks, Security<br>• <strong>Personalized Idea:</strong> Interactive artisan workshops.`;
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