// Student Assignments & Submission View (Slides 5 & 20)
import { store } from '../../state.js';
import { openModal, showToast } from '../../notifications.js';
import { sound } from '../../audio.js';

export function renderStudentAssignments() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const user = state.user.student;
  const assignments = state.assignments;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">My Assignments</h1>
        <p class="view-subtitle">Slide 5 & 20: Open assignments, upload your file, submit before deadline and read teacher feedback.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-amber" style="font-weight: 700;">
          🔔 Bell Reminder Active
        </span>
      </div>
    </div>

    <!-- Assignments List matching Slide 20 -->
    <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.5rem;">
      <!-- Assignment 1: Worksheet 3 (Slide 20: Reviewed with 9/10 score) -->
      <div class="card" style="padding: 1.5rem;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.5rem;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">Worksheet 3</h3>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem;">
              Due Friday 5:00 PM | Batch A
            </div>
          </div>
          <span class="status-pill status-reviewed">Reviewed</span>
        </div>

        <p style="font-size: 0.875rem; color: var(--text-main); margin-bottom: 1rem;">
          Solve Q1-Q5 and upload your code file.
        </p>

        <!-- Teacher feedback box from Slide 20 -->
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.775rem; font-weight: 700; color: #1d4ed8; margin-bottom: 0.2rem;">Teacher feedback</div>
          <div style="font-size: 0.875rem; color: #1e3a8a; font-weight: 600;">
            Great work! Score: <strong>9/10</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button class="btn btn-sm btn-outline btn-submit-work" data-assign-id="assign1">
            Resubmit File
          </button>
        </div>
      </div>

      <!-- Assignment 2: HTML Project (Slide 20: Reviewed) -->
      <div class="card" style="padding: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">HTML Project</h3>
            <div style="font-size: 0.775rem; color: var(--text-muted);">Responsive semantic structure</div>
          </div>
          <span class="status-pill status-reviewed">Reviewed</span>
        </div>
      </div>

      <!-- Assignment 3: CSS Quiz (Slide 20: Submitted) -->
      <div class="card" style="padding: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">CSS Quiz</h3>
            <div style="font-size: 0.775rem; color: var(--text-muted);">Selectors & Flexbox questions</div>
          </div>
          <span class="status-pill status-submitted">Submitted</span>
        </div>
      </div>
    </div>

    <!-- Status Lifecycle Banner from Slide 20 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.85rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 1.25rem;">
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">
        Status: <span style="color: #f59e0b;">Pending</span> &gt; <span style="color: #10b981;">Submitted</span> &gt; <span style="color: #2563eb;">Reviewed</span>
      </div>
      <span style="font-size: 0.8rem; color: var(--text-muted);">All deliverables tracked live</span>
    </div>

    <!-- Tip from Slide 20 -->
    <div style="padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700; text-align: center;">
      Tip: a bell reminder appears before the deadline
    </div>
  `;

  // Attach submit modal events
  container.querySelectorAll('.btn-submit-work').forEach(btn => {
    btn.onclick = () => {
      const assignId = btn.getAttribute('data-assign-id');
      const assign = assignments.find(a => a.id === assignId) || assignments[0];
      openStudentSubmitModal(assign);
    };
  });
}

function openStudentSubmitModal(assignment) {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background: var(--bg-card-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <strong style="font-size: 1rem; color: var(--text-main);">${assignment.title}</strong>
        <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.25rem;">
          Due Friday 5:00 PM | Batch A
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Upload your file</label>
        <div style="border: 2px dashed var(--border-default); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center; background: var(--bg-input); cursor: pointer;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
          <strong style="font-size: 0.875rem; color: var(--text-main);">Click to select code file</strong>
          <div style="font-size: 0.75rem; color: #2563eb; margin-top: 0.25rem;">
            Attached: worksheet3_solution.js
          </div>
        </div>
      </div>
    </div>
  `;

  openModal({
    title: `Submit: ${assignment.title}`,
    bodyHtml,
    maxWidth: '520px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Submit before deadline',
        className: 'btn btn-student',
        onClick: () => {
          store.submitAssignmentWork(assignment.id, {
            fileName: 'worksheet3_solution.js',
            codeSnippet: '// Solution code'
          });

          showToast({
            title: 'Submitted!',
            message: 'Your assignment is now submitted.',
            type: 'success'
          });

          renderStudentAssignments();
          return true;
        }
      }
    ]
  });
}
