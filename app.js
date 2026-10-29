document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const consultMode = document.getElementById('consult-mode');
    const quickBtns = document.querySelectorAll('.quick-btn');
    const clearBtn = document.getElementById('clear-btn');

    function generateSmartResponse(query, mode) {
        const lowerQuery = query.toLowerCase();
        
        if (mode === 'catalog') {
            if (lowerQuery.includes('inventory') || lowerQuery.includes('status')) {
                return "📦 [Catalog Mode]: Inventory audit complete. Premium items stock is at 84% capacity. 3 SKUs require restock within 5 business days.";
            }
            return "📦 [Catalog Mode]: Catalog query analyzed. Product categorization updated and synchronized with inventory logs successfully.";
        } else if (mode === 'consultation') {
            if (lowerQuery.includes('proposal') || lowerQuery.includes('client')) {
                return "📊 [Consultation Mode]: Strategy proposal drafted. Focus areas: Operational efficiency, digital scaling, and risk mitigation. Ready for client presentation.";
            }
            return "📊 [Consultation Mode]: Market trend evaluation processed. Recommendation: Streamline client onboarding pipelines for Q4.";
        } else if (mode === 'support') {
            if (lowerQuery.includes('ticket') || lowerQuery.includes('resolve')) {
                return "🛠️ [Support Triage]: High-priority ticket flagged, escalated to tier-2 engineering, and automated response dispatched to the client.";
            }
            return "🛠️ [Support Triage]: Support logs reviewed. Average response time improved by 14% today.";
        }

        return "💡 Assistant Logic: Request processed successfully under standard operational guidelines.";
    }

    function addMessage(text, sender, isHtml = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'assistant-message');
        
        if (isHtml) {
            messageDiv.innerHTML = text;
        } else {
            const p = document.createElement('p');
            p.textContent = text;
            messageDiv.appendChild(p);
        }
        
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        return messageDiv;
    }

    function showTypingIndicator() {
        const html = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
        return addMessage(html, 'assistant', true);
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';

        const typingMsg = showTypingIndicator();

        setTimeout(() => {
            chatWindow.removeChild(typingMsg);
            const mode = consultMode.value;
            const response = generateSmartResponse(text, mode);
            addMessage(response, 'assistant');
        }, 800);
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const promptText = btn.getAttribute('data-prompt');
            userInput.value = promptText;
            userInput.focus();
        });
    });

    clearBtn.addEventListener('click', () => {
        chatWindow.innerHTML = `
            <div class="message assistant-message">
                <p>Hello! I am your Intelligent Business Consultant Assistant. Select a mode or type a request below to optimize your workflow.</p>
            </div>
        `;
    });
});