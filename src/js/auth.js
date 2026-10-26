// Auth & Role Switcher (Slides 11, 13, 17)
import { store } from './state.js';
import { openModal, showToast } from './notifications.js';
import { sound } from './audio.js';

export function openLoginModal(defaultRole = null) {
  const current = defaultRole || store.state.currentRole;

  const emails = {
    teacher: 'teacher@protech.edu',
    student: 'riya@protech.edu',
    admin: 'admin@protech.edu'
  };

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="text-align: center; margin-bottom: 0.5rem;">
        <div style="width: 48px; height: 48px; border-radius: var(--radius-lg); background: var(--brand-gradient); margin: 0 auto 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #fff;">
          🛡️
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; color: var(--text-main);">Protech Hub</h3>
        <p style="font-size: 0.825rem; color: var(--text-muted);">Sign in to continue to your customized portal</p>
      </div>

      <!-- Role Selector Radio Pill Group (Slide 13 & 17) -->
      <div>
        <label class="form-label" style="margin-bottom: 0.5rem;">I am a</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem;" id="login-role-selector">
          <button type="button" class="btn ${current === 'teacher' ? 'btn-teacher' : 'btn-secondary'} login-role-btn" data-role="teacher">
            👨‍🏫 Teacher
          </button>
          <button type="button" class="btn ${current === 'student' ? 'btn-student' : 'btn-secondary'} login-role-btn" data-role="student">
            👩‍🎓 Student
          </button>
          <button type="button" class="btn ${current === 'admin' ? 'btn-primary' : 'btn-secondary'} login-role-btn" data-role="admin">
            🛡️ Admin
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" id="login-email-input" class="form-input" value="${emails[current]}" />
      </div>

      <div class="form-group">
        <label class="form-label">Password</label>
        <input type="password" id="login-password-input" class="form-input" value="protech2026" />
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
        <span>💡 Demo mode: One-click sign in</span>
        <span style="color: var(--brand-accent);">FixIt Fiesta v1.0</span>
      </div>

      <div id="login-status-msg" style="display: none; padding: 0.65rem; border-radius: var(--radius-md); font-size: 0.825rem; text-align: center;"></div>
    </div>
  `;

  let selectedRole = current;

  const modal = openModal({
    title: 'Sign In to Protech Hub',
    bodyHtml,
    maxWidth: '460px',
    footerButtons: [
      {
        label: 'Cancel',
        className: 'btn btn-outline',
        onClick: () => true
      },
      {
        label: 'Sign In & Open Portal',
        className: selectedRole === 'teacher' ? 'btn btn-teacher' : (selectedRole === 'student' ? 'btn btn-student' : 'btn btn-primary'),
        onClick: (container) => {
          const emailInput = container.querySelector('#login-email-input').value;
          const statusBox = container.querySelector('#login-status-msg');

          statusBox.style.display = 'block';
          statusBox.style.background = 'rgba(16, 185, 129, 0.15)';
          statusBox.style.color = '#10b981';
          statusBox.style.border = '1px solid rgba(16, 185, 129, 0.3)';

          const user = store.state.user[selectedRole];
          statusBox.innerHTML = `✓ Welcome, ${user.name}! Opening your dashboard...`;

          sound.playSuccess();

          setTimeout(() => {
            store.setRole(selectedRole);
            showToast({
              title: `Logged in as ${selectedRole.toUpperCase()}`,
              message: `Switched workspace to ${user.name}`,
              type: 'success'
            });
            modal.close();
          }, 450);

          return false; // keep open until timeout closes
        }
      }
    ]
  });

  // Attach role toggle events inside modal
  const container = modal.container;
  const roleButtons = container.querySelectorAll('.login-role-btn');
  const emailInput = container.querySelector('#login-email-input');

  roleButtons.forEach(btn => {
    btn.onclick = () => {
      sound.playClick();
      selectedRole = btn.getAttribute('data-role');
      emailInput.value = emails[selectedRole];

      roleButtons.forEach(b => {
        b.className = 'btn btn-secondary login-role-btn';
      });

      if (selectedRole === 'teacher') btn.className = 'btn btn-teacher login-role-btn';
      else if (selectedRole === 'student') btn.className = 'btn btn-student login-role-btn';
      else btn.className = 'btn btn-primary login-role-btn';
    };
  });
}
