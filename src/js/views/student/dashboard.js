// Student Dashboard View
import { store } from '../../state.js';

export function renderStudentDashboard() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const user = state.user.student;
  const studyPlanner = state.studyPlanner;

  // Compute student specific metrics
  const myPendingAssignments = state.assignments.filter(a => {
    const sub = a.submissions.find(s => s.studentId === user.id);
    return !sub || sub.status === 'pending' || sub.status === 'late';
  });

  const myDoubts = state.doubts.filter(d => d.studentId === user.id);
  const resolvedDoubts = myDoubts.filter(d => d.status === 'resolved').length;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Welcome back, ${user.name}! 🌟</h1>
        <p class="view-subtitle">Batch A • Keep up your ${user.streakDays}-day learning streak and stay exam ready.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-student" id="dash-smart-plan-btn">
          <span>📅</span> View My Study Plan
        </button>
        <button class="btn btn-primary" id="dash-ask-doubt-btn">
          <span>❓</span> Ask a Doubt
        </button>
      </div>
    </div>

    <!-- Metric Cards Row -->
    <div class="metrics-grid-3">
      <div class="metric-card green">
        <div>
          <div class="metric-label">Exam Readiness</div>
          <div class="metric-value" style="color: var(--student-primary);">${studyPlanner.examReadiness}%</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Exam target: ${studyPlanner.examDate}</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--student-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
      </div>

      <div class="metric-card purple">
        <div>
          <div class="metric-label">Code Practice Solved</div>
          <div class="metric-value">${state.studentStats.solved}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Success score: ${state.studentStats.scorePercent}%</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--teacher-primary-light);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
      </div>

      <div class="metric-card amber">
        <div>
          <div class="metric-label">Doubts Resolved</div>
          <div class="metric-value">${resolvedDoubts} / ${myDoubts.length}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Fast teacher feedback loop</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--color-warning);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
      </div>
    </div>

    <!-- 2 Column Layout -->
    <div class="dashboard-columns">
      <!-- Left: Today's Recommended Study Plan -->
      <div class="card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div>
            <span class="badge badge-green" style="margin-bottom: 0.25rem;">SMART PLANNER</span>
            <h3 style="font-size: 1.15rem; font-weight: 700;">Weekly Study Schedule</h3>
          </div>
          <button class="btn btn-sm btn-outline" id="go-to-planner-btn">Adjust Plan</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${studyPlanner.schedule.map(session => `
            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.85rem;">
                <span class="badge ${session.completed ? 'badge-green' : 'badge-amber'}" style="min-width: 48px; text-align: center; justify-content: center;">
                  ${session.day}
                </span>
                <div>
                  <strong style="color: var(--text-main); font-size: 0.9rem;">${session.subject}</strong>
                  <div style="font-size: 0.775rem; color: var(--text-muted);">${session.topic}</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.75rem; color: var(--text-faint);">${session.duration}</span>
                ${session.completed ? '<span style="color: var(--student-primary); font-size: 0.85rem;">✓ Done</span>' : '<span style="color: var(--color-warning); font-size: 0.75rem;">Pending</span>'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right: Pending Submissions & Coding Challenge -->
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Coding Practice Banner -->
        <div class="card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border-color: rgba(16, 185, 129, 0.3);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <span class="badge badge-green">DAILY CODING CHALLENGE</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Problem #1</span>
          </div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.35rem;">Reverse an Array</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
            Test your knowledge of immutability and modern array techniques with instant test evaluation.
          </p>
          <button class="btn btn-student" id="dash-practice-now-btn" style="width: 100%;">
            Open Code Editor & Test Cases ➔
          </button>
        </div>

        <!-- Assignments Status -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <h4 style="font-size: 1rem; font-weight: 700;">My Assignments</h4>
            <button class="btn btn-sm btn-outline" id="dash-view-all-assign">View All</button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            ${state.assignments.map(assign => {
              const mySub = assign.submissions.find(s => s.studentId === user.id);
              const status = mySub ? mySub.status : 'pending';
              return `
                <div class="deadline-item" style="padding: 0.75rem 1rem;">
                  <div>
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-main);">${assign.title}</div>
                    <div style="font-size: 0.725rem; color: var(--text-muted);">${assign.deadlineText}</div>
                  </div>
                  <span class="status-pill status-${status}">${status}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('dash-smart-plan-btn').onclick = () => store.setView('studyPlan');
  document.getElementById('dash-ask-doubt-btn').onclick = () => store.setView('askDoubt');
  document.getElementById('go-to-planner-btn').onclick = () => store.setView('studyPlan');
  document.getElementById('dash-practice-now-btn').onclick = () => store.setView('codingPractice');
  document.getElementById('dash-view-all-assign').onclick = () => store.setView('assignments');
}
