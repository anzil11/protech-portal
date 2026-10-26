// Teacher Assignment & Submission Tracker View (Slides 5 & 15)
import { store } from '../../state.js';
import { openModal, showToast } from '../../notifications.js';
import { sound } from '../../audio.js';

export function renderTeacherAssignments() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const assignments = state.assignments;
  const currentAssignment = assignments[0]; // Worksheet 3 by default

  const subs = currentAssignment.submissions;
  const submittedCount = subs.filter(s => s.status === 'submitted').length;
  const pendingCount = subs.filter(s => s.status === 'pending').length;
  const lateCount = subs.filter(s => s.status === 'late').length;
  const reviewedCount = subs.filter(s => s.status === 'reviewed').length;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Submission Tracker</h1>
        <p class="view-subtitle">Slide 5 & 15: Teacher creates the assignment once. Students see Pending, Submitted, Reviewed.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        <button class="btn btn-teacher" id="btn-create-assignment">
          <span>+</span> Create Assignment
        </button>
      </div>
    </div>

    <!-- Active Tracker Card matching Slide 5 & 15 -->
    <div class="card" style="padding: 1.5rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
        <div>
          <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-main);">
            ${currentAssignment.title} • ${currentAssignment.batch}
          </h2>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
            ${currentAssignment.instructions.substring(0, 75)}... • Due: <strong>${currentAssignment.deadlineText}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button class="btn btn-sm btn-outline" id="btn-edit-assignment" title="Edit Assignment Details">
            ✏️ Edit
          </button>
          <button class="btn btn-sm btn-danger" id="btn-delete-assignment" title="Delete Assignment">
            🗑️ Delete
          </button>
          <button class="btn btn-teacher" id="btn-send-auto-reminders">
            <span>🔔</span> Send Auto Reminder (${pendingCount + lateCount})
          </button>
        </div>
      </div>

      <!-- Live Submission Table (Slide 5 & 15) -->
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 250px;">Student</th>
              <th style="width: 150px;">Status</th>
              <th style="width: 180px;">Score / Action</th>
              <th style="text-align: right;">Options</th>
            </tr>
          </thead>
          <tbody>
            ${subs.map(sub => `
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div class="user-avatar student" style="width: 30px; height: 30px; font-size: 0.8rem; background: #e0f2fe; color: #0369a1; font-weight: 700;">
                      ${sub.studentName.charAt(0)}
                    </div>
                    <div>
                      <strong style="color: var(--text-main); font-size: 0.9rem;">${sub.studentName}</strong>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="status-pill status-${sub.status}">
                    ${sub.status}
                  </span>
                </td>
                <td>
                  ${sub.status === 'reviewed' ? `
                    <span class="badge badge-green" style="font-weight: 700; font-size: 0.85rem;">${sub.score || '9/10'}</span>
                  ` : (sub.status === 'submitted' ? `
                    <button class="btn btn-sm btn-teacher review-sub-btn" data-student-id="${sub.studentId}">
                      Review now
                    </button>
                  ` : (sub.status === 'late' ? `
                    <span style="color: #ef4444; font-size: 0.8rem; font-weight: 600;">Overdue</span>
                  ` : `
                    <span style="color: var(--text-faint); font-size: 0.8rem;">Waiting...</span>
                  `))}
                </td>
                <td style="text-align: right;">
                  ${sub.status === 'reviewed' ? `
                    <button class="btn btn-sm btn-outline review-sub-btn" data-student-id="${sub.studentId}">
                      Edit Score
                    </button>
                  ` : `
                    <button class="btn btn-sm btn-outline ping-student-btn" data-student-name="${sub.studentName}" data-student-id="${sub.studentId}">
                      Remind
                    </button>
                  `}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Auto reminder banner from Slide 5 & 15 -->
      <div class="auto-reminder-banner">
        <span>🔔</span>
        <span>Auto reminder sent to 2 students who have not submitted</span>
      </div>

      <!-- Bottom Pills Bar from Slide 5 & 15 -->
      <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.25rem;">
        <span class="status-pill status-submitted">
          <strong>${submittedCount}</strong> Submitted
        </span>
        <span class="status-pill status-pending">
          <strong>${pendingCount}</strong> Pending
        </span>
        <span class="status-pill status-late">
          <strong>${lateCount}</strong> Late
        </span>
        <span class="status-pill status-reviewed">
          <strong>${reviewedCount}</strong> Reviewed
        </span>
      </div>
    </div>

    <!-- Slide 5 & 15 Benefit & Tip Footer -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: clear status and on-time submissions</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: Pending, Submitted, Late, Reviewed update live</span>
    </div>
  `;

  // Attach event handlers
  document.getElementById('btn-create-assignment').onclick = () => {
    openCreateAssignmentModal();
  };

  const editBtn = document.getElementById('btn-edit-assignment');
  if (editBtn) {
    editBtn.onclick = () => {
      openEditAssignmentModal(currentAssignment);
    };
  }

  const deleteBtn = document.getElementById('btn-delete-assignment');
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      if (confirm(`Delete "${currentAssignment.title}"? This will update local storage immediately.`)) {
        store.deleteAssignment(currentAssignment.id);
        showToast({ title: 'Deleted', message: 'Assignment removed from LocalStorage.', type: 'info' });
        renderTeacherAssignments();
      }
    };
  }

  document.getElementById('btn-send-auto-reminders').onclick = () => {
    const count = store.sendAutoReminders(currentAssignment.id);
    showToast({
      title: 'Auto Reminders Dispatched',
      message: `Auto reminder notification sent to ${count} students who have not submitted.`,
      type: 'success'
    });
    renderTeacherAssignments();
  };

  container.querySelectorAll('.review-sub-btn').forEach(btn => {
    btn.onclick = () => {
      const studentId = btn.getAttribute('data-student-id');
      const sub = currentAssignment.submissions.find(s => s.studentId === studentId);
      openReviewModal(currentAssignment, sub);
    };
  });

  container.querySelectorAll('.ping-student-btn').forEach(btn => {
    btn.onclick = () => {
      const name = btn.getAttribute('data-student-name');
      store.addNotification({
        title: 'Direct Teacher Ping',
        message: `Prof. Vikram Sen sent you a priority reminder for "${currentAssignment.title}".`,
        role: 'student',
        targetView: 'assignments'
      });
      sound.playAlert();
      showToast({
        title: 'Reminder Sent',
        message: `Notification sent directly to ${name}.`,
        type: 'info'
      });
    };
  });
}

function openCreateAssignmentModal() {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">Assignment Title</label>
        <input type="text" id="new-assign-title" class="form-input" placeholder="e.g. Worksheet 4 - Object Oriented JavaScript" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Target Class / Batch</label>
          <select id="new-assign-batch" class="form-select">
            <option value="Batch A">Batch A</option>
            <option value="Batch B">Batch B</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Deadline</label>
          <input type="text" id="new-assign-deadline" class="form-input" value="Tomorrow 5 PM" />
        </div>
      </div>

      <div class="form-group">
        <label class="switch-label">
          <input type="checkbox" id="new-assign-reminder" class="switch-input" checked />
          <span class="switch-track"></span>
          <div>
            <strong style="font-size: 0.85rem; color: var(--text-main);">Switch on Auto reminders</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Auto reminders go out before deadline</div>
          </div>
        </label>
      </div>

      <div class="form-group">
        <label class="form-label">Write short instructions</label>
        <textarea id="new-assign-instructions" class="form-textarea" placeholder="Write short instructions, then click Publish..."></textarea>
      </div>
    </div>
  `;

  openModal({
    title: 'Create an Assignment',
    bodyHtml,
    maxWidth: '560px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Publish',
        className: 'btn btn-teacher',
        onClick: (container) => {
          const title = container.querySelector('#new-assign-title').value.trim();
          const batch = container.querySelector('#new-assign-batch').value;
          const deadlineText = container.querySelector('#new-assign-deadline').value.trim();
          const autoReminder = container.querySelector('#new-assign-reminder').checked;
          const instructions = container.querySelector('#new-assign-instructions').value.trim();

          if (!title) {
            showToast({ title: 'Validation Error', message: 'Please enter a title.', type: 'warning' });
            return false;
          }

          store.createAssignment({ title, batch, deadlineText, instructions, autoReminder });
          showToast({
            title: 'Assignment Published',
            message: `"${title}" created for ${batch}.`,
            type: 'success'
          });

          renderTeacherAssignments();
          return true;
        }
      }
    ]
  });
}

function openReviewModal(assignment, submission) {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background: var(--bg-card-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <strong style="font-size: 1rem; color: var(--text-main);">${submission.studentName}</strong> • ${assignment.title}
        <div style="font-size: 0.775rem; color: #2563eb; margin-top: 0.25rem;">
          File: <code>${submission.fileName || 'worksheet_submission.js'}</code>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 140px 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Score (e.g. 9/10)</label>
          <input type="text" id="review-score-input" class="form-input" value="${submission.score || '9/10'}" />
        </div>

        <div class="form-group">
          <label class="form-label">Feedback</label>
          <input type="text" id="review-feedback-input" class="form-input" value="${submission.feedback || 'Great work!'}" />
        </div>
      </div>
    </div>
  `;

  openModal({
    title: 'Review Submission',
    bodyHtml,
    maxWidth: '520px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Save & Review',
        className: 'btn btn-teacher',
        onClick: (container) => {
          const score = container.querySelector('#review-score-input').value.trim();
          const feedback = container.querySelector('#review-feedback-input').value.trim();

          store.reviewSubmission(assignment.id, submission.studentId, { score, feedback });
          showToast({
            title: 'Submission Reviewed',
            message: `Graded ${submission.studentName}: ${score}`,
            type: 'success'
          });

          renderTeacherAssignments();
          return true;
        }
      }
    ]
  });
}

function openEditAssignmentModal(assignment) {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">Assignment Title</label>
        <input type="text" id="edit-assign-title" class="form-input" value="${assignment.title}" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Target Class / Batch</label>
          <select id="edit-assign-batch" class="form-select">
            <option value="Batch A" ${assignment.batch === 'Batch A' ? 'selected' : ''}>Batch A</option>
            <option value="Batch B" ${assignment.batch === 'Batch B' ? 'selected' : ''}>Batch B</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Deadline</label>
          <input type="text" id="edit-assign-deadline" class="form-input" value="${assignment.deadlineText}" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Short Instructions</label>
        <textarea id="edit-assign-instructions" class="form-textarea">${assignment.instructions}</textarea>
      </div>
    </div>
  `;

  openModal({
    title: `Edit: ${assignment.title}`,
    bodyHtml,
    maxWidth: '560px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Save Changes (LocalStorage)',
        className: 'btn btn-teacher',
        onClick: (container) => {
          const title = container.querySelector('#edit-assign-title').value.trim();
          const batch = container.querySelector('#edit-assign-batch').value;
          const deadlineText = container.querySelector('#edit-assign-deadline').value.trim();
          const instructions = container.querySelector('#edit-assign-instructions').value.trim();

          if (!title) {
            showToast({ title: 'Validation Error', message: 'Title cannot be empty.', type: 'warning' });
            return false;
          }

          store.updateAssignment(assignment.id, { title, batch, deadlineText, instructions });
          showToast({ title: 'Updated!', message: 'Saved to LocalStorage.', type: 'success' });
          renderTeacherAssignments();
          return true;
        }
      }
    ]
  });
}

