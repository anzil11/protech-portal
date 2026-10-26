// Teacher Dashboard View (Slides 3 & 14)
import { store } from '../../state.js';
import { sound } from '../../audio.js';

export function renderTeacherDashboard() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const user = state.user.teacher;

  // Counts matching Slide 3 & 14
  const todayClassesCount = 3;
  const pendingTasksCount = 5;
  const newDoubtsCount = 7;
  const tasksDonePercent = 80;
  const checkedPercent = 60;

  container.innerHTML = `
    <!-- View Header -->
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Welcome, Teacher!</h1>
        <p class="view-subtitle">Today's classes, pending tasks, doubts, deadlines and priority.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        <button class="btn btn-teacher" id="dash-new-assign-btn">
          <span>+</span> Create Assignment
        </button>
        <button class="btn btn-secondary" id="dash-open-doubts-btn">
          <span>💬</span> Doubt Board (${newDoubtsCount})
        </button>
      </div>
    </div>

    <!-- Top 3 Metric Cards (Exact match to Slide 3 & 14) -->
    <div class="metrics-grid-3">
      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-blue">
          📚
        </div>
        <div>
          <div class="metric-stat-label">Today's Classes</div>
          <div class="metric-stat-number" style="color: #2563eb;">${todayClassesCount}</div>
        </div>
      </div>

      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-amber">
          📝
        </div>
        <div>
          <div class="metric-stat-label">Pending Tasks</div>
          <div class="metric-stat-number" style="color: #d97706;">${pendingTasksCount}</div>
        </div>
      </div>

      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-red">
          💬
        </div>
        <div>
          <div class="metric-stat-label">New Doubts</div>
          <div class="metric-stat-number" style="color: #ef4444;">${newDoubtsCount}</div>
        </div>
      </div>
    </div>

    <!-- 2 Columns: Overview Progress & Deadlines vs Tasks -->
    <div class="dashboard-columns">
      <!-- Left Column: This Week's Overview + Deadlines -->
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <!-- This Week's Overview (Slide 3 & 14) -->
        <div class="card">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text-main);">
            This Week's Overview
          </h3>
          
          <div class="progress-container" style="margin-bottom: 1.25rem;">
            <div class="progress-header">
              <span>Tasks completed</span>
              <span style="color: #2563eb; font-weight: 700;">${tasksDonePercent}%</span>
            </div>
            <div class="progress-bar-bg" style="height: 12px;">
              <div class="progress-bar-fill blue" style="width: ${tasksDonePercent}%; background: #2563eb;"></div>
            </div>
          </div>

          <div class="progress-container">
            <div class="progress-header">
              <span>Assignments checked</span>
              <span style="color: #10b981; font-weight: 700;">${checkedPercent}%</span>
            </div>
            <div class="progress-bar-bg" style="height: 12px;">
              <div class="progress-bar-fill green" style="width: ${checkedPercent}%; background: #10b981;"></div>
            </div>
          </div>
        </div>

        <!-- Upcoming Deadlines (Slide 3 & 14) -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Upcoming Deadlines</h3>
            <span class="badge badge-amber">Priority</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Worksheet 3</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Tomorrow 5 PM</span>
            </div>

            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Project Review</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Friday</span>
            </div>

            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Batch A Quiz</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Next Monday</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Teacher Tasks Manager -->
      <div class="card" style="display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Teacher Tasks</h3>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${state.teacherTasks.filter(t => !t.completed).length} active</span>
        </div>

        <!-- Quick Add Task -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <input type="text" id="quick-task-input" class="form-input" placeholder="Add task or worksheet item..." />
          <button class="btn btn-teacher" id="quick-task-add-btn">Add</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem; flex: 1;">
          ${state.teacherTasks.map(task => `
            <div class="deadline-item" style="cursor: pointer; padding: 0.75rem 1rem;" data-task-id="${task.id}">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} class="task-checkbox" data-task-id="${task.id}" style="cursor: pointer; width: 18px; height: 18px; accent-color: var(--teacher-primary);" />
                <span style="font-size: 0.85rem; ${task.completed ? 'text-decoration: line-through; color: var(--text-faint);' : 'color: var(--text-main); font-weight: 500;'}">
                  ${task.title}
                </span>
              </div>
              <span class="badge ${task.priority === 'high' ? 'badge-red' : (task.priority === 'medium' ? 'badge-amber' : 'badge-blue')}">
                ${task.due}
              </span>
            </div>
          `).join('')}
        </div>

        <!-- Benefit Banner from Slide 3 & 14 -->
        <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.825rem; font-weight: 700; text-align: center;">
          Benefit: better time management, nothing missed
        </div>
      </div>
    </div>
  `;

  // Attach event handlers
  document.getElementById('dash-new-assign-btn').onclick = () => {
    store.setView('assignments');
  };

  document.getElementById('dash-open-doubts-btn').onclick = () => {
    store.setView('doubts');
  };

  const taskInput = document.getElementById('quick-task-input');
  const addTask = () => {
    const text = taskInput.value.trim();
    if (text) {
      store.addTeacherTask(text, 'medium', 'Today');
      taskInput.value = '';
      renderTeacherDashboard();
    }
  };

  document.getElementById('quick-task-add-btn').onclick = addTask;
  taskInput.onkeydown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  container.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.onchange = (e) => {
      e.stopPropagation();
      const id = cb.getAttribute('data-task-id');
      store.toggleTeacherTask(id);
      renderTeacherDashboard();
    };
  });
}
