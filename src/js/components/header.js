// Top Navigation Header Component (Matches exact presentation window bars)
import { store } from '../state.js';
import { openLoginModal } from '../auth.js';
import { openWalkthroughModal } from './walkthrough.js';
import { sound } from '../audio.js';

export function renderHeader() {
  const header = document.getElementById('app-header');
  if (!header) return;

  const state = store.state;
  const currentRole = state.currentRole;
  const activeView = state.activeView;
  const currentUser = state.user[currentRole];

  // Exact Window Title mapping from Slides
  const windowTitles = {
    teacher: {
      dashboard: 'Teacher Dashboard',
      assignments: 'Submission Tracker',
      doubts: 'Doubt Board',
      tasks: 'Teacher Tasks',
      knowledgeHub: 'Protech Knowledge Hub',
      aiAssistant: 'AI Teaching Assistant'
    },
    student: {
      dashboard: 'Student Dashboard',
      studyPlan: 'Smart Study Planner',
      askDoubt: 'Ask a Doubt',
      assignments: 'My Assignments',
      codingPractice: 'Coding Practice Portal',
      knowledgeHub: 'Protech Knowledge Hub',
      aiAssistant: 'AI Study Assistant'
    },
    admin: {
      dashboard: 'Protech Hub | Admin Operations',
      knowledgeHub: 'Protech Knowledge Hub',
      doubts: 'Doubt Monitor',
      assignments: 'Assignment Tracker'
    }
  };

  const title = (windowTitles[currentRole] && windowTitles[currentRole][activeView]) || 'Protech Hub';

  // Set body view class for dynamic header color
  document.body.className = `view-${currentRole}-${activeView} ${currentRole}-active`;

  // Count unread notifications
  const unreadCount = state.notifications.filter(
    n => n.unread && (n.role === currentRole || n.role === 'all')
  ).length;

  header.innerHTML = `
    <div class="header-left">
      <!-- Window Titlebar with three dots (•••) matching exact slides -->
      <div class="window-dots-title" id="header-brand-link" style="cursor: pointer;" title="Back to Dashboard">
        <div class="window-dots">
          <span class="window-dot"></span>
          <span class="window-dot"></span>
          <span class="window-dot"></span>
        </div>
        <span>${title}</span>
      </div>

      <span class="brand-fiesta-tag">FixIt Fiesta</span>

      <!-- Presentation Guide Button (Team of 6) -->
      <button class="btn btn-sm" id="walkthrough-btn" title="View Team Presentation & Workflow Architecture" style="background: rgba(255,255,255,0.18); color: #fff; border: 1px solid rgba(255,255,255,0.25); font-size: 0.725rem; padding: 0.25rem 0.65rem;">
        <span>✨</span> Slide Guide (6)
      </button>
    </div>

    <!-- Center Search Bar (Redirects to Knowledge Hub) -->
    <div class="header-center">
      <div class="global-search-box">
        <svg class="global-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="global-search-input" placeholder="Search notes, PDFs, videos, worksheets, doubts..." />
      </div>
    </div>

    <!-- Right Controls: Role Toggle Segment, Theme Toggle, Sound, Notifications, User -->
    <div class="header-right">
      <!-- Direct 1-Click Role Toggle Setup (Teacher / Student / Admin) -->
      <div class="role-toggle-bar" id="header-role-toggle-bar" title="Toggle Active Role Persona">
        <button type="button" class="role-toggle-btn ${currentRole === 'teacher' ? 'active' : ''}" data-role="teacher">
          👨‍🏫 Teacher
        </button>
        <button type="button" class="role-toggle-btn ${currentRole === 'student' ? 'active' : ''}" data-role="student">
          👩‍🎓 Student
        </button>
        <button type="button" class="role-toggle-btn ${currentRole === 'admin' ? 'active' : ''}" data-role="admin">
          🛡️ Admin
        </button>
      </div>

      <!-- Theme Toggle Pill with label -->
      <button class="theme-toggle-pill" id="theme-toggle-btn" title="Toggle Slide Presentation Light / Studio Dark Mode">
        <span>${state.theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</span>
      </button>

      <!-- Audio Mute Toggle -->
      <button class="btn-icon" id="audio-toggle-btn" title="Toggle Sound Feedback" style="color: #fff; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.25);">
        ${sound.enabled ? '🔊' : '🔇'}
      </button>

      <!-- Notifications Bell Button -->
      <div style="position: relative;">
        <button class="notif-bell-btn" id="notif-bell-btn" title="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          ${unreadCount > 0 ? `<span class="notif-badge-count">${unreadCount}</span>` : ''}
        </button>

        <!-- Notifications Popover -->
        <div class="notif-popover" id="notif-popover">
          <div class="notif-popover-header">
            <h4>Notifications & Alerts</h4>
            <button class="btn-sm btn-outline" id="mark-all-read-btn" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">
              Mark all read
            </button>
          </div>
          <div class="notif-popover-list" id="notif-list-container">
            ${renderNotificationList(state.notifications, currentRole)}
          </div>
        </div>
      </div>

      <!-- User avatar with modal sign-in access -->
      <div class="role-switcher-dropdown" id="role-switcher-btn" title="Open Login & Account Settings">
        <div class="user-avatar">
          ${currentUser.avatar}
        </div>
        <div class="user-info">
          <span class="user-name">${currentUser.name}</span>
          <span class="user-role-badge">${currentRole.toUpperCase()}</span>
        </div>
      </div>
    </div>
  `;

  // Attach event handlers
  document.getElementById('walkthrough-btn').onclick = () => {
    sound.playClick();
    openWalkthroughModal();
  };

  document.getElementById('header-brand-link').onclick = () => {
    store.setView('dashboard');
  };

  // Wire Segmented Role Toggle Buttons
  document.querySelectorAll('.role-toggle-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const role = btn.getAttribute('data-role');
      if (role !== store.state.currentRole) {
        store.setRole(role);
        showToast({
          title: `Role Switched: ${role.toUpperCase()}`,
          message: `Now viewing as ${store.state.user[role].name}.`,
          type: 'info'
        });
      }
    };
  });

  document.getElementById('theme-toggle-btn').onclick = () => {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    store.setTheme(nextTheme);
  };

  document.getElementById('audio-toggle-btn').onclick = () => {
    sound.enabled = !sound.enabled;
    if (sound.enabled) sound.playClick();
    renderHeader();
  };

  const bellBtn = document.getElementById('notif-bell-btn');
  const popover = document.getElementById('notif-popover');
  bellBtn.onclick = (e) => {
    e.stopPropagation();
    sound.playClick();
    popover.classList.toggle('open');
  };

  document.getElementById('mark-all-read-btn').onclick = (e) => {
    e.stopPropagation();
    store.markAllNotificationsRead();
  };

  document.addEventListener('click', (e) => {
    if (popover && !popover.contains(e.target) && e.target !== bellBtn) {
      popover.classList.remove('open');
    }
  });

  document.getElementById('role-switcher-btn').onclick = () => {
    sound.playClick();
    openLoginModal();
  };

  const searchInput = document.getElementById('global-search-input');
  searchInput.onkeydown = (e) => {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      sound.playClick();
      store.setView('knowledgeHub');
      setTimeout(() => {
        const hubSearch = document.getElementById('hub-search-input');
        if (hubSearch) {
          hubSearch.value = searchInput.value;
          hubSearch.dispatchEvent(new Event('input'));
        }
      }, 100);
    }
  };
}

function renderNotificationList(notifications, currentRole) {
  const filtered = notifications.filter(n => n.role === currentRole || n.role === 'all');
  if (filtered.length === 0) {
    return `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.825rem;">No new alerts. You're all caught up!</div>`;
  }

  return filtered.map(item => `
    <div class="notif-popover-item ${item.unread ? 'unread' : ''}" data-target-view="${item.targetView || ''}">
      <span style="font-size: 1.1rem; line-height: 1;">${item.unread ? '🔵' : '⚪'}</span>
      <div style="flex: 1;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 0.8rem;">${item.title}</div>
        <div style="color: var(--text-muted); font-size: 0.775rem; margin-top: 0.15rem;">${item.message}</div>
        <div style="font-size: 0.675rem; color: var(--text-faint); margin-top: 0.25rem;">${item.time}</div>
      </div>
    </div>
  `).join('');
}
