// Teacher Work & Task Management View (Slide 3 & 14)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

export function renderTeacherTasks() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const tasks = state.teacherTasks;

  const pending = tasks.filter(t => !t.completed);
  const done = tasks.filter(t => t.completed);

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Teacher Task & Workload Management</h1>
        <p class="view-subtitle">Stop overload, prioritize lesson prep, worksheets, reviews, and student follow-ups.</p>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <span class="badge badge-amber">${pending.length} Pending</span>
        <span class="badge badge-green">${done.length} Completed</span>
      </div>
    </div>

    <!-- Quick Add Form -->
    <div class="card" style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">Add New Teaching Task</h3>
      <div style="display: grid; grid-template-columns: 1fr 180px 140px 100px; gap: 0.75rem; align-items: center;">
        <input type="text" id="task-title-input" class="form-input" placeholder="e.g. Prepare Worksheet 5 on Async/Await..." />
        
        <select id="task-priority-input" class="form-select">
          <option value="high">🔴 High Priority</option>
          <option value="medium" selected>🟠 Medium Priority</option>
          <option value="low">🔵 Low Priority</option>
        </select>

        <input type="text" id="task-due-input" class="form-input" value="Today 5 PM" />

        <button class="btn btn-teacher" id="btn-create-task" style="height: 100%;">
          Add Task
        </button>
      </div>
    </div>

    <!-- Tasks List -->
    <div class="card">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${tasks.map(task => `
          <div class="deadline-item" style="padding: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <input type="checkbox" ${task.completed ? 'checked' : ''} class="task-page-cb" data-task-id="${task.id}" style="width: 20px; height: 20px; accent-color: var(--teacher-primary); cursor: pointer;" />
              <div>
                <div style="font-size: 0.95rem; ${task.completed ? 'text-decoration: line-through; color: var(--text-faint);' : 'color: var(--text-main); font-weight: 600;'}">
                  ${task.title}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">
                  Due: ${task.due}
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="badge ${task.priority === 'high' ? 'badge-red' : (task.priority === 'medium' ? 'badge-amber' : 'badge-blue')}">
                ${task.priority.toUpperCase()}
              </span>
              <button class="btn-icon delete-task-btn" data-task-id="${task.id}" title="Remove Task" style="padding: 0.35rem; color: var(--color-danger);">
                ✕
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const titleInput = document.getElementById('task-title-input');
  const prioInput = document.getElementById('task-priority-input');
  const dueInput = document.getElementById('task-due-input');

  const handleAdd = () => {
    const text = titleInput.value.trim();
    if (!text) return;
    store.addTeacherTask(text, prioInput.value, dueInput.value);
    showToast({ title: 'Task Created', message: `Added "${text}" to your checklist.`, type: 'success' });
    renderTeacherTasks();
  };

  document.getElementById('btn-create-task').onclick = handleAdd;
  titleInput.onkeydown = (e) => { if (e.key === 'Enter') handleAdd(); };

  container.querySelectorAll('.task-page-cb').forEach(cb => {
    cb.onchange = () => {
      const id = cb.getAttribute('data-task-id');
      store.toggleTeacherTask(id);
      renderTeacherTasks();
    };
  });

  container.querySelectorAll('.delete-task-btn').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-task-id');
      store.deleteTeacherTask(id);
      showToast({ title: 'Task Removed', message: 'Deleted from LocalStorage.', type: 'info' });
      renderTeacherTasks();
    };
  });
}
