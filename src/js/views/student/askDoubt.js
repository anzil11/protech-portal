// Student "Ask a Doubt" View (Slides 4 & 19)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

export function renderStudentAskDoubt() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const user = state.user.student;
  const myDoubts = state.doubts.filter(d => d.studentId === user.id);
  const activeDoubt = myDoubts[0] || state.doubts[0];

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Ask a Doubt</h1>
        <p class="view-subtitle">Slide 4 & 19: Student sends topic, question, screenshot and code. Teacher moves it New, In Progress, Answered, Resolved.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700;">
          Tracking Active
        </span>
      </div>
    </div>

    <!-- Main Card matching Slide 4 & 19 -->
    <div class="card" style="padding: 1.5rem; margin-bottom: 1.25rem;">
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Topic</label>
        <select id="doubt-topic-select" class="form-select">
          <option value="JavaScript > Arrays" selected>JavaScript > Arrays</option>
          <option value="CSS > Flexbox">CSS > Flexbox</option>
          <option value="Database > SQL Joins">Database > SQL Joins</option>
          <option value="React > Hooks">React > Hooks</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Your question:</label>
        <input type="text" id="doubt-question-input" class="form-input" value="How do I reverse an array in JavaScript?" />
      </div>

      <div class="form-group" style="margin-bottom: 1.25rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Code (optional)</label>
        <textarea id="doubt-code-input" class="form-textarea" style="font-family: var(--font-mono); font-size: 0.85rem; min-height: 80px;">arr.reverse()</textarea>
      </div>

      <!-- Button Row: Attach Screenshot, File Pill, Submit Doubt (Slide 4 & 19) -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-attach-screenshot" style="border: 1px solid var(--border-default);">
            + Attach screenshot
          </button>
          <span class="badge badge-green" style="font-size: 0.775rem;">error.png</span>
        </div>

        <button class="btn btn-student" id="btn-submit-doubt" style="background: #059669; padding: 0.65rem 1.5rem;">
          Submit Doubt
        </button>
      </div>

      <!-- Confirmation Banner (Slide 4 & 19) -->
      <div id="doubt-submitted-banner" style="display: flex; align-items: center; gap: 0.5rem; background: #d1fae5; border: 1px solid #a7f3d0; border-radius: var(--radius-md); padding: 0.75rem 1rem; color: #065f46; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;">
        <span>✓ Doubt #12 submitted - your teacher is notified</span>
      </div>

      <!-- "Track your doubt" Horizontal Stepper (Slide 4 & 19) -->
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <strong style="font-size: 0.875rem; color: var(--text-muted); display: block; margin-bottom: 1rem;">Track your doubt</strong>

        <div style="display: flex; align-items: center; justify-content: space-between; position: relative; max-width: 600px; margin: 0 auto; padding: 1rem 0;">
          <!-- Line -->
          <div style="position: absolute; top: 50%; left: 30px; right: 30px; height: 3px; background: #e2e8f0; transform: translateY(-50%); z-index: 1;"></div>
          <div style="position: absolute; top: 50%; left: 30px; width: ${getStepperWidth(activeDoubt.status)}; height: 3px; background: #059669; transform: translateY(-50%); z-index: 2;"></div>

          <!-- Step 1: New (Red) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #ef4444; border: 3px solid #fff; box-shadow: 0 0 0 2px #ef4444;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #ef4444;">New</span>
          </div>

          <!-- Step 2: In Progress (Orange) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #f59e0b; border: 3px solid #fff; box-shadow: 0 0 0 2px #f59e0b;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #f59e0b;">In Progress</span>
          </div>

          <!-- Step 3: Answered (Blue) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #2563eb; border: 3px solid #fff; box-shadow: 0 0 0 2px #2563eb;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb;">Answered</span>
          </div>

          <!-- Step 4: Resolved (Green) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #10b981; border: 3px solid #fff; box-shadow: 0 0 0 2px #10b981;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #10b981;">Resolved</span>
          </div>
        </div>

        <!-- Teacher reply feedback if available -->
        ${activeDoubt.teacherReply ? `
          <div style="margin-top: 1rem; background: var(--bg-card-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.75rem; font-weight: 700; color: #059669; margin-bottom: 0.2rem;">Teacher reply:</div>
            <div style="font-size: 0.85rem; color: var(--text-main);">${activeDoubt.teacherReply}</div>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 4 & 19 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: no doubt gets lost!</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: every doubt is tracked, none are lost</span>
    </div>
  `;

  // Attach submit handler
  document.getElementById('btn-submit-doubt').onclick = () => {
    const q = document.getElementById('doubt-question-input').value.trim();
    const topic = document.getElementById('doubt-topic-select').value;
    const code = document.getElementById('doubt-code-input').value.trim();

    if (!q) {
      showToast({ title: 'Enter a Question', message: 'Please describe your doubt.', type: 'warning' });
      return;
    }

    store.addDoubt({
      topic,
      question: q,
      code,
      screenshotName: 'error.png'
    });

    sound.playSuccess();
    showToast({
      title: 'Doubt #12 submitted',
      message: 'Your teacher has been notified on their board.',
      type: 'success'
    });

    renderStudentAskDoubt();
  };
}

function getStepperWidth(status) {
  if (status === 'new') return '0%';
  if (status === 'in_progress') return '33%';
  if (status === 'answered') return '66%';
  if (status === 'resolved') return '100%';
  return '33%';
}
