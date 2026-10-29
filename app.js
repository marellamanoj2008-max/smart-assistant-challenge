"use strict";

/**
 * @fileoverview Core logic for Intelligent Business Consultant.
 * Ensures secure input handling, asynchronous processing, and efficient DOM updates.
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
     * @param {string} sender - 'User' or 'Consultant AI'.
     * @param {string} text - The message content.
     * @param {string} className - CSS class for styling.
     */
    const appendMessage = (sender, text, className) => {
        const msgDiv = document.createElement("div");
        msgDiv.className = `message ${className}`;
        msgDiv.innerHTML = `<strong>${sanitizeHTML(sender)}:</strong> ${sanitizeHTML(text)}`;
        
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
    };

    /**
     * Simulates an asynchronous AI processing delay for efficiency metrics.
     * @param {string} prompt - The user's query.
     */
    const processAIPrompt = async (prompt) => {
        // Append user message immediately
        appendMessage("You", prompt, "user-message");
        userInput.value = "";

        // Simulate API latency & asynchronous non-blocking thread
        await new Promise(resolve => setTimeout(resolve, 800));

        // Generate dynamic business response based on keywords
        let aiResponse = "I have analyzed your request. To optimize this workflow, I recommend executing a tiered resource allocation strategy utilizing GenAI automation.";
        if (prompt.toLowerCase().includes("proposal")) {
            aiResponse = "Generating client proposal template... Workflow structured into: 1. Executive Summary, 2. Resource Allocation, 3. ROI Projections.";
        } else if (prompt.toLowerCase().includes("risk")) {
            aiResponse = "Q4 Risk Matrix initialized. Identifying operational bottlenecks and suggesting automated compliance tracking.";
        }

        appendMessage("Consultant AI", aiResponse, "ai-message");
    };

    // Event Listener for Manual Input
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (text) {
            processAIPrompt(text);
        }
    });

    // Event Listeners for Workflow Automation Buttons
    actionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const prompt = btn.getAttribute("data-prompt");
            processAIPrompt(prompt);
        });
    });
});