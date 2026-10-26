// FixIt Fiesta Presentation & Walkthrough Modal (Slides 1, 2, 10, 12, 23, 24, 25)
import { openModal } from '../notifications.js';
import { store } from '../state.js';

export function openWalkthroughModal() {
  const bodyHtml = `
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="background: linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(99,102,241,0.15) 100%); border: 1px solid var(--border-highlight); padding: 1.25rem; border-radius: var(--radius-lg); text-align: center;">
        <span class="badge badge-amber" style="margin-bottom: 0.5rem;">PROTECH ACADEMY • FIXIT FIESTA</span>
        <h2 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem;">
          Spot the Problem. Fix It Smart.
        </h2>
        <p style="font-size: 0.875rem; color: var(--text-muted); max-width: 480px; margin: 0 auto;">
          One Unified Platform solving developer/teacher work overload and student study friction.
        </p>
      </div>

      <!-- Who Presents What (Slide 23) -->
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>👥</span> Team Presentation Matrix (Slide 23)
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-blue">Member 1</span>
              <strong style="font-size: 0.85rem;">Intro & Problems</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">FixIt Fiesta setting, teacher & student challenges overview.</p>
          </div>

          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-blue">Member 2</span>
              <strong style="font-size: 0.85rem;">Teacher Problems</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">Time overload, missed tasks, worksheets & follow-up delays.</p>
          </div>

          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-green">Member 3</span>
              <strong style="font-size: 0.85rem;">Student Problems</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">Study planning, lost doubts on WhatsApp, assignment tracking.</p>
          </div>

          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-amber">Member 4</span>
              <strong style="font-size: 0.85rem;">Technical Solutions</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">Kanban Doubt board, live Submission Tracker & Knowledge Hub.</p>
          </div>

          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-purple">Member 5</span>
              <strong style="font-size: 0.85rem;">AI & Smart Features</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">AI teaching assistant, smart study planner & auto reminders.</p>
          </div>

          <div style="padding: 0.85rem; background: var(--bg-card-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="badge badge-red">Member 6</span>
              <strong style="font-size: 0.85rem;">System & Conclusion</strong>
            </div>
            <p style="font-size: 0.775rem; color: var(--text-muted);">End-to-end workflow, tech stack architecture & expected benefits.</p>
          </div>
        </div>
      </div>

      <!-- Quick Tour Stepper (Slide 12: Teacher Journey & Student Journey) -->
      <div style="background: var(--bg-input); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.75rem;">🚀 Interactive Role Journeys</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--teacher-primary-light); margin-bottom: 0.35rem;">
              👨‍🏫 Teacher Journey (Guides 1-4)
            </div>
            <ol style="font-size: 0.8rem; color: var(--text-muted); padding-left: 1.2rem; line-height: 1.6;">
              <li>Log in as Teacher & check daily metrics</li>
              <li>Publish assignment & trigger auto-reminders</li>
              <li>Review live student submissions</li>
              <li>Answer doubts on 4-stage Kanban board</li>
            </ol>
            <button class="btn btn-sm btn-teacher" id="walkthrough-switch-teacher" style="margin-top: 0.65rem;">
              Explore Teacher View
            </button>
          </div>

          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--student-primary-light); margin-bottom: 0.35rem;">
              👩‍🎓 Student Journey (Guides 1-5)
            </div>
            <ol style="font-size: 0.8rem; color: var(--text-muted); padding-left: 1.2rem; line-height: 1.6;">
              <li>Generate weekly Study Plan with slider</li>
              <li>Submit doubt with code & screenshot</li>
              <li>Turn in assignments before deadline</li>
              <li>Solve code challenges with instant test cases</li>
            </ol>
            <button class="btn btn-sm btn-student" id="walkthrough-switch-student" style="margin-top: 0.65rem;">
              Explore Student View
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = openModal({
    title: 'FixIt Fiesta | System Presentation Guide',
    bodyHtml,
    maxWidth: '720px',
    footerButtons: [
      {
        label: 'Close Walkthrough',
        className: 'btn btn-secondary',
        onClick: () => true
      }
    ]
  });

  const tBtn = document.getElementById('walkthrough-switch-teacher');
  const sBtn = document.getElementById('walkthrough-switch-student');

  if (tBtn) {
    tBtn.onclick = () => {
      store.setRole('teacher');
      modal.close();
    };
  }

  if (sBtn) {
    sBtn.onclick = () => {
      store.setRole('student');
      modal.close();
    };
  }
}
