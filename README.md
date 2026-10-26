# Protech Academy — FixIt Fiesta
> **Spot the Problem. Fix It Smart.**  
> *Solving developer/teacher work overload and student study friction.*

---

## 🌟 Overview & System Highlights

**Protech Hub** is a unified, intelligent web platform designed to solve the two critical challenges in modern technical education:
1. **Teacher / Developer Time Overload**: Teaching, coding, worksheets, doubts, and planning all at once, leading to work overload and delays.
2. **Student Study Friction**: Confusion on what to study, lost doubts across WhatsApp/calls, missed assignment deadlines, lack of coding practice, and scattered resources.

---

## 🚀 Slide-by-Slide Implementation Map

| Slide # | Feature / Problem | Implementation in Protech Hub |
| :--- | :--- | :--- |
| **Slide 1 & 2** | FixIt Fiesta & Two Groups | Role-based portal architecture for **Teachers** and **Students** with shared notifications & data sync. |
| **Slide 3 & 14** | Problem 1: Teacher Overload | **Teacher Work Management Dashboard**: 3 metric cards (Today's Classes, Pending Tasks, New Doubts), weekly overview bars, upcoming deadlines, and task checklist. |
| **Slide 4, 16, 19** | Problem 2: Lost Student Doubts | **4-Stage Doubt Management Kanban**: `[New] ── [In Progress] ── [Answered] ── [Resolved]`. Code snippets, screenshot attachments, inline teacher reply, and student alert notifications. |
| **Slide 5, 15, 20** | Problem 3: Assignment Tracking | **Submission Tracker & Auto-Reminders**: Live tracking table (Riya, Arun, Meera, Kiran), status pills (Pending, Submitted, Late, Reviewed), review modal with grading (e.g. 9/10), and 1-click auto-reminder broadcast. |
| **Slide 6 & 18** | Problem 4: Study Planning | **Smart Study Planner**: Daily study hours slider (0.5h to 4h), subject selector pills (HTML, CSS, JS), exam date picker, dynamically generated color-coded weekly schedule, and live exam readiness score. |
| **Slide 7 & 21** | Problem 5: Coding Practice | **Coding Practice Portal**: Problem switcher (Reverse an Array, Two Sum, Palindrome), in-browser live JavaScript code editor, instant execution against test cases with pass/fail checkmarks, and progress metrics (Solved, Failed, Score %, Weak Topics). |
| **Slide 8 & 22** | Problem 6: Scattered Resources | **Protech Knowledge Hub**: Instant search bar with filter pills (`All`, `Notes`, `PDFs`, `Videos`, `Code`, `Worksheets`) and interactive resource viewer modal. |
| **Slide 9** | AI Assistant | **AI Teaching & Study Assistant**: Dedicated presets for generating worksheets, quizzes, coding exercises, hints without spoilers, and concept explanations. Embodies the golden rule: *"AI should ASSIST the teacher, not replace the teacher. It is a helper badge, never a boss badge."* |
| **Slide 10 & 11**| System Architecture & Tech Stack | **Architecture Dashboard**: Complete breakdown of Frontend (React/Vanilla), Backend (Node.js/Laravel), Database (MySQL), Auth (Teacher/Student/Admin), REST APIs, Notification System, and Code Execution Sandbox. |
| **Slide 13 & 17**| Multi-Role Auth | **One-Click Role Switcher & Login Card**: Instant role switching between Teacher (`teacher@protech.edu`), Student (`riya@protech.edu`), and Admin (`admin@protech.edu`). |
| **Slide 23** | Who Presents What | **Presentation Guide Modal**: Detailed breakdown of Member 1 to Member 6 presentation responsibilities for the project showcase. |
| **Slide 24 & 25**| Benefits & Pipeline | Interactive comparison matrix and workflow pipeline: Teacher side (`Plan -> Teach -> Manage -> Track`) and Student side (`Learn -> Practice -> Submit -> Improve`). |

---

## 🛠️ Technology Stack

- **Core**: Vanilla HTML5 & Modular JavaScript (ES6 Modules)
- **Styling**: Vanilla CSS (Tailwind-free) with custom design tokens, dark/light sleek themes, and glassmorphism
- **Audio Feedback**: Synthesized Web Audio API sound effects (clicks, success chimes, alert pings) with zero external media files
- **Persistence**: Reactive store with real-time `localStorage` synchronization
- **Tooling**: Built & bundled with Vite

---

## 💻 Running the Portal

### Option 1: Quick Double-Click (Windows)
Double-click `start.bat` in the project root folder.

### Option 2: Command Line
```bash
# 1. Start the Vite local development server
npm run dev

# 2. Build for production (pre-validated)
npm run build
```

Then open the local URL in your web browser (typically `http://localhost:5173`).
