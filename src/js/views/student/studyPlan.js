// Student Smart Study Planner View (Slides 6 & 18)
import { store } from '../../state.js';
import { sound } from '../../audio.js';
import { showToast } from '../../notifications.js';

export function renderStudentStudyPlan() {
  const container = document.getElementById('view-container');
  if (!container) return;

  const state = store.state;
  const planner = state.studyPlanner;

  container.innerHTML = `
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Smart Study Planner</h1>
        <p class="view-subtitle">Slide 6 & 18: Student enters study time, subjects, pending topics and exam date. The system builds a simple weekly plan.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700;">
          Exam Readiness: ${planner.examReadiness}%
        </span>
      </div>
    </div>

    <!-- 2 Columns: Plan my week vs My Study Plan - This Week (Slide 6 & 18) -->
    <div class="dashboard-columns">
      <!-- Left Column: Plan my week -->
      <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">
          Plan my week
        </h2>

        <!-- Study time per day slider -->
        <div class="form-group">
          <div class="form-label" style="margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Study time per day</span>
            <span id="slider-display-val" style="color: #059669; font-weight: 800; font-size: 0.95rem;">
              ${planner.hoursPerDay} hours
            </span>
          </div>
          <input type="range" id="study-hours-slider" class="form-range" min="0.5" max="4.0" step="0.5" value="${planner.hoursPerDay}" />
        </div>

        <!-- Subjects -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Subjects</label>
          <div class="filter-pills" id="subject-selector-pills">
            <span class="filter-pill active" data-sub="HTML">HTML</span>
            <span class="filter-pill active" data-sub="CSS">CSS</span>
            <span class="filter-pill active" data-sub="JavaScript">JavaScript</span>
          </div>
        </div>

        <!-- Exam date -->
        <div class="form-group">
          <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Exam date</label>
          <input type="text" id="exam-date-input" class="form-input" value="Next Monday" />
        </div>

        <button class="btn btn-student btn-lg" id="btn-generate-plan" style="background: #059669; width: 100%; margin-top: 0.5rem;">
          Generate my plan
        </button>

        <p style="font-size: 0.775rem; color: var(--text-muted); text-align: center;">
          We built a simple daily plan
        </p>
      </div>

      <!-- Right Column: My Study Plan - This Week (Slide 6 & 18) -->
      <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 1.25rem;">
          My Study Plan - This Week
        </h2>

        <!-- Color-coded daily rows matching Slide 6 & 18 -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; flex: 1;">
          <div class="deadline-item" style="padding: 0.85rem 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <strong style="color: var(--text-main); font-size: 0.9rem; min-width: 45px;">Mon</strong>
              <span class="badge badge-blue" style="font-weight: 700; min-width: 90px; justify-content: center;">HTML</span>
            </div>
            <span style="font-size: 0.825rem; color: var(--text-muted);">1 Hour</span>
          </div>

          <div class="deadline-item" style="padding: 0.85rem 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <strong style="color: var(--text-main); font-size: 0.9rem; min-width: 45px;">Tue</strong>
              <span class="badge badge-green" style="font-weight: 700; min-width: 90px; justify-content: center;">CSS</span>
            </div>
            <span style="font-size: 0.825rem; color: var(--text-muted);">1 Hour</span>
          </div>

          <div class="deadline-item" style="padding: 0.85rem 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <strong style="color: var(--text-main); font-size: 0.9rem; min-width: 45px;">Wed</strong>
              <span class="badge badge-amber" style="font-weight: 700; min-width: 90px; justify-content: center;">JavaScript</span>
            </div>
            <span style="font-size: 0.825rem; color: var(--text-muted);">1.5 hours</span>
          </div>

          <div class="deadline-item" style="padding: 0.85rem 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <strong style="color: var(--text-main); font-size: 0.9rem; min-width: 45px;">Thu</strong>
              <span class="badge badge-purple" style="font-weight: 700; min-width: 90px; justify-content: center;">Practice</span>
            </div>
            <span style="font-size: 0.825rem; color: var(--text-muted);">1 Hour</span>
          </div>

          <div class="deadline-item" style="padding: 0.85rem 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <strong style="color: var(--text-main); font-size: 0.9rem; min-width: 45px;">Fri</strong>
              <span class="badge badge-red" style="font-weight: 700; min-width: 90px; justify-content: center;">Revision</span>
            </div>
            <span style="font-size: 0.825rem; color: var(--text-muted);">1 hour</span>
          </div>
        </div>

        <!-- Exam Readiness Bar matching Slide 6 & 18 -->
        <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
          <div class="progress-header" style="margin-bottom: 0.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">Exam readiness</span>
            <span style="font-size: 0.95rem; font-weight: 800; color: #059669;">80%</span>
          </div>
          <div class="progress-bar-bg" style="height: 12px;">
            <div class="progress-bar-fill green" style="width: 80%; background: #059669;"></div>
          </div>
          <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center;">
            Goal: finish all 5 sessions before the exam
          </div>
        </div>
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 6 & 18 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: a clear plan every day</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: follow one colour-coded day at a time</span>
    </div>
  `;

  // Attach slider
  const slider = document.getElementById('study-hours-slider');
  const displayVal = document.getElementById('slider-display-val');

  slider.oninput = () => {
    displayVal.textContent = `${slider.value} hours`;
  };

  document.getElementById('btn-generate-plan').onclick = () => {
    sound.playSuccess();
    showToast({
      title: 'Plan Updated!',
      message: `Weekly study plan updated for ${slider.value} hours/day.`,
      type: 'success'
    });
  };
}
