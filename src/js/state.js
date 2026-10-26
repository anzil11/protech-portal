// Protech Smart Learning & Work Hub - Reactive State Management
import { sound } from './audio.js';

const STORAGE_KEY = 'protech_fiesta_store_v1';

const INITIAL_DATA = {
  theme: 'light',
  currentRole: 'teacher', // 'teacher' | 'student' | 'admin'
  activeView: 'dashboard',
  user: {
    teacher: {
      id: 't1',
      name: 'Prof. Vikram Sen',
      email: 'teacher@protech.edu',
      role: 'teacher',
      department: 'Full Stack Web & CS',
      avatar: '👨‍🏫'
    },
    student: {
      id: 's1',
      name: 'Riya Sharma',
      email: 'riya@protech.edu',
      role: 'student',
      batch: 'Batch A - Full Stack',
      streakDays: 7,
      avatar: '👩‍🎓'
    },
    admin: {
      id: 'a1',
      name: 'Operations Admin',
      email: 'admin@protech.edu',
      role: 'admin',
      avatar: '🛡️'
    }
  },

  // Doubts Data (Slide 4, 16, 19)
  doubts: [
    {
      id: 'd1',
      studentId: 's1',
      studentName: 'Riya Sharma',
      topic: 'JavaScript > Arrays',
      question: 'How do I reverse an array in JavaScript without mutating the original array?',
      code: 'const original = [1, 2, 3];\n// Calling original.reverse() mutates the array!\n// How to reverse immutably in modern JS?',
      screenshotName: 'array_debug.png',
      status: 'in_progress', // 'new' | 'in_progress' | 'answered' | 'resolved'
      priority: 'high',
      createdAt: '12 mins ago',
      teacherReply: 'Great question Riya! In modern JS you can use [...original].reverse() or original.toReversed() or original.slice().reverse().'
    },
    {
      id: 'd2',
      studentId: 's2',
      studentName: 'Arun Kumar',
      topic: 'CSS > Flexbox',
      question: 'Items inside my centered flex container are overflowing on small screen sizes. How to fix?',
      code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}',
      screenshotName: 'flex_overflow.png',
      status: 'new',
      priority: 'medium',
      createdAt: '28 mins ago',
      teacherReply: ''
    },
    {
      id: 'd3',
      studentId: 's3',
      studentName: 'Meera Patel',
      topic: 'Database > SQL Joins',
      question: 'Why does my LEFT JOIN return NULL values when the student ID matches on both tables?',
      code: 'SELECT s.name, sub.score\nFROM students s\nLEFT JOIN submissions sub ON s.id = sub.student_id\nWHERE sub.active = 1;',
      screenshotName: 'sql_result.png',
      status: 'new',
      priority: 'low',
      createdAt: '45 mins ago',
      teacherReply: ''
    },
    {
      id: 'd4',
      studentId: 's4',
      studentName: 'Kiran Rao',
      topic: 'React > Hooks',
      question: 'How do I avoid infinite re-renders with useEffect when passing an object dependency?',
      code: 'useEffect(() => {\n  fetchData(options);\n}, [options]); // options is an object',
      screenshotName: 'rerender_trace.png',
      status: 'answered',
      priority: 'high',
      createdAt: '2 hours ago',
      teacherReply: 'Wrap options with useMemo(() => ({ ... }), [deps]) or pass individual primitive props to avoid reference inequality!'
    },
    {
      id: 'd5',
      studentId: 's1',
      studentName: 'Riya Sharma',
      topic: 'Async JS > Promises',
      question: 'Top-level await gives SyntaxError in regular script tag. What is the clean fix?',
      code: '<script src="app.js">\n  const data = await fetch("/api");\n</script>',
      screenshotName: 'syntax_err.png',
      status: 'resolved',
      priority: 'medium',
      createdAt: 'Yesterday',
      teacherReply: 'Add type="module" to your script tag: <script type="module" src="app.js">, which unlocks top-level await!'
    }
  ],

  // Assignments & Submission Tracker (Slide 5, 15, 20)
  assignments: [
    {
      id: 'assign1',
      title: 'Worksheet 3 - JavaScript Arrays & Methods',
      batch: 'Batch A',
      deadlineText: 'Tomorrow 5:00 PM',
      dueDate: new Date(Date.now() + 86400000).toISOString(),
      autoReminder: true,
      instructions: 'Solve problems Q1-Q5 and upload your code file. Cover map, filter, reduce, slice, and immutable array operations.',
      submissions: [
        {
          studentId: 's1',
          studentName: 'Riya Sharma',
          status: 'reviewed', // 'pending' | 'submitted' | 'late' | 'reviewed'
          score: '9/10',
          feedback: 'Great work! Clean functional approach and well-structured test cases.',
          submittedAt: 'Yesterday 4:15 PM',
          fileName: 'riya_worksheet3.js',
          codeSnippet: '// Worksheet 3 solution by Riya Sharma\nconst reverseArray = arr => [...arr].reverse();\nconst sumEven = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);'
        },
        {
          studentId: 's2',
          studentName: 'Arun Kumar',
          status: 'late',
          score: null,
          feedback: null,
          submittedAt: null,
          fileName: null,
          codeSnippet: ''
        },
        {
          studentId: 's3',
          studentName: 'Meera Patel',
          status: 'submitted',
          score: null,
          feedback: null,
          submittedAt: 'Today 9:30 AM',
          fileName: 'meera_ws3.js',
          codeSnippet: '// Meera solution\nfunction solveAll() { return true; }'
        },
        {
          studentId: 's4',
          studentName: 'Kiran Rao',
          status: 'pending',
          score: null,
          feedback: null,
          submittedAt: null,
          fileName: null,
          codeSnippet: ''
        }
      ]
    },
    {
      id: 'assign2',
      title: 'Project Review: Full Stack Prototype',
      batch: 'Batch A',
      deadlineText: 'This Friday 11:59 PM',
      dueDate: new Date(Date.now() + 3 * 86400000).toISOString(),
      autoReminder: true,
      instructions: 'Complete milestone 1 with responsive frontend and mock REST API backend.',
      submissions: [
        {
          studentId: 's1',
          studentName: 'Riya Sharma',
          status: 'submitted',
          score: null,
          feedback: null,
          submittedAt: 'Today 11:10 AM',
          fileName: 'portfolio_v1.zip',
          codeSnippet: ''
        },
        {
          studentId: 's2',
          studentName: 'Arun Kumar',
          status: 'pending',
          score: null,
          feedback: null,
          submittedAt: null,
          fileName: null,
          codeSnippet: ''
        }
      ]
    },
    {
      id: 'assign3',
      title: 'Batch A Quiz: Modern ES6+ Concepts',
      batch: 'Batch A',
      deadlineText: 'Next Monday 10:00 AM',
      dueDate: new Date(Date.now() + 6 * 86400000).toISOString(),
      autoReminder: false,
      instructions: 'Timed assessment covering Promises, Event Loop, Closures, and DOM handling.',
      submissions: []
    }
  ],

  // Teacher Tasks (Slide 3, 14)
  teacherTasks: [
    { id: 'tt1', title: 'Prepare Worksheet 4 on Object Methods', priority: 'high', completed: false, due: 'Today 4:00 PM' },
    { id: 'tt2', title: 'Review Meera’s Worksheet 3 submission', priority: 'medium', completed: false, due: 'Today 6:00 PM' },
    { id: 'tt3', title: 'Answer Arun’s flexbox layout doubt', priority: 'high', completed: false, due: 'Today' },
    { id: 'tt4', title: 'Update Batch A Quiz grading scheme', priority: 'low', completed: true, due: 'Done' }
  ],

  // Smart Study Planner (Slide 6, 18)
  studyPlanner: {
    hoursPerDay: 1.5,
    selectedSubjects: ['HTML', 'CSS', 'JavaScript'],
    examDate: 'Next Monday',
    examReadiness: 80,
    schedule: [
      { id: 'sp1', day: 'Mon', subject: 'HTML', topic: 'Semantic tags & SEO accessibility', duration: '1 Hour', completed: true },
      { id: 'sp2', day: 'Tue', subject: 'CSS', topic: 'Flexbox, Grid & responsive layouts', duration: '1 Hour', completed: true },
      { id: 'sp3', day: 'Wed', subject: 'JavaScript', topic: 'Array methods, loops & functions', duration: '1.5 Hours', completed: true },
      { id: 'sp4', day: 'Thu', subject: 'Practice', topic: 'Coding 5 algorithmic problems on portal', duration: '1 Hour', completed: false },
      { id: 'sp5', day: 'Fri', subject: 'Revision', topic: 'Comprehensive quiz review & doubt check', duration: '1 Hour', completed: false }
    ]
  },

  // Coding Practice Problems (Slide 7, 21)
  codingProblems: [
    {
      id: 'p1',
      title: 'Reverse an Array',
      difficulty: 'Easy',
      badgeClass: 'badge-green',
      category: 'Arrays',
      description: 'Write a function reverse(arr) that returns a new array with elements in reversed order. The original input array must NOT be mutated.',
      example: 'Input: [1, 2, 3] -> Output: [3, 2, 1]',
      starterCode: 'function reverse(arr) {\n  // Spot the problem. Fix it smart!\n  return arr.slice().reverse();\n}',
      testCases: [
        { id: 't1', code: 'JSON.stringify(reverse([1, 2, 3])) === JSON.stringify([3, 2, 1])', label: 'Test 1: [1, 2, 3] -> [3, 2, 1]' },
        { id: 't2', code: 'JSON.stringify(reverse(["a", "b", "c"])) === JSON.stringify(["c", "b", "a"])', label: 'Test 2: ["a", "b", "c"] -> ["c", "b", "a"]' },
        { id: 't3', code: '(() => { const orig = [10, 20]; reverse(orig); return orig[0] === 10; })()', label: 'Test 3: Does not mutate original array' }
      ]
    },
    {
      id: 'p2',
      title: 'Two Sum Target',
      difficulty: 'Easy',
      badgeClass: 'badge-green',
      category: 'Hash Map',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      example: 'Input: nums = [2, 7, 11, 15], target = 9 -> Output: [0, 1]',
      starterCode: 'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}',
      testCases: [
        { id: 't1', code: 'JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1])', label: 'Test 1: [2, 7, 11, 15], target 9 -> [0, 1]' },
        { id: 't2', code: 'JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2])', label: 'Test 2: [3, 2, 4], target 6 -> [1, 2]' },
        { id: 't3', code: 'JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1])', label: 'Test 3: [3, 3], target 6 -> [0, 1]' }
      ]
    },
    {
      id: 'p3',
      title: 'Valid Palindrome',
      difficulty: 'Easy',
      badgeClass: 'badge-green',
      category: 'Strings',
      description: 'Determine if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.',
      example: 'Input: "A man, a plan, a canal: Panama" -> Output: true',
      starterCode: 'function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return clean === clean.split("").reverse().join("");\n}',
      testCases: [
        { id: 't1', code: 'isPalindrome("racecar") === true', label: 'Test 1: "racecar" -> true' },
        { id: 't2', code: 'isPalindrome("A man, a plan, a canal: Panama") === true', label: 'Test 2: "A man, a plan, a canal: Panama" -> true' },
        { id: 't3', code: 'isPalindrome("hello world") === false', label: 'Test 3: "hello world" -> false' }
      ]
    }
  ],

  // Student Coding Practice Stats (Slide 7, 21)
  studentStats: {
    solved: 16,
    failed: 3,
    scorePercent: 86,
    weakTopics: ['Recursion', 'Binary Search']
  },

  // Knowledge Hub Centralized Resources (Slide 8, 22)
  resources: [
    {
      id: 'res1',
      title: 'JS Arrays - Class Notes',
      type: 'Notes',
      badgeClass: 'badge-blue',
      category: 'JavaScript',
      summary: 'Detailed explanation of JavaScript Array methods, push, pop, shift, unshift, map, filter, and memory references.',
      date: 'Updated last week',
      author: 'Prof. Vikram Sen',
      content: `# JavaScript Arrays - Complete Class Notes
## Key Highlights:
1. Arrays in JavaScript are mutable objects with dynamic resizing.
2. Mutation methods: push(), pop(), shift(), unshift(), splice(), sort(), reverse().
3. Immutable / Copy methods: slice(), concat(), map(), filter(), toReversed(), toSorted().
4. Modern spread operator [...arr] provides a shallow clone before operations.`
    },
    {
      id: 'res2',
      title: 'Array Methods Cheat Sheet',
      type: 'PDF',
      badgeClass: 'badge-red',
      category: 'JavaScript',
      summary: '2 pages concise quick-reference card for high-frequency array manipulations with time complexity comparisons.',
      date: '2 pages • PDF Reference',
      author: 'Protech Academy Curriculum',
      content: `# Protech Cheat Sheet: Array Methods
| Method | Returns | Modifies Original? |
| --- | --- | --- |
| .map() | New transformed array | No |
| .filter() | New filtered array | No |
| .reduce() | Single accumulated value | No |
| .slice(start, end) | Sub-array | No |
| .reverse() | Reversed array | YES (Mutates!) |
| .toReversed() | New reversed array | No |`
    },
    {
      id: 'res3',
      title: 'Arrays in 10 Minutes',
      type: 'Video',
      badgeClass: 'badge-purple',
      category: 'JavaScript',
      summary: 'Interactive lecture recording demonstrating practical debugging for array mutations and closures.',
      date: 'Recorded class • 10:14 min',
      author: 'Prof. Vikram Sen',
      videoUrl: 'https://sample-videos.com',
      content: 'Video Topic: Understanding Array References in JavaScript Memory. Video walkthrough available in simulation mode.'
    },
    {
      id: 'res4',
      title: 'reverse() and sort() examples',
      type: 'Code',
      badgeClass: 'badge-green',
      category: 'JavaScript',
      summary: 'Production code recipes showing common pitfalls when sorting numbers vs strings in JavaScript.',
      date: 'Sample code • ES6+',
      author: 'Dev Lead',
      content: `// Sorting numbers correctly:
const nums = [10, 5, 40, 25];
// Default sort() compares lexicographically: [10, 25, 40, 5] -> BUG!
nums.sort((a, b) => a - b); // Correct numeric order: [5, 10, 25, 40]

// Immutable reversal:
const fruits = ['apple', 'orange', 'banana'];
const reversedFruits = fruits.toReversed ? fruits.toReversed() : [...fruits].reverse();`
    },
    {
      id: 'res5',
      title: 'Array Practice Worksheet',
      type: 'Worksheet',
      badgeClass: 'badge-amber',
      category: 'JavaScript',
      summary: 'Worksheet 3 companion problem set with 12 progressive exercises for hands-on self practice.',
      date: 'Worksheet 3 • 12 Exercises',
      author: 'Prof. Vikram Sen',
      content: `# Array Practice Worksheet
1. Given an array of prices, calculate the total after applying a 15% discount using .map() and .reduce().
2. Remove duplicate values from an array in O(n) time complexity.
3. Group an array of user objects by their 'role' property without external libraries.`
    },
    {
      id: 'res6',
      title: 'CSS Flexbox Visual Masterclass',
      type: 'Notes',
      badgeClass: 'badge-blue',
      category: 'CSS',
      summary: 'Visual diagrams for align-items, justify-content, flex-basis, flex-grow, and flex-shrink.',
      date: 'Updated yesterday',
      author: 'Protech Academy Design',
      content: `# CSS Flexbox Masterclass
- Main Axis vs Cross Axis
- justify-content controls main axis alignment (flex-start, center, space-between, space-around)
- align-items controls cross axis alignment (stretch, center, flex-start, flex-end)
- Use gap property instead of margin hacks for consistent item spacing.`
    }
  ],

  // AI Chat History & Sessions (Slide 9)
  aiChatHistory: [
    {
      id: 'm1',
      sender: 'user',
      text: 'Make 3 quiz questions on JS arrays with options and explanations.',
      timestamp: '10:30 AM'
    },
    {
      id: 'm2',
      sender: 'assistant',
      text: `Here is a draft quiz for you:

**Q1. Which method adds an item to the end of an array?**
A) unshift()
B) push()  ✓
C) concat()
D) pop()
*Explanation: .push() appends one or more elements to the end of an array and returns the new length.*

**Q2. What does [1, 2, 3].reverse() return?**
A) [3, 2, 1] and leaves original unchanged
B) [3, 2, 1] and reverses original array in place  ✓
C) A shallow clone
*Explanation: Array.prototype.reverse() is a mutating method.*

**Q3. How do you find the index of the first matching element?**
A) .find()
B) .findIndex()  ✓
C) .filter()
*Explanation: findIndex returns the index of the first item satisfying the testing function.*`,
      timestamp: '10:31 AM'
    }
  ],

  // Live Notifications Feed
  notifications: [
    {
      id: 'n1',
      title: 'New Doubt Submitted',
      message: 'Riya Sharma submitted a doubt on JavaScript > Arrays.',
      time: '12 mins ago',
      role: 'teacher',
      unread: true,
      targetView: 'doubts'
    },
    {
      id: 'n2',
      title: 'Assignment Submitted',
      message: 'Meera Patel submitted Worksheet 3 (Batch A).',
      time: '45 mins ago',
      role: 'teacher',
      unread: true,
      targetView: 'assignments'
    },
    {
      id: 'n3',
      title: 'Worksheet 3 Due Soon',
      message: 'Auto reminder: Worksheet 3 is due tomorrow at 5:00 PM!',
      time: '1 hour ago',
      role: 'student',
      unread: true,
      targetView: 'assignments'
    },
    {
      id: 'n4',
      title: 'Doubt Resolved',
      message: 'Prof. Vikram Sen answered your doubt on Async JS > Promises.',
      time: 'Yesterday',
      role: 'student',
      unread: false,
      targetView: 'doubts'
    }
  ]
};

class Store {
  constructor() {
    this.subscribers = [];
    this.data = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using initial data:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  subscribe(listener) {
    this.subscribers.push(listener);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== listener);
    };
  }

  notify(event, payload) {
    this.save();
    this.subscribers.forEach(cb => {
      try {
        cb(event, payload, this.data);
      } catch (err) {
        console.error('Subscriber error:', err);
      }
    });
  }

  get state() {
    return this.data;
  }

  // --- ACTIONS ---

  setTheme(theme) {
    this.data.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('THEME_CHANGED', theme);
  }

  setRole(role) {
    this.data.currentRole = role;
    this.data.activeView = 'dashboard';
    sound.playClick();
    this.notify('ROLE_CHANGED', role);
  }

  setView(view) {
    this.data.activeView = view;
    sound.playClick();
    this.notify('VIEW_CHANGED', view);
  }

  // Doubt Board Actions (Slide 4, 16, 19)
  addDoubt({ topic, question, code, screenshotName }) {
    const student = this.data.user.student;
    const newDoubt = {
      id: 'd_' + Date.now(),
      studentId: student.id,
      studentName: student.name,
      topic: topic || 'General Web Development',
      question,
      code: code || '',
      screenshotName: screenshotName || 'attachment.png',
      status: 'new',
      priority: 'high',
      createdAt: 'Just now',
      teacherReply: ''
    };
    this.data.doubts.unshift(newDoubt);

    // Notify Teacher
    this.addNotification({
      title: 'New Student Doubt',
      message: `${student.name} asked: "${question.substring(0, 45)}..."`,
      role: 'teacher',
      targetView: 'doubts'
    });

    sound.playSubmit();
    this.notify('DOUBT_ADDED', newDoubt);
    return newDoubt;
  }

  updateDoubtStatus(doubtId, newStatus) {
    const doubt = this.data.doubts.find(d => d.id === doubtId);
    if (doubt) {
      doubt.status = newStatus;
      sound.playClick();

      if (newStatus === 'resolved') {
        sound.playSuccess();
        this.addNotification({
          title: 'Doubt Marked Resolved',
          message: `Your doubt "${doubt.topic}" has been marked as resolved.`,
          role: 'student',
          targetView: 'doubts'
        });
      }

      this.notify('DOUBT_STATUS_UPDATED', { doubtId, newStatus });
    }
  }

  replyToDoubt(doubtId, replyText) {
    const doubt = this.data.doubts.find(d => d.id === doubtId);
    if (doubt) {
      doubt.teacherReply = replyText;
      if (doubt.status === 'new') {
        doubt.status = 'answered';
      }
      sound.playSuccess();

      // Notify Student
      this.addNotification({
        title: 'Teacher Replied to Doubt',
        message: `Prof. Vikram Sen replied to: "${doubt.topic}"`,
        role: 'student',
        targetView: 'doubts'
      });

      this.notify('DOUBT_REPLIED', doubt);
    }
  }

  updateDoubt(doubtId, updatedData) {
    const doubt = this.data.doubts.find(d => d.id === doubtId);
    if (doubt) {
      Object.assign(doubt, updatedData);
      sound.playClick();
      this.notify('DOUBT_UPDATED', doubt);
      return doubt;
    }
  }

  deleteDoubt(doubtId) {
    const idx = this.data.doubts.findIndex(d => d.id === doubtId);
    if (idx !== -1) {
      const removed = this.data.doubts.splice(idx, 1)[0];
      sound.playClick();
      this.notify('DOUBT_DELETED', removed);
      return removed;
    }
  }

  // Assignment Actions (Slide 5, 15, 20)
  createAssignment({ title, batch, deadlineText, instructions, autoReminder }) {
    const newAssign = {
      id: 'assign_' + Date.now(),
      title,
      batch: batch || 'Batch A',
      deadlineText: deadlineText || 'Due Friday 5:00 PM',
      dueDate: new Date(Date.now() + 2 * 86400000).toISOString(),
      autoReminder: Boolean(autoReminder),
      instructions,
      submissions: [
        { studentId: 's1', studentName: 'Riya Sharma', status: 'pending', score: null, feedback: null, submittedAt: null, fileName: null },
        { studentId: 's2', studentName: 'Arun Kumar', status: 'pending', score: null, feedback: null, submittedAt: null, fileName: null },
        { studentId: 's3', studentName: 'Meera Patel', status: 'pending', score: null, feedback: null, submittedAt: null, fileName: null }
      ]
    };
    this.data.assignments.unshift(newAssign);

    // Notify Students
    this.addNotification({
      title: 'New Assignment Published',
      message: `${title} is now available for ${newAssign.batch}.`,
      role: 'student',
      targetView: 'assignments'
    });

    sound.playSuccess();
    this.notify('ASSIGNMENT_CREATED', newAssign);
    return newAssign;
  }

  updateAssignment(assignmentId, updatedData) {
    const idx = this.data.assignments.findIndex(a => a.id === assignmentId);
    if (idx !== -1) {
      this.data.assignments[idx] = { ...this.data.assignments[idx], ...updatedData };
      sound.playClick();
      this.notify('ASSIGNMENT_UPDATED', this.data.assignments[idx]);
      return this.data.assignments[idx];
    }
  }

  deleteAssignment(assignmentId) {
    const idx = this.data.assignments.findIndex(a => a.id === assignmentId);
    if (idx !== -1) {
      const removed = this.data.assignments.splice(idx, 1)[0];
      sound.playClick();
      this.notify('ASSIGNMENT_DELETED', removed);
      return removed;
    }
  }

  submitAssignmentWork(assignmentId, { fileName, codeSnippet }) {
    const assign = this.data.assignments.find(a => a.id === assignmentId);
    if (!assign) return;

    const student = this.data.user.student;
    let sub = assign.submissions.find(s => s.studentId === student.id);
    if (!sub) {
      sub = { studentId: student.id, studentName: student.name };
      assign.submissions.push(sub);
    }

    sub.status = 'submitted';
    sub.fileName = fileName || 'submission.js';
    sub.codeSnippet = codeSnippet || '// Submitted code';
    sub.submittedAt = 'Just now';

    // Notify Teacher
    this.addNotification({
      title: 'Assignment Submitted',
      message: `${student.name} submitted "${assign.title}".`,
      role: 'teacher',
      targetView: 'assignments'
    });

    sound.playSuccess();
    this.notify('ASSIGNMENT_SUBMITTED', { assignmentId, studentId: student.id });
  }

  reviewSubmission(assignmentId, studentId, { score, feedback }) {
    const assign = this.data.assignments.find(a => a.id === assignmentId);
    if (!assign) return;

    const sub = assign.submissions.find(s => s.studentId === studentId);
    if (sub) {
      sub.status = 'reviewed';
      sub.score = score;
      sub.feedback = feedback;

      // Notify Student
      this.addNotification({
        title: 'Assignment Graded & Reviewed',
        message: `Your score for ${assign.title} is ${score}: "${feedback}"`,
        role: 'student',
        targetView: 'assignments'
      });

      sound.playSuccess();
      this.notify('SUBMISSION_REVIEWED', { assignmentId, studentId, score, feedback });
    }
  }

  sendAutoReminders(assignmentId) {
    const assign = this.data.assignments.find(a => a.id === assignmentId);
    if (!assign) return 0;

    const pendingStudents = assign.submissions.filter(s => s.status === 'pending' || s.status === 'late');
    
    pendingStudents.forEach(st => {
      this.addNotification({
        title: '⏰ Urgent Reminder: Assignment Due',
        message: `Reminder for ${st.studentName}: ${assign.title} is pending submission. Due: ${assign.deadlineText}!`,
        role: 'student',
        targetView: 'assignments'
      });
    });

    sound.playAlert();
    this.notify('REMINDERS_SENT', { count: pendingStudents.length, assignmentId });
    return pendingStudents.length;
  }

  // Teacher Task Actions
  toggleTeacherTask(taskId) {
    const task = this.data.teacherTasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      sound.playClick();
      this.notify('TASK_UPDATED', task);
    }
  }

  addTeacherTask(title, priority = 'medium', due = 'Tomorrow') {
    const newTask = {
      id: 'tt_' + Date.now(),
      title,
      priority,
      completed: false,
      due
    };
    this.data.teacherTasks.unshift(newTask);
    sound.playClick();
    this.notify('TASK_ADDED', newTask);
  }

  updateTeacherTask(taskId, updatedData) {
    const task = this.data.teacherTasks.find(t => t.id === taskId);
    if (task) {
      Object.assign(task, updatedData);
      sound.playClick();
      this.notify('TASK_UPDATED', task);
      return task;
    }
  }

  deleteTeacherTask(taskId) {
    const idx = this.data.teacherTasks.findIndex(t => t.id === taskId);
    if (idx !== -1) {
      const removed = this.data.teacherTasks.splice(idx, 1)[0];
      sound.playClick();
      this.notify('TASK_DELETED', removed);
      return removed;
    }
  }

  // Knowledge Hub Resource CRUD (Stored in localStorage)
  addResource(resourceData) {
    const badgeClasses = {
      Notes: 'badge-blue',
      PDF: 'badge-red',
      Video: 'badge-purple',
      Code: 'badge-green',
      Worksheet: 'badge-amber'
    };
    const newRes = {
      id: 'res_' + Date.now(),
      title: resourceData.title,
      type: resourceData.type || 'Notes',
      badgeClass: badgeClasses[resourceData.type] || 'badge-blue',
      category: resourceData.category || 'JavaScript',
      summary: resourceData.summary || resourceData.title,
      date: 'Added just now',
      author: resourceData.author || this.data.user.teacher.name,
      content: resourceData.content || resourceData.summary
    };
    this.data.resources.unshift(newRes);
    sound.playSuccess();
    this.notify('RESOURCE_ADDED', newRes);
    return newRes;
  }

  updateResource(resourceId, updatedData) {
    const res = this.data.resources.find(r => r.id === resourceId);
    if (res) {
      Object.assign(res, updatedData);
      sound.playClick();
      this.notify('RESOURCE_UPDATED', res);
      return res;
    }
  }

  deleteResource(resourceId) {
    const idx = this.data.resources.findIndex(r => r.id === resourceId);
    if (idx !== -1) {
      const removed = this.data.resources.splice(idx, 1)[0];
      sound.playClick();
      this.notify('RESOURCE_DELETED', removed);
      return removed;
    }
  }

  // Code drafts in localStorage
  saveProblemDraft(problemId, code) {
    if (!this.data.problemDrafts) {
      this.data.problemDrafts = {};
    }
    this.data.problemDrafts[problemId] = code;
    this.save();
  }

  getProblemDraft(problemId) {
    return (this.data.problemDrafts && this.data.problemDrafts[problemId]) || null;
  }

  // Study Planner Actions (Slide 6, 18)
  updateStudyPlan({ hoursPerDay, selectedSubjects, examDate }) {
    this.data.studyPlanner.hoursPerDay = Number(hoursPerDay);
    if (selectedSubjects) this.data.studyPlanner.selectedSubjects = selectedSubjects;
    if (examDate) this.data.studyPlanner.examDate = examDate;

    // Build smart weekly plan dynamically
    const subjectList = this.data.studyPlanner.selectedSubjects.length > 0 
      ? this.data.studyPlanner.selectedSubjects 
      : ['HTML', 'CSS', 'JavaScript'];

    const days = [
      { day: 'Mon', sub: subjectList[0] || 'Core', topic: 'Fundamentals & syntax deep-dive' },
      { day: 'Tue', sub: subjectList[1] || 'Styling', topic: 'Practical component implementation' },
      { day: 'Wed', sub: subjectList[2] || 'Logic', topic: 'Algorithms, state & event handling' },
      { day: 'Thu', sub: 'Practice', topic: 'Solve 4 coding exercises in Practice Portal' },
      { day: 'Fri', sub: 'Revision', topic: 'Review doubts, quizzes & cheat sheet notes' }
    ];

    this.data.studyPlanner.schedule = days.map((d, idx) => ({
      id: 'sp_gen_' + idx,
      day: d.day,
      subject: d.sub,
      topic: d.topic,
      duration: `${this.data.studyPlanner.hoursPerDay} Hours`,
      completed: idx < 2 // first two checked as sample
    }));

    this.data.studyPlanner.examReadiness = Math.min(100, Math.round(55 + this.data.studyPlanner.hoursPerDay * 15));

    sound.playSuccess();
    this.notify('PLANNER_UPDATED', this.data.studyPlanner);
  }

  togglePlanDay(dayId) {
    const item = this.data.studyPlanner.schedule.find(s => s.id === dayId);
    if (item) {
      item.completed = !item.completed;
      const total = this.data.studyPlanner.schedule.length;
      const completed = this.data.studyPlanner.schedule.filter(s => s.completed).length;
      this.data.studyPlanner.examReadiness = Math.round((completed / total) * 100);
      sound.playClick();
      this.notify('PLANNER_UPDATED', this.data.studyPlanner);
    }
  }

  // Coding Practice Actions (Slide 7, 21)
  recordProblemAttempt(problemId, passedAll) {
    if (passedAll) {
      this.data.studentStats.solved += 1;
      sound.playSuccess();
    } else {
      this.data.studentStats.failed += 1;
      sound.playAlert();
    }
    const total = this.data.studentStats.solved + this.data.studentStats.failed;
    this.data.studentStats.scorePercent = Math.round((this.data.studentStats.solved / total) * 100);
    this.notify('PRACTICE_STATS_UPDATED', this.data.studentStats);
  }

  // AI Assistant Chat & Actions (Slide 9)
  addAiChatMessage(sender, text) {
    const msg = {
      id: 'm_' + Date.now(),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.data.aiChatHistory.push(msg);
    this.notify('AI_MESSAGE_ADDED', msg);
    return msg;
  }

  // Notifications
  addNotification({ title, message, role = 'all', targetView = null }) {
    const notif = {
      id: 'n_' + Date.now(),
      title,
      message,
      time: 'Just now',
      role,
      unread: true,
      targetView
    };
    this.data.notifications.unshift(notif);
    this.notify('NOTIFICATION_ADDED', notif);
  }

  markAllNotificationsRead() {
    this.data.notifications.forEach(n => { n.unread = false; });
    sound.playClick();
    this.notify('NOTIFICATIONS_READ', null);
  }

  resetAllData() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.save();
    sound.playSuccess();
    this.notify('DATA_RESET', null);
  }
}

export const store = new Store();
