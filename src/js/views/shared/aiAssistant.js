// AI Study & Teaching Assistant View (Slide 9)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

export function renderAiAssistant() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const isTeacher = state.currentRole === 'teacher';

  const teacherPresets = [
    { label: '📝 Generate Worksheet', prompt: 'Generate a 5-question worksheet on JavaScript Array methods with problem scenarios.' },
    { label: '⏱️ Create Quiz', prompt: 'Make 3 quiz questions on JS arrays with multiple choice options and answer keys.' },
    { label: '💻 Coding Exercise', prompt: 'Create an algorithmic coding exercise for beginners on String Reversal with starter code and test cases.' },
    { label: '📖 Summarize Topic', prompt: 'Summarize the core differences between CSS Flexbox and CSS Grid for quick student reference.' },
    { label: '💡 Suggest Assignment', prompt: 'Suggest an engaging mini-project assignment for students learning modern REST APIs and async/await.' }
  ];

  const studentPresets = [
    { label: '💡 Explain Concept', prompt: 'Explain the difference between mutating and non-mutating array methods in simple terms.' },
    { label: '🔍 Give Hint (No Spoilers)', prompt: 'I am stuck reversing an array without using .reverse(). Can you give me a conceptual hint?' },
    { label: '🎯 Practice Questions', prompt: 'Give me 2 quick practice questions on CSS centering techniques to test my knowledge.' },
    { label: '📚 Summarize Notes', prompt: 'Summarize how Javascript Promises handle rejected states with catch and finally.' },
    { label: '📅 Revision Plan', prompt: 'Create a 3-day rapid revision strategy for my upcoming web development exam.' }
  ];

  const presets = isTeacher ? teacherPresets : studentPresets;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">${isTeacher ? 'AI Teaching Assistant' : 'AI Study Assistant'}</h1>
        <p class="view-subtitle">
          ${isTeacher ? 'Draft worksheets, quizzes, and coding exercises. You always review, edit and decide.' : 'Get clear concept explanations, hints without spoilers, and personalized revision help.'}
        </p>
      </div>

      <!-- Helper Badge Principle from Slide 9 -->
      <div class="ai-helper-badge">
        <span>🤖</span>
        <span>${isTeacher ? 'AI Helper Badge • Teacher Reviews & Decides' : 'AI Study Partner • Guided Hints'}</span>
      </div>
    </div>

    <div class="ai-assistant-container">
      <!-- Left Panel: Presets & Tools -->
      <div class="ai-presets-panel">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">
          ${isTeacher ? 'Teacher Work Tools' : 'Study Accelerators'}
        </h4>
        <p style="font-size: 0.775rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          One-click prompt templates based on curriculum goals:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${presets.map(p => `
            <button class="btn btn-secondary ai-preset-btn" data-prompt="${p.prompt}" style="text-align: left; justify-content: flex-start; font-size: 0.8rem; padding: 0.65rem 0.85rem;">
              ${p.label}
            </button>
          `).join('')}
        </div>

        <div style="margin-top: auto; padding: 1rem; background: var(--bg-card-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.75rem;">
          <strong style="color: var(--brand-accent);">⚡ Slide 9 Golden Rule:</strong>
          <p style="color: var(--text-muted); margin-top: 0.35rem; line-height: 1.4;">
            "AI should ASSIST the teacher, not replace the teacher. It is a helper badge, never a boss badge."
          </p>
        </div>
      </div>

      <!-- Right Panel: Interactive Chat & Outputs -->
      <div class="ai-chat-panel">
        <div class="ai-chat-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></div>
            <strong style="font-size: 0.875rem;">Protech Intelligent Engine</strong>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Context-aware & pedagogical</span>
        </div>

        <div class="ai-messages-area" id="ai-chat-messages">
          ${state.aiChatHistory.map(m => `
            <div class="ai-msg ${m.sender}">
              <div class="ai-msg-avatar">${m.sender === 'assistant' ? '🤖' : (isTeacher ? '👨‍🏫' : '👩‍🎓')}</div>
              <div class="ai-msg-content">
                <div style="white-space: pre-wrap;">${m.text}</div>
                <div style="font-size: 0.675rem; opacity: 0.6; margin-top: 0.5rem; text-align: right;">${m.timestamp}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Input Area -->
        <div class="ai-input-area">
          <input type="text" id="ai-prompt-input" class="form-input" placeholder="${isTeacher ? 'Ask the AI helper (e.g. Make 3 quiz questions on JS arrays)...' : 'Ask for an explanation or hint...'}" />
          <button class="btn ${isTeacher ? 'btn-teacher' : 'btn-student'}" id="ai-send-btn">
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const chatContainer = document.getElementById('ai-chat-messages');
  const inputEl = document.getElementById('ai-prompt-input');
  const sendBtn = document.getElementById('ai-send-btn');

  const scrollToBottom = () => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };
  scrollToBottom();

  const handleSend = (textToSend = null) => {
    const text = (textToSend || inputEl.value).trim();
    if (!text) return;

    sound.playSubmit();
    inputEl.value = '';

    // Add user message
    store.addAiChatMessage('user', text);
    renderAiAssistant();

    // Generate intelligent pedagogical response
    setTimeout(() => {
      const reply = generateAiPedagogicalResponse(text, isTeacher);
      store.addAiChatMessage('assistant', reply);
      sound.playSuccess();
      renderAiAssistant();
      showToast({
        title: isTeacher ? 'AI Helper Response Ready' : 'AI Explanation Ready',
        message: 'Generated personalized curriculum material.',
        type: 'info'
      });
    }, 600);
  };

  sendBtn.onclick = () => handleSend();
  inputEl.onkeydown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  container.querySelectorAll('.ai-preset-btn').forEach(btn => {
    btn.onclick = () => {
      const prompt = btn.getAttribute('data-prompt');
      handleSend(prompt);
    };
  });
}

// Generates high quality contextual responses matching Slide 9
function generateAiPedagogicalResponse(prompt, isTeacher) {
  const p = prompt.toLowerCase();

  if (p.includes('quiz') || p.includes('question')) {
    return `Here is a draft quiz for you:

**Q1. Which method adds an item to the end of an array?**
A) unshift()
B) push()  ✓
C) concat()
D) pop()
*Explanation: .push() appends elements to the end and returns new array length.*

**Q2. What does [1, 2, 3].reverse() return?**
A) [3, 2, 1] and leaves original unchanged
B) [3, 2, 1] and reverses original array in place  ✓
C) A shallow clone
*Explanation: reverse() mutates the calling array in place.*

**Q3. How do you find the index of the first matching element?**
A) .find()
B) .findIndex()  ✓
C) .filter()
*Explanation: findIndex returns the first matched index or -1 if not found.*

${isTeacher ? '💡 *Teacher note: You can copy this into Worksheet 3 or publish it as a quiz!*' : '💡 *Study tip: Try testing these methods in the Coding Practice Portal!*'}`;
  }

  if (p.includes('worksheet') || p.includes('exercise')) {
    return `### 📋 Practical Worksheet: JavaScript Array Mastery
1. **Immutable Reversal**: Write a helper function that takes an array and reverses it without using .reverse().
2. **Filter & Transform**: Given an array of student objects \`{ name, score, batch }\`, return names of students with score >= 80 in uppercase.
3. **Array Flattening**: How does \`Array.prototype.flatMap()\` differ from \`.map()\` followed by \`.flat()\`?
4. **Frequency Counter**: Count the occurrences of each word in a string using \`reduce()\`.
5. **Memory Reference**: Explain what happens to \`const b = a\` when \`a.push(10)\` is executed.

*AI helper note: Ready for teacher review and classroom distribution.*`;
  }

  if (p.includes('hint') || p.includes('stuck')) {
    return `🔍 **Conceptual Hint (No Spoilers!):**
Think about how you read a book backwards:
- What is the index of the very last item in an array? (Hint: \`arr.length - 1\`).
- How can you construct a new empty array and walk through the original array starting from the back towards index 0?
- Alternatively, think about swapping elements from both ends moving towards the middle!`;
  }

  return `Here is the pedagogical summary:

- **Key Concept**: Understand how references work in memory vs primitive values.
- **Common Pitfall**: Mutating original arrays unintentionally when rendering in reactive UI frameworks.
- **Recommended Fix**: Use modern immutable operations: \`[...arr].reverse()\`, \`arr.slice()\`, or \`arr.toReversed()\`.
- **Next Step**: Test your code in the Coding Practice Portal to verify all test cases pass!`;
}
