// Student Coding Practice Portal (Slides 7 & 21)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

let activeProblemIndex = 0;
let lastExecutionResults = null;

export function renderStudentCodingPractice() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const problems = state.codingProblems;
  const currentProblem = problems[activeProblemIndex] || problems[0];
  const stats = state.studentStats;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Coding Practice Portal</h1>
        <p class="view-subtitle">Slide 7 & 21: Students solve, run and submit code. Practice and progress in one place.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700; font-size: 0.8rem;">
          ⚡ Live Execution Engine
        </span>
      </div>
    </div>

    <!-- Main Two-Pane Layout matching Slide 7 & 21 -->
    <div class="code-practice-layout">
      <!-- Left Pane: Problem Details & Progress -->
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">
              ${currentProblem.title}
            </h2>
            <span class="badge badge-green" style="font-weight: 700;">${currentProblem.difficulty}</span>
          </div>

          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.4; margin-bottom: 0.85rem;">
            Return the array in reverse order.
          </p>

          <div style="background: var(--bg-card-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
            <code style="font-family: var(--font-mono); font-size: 0.85rem; color: #2563eb; font-weight: 600;">
              [1, 2, 3] -> [3, 2, 1]
            </code>
          </div>

          <!-- Problem Switcher -->
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            ${problems.map((p, idx) => `
              <button class="btn btn-sm ${idx === activeProblemIndex ? 'btn-primary' : 'btn-secondary'} switch-prob-btn" data-idx="${idx}" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
                #${idx + 1} ${p.title}
              </button>
            `).join('')}
          </div>

          <!-- "Your progress" Panel (Exact match to Slide 7 & 21) -->
          <div style="padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.95rem; color: var(--text-main); display: block; margin-bottom: 0.65rem;">Your progress</strong>

            <div class="progress-boxes-3">
              <div class="progress-stat-box cyan">
                <div style="font-size: 0.75rem; font-weight: 600;">Solved</div>
                <div class="progress-box-num">${stats.solved}</div>
              </div>

              <div class="progress-stat-box pink">
                <div style="font-size: 0.75rem; font-weight: 600;">Failed</div>
                <div class="progress-box-num">${stats.failed}</div>
              </div>

              <div class="progress-stat-box purple">
                <div style="font-size: 0.75rem; font-weight: 600;">Score</div>
                <div class="progress-box-num">${stats.scorePercent}%</div>
              </div>
            </div>

            <!-- Weak topics (Slide 21 Tip) -->
            <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.75rem;">
              <span>Focus areas: </span>
              ${stats.weakTopics.map(w => `<span class="badge badge-amber" style="margin-left: 0.2rem; font-size: 0.7rem;">${w}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Pane: Code Editor & Output (Slide 7 & 21) -->
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="code-editor-container">
          <div class="editor-header">
            <div class="editor-tab">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span>solution.js</span>
            </div>
            <button class="btn btn-sm btn-outline" id="editor-reset-btn" style="color: #94a3b8; font-size: 0.7rem; padding: 0.15rem 0.45rem;">
              Reset
            </button>
          </div>

          <textarea id="code-practice-editor" class="editor-textarea" spellcheck="false" style="height: 200px;">${store.getProblemDraft(currentProblem.id) || currentProblem.starterCode}</textarea>

          <div class="editor-actions-bar">
            <span style="font-size: 0.75rem; color: #94a3b8;">ES6 JavaScript Engine • Auto-saved to LocalStorage</span>

            <div style="display: flex; gap: 0.65rem;">
              <button class="btn btn-student" id="btn-run-code" style="background: #10b981;">
                <span>▶ Run Code</span>
              </button>
              <button class="btn btn-primary" id="btn-submit-code" style="background: #2563eb;">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Output Box matching Slide 7 & 21 -->
        <div class="test-results-box" id="test-results-container" style="background: var(--bg-card); border-radius: var(--radius-lg); padding: 1.25rem;">
          ${renderTestCasesOutput(currentProblem, lastExecutionResults)}
        </div>
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 7 & 21 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: practice and progress in one place</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: your progress panel shows weak topics</span>
    </div>
  `;

  // Auto-save code draft on typing
  const editor = document.getElementById('code-practice-editor');
  editor.oninput = () => {
    store.saveProblemDraft(currentProblem.id, editor.value);
  };

  // Problem Switcher
  container.querySelectorAll('.switch-prob-btn').forEach(btn => {
    btn.onclick = () => {
      sound.playClick();
      activeProblemIndex = Number(btn.getAttribute('data-idx'));
      lastExecutionResults = null;
      renderStudentCodingPractice();
    };
  });

  // Reset
  document.getElementById('editor-reset-btn').onclick = () => {
    sound.playClick();
    store.saveProblemDraft(currentProblem.id, currentProblem.starterCode);
    editor.value = currentProblem.starterCode;
    lastExecutionResults = null;
    document.getElementById('test-results-container').innerHTML = renderTestCasesOutput(currentProblem, null);
  };

  // Run Code
  document.getElementById('btn-run-code').onclick = () => {
    const code = editor.value;
    store.saveProblemDraft(currentProblem.id, code);
    runTests(code, currentProblem, false);
  };

  // Submit Code
  document.getElementById('btn-submit-code').onclick = () => {
    const code = editor.value;
    store.saveProblemDraft(currentProblem.id, code);
    runTests(code, currentProblem, true);
  };
}

function runTests(code, problem, isSubmitting = false) {
  sound.playSubmit();

  const results = [];
  let allPassed = true;

  try {
    problem.testCases.forEach((tc, idx) => {
      try {
        const evalCode = `
          ${code};
          return (${tc.code});
        `;
        const fn = new Function(evalCode);
        const passed = Boolean(fn());
        if (!passed) allPassed = false;
        results.push({ label: `Test ${idx + 1} passed`, passed, error: null });
      } catch (err) {
        allPassed = false;
        results.push({ label: `Test ${idx + 1} failed`, passed: false, error: err.message });
      }
    });
  } catch (globalErr) {
    allPassed = false;
    problem.testCases.forEach((tc, idx) => {
      results.push({ label: `Test ${idx + 1} failed`, passed: false, error: globalErr.message });
    });
  }

  lastExecutionResults = { results, allPassed, submitted: isSubmitting };

  const resultsBox = document.getElementById('test-results-container');
  if (resultsBox) {
    resultsBox.innerHTML = renderTestCasesOutput(problem, lastExecutionResults);
  }

  if (allPassed) {
    sound.playSuccess();
    showToast({
      title: 'All tests passed! ✓',
      message: 'Clean solution.',
      type: 'success'
    });
  } else {
    sound.playAlert();
  }

  if (isSubmitting) {
    store.recordProblemAttempt(problem.id, allPassed);
  }
}

function renderTestCasesOutput(problem, execution) {
  if (!execution) {
    return `
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.65rem;">
        Output
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.85rem; color: #10b981;">
        <div>✓ Test 1 passed</div>
        <div>✓ Test 2 passed</div>
        <div>✓ Test 3 passed</div>
      </div>
      <div style="margin-top: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
        <span style="font-weight: 700; color: #10b981; font-size: 0.85rem;">All tests passed</span>
        <span class="badge badge-blue">Ready</span>
      </div>
    `;
  }

  const { results, allPassed, submitted } = execution;

  return `
    <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.65rem;">
      Output
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.85rem;">
      ${results.map(r => `
        <div style="color: ${r.passed ? '#10b981' : '#ef4444'};">
          ${r.passed ? '✓' : '✕'} ${r.label}
        </div>
      `).join('')}
    </div>
    <div style="margin-top: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
      <span style="font-weight: 700; color: ${allPassed ? '#10b981' : '#ef4444'}; font-size: 0.85rem;">
        ${allPassed ? 'All tests passed' : 'Some tests failed'}
      </span>
      ${submitted ? `<span class="badge badge-blue">Submitted</span>` : ''}
    </div>
  `;
}
