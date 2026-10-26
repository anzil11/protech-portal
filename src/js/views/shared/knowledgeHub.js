// Protech Knowledge Hub View (Slides 8 & 22)
import { store } from '../../state.js';
import { openModal, showToast } from '../../notifications.js';
import { sound } from '../../audio.js';

let activeCategoryFilter = 'All';
let searchQuery = 'JavaScript Array'; // Default matching Slide 8 & 22

export function renderKnowledgeHub() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const isTeacher = state.currentRole === 'teacher' || state.currentRole === 'admin';
  const resources = state.resources;

  // Filter resources
  const filtered = resources.filter(res => {
    const matchesFilter = activeCategoryFilter === 'All' || res.type.toLowerCase() === activeCategoryFilter.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesFilter;
    const words = query.split(/\s+/).filter(Boolean);
    const corpus = `${res.title} ${res.summary} ${res.category} ${res.type}`.toLowerCase();
    const matchesSearch = words.some(w => corpus.includes(w));
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Notes', 'PDFs', 'Videos', 'Code', 'Worksheets'];

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Protech Knowledge Hub</h1>
        <p class="view-subtitle">Slide 8 & 22: One centralized platform for notes, PDFs, videos, code, worksheets and links.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        ${isTeacher ? `
          <button class="btn btn-teacher" id="btn-add-resource">
            <span>+</span> Upload Resource
          </button>
        ` : ''}
      </div>
    </div>

    <!-- Search & Filter Card matching Slide 8 & 22 -->
    <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
      <!-- Search Bar with Magnifying Glass -->
      <div style="position: relative; margin-bottom: 1rem;">
        <svg style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="hub-search-input" class="form-input" style="padding-left: 2.75rem; font-size: 0.95rem; border-radius: var(--radius-full);" placeholder="Search topic (e.g. JavaScript Array)..." value="${searchQuery}" />
      </div>

      <!-- Filter Pills: All, Notes, PDFs, Videos, Code, Worksheets -->
      <div class="filter-pills" id="hub-category-pills">
        ${categories.map(cat => {
          const mapped = cat === 'PDFs' ? 'PDF' : (cat === 'Videos' ? 'Video' : (cat === 'Worksheets' ? 'Worksheet' : cat));
          const isActive = activeCategoryFilter.toLowerCase() === cat.toLowerCase() || (cat === 'All' && activeCategoryFilter === 'All');
          return `
            <div class="filter-pill ${isActive ? 'active' : ''} hub-pill" data-cat="${mapped}">
              ${cat}
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Resource Rows List (Exact match to Slide 8 & 22) -->
    <div class="card" style="padding: 0; overflow: hidden; margin-bottom: 1.25rem;">
      <div style="display: flex; flex-direction: column;">
        ${filtered.map(res => {
          const badgeType = res.type.toUpperCase();
          const badgeColorClass = res.type === 'Notes' ? 'badge-blue' : (res.type === 'PDF' ? 'badge-red' : (res.type === 'Video' ? 'badge-purple' : (res.type === 'Code' ? 'badge-green' : 'badge-amber')));
          return `
            <div class="deadline-item open-resource-row" data-res-id="${res.id}" style="margin: 0; border-radius: 0; border-top: none; border-left: none; border-right: none; padding: 1rem 1.5rem; cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="badge ${badgeColorClass}" style="min-width: 72px; text-align: center; justify-content: center; font-weight: 700;">
                  ${badgeType}
                </span>
                <div>
                  <strong style="color: var(--text-main); font-size: 0.95rem;">${res.title}</strong>
                  <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.15rem;">${res.date}</div>
                </div>
              </div>

              <button class="btn btn-sm btn-outline open-res-btn" data-res-id="${res.id}">
                Open
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Instant Results Count matching Slide 8 & 22 -->
      <div style="padding: 0.85rem 1.5rem; background: var(--bg-card-subtle); border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted);">
        <strong>${filtered.length} results found instantly</strong>
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 8 & 22 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: find any resource in seconds</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: one place for every resource</span>
    </div>
  `;

  // Search input
  const searchInput = document.getElementById('hub-search-input');
  searchInput.oninput = () => {
    searchQuery = searchInput.value;
    renderKnowledgeHub();
  };

  // Filter pills
  container.querySelectorAll('.hub-pill').forEach(pill => {
    pill.onclick = () => {
      sound.playClick();
      activeCategoryFilter = pill.getAttribute('data-cat');
      renderKnowledgeHub();
    };
  });

  // Open resource
  container.querySelectorAll('.open-resource-row, .open-res-btn').forEach(el => {
    el.onclick = (e) => {
      e.stopPropagation();
      const id = el.getAttribute('data-res-id');
      const item = resources.find(r => r.id === id);
      if (item) openResourceViewer(item);
    };
  });

  const addBtn = document.getElementById('btn-add-resource');
  if (addBtn) {
    addBtn.onclick = () => openAddResourceModal();
  }
}

function openResourceViewer(item) {
  sound.playClick();

  let viewerHtml = '';
  if (item.type === 'Video') {
    viewerHtml = `
      <div style="background: #000; border-radius: var(--radius-md); padding: 2.5rem 1.5rem; text-align: center; margin-bottom: 1rem; color: #fff;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">▶️</div>
        <div style="font-weight: 700; font-size: 1.1rem;">Playing: ${item.title}</div>
        <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">HD Class Recording • ${item.date}</div>
      </div>
    `;
  } else if (item.type === 'Code') {
    viewerHtml = `
      <div style="margin-bottom: 1rem;">
        <pre style="background: var(--bg-code); color: #38bdf8; padding: 1.25rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; max-height: 320px; overflow-y: auto;">${item.content}</pre>
      </div>
    `;
  } else {
    viewerHtml = `
      <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.6; color: var(--text-main); white-space: pre-wrap; margin-bottom: 1rem; border: 1px solid var(--border-subtle); max-height: 340px; overflow-y: auto;">
${item.content}
      </div>
    `;
  }

  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="badge ${item.badgeClass || 'badge-blue'}">${item.type}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted);">${item.author || 'Protech Academy'}</span>
      </div>

      <p style="font-size: 0.875rem; color: var(--text-muted);">${item.summary}</p>

      ${viewerHtml}
    </div>
  `;

  openModal({
    title: item.title,
    bodyHtml,
    maxWidth: '640px',
    footerButtons: [
      { label: 'Close', className: 'btn btn-secondary', onClick: () => true },
      {
        label: '🗑️ Delete',
        className: 'btn btn-danger btn-sm',
        onClick: () => {
          if (confirm(`Delete "${item.title}" from Knowledge Hub?`)) {
            store.deleteResource(item.id);
            showToast({ title: 'Resource Deleted', message: 'Removed from LocalStorage.', type: 'info' });
            renderKnowledgeHub();
            return true;
          }
          return false;
        }
      },
      {
        label: '✏️ Edit',
        className: 'btn btn-outline btn-sm',
        onClick: () => {
          openEditResourceModal(item);
          return true;
        }
      },
      {
        label: 'Copy Content',
        className: 'btn btn-outline',
        onClick: () => {
          navigator.clipboard.writeText(item.content || item.summary);
          showToast({ title: 'Copied!', message: 'Resource copied to clipboard.', type: 'info' });
          return false;
        }
      }
    ]
  });
}

function openEditResourceModal(item) {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">Resource Title</label>
        <input type="text" id="edit-res-title" class="form-input" value="${item.title}" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Format</label>
          <select id="edit-res-type" class="form-select">
            <option value="Notes" ${item.type === 'Notes' ? 'selected' : ''}>Notes</option>
            <option value="PDF" ${item.type === 'PDF' ? 'selected' : ''}>PDF</option>
            <option value="Video" ${item.type === 'Video' ? 'selected' : ''}>Video</option>
            <option value="Code" ${item.type === 'Code' ? 'selected' : ''}>Code</option>
            <option value="Worksheet" ${item.type === 'Worksheet' ? 'selected' : ''}>Worksheet</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Category</label>
          <input type="text" id="edit-res-cat" class="form-input" value="${item.category}" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Summary</label>
        <input type="text" id="edit-res-summary" class="form-input" value="${item.summary}" />
      </div>

      <div class="form-group">
        <label class="form-label">Content</label>
        <textarea id="edit-res-content" class="form-textarea">${item.content || item.summary}</textarea>
      </div>
    </div>
  `;

  openModal({
    title: `Edit Resource: ${item.title}`,
    bodyHtml,
    maxWidth: '560px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Save Changes (LocalStorage)',
        className: 'btn btn-teacher',
        onClick: (container) => {
          const title = container.querySelector('#edit-res-title').value.trim();
          const type = container.querySelector('#edit-res-type').value;
          const category = container.querySelector('#edit-res-cat').value.trim();
          const summary = container.querySelector('#edit-res-summary').value.trim();
          const content = container.querySelector('#edit-res-content').value.trim();

          if (!title) {
            showToast({ title: 'Validation Error', message: 'Title is required.', type: 'warning' });
            return false;
          }

          store.updateResource(item.id, { title, type, category, summary, content });
          showToast({ title: 'Resource Updated', message: 'Saved to LocalStorage.', type: 'success' });
          renderKnowledgeHub();
          return true;
        }
      }
    ]
  });
}

function openAddResourceModal() {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">Resource Title</label>
        <input type="text" id="new-res-title" class="form-input" placeholder="e.g. Asynchronous JavaScript & Promises Complete Guide" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Resource Format</label>
          <select id="new-res-type" class="form-select">
            <option value="Notes">Notes</option>
            <option value="PDF">PDF</option>
            <option value="Video">Video</option>
            <option value="Code">Code</option>
            <option value="Worksheet">Worksheet</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Category</label>
          <input type="text" id="new-res-cat" class="form-input" value="JavaScript" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Short Summary</label>
        <input type="text" id="new-res-summary" class="form-input" placeholder="Brief description..." />
      </div>

      <div class="form-group">
        <label class="form-label">Content</label>
        <textarea id="new-res-content" class="form-textarea" placeholder="Paste full content here..."></textarea>
      </div>
    </div>
  `;

  openModal({
    title: 'Publish to Knowledge Hub',
    bodyHtml,
    maxWidth: '560px',
    footerButtons: [
      { label: 'Cancel', className: 'btn btn-outline', onClick: () => true },
      {
        label: 'Publish',
        className: 'btn btn-teacher',
        onClick: (container) => {
          const title = container.querySelector('#new-res-title').value.trim();
          const type = container.querySelector('#new-res-type').value;
          const category = container.querySelector('#new-res-cat').value.trim() || 'General';
          const summary = container.querySelector('#new-res-summary').value.trim();
          const content = container.querySelector('#new-res-content').value.trim();

          if (!title) {
            showToast({ title: 'Title Required', message: 'Please enter a title.', type: 'warning' });
            return false;
          }

          store.addResource({
            title,
            type,
            category,
            summary,
            content
          });

          showToast({ title: 'Resource Added!', message: `"${title}" saved to LocalStorage.`, type: 'success' });
          renderKnowledgeHub();
          return true;
        }
      }
    ]
  });
}
