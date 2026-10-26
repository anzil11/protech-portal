// Teacher Doubt Board View (Slides 4 & 16)
import { store } from '../../state.js';
import { openModal, showToast } from '../../notifications.js';
import { sound } from '../../audio.js';

let selectedDoubtId = 'd1'; // Riya - JS Arrays by default matching Slide 16

export function renderTeacherDoubts() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const doubts = state.doubts;

  const activeDoubt = doubts.find(d => d.id === selectedDoubtId) || doubts[0];

  const cols = [
    { id: 'new', label: 'New', count: doubts.filter(d => d.status === 'new').length, headerClass: 'col-red' },
    { id: 'in_progress', label: 'In Progress', count: doubts.filter(d => d.status === 'in_progress').length, headerClass: 'col-amber' },
    { id: 'answered', label: 'Answered', count: doubts.filter(d => d.status === 'answered').length, headerClass: 'col-blue' },
    { id: 'resolved', label: 'Resolved', count: doubts.filter(d => d.status === 'resolved').length, headerClass: 'col-green' }
  ];

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Doubt Board</h1>
        <p class="view-subtitle">Slide 4 & 16: Four-column board. Drag a new doubt into In Progress, reply and resolve.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-red" style="padding: 0.35rem 0.75rem; font-weight: 700;">
          🔴 ${cols[0].count} New Doubts Waiting
        </span>
      </div>
    </div>

    <!-- 4-Column Kanban Board (Slide 4 & 16) -->
    <div class="kanban-board-slide">
      ${cols.map(col => `
        <div class="kanban-column-slide">
          <div class="kanban-col-header-slide ${col.headerClass}">
            <span>${col.label}</span>
            <span style="font-size: 0.75rem; background: rgba(255,255,255,0.3); padding: 0.1rem 0.45rem; border-radius: var(--radius-full);">${col.count}</span>
          </div>

          <div class="kanban-card-body">
            ${doubts.filter(d => d.status === col.id).map(doubt => `
              <div class="doubt-card-slide ${doubt.id === selectedDoubtId ? 'active-selected-doubt' : ''}" data-doubt-id="${doubt.id}" style="${doubt.id === selectedDoubtId ? 'border-color: #2563eb; background: #eff6ff;' : ''}">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <strong style="font-size: 0.875rem; color: var(--text-main);">${doubt.studentName}</strong>
                  <span style="font-size: 0.7rem; color: var(--text-muted);">${doubt.createdAt}</span>
                </div>
                <div style="font-size: 0.75rem; font-weight: 600; color: #2563eb;">${doubt.topic}</div>
                <div style="font-size: 0.775rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                  ${doubt.question}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Bottom Inline Reply Tray (Slide 16) -->
    <div class="doubt-reply-tray">
      <div style="flex-shrink: 0; min-width: 180px;">
        <div style="font-size: 0.725rem; font-weight: 600; color: var(--text-muted);">ACTIVE DOUBT:</div>
        <strong style="font-size: 0.9rem; color: var(--text-main);">Reply to ${activeDoubt.studentName} - ${activeDoubt.topic}</strong>
      </div>

      <input type="text" id="inline-doubt-reply-input" class="form-input" placeholder="Type reply (e.g. Use arr.reverse() or [...arr].reverse())..." value="${activeDoubt.teacherReply || 'Use arr.reverse() or [...arr].reverse()'}" style="flex: 1;" />

      <button class="btn btn-primary" id="btn-send-doubt-reply">
        <span>Send</span>
      </button>

      <button class="btn btn-student" id="btn-resolve-doubt-quick">
        <span>Resolve</span>
      </button>

      <button class="btn btn-danger btn-sm" id="btn-delete-doubt" title="Delete Doubt from LocalStorage">
        <span>🗑️</span>
      </button>
    </div>

    <!-- Notification Alert from Slide 16 -->
    <div id="doubt-resolved-alert" style="display: none; margin-top: 0.85rem; padding: 0.75rem 1rem; background: #d1fae5; border: 1px solid #a7f3d0; border-radius: var(--radius-md); color: #065f46; font-size: 0.825rem; font-weight: 600;">
      ✓ Notification sent to ${activeDoubt.studentName} - doubt resolved!
    </div>

    <!-- Tip & Benefit Footer -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: no doubt gets lost!</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: the red badge shows new doubts waiting</span>
    </div>
  `;

  // Select card
  container.querySelectorAll('.doubt-card-slide').forEach(card => {
    card.onclick = () => {
      sound.playClick();
      selectedDoubtId = card.getAttribute('data-doubt-id');
      renderTeacherDoubts();
    };
  });

  // Send Reply
  const replyInput = document.getElementById('inline-doubt-reply-input');
  const alertEl = document.getElementById('doubt-resolved-alert');

  document.getElementById('btn-send-doubt-reply').onclick = () => {
    const text = replyInput.value.trim();
    if (text) {
      store.replyToDoubt(activeDoubt.id, text);
      showToast({
        title: 'Reply Dispatched',
        message: `Answer sent to ${activeDoubt.studentName}.`,
        type: 'success'
      });
      renderTeacherDoubts();
    }
  };

  document.getElementById('btn-resolve-doubt-quick').onclick = () => {
    const text = replyInput.value.trim();
    if (text) store.replyToDoubt(activeDoubt.id, text);
    store.updateDoubtStatus(activeDoubt.id, 'resolved');
    alertEl.style.display = 'block';
    sound.playSuccess();
    showToast({
      title: 'Doubt Resolved',
      message: `Notification sent to ${activeDoubt.studentName} - doubt resolved!`,
      type: 'success'
    });
    setTimeout(() => {
      renderTeacherDoubts();
    }, 600);
  };

  const delDoubtBtn = document.getElementById('btn-delete-doubt');
  if (delDoubtBtn) {
    delDoubtBtn.onclick = () => {
      if (confirm(`Delete doubt by ${activeDoubt.studentName} on "${activeDoubt.topic}"?`)) {
        store.deleteDoubt(activeDoubt.id);
        showToast({ title: 'Doubt Deleted', message: 'Removed from LocalStorage.', type: 'info' });
        renderTeacherDoubts();
      }
    };
  }
}
