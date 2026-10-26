// Toast & Live Notification Manager
import { store } from './state.js';
import { sound } from './audio.js';

export function showToast({ title, message, type = 'info', duration = 4000 }) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icons = {
    info: '🔔',
    success: '✅',
    warning: '⚠️',
    danger: '❌'
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || '✨'}</div>
    <div style="flex: 1;">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Global modal helper
export function openModal({ title, bodyHtml, footerButtons = [], maxWidth = '560px' }) {
  const container = document.getElementById('modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-dialog" style="max-width: ${maxWidth};">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="btn-icon" id="modal-close-btn" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body">${bodyHtml}</div>
        <div class="modal-footer" id="modal-footer-btns"></div>
      </div>
    </div>
  `;

  const footerEl = container.querySelector('#modal-footer-btns');
  footerButtons.forEach(btn => {
    const b = document.createElement('button');
    b.className = btn.className || 'btn btn-secondary';
    b.textContent = btn.label;
    b.onclick = () => {
      sound.playClick();
      if (btn.onClick) {
        const shouldClose = btn.onClick(container);
        if (shouldClose !== false) closeModal();
      } else {
        closeModal();
      }
    };
    footerEl.appendChild(b);
  });

  const backdrop = container.querySelector('#active-modal-backdrop');
  const closeBtn = container.querySelector('#modal-close-btn');

  const closeModal = () => {
    backdrop.classList.remove('open');
    setTimeout(() => {
      container.innerHTML = '';
    }, 250);
  };

  closeBtn.onclick = () => {
    sound.playClick();
    closeModal();
  };

  backdrop.onclick = (e) => {
    if (e.target === backdrop) closeModal();
  };

  requestAnimationFrame(() => {
    backdrop.classList.add('open');
  });

  return { close: closeModal, container };
}
