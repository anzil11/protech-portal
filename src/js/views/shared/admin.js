// Operations & Architecture View (Slide 10 & 11)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

export function renderAdminView() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">System Architecture & Operations</h1>
        <p class="view-subtitle">Slide 10 & 11: End-to-end multi-tenant infrastructure connecting teachers, students, and AI services.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-outline" id="btn-reset-demo" style="color: var(--color-danger); border-color: rgba(239, 68, 68, 0.4);">
          ↺ Reset Demo Data
        </button>
      </div>
    </div>

    <!-- Top KPI Metrics -->
    <div class="metrics-grid-3">
      <div class="metric-card blue">
        <div>
          <div class="metric-label">Enrolled Students</div>
          <div class="metric-value">124</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Active in Batch A & Batch B</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--brand-primary);">👥</div>
      </div>

      <div class="metric-card green">
        <div>
          <div class="metric-label">Doubt Resolution Rate</div>
          <div class="metric-value" style="color: var(--student-primary);">94.8%</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Avg response time: 14 minutes</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--student-primary);">⚡</div>
      </div>

      <div class="metric-card purple">
        <div>
          <div class="metric-label">Assignments Evaluated</div>
          <div class="metric-value">88.5%</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Auto-reminders reduced late subs by 62%</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--teacher-primary-light);">📊</div>
      </div>
    </div>

    <!-- Technology Stack Grid (Slide 11) -->
    <div class="card" style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.35rem;">Technology Stack (Slide 11)</h3>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1.25rem;">
        The engineered production stack powering Protech Smart Learning and Work Hub:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚛️</div>
          <strong style="color: var(--text-main); font-size: 0.95rem;">Frontend</strong>
          <div style="color: var(--brand-primary); font-size: 0.8rem; font-weight: 600; margin-top: 0.25rem;">Angular / React</div>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🟢</div>
          <strong style="color: var(--text-main); font-size: 0.95rem;">Backend</strong>
          <div style="color: var(--student-primary); font-size: 0.8rem; font-weight: 600; margin-top: 0.25rem;">Node.js / Laravel</div>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🐬</div>
          <strong style="color: var(--text-main); font-size: 0.95rem;">Database</strong>
          <div style="color: var(--color-warning); font-size: 0.8rem; font-weight: 600; margin-top: 0.25rem;">MySQL Relational</div>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔐</div>
          <strong style="color: var(--text-main); font-size: 0.95rem;">Role Auth</strong>
          <div style="color: var(--teacher-primary-light); font-size: 0.8rem; font-weight: 600; margin-top: 0.25rem;">Teacher / Student / Admin</div>
        </div>
      </div>

      <!-- Additional Technologies (Slide 11) -->
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase;">
          Additional Integrated Services:
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge badge-blue">⚡ RESTful APIs</span>
          <span class="badge badge-amber">🔔 Real-time Notifications</span>
          <span class="badge badge-purple">🤖 AI LLM Pedagogical API</span>
          <span class="badge badge-green">📁 Cloud File Storage</span>
          <span class="badge badge-red">▶️ In-Browser Code Execution Sandbox</span>
        </div>
      </div>
    </div>

    <!-- LocalStorage CRUD & Persistence Management Card -->
    <div class="card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <div>
          <span class="badge badge-green" style="margin-bottom: 0.25rem;">LOCALSTORAGE PERSISTENCE ENGINE</span>
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">Browser LocalStorage CRUD Database</h3>
        </div>
        <span class="status-pill status-submitted">🟢 Sync: Real-Time</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
        All Create, Read, Update, and Delete operations for assignments, doubts, tasks, resources, and coding drafts are permanently stored under key <code>protech_fiesta_store_v1</code>.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">Storage Payload Size</div>
          <strong style="font-size: 1.2rem; color: var(--brand-primary);">${(new Blob([localStorage.getItem('protech_fiesta_store_v1') || '']).size / 1024).toFixed(2)} KB</strong>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">Assignments in DB</div>
          <strong style="font-size: 1.2rem; color: var(--text-main);">${state.assignments.length} items</strong>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">Doubts in DB</div>
          <strong style="font-size: 1.2rem; color: var(--text-main);">${state.doubts.length} items</strong>
        </div>

        <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.75rem; color: var(--text-muted);">Resources in DB</div>
          <strong style="font-size: 1.2rem; color: var(--text-main);">${state.resources.length} items</strong>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <button class="btn btn-primary" id="btn-export-storage">
          <span>📥</span> Export LocalStorage JSON
        </button>
        <button class="btn btn-secondary" id="btn-import-storage">
          <span>📤</span> Import JSON Data
        </button>
      </div>
    </div>
  `;

  document.getElementById('btn-reset-demo').onclick = () => {
    if (confirm('Reset prototype data back to initial slide presentation defaults?')) {
      store.resetAllData();
      showToast({ title: 'Prototype Reset', message: 'Restored initial sample data.', type: 'info' });
      renderAdminView();
    }
  };

  document.getElementById('btn-export-storage').onclick = () => {
    sound.playClick();
    const dataStr = localStorage.getItem('protech_fiesta_store_v1') || JSON.stringify(store.state);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `protech_hub_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast({ title: 'Exported!', message: 'Downloaded LocalStorage backup JSON.', type: 'success' });
  };

  document.getElementById('btn-import-storage').onclick = () => {
    const raw = prompt('Paste your exported Protech Hub JSON data here:');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        localStorage.setItem('protech_fiesta_store_v1', JSON.stringify(parsed));
        store.data = parsed;
        store.save();
        sound.playSuccess();
        showToast({ title: 'Import Successful', message: 'Loaded data into LocalStorage.', type: 'success' });
        renderAdminView();
      } catch (err) {
        showToast({ title: 'Invalid JSON', message: err.message, type: 'danger' });
      }
    }
  };
}
