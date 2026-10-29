"use strict";

/**
 * @fileoverview Core logic for AI Celebration & Event Planner.
 * Ensures secure input handling, asynchronous processing, and efficient event prompt generation.
 */

document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatWindow = document.getElementById("chat-window");
    const actionBtns = document.querySelectorAll(".action-btn");

    /**
     * Secures and escapes user input to prevent XSS (Cross-Site Scripting).
     * @param {string} text - The raw user input.
     * @returns {string} Sanitized text.
     */
    const sanitizeHTML = (text) => {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    };

    /**
     * Appends a message to the chat window efficiently.
     * @param {string} sender - 'You' or 'Event Planner AI'.
     * @param {string} text - The message content.
     * @param {string} className - CSS class for styling.
     */
    const appendMessage = (sender, text, className) => {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.innerHTML = `<strong>${sanitizeHTML(sender)}:</strong> ${sanitizeHTML(text)}`;
        
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    /**
     * Simulates asynchronous AI event processing.
     * @param {string} prompt - The user's event request.
     */
    const processEventPrompt = async (prompt) => {
        appendMessage("You", prompt, "user-message");
        userInput.value = "";

        await new Promise(resolve => setTimeout(resolve, 600));

        let aiResponse = "I have analyzed your event plan. Here is your optimized celebration schedule and estimated vendor budget breakdown.";
        if (prompt.toLowerCase().includes("itinerary") || prompt.toLowerCase().includes("birthday")) {
            aiResponse = "Birthday Itinerary Generated: 1. Welcome & Drinks (6:00 PM), 2. Cake Cutting (7:30 PM), 3. Dinner & Music (8:00 PM).";
        } else if (prompt.toLowerCase().includes("budget") || prompt.toLowerCase().includes("vendor")) {
            aiResponse = "Budget Estimated for 100 Guests: Venue (40%), Catering (35%), Decoration & Photography (25%).";
        }

        appendMessage("Event Planner AI", aiResponse, "ai-message");
    };

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (text) {
            processEventPrompt(text);
        }
    });

    actionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const prompt = btn.getAttribute("data-prompt");
            processEventPrompt(prompt);
        });
    });
});