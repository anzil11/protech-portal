// View Router & Orchestrator
import { store } from './state.js';
import { renderHeader } from './components/header.js';
import { renderSidebar } from './components/sidebar.js';

// Teacher Views
import { renderTeacherDashboard } from './views/teacher/dashboard.js';
import { renderTeacherAssignments } from './views/teacher/assignments.js';
import { renderTeacherDoubts } from './views/teacher/doubts.js';
import { renderTeacherTasks } from './views/teacher/tasks.js';

// Student Views
import { renderStudentDashboard } from './views/student/dashboard.js';
import { renderStudentStudyPlan } from './views/student/studyPlan.js';
import { renderStudentAskDoubt } from './views/student/askDoubt.js';
import { renderStudentAssignments } from './views/student/assignments.js';
import { renderStudentCodingPractice } from './views/student/codingPractice.js';

// Shared Views
import { renderKnowledgeHub } from './views/shared/knowledgeHub.js';
import { renderAiAssistant } from './views/shared/aiAssistant.js';
import { renderAdminView } from './views/shared/admin.js';

export function renderCurrentView() {
  renderHeader();
  renderSidebar();

  const state = store.state;
  const role = state.currentRole;
  const view = state.activeView;

  // Scroll main container to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (role === 'teacher') {
    switch (view) {
      case 'dashboard':
        renderTeacherDashboard();
        break;
      case 'assignments':
        renderTeacherAssignments();
        break;
      case 'doubts':
        renderTeacherDoubts();
        break;
      case 'tasks':
        renderTeacherTasks();
        break;
      case 'knowledgeHub':
        renderKnowledgeHub();
        break;
      case 'aiAssistant':
        renderAiAssistant();
        break;
      default:
        renderTeacherDashboard();
    }
  } else if (role === 'student') {
    switch (view) {
      case 'dashboard':
        renderStudentDashboard();
        break;
      case 'studyPlan':
        renderStudentStudyPlan();
        break;
      case 'askDoubt':
        renderStudentAskDoubt();
        break;
      case 'assignments':
        renderStudentAssignments();
        break;
      case 'codingPractice':
        renderStudentCodingPractice();
        break;
      case 'knowledgeHub':
        renderKnowledgeHub();
        break;
      case 'aiAssistant':
        renderAiAssistant();
        break;
      default:
        renderStudentDashboard();
    }
  } else {
    // Admin
    switch (view) {
      case 'dashboard':
        renderAdminView();
        break;
      case 'knowledgeHub':
        renderKnowledgeHub();
        break;
      case 'doubts':
        renderTeacherDoubts();
        break;
      case 'assignments':
        renderTeacherAssignments();
        break;
      default:
        renderAdminView();
    }
  }
}
