// Dynamic Role Sidebar Component
import { store } from '../state.js';
import { openWalkthroughModal } from './walkthrough.js';

export function renderSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  if (!sidebar) return;

  const state = store.state;
  const currentRole = state.currentRole;
  const activeView = state.activeView;

  // Compute live badges
  const newDoubtsCount = state.doubts.filter(d => d.status === 'new').length;
  const pendingAssignmentsCount = state.assignments.reduce((acc, a) => {
    return acc + a.submissions.filter(s => s.status === 'pending' || s.status === 'late').length;
  }, 0);

  let navItems = [];

  if (currentRole === 'teacher') {
    navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'assignments', label: 'Assignments', icon: '📋', badge: pendingAssignmentsCount > 0 ? `${pendingAssignmentsCount} pending` : null },
      { id: 'doubts', label: 'Doubt Board', icon: '💬', badge: newDoubtsCount > 0 ? `${newDoubtsCount} new` : null, badgeClass: 'badge-red' },
      { id: 'tasks', label: 'Teacher Tasks', icon: '✅' },
      { id: 'knowledgeHub', label: 'Knowledge Hub', icon: '📚' },
      { id: 'aiAssistant', label: 'AI Assistant', icon: '🤖', badge: 'Helper', badgeClass: 'badge-purple' }
    ];
  } else if (currentRole === 'student') {
    navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: '🎯' },
      { id: 'studyPlan', label: 'Study Plan', icon: '📅', badge: 'Smart' },
      { id: 'askDoubt', label: 'Ask a Doubt', icon: '❓' },
      { id: 'assignments', label: 'Assignments', icon: '📝' },
      { id: 'codingPractice', label: 'Coding Practice', icon: '💻', badge: 'Live Runner', badgeClass: 'badge-green' },
      { id: 'knowledgeHub', label: 'Knowledge Hub', icon: '📚' },
      { id: 'aiAssistant', label: 'AI Study Helper', icon: '🤖' }
    ];
  } else {
    // Admin
    navItems = [
      { id: 'dashboard', label: 'System Overview', icon: '🛡️' },
      { id: 'knowledgeHub', label: 'Knowledge Hub', icon: '📚' },
      { id: 'doubts', label: 'All Doubts Monitor', icon: '💬' },
      { id: 'assignments', label: 'Assignment Audits', icon: '📋' }
    ];
  }

  // Update container class for role-themed accents
  document.body.classList.remove('teacher-active', 'student-active', 'admin-active');
  document.body.classList.add(`${currentRole}-active`);

  sidebar.innerHTML = `
    <div class="sidebar-section-title">
      ${currentRole.toUpperCase()} PORTAL
    </div>

    <nav style="display: flex; flex-direction: column;">
      ${navItems.map(item => `
        <div class="nav-item ${activeView === item.id ? 'active' : ''}" data-view="${item.id}">
          <span class="nav-item-icon">${item.icon}</span>
          <span>${item.label}</span>
          ${item.badge ? `<span class="nav-item-badge ${item.badgeClass || ''}">${item.badge}</span>` : ''}
        </div>
      `).join('')}
    </nav>

    <div class="sidebar-footer">
      <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.775rem;">
        <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.2rem;">
          FixIt Fiesta • Protech
        </div>
        <div style="color: var(--text-muted); line-height: 1.4;">
          Spot the Problem. Fix It Smart.
        </div>
        <button class="btn btn-sm btn-outline" id="sidebar-walkthrough-btn" style="width: 100%; margin-top: 0.65rem; font-size: 0.725rem;">
          Presentation Guide
        </button>
      </div>
    </div>
  `;

  // Attach nav click handlers
  sidebar.querySelectorAll('.nav-item').forEach(el => {
    el.onclick = () => {
      const view = el.getAttribute('data-view');
      store.setView(view);
    };
  });

  const swBtn = sidebar.querySelector('#sidebar-walkthrough-btn');
  if (swBtn) {
    swBtn.onclick = () => openWalkthroughModal();
  }
}
