// Protech Smart Learning & Work Hub - Main Entry Point
import { store } from './js/state.js';
import { renderCurrentView } from './js/router.js';
import { showToast } from './js/notifications.js';

function initApp() {
  // Set initial theme
  document.documentElement.setAttribute('data-theme', store.state.theme);

  // Initial render
  renderCurrentView();

  // Subscribe router to state events
  store.subscribe((event, payload, state) => {
    if (
      event === 'ROLE_CHANGED' || 
      event === 'VIEW_CHANGED' || 
      event === 'DATA_RESET' ||
      event === 'THEME_CHANGED' ||
      event === 'NOTIFICATIONS_READ'
    ) {
      renderCurrentView();
    }
  });

  // Welcome Toast
  setTimeout(() => {
    showToast({
      title: 'Protech Hub • FixIt Fiesta',
      message: 'Spot the Problem. Fix It Smart. Switch roles anytime in top right.',
      type: 'info',
      duration: 5000
    });
  }, 700);
}

// Start application
window.addEventListener('DOMContentLoaded', initApp);
