(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&(window.AudioContext||window.webkitAudioContext)){let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}playClick(){if(this.enabled)try{if(this.init(),!this.ctx)return;let e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type=`sine`,e.frequency.setValueAtTime(600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.04),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playSuccess(){if(this.enabled)try{if(this.init(),!this.ctx)return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`triangle`,r.frequency.setValueAtTime(t,e+n*.08),i.gain.setValueAtTime(.09,e+n*.08),i.gain.exponentialRampToValueAtTime(.001,e+n*.08+.28),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.08),r.stop(e+n*.08+.3)})}catch{}}playAlert(){if(this.enabled)try{if(this.init(),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(880,e),t.frequency.setValueAtTime(1174.66,e+.08),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.32)}catch{}}playSubmit(){if(this.enabled)try{if(this.init(),!this.ctx)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(880,e+.15),n.gain.setValueAtTime(.1,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.24)}catch{}}},t=`protech_fiesta_store_v1`,n={theme:`light`,currentRole:`teacher`,activeView:`dashboard`,user:{teacher:{id:`t1`,name:`Prof. Vikram Sen`,email:`teacher@protech.edu`,role:`teacher`,department:`Full Stack Web & CS`,avatar:`👨‍🏫`},student:{id:`s1`,name:`Riya Sharma`,email:`riya@protech.edu`,role:`student`,batch:`Batch A - Full Stack`,streakDays:7,avatar:`👩‍🎓`},admin:{id:`a1`,name:`Operations Admin`,email:`admin@protech.edu`,role:`admin`,avatar:`🛡️`}},doubts:[{id:`d1`,studentId:`s1`,studentName:`Riya Sharma`,topic:`JavaScript > Arrays`,question:`How do I reverse an array in JavaScript without mutating the original array?`,code:`const original = [1, 2, 3];
// Calling original.reverse() mutates the array!
// How to reverse immutably in modern JS?`,screenshotName:`array_debug.png`,status:`in_progress`,priority:`high`,createdAt:`12 mins ago`,teacherReply:`Great question Riya! In modern JS you can use [...original].reverse() or original.toReversed() or original.slice().reverse().`},{id:`d2`,studentId:`s2`,studentName:`Arun Kumar`,topic:`CSS > Flexbox`,question:`Items inside my centered flex container are overflowing on small screen sizes. How to fix?`,code:`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,screenshotName:`flex_overflow.png`,status:`new`,priority:`medium`,createdAt:`28 mins ago`,teacherReply:``},{id:`d3`,studentId:`s3`,studentName:`Meera Patel`,topic:`Database > SQL Joins`,question:`Why does my LEFT JOIN return NULL values when the student ID matches on both tables?`,code:`SELECT s.name, sub.score
FROM students s
LEFT JOIN submissions sub ON s.id = sub.student_id
WHERE sub.active = 1;`,screenshotName:`sql_result.png`,status:`new`,priority:`low`,createdAt:`45 mins ago`,teacherReply:``},{id:`d4`,studentId:`s4`,studentName:`Kiran Rao`,topic:`React > Hooks`,question:`How do I avoid infinite re-renders with useEffect when passing an object dependency?`,code:`useEffect(() => {
  fetchData(options);
}, [options]); // options is an object`,screenshotName:`rerender_trace.png`,status:`answered`,priority:`high`,createdAt:`2 hours ago`,teacherReply:`Wrap options with useMemo(() => ({ ... }), [deps]) or pass individual primitive props to avoid reference inequality!`},{id:`d5`,studentId:`s1`,studentName:`Riya Sharma`,topic:`Async JS > Promises`,question:`Top-level await gives SyntaxError in regular script tag. What is the clean fix?`,code:`<script src="app.js">
  const data = await fetch("/api");
<\/script>`,screenshotName:`syntax_err.png`,status:`resolved`,priority:`medium`,createdAt:`Yesterday`,teacherReply:`Add type="module" to your script tag: <script type="module" src="app.js">, which unlocks top-level await!`}],assignments:[{id:`assign1`,title:`Worksheet 3 - JavaScript Arrays & Methods`,batch:`Batch A`,deadlineText:`Tomorrow 5:00 PM`,dueDate:new Date(Date.now()+864e5).toISOString(),autoReminder:!0,instructions:`Solve problems Q1-Q5 and upload your code file. Cover map, filter, reduce, slice, and immutable array operations.`,submissions:[{studentId:`s1`,studentName:`Riya Sharma`,status:`reviewed`,score:`9/10`,feedback:`Great work! Clean functional approach and well-structured test cases.`,submittedAt:`Yesterday 4:15 PM`,fileName:`riya_worksheet3.js`,codeSnippet:`// Worksheet 3 solution by Riya Sharma
const reverseArray = arr => [...arr].reverse();
const sumEven = arr => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);`},{studentId:`s2`,studentName:`Arun Kumar`,status:`late`,score:null,feedback:null,submittedAt:null,fileName:null,codeSnippet:``},{studentId:`s3`,studentName:`Meera Patel`,status:`submitted`,score:null,feedback:null,submittedAt:`Today 9:30 AM`,fileName:`meera_ws3.js`,codeSnippet:`// Meera solution
function solveAll() { return true; }`},{studentId:`s4`,studentName:`Kiran Rao`,status:`pending`,score:null,feedback:null,submittedAt:null,fileName:null,codeSnippet:``}]},{id:`assign2`,title:`Project Review: Full Stack Prototype`,batch:`Batch A`,deadlineText:`This Friday 11:59 PM`,dueDate:new Date(Date.now()+2592e5).toISOString(),autoReminder:!0,instructions:`Complete milestone 1 with responsive frontend and mock REST API backend.`,submissions:[{studentId:`s1`,studentName:`Riya Sharma`,status:`submitted`,score:null,feedback:null,submittedAt:`Today 11:10 AM`,fileName:`portfolio_v1.zip`,codeSnippet:``},{studentId:`s2`,studentName:`Arun Kumar`,status:`pending`,score:null,feedback:null,submittedAt:null,fileName:null,codeSnippet:``}]},{id:`assign3`,title:`Batch A Quiz: Modern ES6+ Concepts`,batch:`Batch A`,deadlineText:`Next Monday 10:00 AM`,dueDate:new Date(Date.now()+5184e5).toISOString(),autoReminder:!1,instructions:`Timed assessment covering Promises, Event Loop, Closures, and DOM handling.`,submissions:[]}],teacherTasks:[{id:`tt1`,title:`Prepare Worksheet 4 on Object Methods`,priority:`high`,completed:!1,due:`Today 4:00 PM`},{id:`tt2`,title:`Review Meera’s Worksheet 3 submission`,priority:`medium`,completed:!1,due:`Today 6:00 PM`},{id:`tt3`,title:`Answer Arun’s flexbox layout doubt`,priority:`high`,completed:!1,due:`Today`},{id:`tt4`,title:`Update Batch A Quiz grading scheme`,priority:`low`,completed:!0,due:`Done`}],studyPlanner:{hoursPerDay:1.5,selectedSubjects:[`HTML`,`CSS`,`JavaScript`],examDate:`Next Monday`,examReadiness:80,schedule:[{id:`sp1`,day:`Mon`,subject:`HTML`,topic:`Semantic tags & SEO accessibility`,duration:`1 Hour`,completed:!0},{id:`sp2`,day:`Tue`,subject:`CSS`,topic:`Flexbox, Grid & responsive layouts`,duration:`1 Hour`,completed:!0},{id:`sp3`,day:`Wed`,subject:`JavaScript`,topic:`Array methods, loops & functions`,duration:`1.5 Hours`,completed:!0},{id:`sp4`,day:`Thu`,subject:`Practice`,topic:`Coding 5 algorithmic problems on portal`,duration:`1 Hour`,completed:!1},{id:`sp5`,day:`Fri`,subject:`Revision`,topic:`Comprehensive quiz review & doubt check`,duration:`1 Hour`,completed:!1}]},codingProblems:[{id:`p1`,title:`Reverse an Array`,difficulty:`Easy`,badgeClass:`badge-green`,category:`Arrays`,description:`Write a function reverse(arr) that returns a new array with elements in reversed order. The original input array must NOT be mutated.`,example:`Input: [1, 2, 3] -> Output: [3, 2, 1]`,starterCode:`function reverse(arr) {
  // Spot the problem. Fix it smart!
  return arr.slice().reverse();
}`,testCases:[{id:`t1`,code:`JSON.stringify(reverse([1, 2, 3])) === JSON.stringify([3, 2, 1])`,label:`Test 1: [1, 2, 3] -> [3, 2, 1]`},{id:`t2`,code:`JSON.stringify(reverse(["a", "b", "c"])) === JSON.stringify(["c", "b", "a"])`,label:`Test 2: ["a", "b", "c"] -> ["c", "b", "a"]`},{id:`t3`,code:`(() => { const orig = [10, 20]; reverse(orig); return orig[0] === 10; })()`,label:`Test 3: Does not mutate original array`}]},{id:`p2`,title:`Two Sum Target`,difficulty:`Easy`,badgeClass:`badge-green`,category:`Hash Map`,description:`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.`,example:`Input: nums = [2, 7, 11, 15], target = 9 -> Output: [0, 1]`,starterCode:`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,testCases:[{id:`t1`,code:`JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1])`,label:`Test 1: [2, 7, 11, 15], target 9 -> [0, 1]`},{id:`t2`,code:`JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2])`,label:`Test 2: [3, 2, 4], target 6 -> [1, 2]`},{id:`t3`,code:`JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1])`,label:`Test 3: [3, 3], target 6 -> [0, 1]`}]},{id:`p3`,title:`Valid Palindrome`,difficulty:`Easy`,badgeClass:`badge-green`,category:`Strings`,description:`Determine if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.`,example:`Input: "A man, a plan, a canal: Panama" -> Output: true`,starterCode:`function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}`,testCases:[{id:`t1`,code:`isPalindrome("racecar") === true`,label:`Test 1: "racecar" -> true`},{id:`t2`,code:`isPalindrome("A man, a plan, a canal: Panama") === true`,label:`Test 2: "A man, a plan, a canal: Panama" -> true`},{id:`t3`,code:`isPalindrome("hello world") === false`,label:`Test 3: "hello world" -> false`}]}],studentStats:{solved:16,failed:3,scorePercent:86,weakTopics:[`Recursion`,`Binary Search`]},resources:[{id:`res1`,title:`JS Arrays - Class Notes`,type:`Notes`,badgeClass:`badge-blue`,category:`JavaScript`,summary:`Detailed explanation of JavaScript Array methods, push, pop, shift, unshift, map, filter, and memory references.`,date:`Updated last week`,author:`Prof. Vikram Sen`,content:`# JavaScript Arrays - Complete Class Notes
## Key Highlights:
1. Arrays in JavaScript are mutable objects with dynamic resizing.
2. Mutation methods: push(), pop(), shift(), unshift(), splice(), sort(), reverse().
3. Immutable / Copy methods: slice(), concat(), map(), filter(), toReversed(), toSorted().
4. Modern spread operator [...arr] provides a shallow clone before operations.`},{id:`res2`,title:`Array Methods Cheat Sheet`,type:`PDF`,badgeClass:`badge-red`,category:`JavaScript`,summary:`2 pages concise quick-reference card for high-frequency array manipulations with time complexity comparisons.`,date:`2 pages • PDF Reference`,author:`Protech Academy Curriculum`,content:`# Protech Cheat Sheet: Array Methods
| Method | Returns | Modifies Original? |
| --- | --- | --- |
| .map() | New transformed array | No |
| .filter() | New filtered array | No |
| .reduce() | Single accumulated value | No |
| .slice(start, end) | Sub-array | No |
| .reverse() | Reversed array | YES (Mutates!) |
| .toReversed() | New reversed array | No |`},{id:`res3`,title:`Arrays in 10 Minutes`,type:`Video`,badgeClass:`badge-purple`,category:`JavaScript`,summary:`Interactive lecture recording demonstrating practical debugging for array mutations and closures.`,date:`Recorded class • 10:14 min`,author:`Prof. Vikram Sen`,videoUrl:`https://sample-videos.com`,content:`Video Topic: Understanding Array References in JavaScript Memory. Video walkthrough available in simulation mode.`},{id:`res4`,title:`reverse() and sort() examples`,type:`Code`,badgeClass:`badge-green`,category:`JavaScript`,summary:`Production code recipes showing common pitfalls when sorting numbers vs strings in JavaScript.`,date:`Sample code • ES6+`,author:`Dev Lead`,content:`// Sorting numbers correctly:
const nums = [10, 5, 40, 25];
// Default sort() compares lexicographically: [10, 25, 40, 5] -> BUG!
nums.sort((a, b) => a - b); // Correct numeric order: [5, 10, 25, 40]

// Immutable reversal:
const fruits = ['apple', 'orange', 'banana'];
const reversedFruits = fruits.toReversed ? fruits.toReversed() : [...fruits].reverse();`},{id:`res5`,title:`Array Practice Worksheet`,type:`Worksheet`,badgeClass:`badge-amber`,category:`JavaScript`,summary:`Worksheet 3 companion problem set with 12 progressive exercises for hands-on self practice.`,date:`Worksheet 3 • 12 Exercises`,author:`Prof. Vikram Sen`,content:`# Array Practice Worksheet
1. Given an array of prices, calculate the total after applying a 15% discount using .map() and .reduce().
2. Remove duplicate values from an array in O(n) time complexity.
3. Group an array of user objects by their 'role' property without external libraries.`},{id:`res6`,title:`CSS Flexbox Visual Masterclass`,type:`Notes`,badgeClass:`badge-blue`,category:`CSS`,summary:`Visual diagrams for align-items, justify-content, flex-basis, flex-grow, and flex-shrink.`,date:`Updated yesterday`,author:`Protech Academy Design`,content:`# CSS Flexbox Masterclass
- Main Axis vs Cross Axis
- justify-content controls main axis alignment (flex-start, center, space-between, space-around)
- align-items controls cross axis alignment (stretch, center, flex-start, flex-end)
- Use gap property instead of margin hacks for consistent item spacing.`}],aiChatHistory:[{id:`m1`,sender:`user`,text:`Make 3 quiz questions on JS arrays with options and explanations.`,timestamp:`10:30 AM`},{id:`m2`,sender:`assistant`,text:`Here is a draft quiz for you:

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
*Explanation: findIndex returns the index of the first item satisfying the testing function.*`,timestamp:`10:31 AM`}],notifications:[{id:`n1`,title:`New Doubt Submitted`,message:`Riya Sharma submitted a doubt on JavaScript > Arrays.`,time:`12 mins ago`,role:`teacher`,unread:!0,targetView:`doubts`},{id:`n2`,title:`Assignment Submitted`,message:`Meera Patel submitted Worksheet 3 (Batch A).`,time:`45 mins ago`,role:`teacher`,unread:!0,targetView:`assignments`},{id:`n3`,title:`Worksheet 3 Due Soon`,message:`Auto reminder: Worksheet 3 is due tomorrow at 5:00 PM!`,time:`1 hour ago`,role:`student`,unread:!0,targetView:`assignments`},{id:`n4`,title:`Doubt Resolved`,message:`Prof. Vikram Sen answered your doubt on Async JS > Promises.`,time:`Yesterday`,role:`student`,unread:!1,targetView:`doubts`}]},r=new class{constructor(){this.subscribers=[],this.data=this.load()}load(){try{let e=localStorage.getItem(t);if(e)return JSON.parse(e)}catch(e){console.warn(`Could not read from localStorage, using initial data:`,e)}return JSON.parse(JSON.stringify(n))}save(){try{localStorage.setItem(t,JSON.stringify(this.data))}catch(e){console.warn(`Could not save to localStorage:`,e)}}subscribe(e){return this.subscribers.push(e),()=>{this.subscribers=this.subscribers.filter(t=>t!==e)}}notify(e,t){this.save(),this.subscribers.forEach(n=>{try{n(e,t,this.data)}catch(e){console.error(`Subscriber error:`,e)}})}get state(){return this.data}setTheme(e){this.data.theme=e,document.documentElement.setAttribute(`data-theme`,e),this.notify(`THEME_CHANGED`,e)}setRole(t){this.data.currentRole=t,this.data.activeView=`dashboard`,e.playClick(),this.notify(`ROLE_CHANGED`,t)}setView(t){this.data.activeView=t,e.playClick(),this.notify(`VIEW_CHANGED`,t)}addDoubt({topic:t,question:n,code:r,screenshotName:i}){let a=this.data.user.student,o={id:`d_`+Date.now(),studentId:a.id,studentName:a.name,topic:t||`General Web Development`,question:n,code:r||``,screenshotName:i||`attachment.png`,status:`new`,priority:`high`,createdAt:`Just now`,teacherReply:``};return this.data.doubts.unshift(o),this.addNotification({title:`New Student Doubt`,message:`${a.name} asked: "${n.substring(0,45)}..."`,role:`teacher`,targetView:`doubts`}),e.playSubmit(),this.notify(`DOUBT_ADDED`,o),o}updateDoubtStatus(t,n){let r=this.data.doubts.find(e=>e.id===t);r&&(r.status=n,e.playClick(),n===`resolved`&&(e.playSuccess(),this.addNotification({title:`Doubt Marked Resolved`,message:`Your doubt "${r.topic}" has been marked as resolved.`,role:`student`,targetView:`doubts`})),this.notify(`DOUBT_STATUS_UPDATED`,{doubtId:t,newStatus:n}))}replyToDoubt(t,n){let r=this.data.doubts.find(e=>e.id===t);r&&(r.teacherReply=n,r.status===`new`&&(r.status=`answered`),e.playSuccess(),this.addNotification({title:`Teacher Replied to Doubt`,message:`Prof. Vikram Sen replied to: "${r.topic}"`,role:`student`,targetView:`doubts`}),this.notify(`DOUBT_REPLIED`,r))}createAssignment({title:t,batch:n,deadlineText:r,instructions:i,autoReminder:a}){let o={id:`assign_`+Date.now(),title:t,batch:n||`Batch A`,deadlineText:r||`Due Friday 5:00 PM`,dueDate:new Date(Date.now()+1728e5).toISOString(),autoReminder:!!a,instructions:i,submissions:[{studentId:`s1`,studentName:`Riya Sharma`,status:`pending`,score:null,feedback:null,submittedAt:null,fileName:null},{studentId:`s2`,studentName:`Arun Kumar`,status:`pending`,score:null,feedback:null,submittedAt:null,fileName:null},{studentId:`s3`,studentName:`Meera Patel`,status:`pending`,score:null,feedback:null,submittedAt:null,fileName:null}]};return this.data.assignments.unshift(o),this.addNotification({title:`New Assignment Published`,message:`${t} is now available for ${o.batch}.`,role:`student`,targetView:`assignments`}),e.playSuccess(),this.notify(`ASSIGNMENT_CREATED`,o),o}submitAssignmentWork(t,{fileName:n,codeSnippet:r}){let i=this.data.assignments.find(e=>e.id===t);if(!i)return;let a=this.data.user.student,o=i.submissions.find(e=>e.studentId===a.id);o||(o={studentId:a.id,studentName:a.name},i.submissions.push(o)),o.status=`submitted`,o.fileName=n||`submission.js`,o.codeSnippet=r||`// Submitted code`,o.submittedAt=`Just now`,this.addNotification({title:`Assignment Submitted`,message:`${a.name} submitted "${i.title}".`,role:`teacher`,targetView:`assignments`}),e.playSuccess(),this.notify(`ASSIGNMENT_SUBMITTED`,{assignmentId:t,studentId:a.id})}reviewSubmission(t,n,{score:r,feedback:i}){let a=this.data.assignments.find(e=>e.id===t);if(!a)return;let o=a.submissions.find(e=>e.studentId===n);o&&(o.status=`reviewed`,o.score=r,o.feedback=i,this.addNotification({title:`Assignment Graded & Reviewed`,message:`Your score for ${a.title} is ${r}: "${i}"`,role:`student`,targetView:`assignments`}),e.playSuccess(),this.notify(`SUBMISSION_REVIEWED`,{assignmentId:t,studentId:n,score:r,feedback:i}))}sendAutoReminders(t){let n=this.data.assignments.find(e=>e.id===t);if(!n)return 0;let r=n.submissions.filter(e=>e.status===`pending`||e.status===`late`);return r.forEach(e=>{this.addNotification({title:`⏰ Urgent Reminder: Assignment Due`,message:`Reminder for ${e.studentName}: ${n.title} is pending submission. Due: ${n.deadlineText}!`,role:`student`,targetView:`assignments`})}),e.playAlert(),this.notify(`REMINDERS_SENT`,{count:r.length,assignmentId:t}),r.length}toggleTeacherTask(t){let n=this.data.teacherTasks.find(e=>e.id===t);n&&(n.completed=!n.completed,e.playClick(),this.notify(`TASK_UPDATED`,n))}addTeacherTask(t,n=`medium`,r=`Tomorrow`){let i={id:`tt_`+Date.now(),title:t,priority:n,completed:!1,due:r};this.data.teacherTasks.unshift(i),e.playClick(),this.notify(`TASK_ADDED`,i)}updateStudyPlan({hoursPerDay:t,selectedSubjects:n,examDate:r}){this.data.studyPlanner.hoursPerDay=Number(t),n&&(this.data.studyPlanner.selectedSubjects=n),r&&(this.data.studyPlanner.examDate=r);let i=this.data.studyPlanner.selectedSubjects.length>0?this.data.studyPlanner.selectedSubjects:[`HTML`,`CSS`,`JavaScript`],a=[{day:`Mon`,sub:i[0]||`Core`,topic:`Fundamentals & syntax deep-dive`},{day:`Tue`,sub:i[1]||`Styling`,topic:`Practical component implementation`},{day:`Wed`,sub:i[2]||`Logic`,topic:`Algorithms, state & event handling`},{day:`Thu`,sub:`Practice`,topic:`Solve 4 coding exercises in Practice Portal`},{day:`Fri`,sub:`Revision`,topic:`Review doubts, quizzes & cheat sheet notes`}];this.data.studyPlanner.schedule=a.map((e,t)=>({id:`sp_gen_`+t,day:e.day,subject:e.sub,topic:e.topic,duration:`${this.data.studyPlanner.hoursPerDay} Hours`,completed:t<2})),this.data.studyPlanner.examReadiness=Math.min(100,Math.round(55+this.data.studyPlanner.hoursPerDay*15)),e.playSuccess(),this.notify(`PLANNER_UPDATED`,this.data.studyPlanner)}togglePlanDay(t){let n=this.data.studyPlanner.schedule.find(e=>e.id===t);if(n){n.completed=!n.completed;let t=this.data.studyPlanner.schedule.length,r=this.data.studyPlanner.schedule.filter(e=>e.completed).length;this.data.studyPlanner.examReadiness=Math.round(r/t*100),e.playClick(),this.notify(`PLANNER_UPDATED`,this.data.studyPlanner)}}recordProblemAttempt(t,n){n?(this.data.studentStats.solved+=1,e.playSuccess()):(this.data.studentStats.failed+=1,e.playAlert());let r=this.data.studentStats.solved+this.data.studentStats.failed;this.data.studentStats.scorePercent=Math.round(this.data.studentStats.solved/r*100),this.notify(`PRACTICE_STATS_UPDATED`,this.data.studentStats)}addAiChatMessage(e,t){let n={id:`m_`+Date.now(),sender:e,text:t,timestamp:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};return this.data.aiChatHistory.push(n),this.notify(`AI_MESSAGE_ADDED`,n),n}addNotification({title:e,message:t,role:n=`all`,targetView:r=null}){let i={id:`n_`+Date.now(),title:e,message:t,time:`Just now`,role:n,unread:!0,targetView:r};this.data.notifications.unshift(i),this.notify(`NOTIFICATION_ADDED`,i)}markAllNotificationsRead(){this.data.notifications.forEach(e=>{e.unread=!1}),e.playClick(),this.notify(`NOTIFICATIONS_READ`,null)}resetAllData(){this.data=JSON.parse(JSON.stringify(n)),this.save(),e.playSuccess(),this.notify(`DATA_RESET`,null)}};function i({title:e,message:t,type:n=`info`,duration:r=4e3}){let i=document.getElementById(`toast-container`);if(!i)return;let a=document.createElement(`div`);a.className=`toast`,a.innerHTML=`
    <div class="toast-icon">${{info:`🔔`,success:`✅`,warning:`⚠️`,danger:`❌`}[n]||`✨`}</div>
    <div style="flex: 1;">
      <div class="toast-title">${e}</div>
      <div class="toast-msg">${t}</div>
    </div>
  `,i.appendChild(a),requestAnimationFrame(()=>{a.classList.add(`show`)}),setTimeout(()=>{a.classList.remove(`show`),setTimeout(()=>{a.parentElement&&a.parentElement.removeChild(a)},300)},r)}function a({title:t,bodyHtml:n,footerButtons:r=[],maxWidth:i=`560px`}){let a=document.getElementById(`modal-container`);if(!a)return;a.innerHTML=`
    <div class="modal-backdrop" id="active-modal-backdrop">
      <div class="modal-dialog" style="max-width: ${i};">
        <div class="modal-header">
          <h3 class="modal-title">${t}</h3>
          <button class="btn-icon" id="modal-close-btn" aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body">${n}</div>
        <div class="modal-footer" id="modal-footer-btns"></div>
      </div>
    </div>
  `;let o=a.querySelector(`#modal-footer-btns`);r.forEach(t=>{let n=document.createElement(`button`);n.className=t.className||`btn btn-secondary`,n.textContent=t.label,n.onclick=()=>{e.playClick(),t.onClick?t.onClick(a)!==!1&&l():l()},o.appendChild(n)});let s=a.querySelector(`#active-modal-backdrop`),c=a.querySelector(`#modal-close-btn`),l=()=>{s.classList.remove(`open`),setTimeout(()=>{a.innerHTML=``},250)};return c.onclick=()=>{e.playClick(),l()},s.onclick=e=>{e.target===s&&l()},requestAnimationFrame(()=>{s.classList.add(`open`)}),{close:l,container:a}}function o(t=null){let n=t||r.state.currentRole,o={teacher:`teacher@protech.edu`,student:`riya@protech.edu`,admin:`admin@protech.edu`},s=`
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
          <button type="button" class="btn ${n===`teacher`?`btn-teacher`:`btn-secondary`} login-role-btn" data-role="teacher">
            👨‍🏫 Teacher
          </button>
          <button type="button" class="btn ${n===`student`?`btn-student`:`btn-secondary`} login-role-btn" data-role="student">
            👩‍🎓 Student
          </button>
          <button type="button" class="btn ${n===`admin`?`btn-primary`:`btn-secondary`} login-role-btn" data-role="admin">
            🛡️ Admin
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" id="login-email-input" class="form-input" value="${o[n]}" />
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
  `,c=n,l=a({title:`Sign In to Protech Hub`,bodyHtml:s,maxWidth:`460px`,footerButtons:[{label:`Cancel`,className:`btn btn-outline`,onClick:()=>!0},{label:`Sign In & Open Portal`,className:c===`teacher`?`btn btn-teacher`:c===`student`?`btn btn-student`:`btn btn-primary`,onClick:t=>{t.querySelector(`#login-email-input`).value;let n=t.querySelector(`#login-status-msg`);n.style.display=`block`,n.style.background=`rgba(16, 185, 129, 0.15)`,n.style.color=`#10b981`,n.style.border=`1px solid rgba(16, 185, 129, 0.3)`;let a=r.state.user[c];return n.innerHTML=`✓ Welcome, ${a.name}! Opening your dashboard...`,e.playSuccess(),setTimeout(()=>{r.setRole(c),i({title:`Logged in as ${c.toUpperCase()}`,message:`Switched workspace to ${a.name}`,type:`success`}),l.close()},450),!1}}]}),u=l.container,d=u.querySelectorAll(`.login-role-btn`),f=u.querySelector(`#login-email-input`);d.forEach(t=>{t.onclick=()=>{e.playClick(),c=t.getAttribute(`data-role`),f.value=o[c],d.forEach(e=>{e.className=`btn btn-secondary login-role-btn`}),t.className=c===`teacher`?`btn btn-teacher login-role-btn`:c===`student`?`btn btn-student login-role-btn`:`btn btn-primary login-role-btn`}})}function s(){let e=a({title:`FixIt Fiesta | System Presentation Guide`,bodyHtml:`
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
  `,maxWidth:`720px`,footerButtons:[{label:`Close Walkthrough`,className:`btn btn-secondary`,onClick:()=>!0}]}),t=document.getElementById(`walkthrough-switch-teacher`),n=document.getElementById(`walkthrough-switch-student`);t&&(t.onclick=()=>{r.setRole(`teacher`),e.close()}),n&&(n.onclick=()=>{r.setRole(`student`),e.close()})}function c(){let t=document.getElementById(`app-header`);if(!t)return;let n=r.state,i=n.currentRole,a=n.activeView,u=n.user[i],d={teacher:{dashboard:`Teacher Dashboard`,assignments:`Submission Tracker`,doubts:`Doubt Board`,tasks:`Teacher Tasks`,knowledgeHub:`Protech Knowledge Hub`,aiAssistant:`AI Teaching Assistant`},student:{dashboard:`Student Dashboard`,studyPlan:`Smart Study Planner`,askDoubt:`Ask a Doubt`,assignments:`My Assignments`,codingPractice:`Coding Practice Portal`,knowledgeHub:`Protech Knowledge Hub`,aiAssistant:`AI Study Assistant`},admin:{dashboard:`Protech Hub | Admin Operations`,knowledgeHub:`Protech Knowledge Hub`,doubts:`Doubt Monitor`,assignments:`Assignment Tracker`}},f=d[i]&&d[i][a]||`Protech Hub`;document.body.className=`view-${i}-${a} ${i}-active`;let p=n.notifications.filter(e=>e.unread&&(e.role===i||e.role===`all`)).length;t.innerHTML=`
    <div class="header-left">
      <!-- Window Titlebar with three dots (•••) matching exact slides -->
      <div class="window-dots-title" id="header-brand-link" style="cursor: pointer;" title="Back to Dashboard">
        <div class="window-dots">
          <span class="window-dot"></span>
          <span class="window-dot"></span>
          <span class="window-dot"></span>
        </div>
        <span>${f}</span>
      </div>

      <span class="brand-fiesta-tag">FixIt Fiesta</span>

      <!-- Presentation Guide Button (Team of 6) -->
      <button class="btn btn-sm" id="walkthrough-btn" title="View Team Presentation & Workflow Architecture" style="background: rgba(255,255,255,0.18); color: #fff; border: 1px solid rgba(255,255,255,0.25); font-size: 0.725rem; padding: 0.25rem 0.65rem;">
        <span>✨</span> Slide Guide (6)
      </button>
    </div>

    <!-- Center Search Bar (Redirects to Knowledge Hub) -->
    <div class="header-center">
      <div class="global-search-box">
        <svg class="global-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="global-search-input" placeholder="Search notes, PDFs, videos, worksheets, doubts..." />
      </div>
    </div>

    <!-- Right Controls: Theme Toggle, Sound, Notifications, User & Switcher -->
    <div class="header-right">
      <!-- Theme Toggle -->
      <button class="btn-icon" id="theme-toggle-btn" title="Toggle Slide Theme (Presentation Light / Studio Dark)" style="color: #fff; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.25);">
        ${n.theme===`dark`?`☀️`:`🌙`}
      </button>

      <!-- Audio Mute Toggle -->
      <button class="btn-icon" id="audio-toggle-btn" title="Toggle Sound Feedback" style="color: #fff; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.25);">
        ${e.enabled?`🔊`:`🔇`}
      </button>

      <!-- Notifications Bell Button -->
      <div style="position: relative;">
        <button class="notif-bell-btn" id="notif-bell-btn" title="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          ${p>0?`<span class="notif-badge-count">${p}</span>`:``}
        </button>

        <!-- Notifications Popover -->
        <div class="notif-popover" id="notif-popover">
          <div class="notif-popover-header">
            <h4>Notifications & Alerts</h4>
            <button class="btn-sm btn-outline" id="mark-all-read-btn" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">
              Mark all read
            </button>
          </div>
          <div class="notif-popover-list" id="notif-list-container">
            ${l(n.notifications,i)}
          </div>
        </div>
      </div>

      <!-- Current Role Pill / Switcher (Slide 13 & 17) -->
      <div class="role-switcher-dropdown" id="role-switcher-btn" title="Switch Role / Sign In">
        <div class="user-avatar">
          ${u.avatar}
        </div>
        <div class="user-info">
          <span class="user-name">${u.name}</span>
          <span class="user-role-badge">${i.toUpperCase()} ▾</span>
        </div>
      </div>
    </div>
  `,document.getElementById(`walkthrough-btn`).onclick=()=>{e.playClick(),s()},document.getElementById(`header-brand-link`).onclick=()=>{r.setView(`dashboard`)},document.getElementById(`theme-toggle-btn`).onclick=()=>{let e=n.theme===`dark`?`light`:`dark`;r.setTheme(e)},document.getElementById(`audio-toggle-btn`).onclick=()=>{e.enabled=!e.enabled,e.enabled&&e.playClick(),c()};let m=document.getElementById(`notif-bell-btn`),h=document.getElementById(`notif-popover`);m.onclick=t=>{t.stopPropagation(),e.playClick(),h.classList.toggle(`open`)},document.getElementById(`mark-all-read-btn`).onclick=e=>{e.stopPropagation(),r.markAllNotificationsRead()},document.addEventListener(`click`,e=>{h&&!h.contains(e.target)&&e.target!==m&&h.classList.remove(`open`)}),document.getElementById(`role-switcher-btn`).onclick=()=>{e.playClick(),o()};let g=document.getElementById(`global-search-input`);g.onkeydown=t=>{t.key===`Enter`&&g.value.trim()&&(e.playClick(),r.setView(`knowledgeHub`),setTimeout(()=>{let e=document.getElementById(`hub-search-input`);e&&(e.value=g.value,e.dispatchEvent(new Event(`input`)))},100))}}function l(e,t){let n=e.filter(e=>e.role===t||e.role===`all`);return n.length===0?`<div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.825rem;">No new alerts. You're all caught up!</div>`:n.map(e=>`
    <div class="notif-popover-item ${e.unread?`unread`:``}" data-target-view="${e.targetView||``}">
      <span style="font-size: 1.1rem; line-height: 1;">${e.unread?`🔵`:`⚪`}</span>
      <div style="flex: 1;">
        <div style="font-weight: 700; color: var(--text-main); font-size: 0.8rem;">${e.title}</div>
        <div style="color: var(--text-muted); font-size: 0.775rem; margin-top: 0.15rem;">${e.message}</div>
        <div style="font-size: 0.675rem; color: var(--text-faint); margin-top: 0.25rem;">${e.time}</div>
      </div>
    </div>
  `).join(``)}function u(){let e=document.getElementById(`app-sidebar`);if(!e)return;let t=r.state,n=t.currentRole,i=t.activeView,a=t.doubts.filter(e=>e.status===`new`).length,o=t.assignments.reduce((e,t)=>e+t.submissions.filter(e=>e.status===`pending`||e.status===`late`).length,0),c=[];c=n===`teacher`?[{id:`dashboard`,label:`Dashboard`,icon:`📊`},{id:`assignments`,label:`Assignments`,icon:`📋`,badge:o>0?`${o} pending`:null},{id:`doubts`,label:`Doubt Board`,icon:`💬`,badge:a>0?`${a} new`:null,badgeClass:`badge-red`},{id:`tasks`,label:`Teacher Tasks`,icon:`✅`},{id:`knowledgeHub`,label:`Knowledge Hub`,icon:`📚`},{id:`aiAssistant`,label:`AI Assistant`,icon:`🤖`,badge:`Helper`,badgeClass:`badge-purple`}]:n===`student`?[{id:`dashboard`,label:`Dashboard`,icon:`🎯`},{id:`studyPlan`,label:`Study Plan`,icon:`📅`,badge:`Smart`},{id:`askDoubt`,label:`Ask a Doubt`,icon:`❓`},{id:`assignments`,label:`Assignments`,icon:`📝`},{id:`codingPractice`,label:`Coding Practice`,icon:`💻`,badge:`Live Runner`,badgeClass:`badge-green`},{id:`knowledgeHub`,label:`Knowledge Hub`,icon:`📚`},{id:`aiAssistant`,label:`AI Study Helper`,icon:`🤖`}]:[{id:`dashboard`,label:`System Overview`,icon:`🛡️`},{id:`knowledgeHub`,label:`Knowledge Hub`,icon:`📚`},{id:`doubts`,label:`All Doubts Monitor`,icon:`💬`},{id:`assignments`,label:`Assignment Audits`,icon:`📋`}],document.body.classList.remove(`teacher-active`,`student-active`,`admin-active`),document.body.classList.add(`${n}-active`),e.innerHTML=`
    <div class="sidebar-section-title">
      ${n.toUpperCase()} PORTAL
    </div>

    <nav style="display: flex; flex-direction: column;">
      ${c.map(e=>`
        <div class="nav-item ${i===e.id?`active`:``}" data-view="${e.id}">
          <span class="nav-item-icon">${e.icon}</span>
          <span>${e.label}</span>
          ${e.badge?`<span class="nav-item-badge ${e.badgeClass||``}">${e.badge}</span>`:``}
        </div>
      `).join(``)}
    </nav>

    <div class="sidebar-footer">
      <div style="background: var(--bg-card-subtle); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.775rem;">
        <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.2rem;">
          FixIt Fiesta • Protech
        </div>
        <div style="color: var(--text-muted); line-height: 1.4;">
          Spot the Problem. Fix It Smart.
        </div>
        <button class="btn btn-sm btn-outline" id="sidebar-walkthrough-btn" style="width: 100%; margin-top: 0.65rem; font-size: 0.725rem;">
          Presentation Guide
        </button>
      </div>
    </div>
  `,e.querySelectorAll(`.nav-item`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-view`);r.setView(t)}});let l=e.querySelector(`#sidebar-walkthrough-btn`);l&&(l.onclick=()=>s())}function d(){let e=document.getElementById(`view-container`);if(!e)return;let t=r.state;t.user.teacher,e.innerHTML=`
    <!-- View Header -->
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Welcome, Teacher!</h1>
        <p class="view-subtitle">Today's classes, pending tasks, doubts, deadlines and priority.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        <button class="btn btn-teacher" id="dash-new-assign-btn">
          <span>+</span> Create Assignment
        </button>
        <button class="btn btn-secondary" id="dash-open-doubts-btn">
          <span>💬</span> Doubt Board (7)
        </button>
      </div>
    </div>

    <!-- Top 3 Metric Cards (Exact match to Slide 3 & 14) -->
    <div class="metrics-grid-3">
      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-blue">
          📚
        </div>
        <div>
          <div class="metric-stat-label">Today's Classes</div>
          <div class="metric-stat-number" style="color: #2563eb;">3</div>
        </div>
      </div>

      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-amber">
          📝
        </div>
        <div>
          <div class="metric-stat-label">Pending Tasks</div>
          <div class="metric-stat-number" style="color: #d97706;">5</div>
        </div>
      </div>

      <div class="metric-card-slide">
        <div class="metric-circle-icon metric-circle-red">
          💬
        </div>
        <div>
          <div class="metric-stat-label">New Doubts</div>
          <div class="metric-stat-number" style="color: #ef4444;">7</div>
        </div>
      </div>
    </div>

    <!-- 2 Columns: Overview Progress & Deadlines vs Tasks -->
    <div class="dashboard-columns">
      <!-- Left Column: This Week's Overview + Deadlines -->
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <!-- This Week's Overview (Slide 3 & 14) -->
        <div class="card">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1.25rem; color: var(--text-main);">
            This Week's Overview
          </h3>
          
          <div class="progress-container" style="margin-bottom: 1.25rem;">
            <div class="progress-header">
              <span>Tasks completed</span>
              <span style="color: #2563eb; font-weight: 700;">80%</span>
            </div>
            <div class="progress-bar-bg" style="height: 12px;">
              <div class="progress-bar-fill blue" style="width: 80%; background: #2563eb;"></div>
            </div>
          </div>

          <div class="progress-container">
            <div class="progress-header">
              <span>Assignments checked</span>
              <span style="color: #10b981; font-weight: 700;">60%</span>
            </div>
            <div class="progress-bar-bg" style="height: 12px;">
              <div class="progress-bar-fill green" style="width: 60%; background: #10b981;"></div>
            </div>
          </div>
        </div>

        <!-- Upcoming Deadlines (Slide 3 & 14) -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Upcoming Deadlines</h3>
            <span class="badge badge-amber">Priority</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Worksheet 3</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Tomorrow 5 PM</span>
            </div>

            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Project Review</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Friday</span>
            </div>

            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; flex-shrink: 0;"></span>
                <span class="deadline-title">Batch A Quiz</span>
              </div>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Next Monday</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Teacher Tasks Manager -->
      <div class="card" style="display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Teacher Tasks</h3>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${t.teacherTasks.filter(e=>!e.completed).length} active</span>
        </div>

        <!-- Quick Add Task -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <input type="text" id="quick-task-input" class="form-input" placeholder="Add task or worksheet item..." />
          <button class="btn btn-teacher" id="quick-task-add-btn">Add</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem; flex: 1;">
          ${t.teacherTasks.map(e=>`
            <div class="deadline-item" style="cursor: pointer; padding: 0.75rem 1rem;" data-task-id="${e.id}">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <input type="checkbox" ${e.completed?`checked`:``} class="task-checkbox" data-task-id="${e.id}" style="cursor: pointer; width: 18px; height: 18px; accent-color: var(--teacher-primary);" />
                <span style="font-size: 0.85rem; ${e.completed?`text-decoration: line-through; color: var(--text-faint);`:`color: var(--text-main); font-weight: 500;`}">
                  ${e.title}
                </span>
              </div>
              <span class="badge ${e.priority===`high`?`badge-red`:e.priority===`medium`?`badge-amber`:`badge-blue`}">
                ${e.due}
              </span>
            </div>
          `).join(``)}
        </div>

        <!-- Benefit Banner from Slide 3 & 14 -->
        <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.825rem; font-weight: 700; text-align: center;">
          Benefit: better time management, nothing missed
        </div>
      </div>
    </div>
  `,document.getElementById(`dash-new-assign-btn`).onclick=()=>{r.setView(`assignments`)},document.getElementById(`dash-open-doubts-btn`).onclick=()=>{r.setView(`doubts`)};let n=document.getElementById(`quick-task-input`),i=()=>{let e=n.value.trim();e&&(r.addTeacherTask(e,`medium`,`Today`),n.value=``,d())};document.getElementById(`quick-task-add-btn`).onclick=i,n.onkeydown=e=>{e.key===`Enter`&&i()},e.querySelectorAll(`.task-checkbox`).forEach(e=>{e.onchange=t=>{t.stopPropagation();let n=e.getAttribute(`data-task-id`);r.toggleTeacherTask(n),d()}})}function f(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state.assignments[0],a=n.submissions,o=a.filter(e=>e.status===`submitted`).length,s=a.filter(e=>e.status===`pending`).length,c=a.filter(e=>e.status===`late`).length,l=a.filter(e=>e.status===`reviewed`).length;t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Submission Tracker</h1>
        <p class="view-subtitle">Slide 5 & 15: Teacher creates the assignment once. Students see Pending, Submitted, Reviewed.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        <button class="btn btn-teacher" id="btn-create-assignment">
          <span>+</span> Create Assignment
        </button>
      </div>
    </div>

    <!-- Active Tracker Card matching Slide 5 & 15 -->
    <div class="card" style="padding: 1.5rem; margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
        <div>
          <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-main);">
            Worksheet 3 - Batch A
          </h2>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
            JavaScript Arrays & Methods • Due: Tomorrow 5:00 PM
          </div>
        </div>

        <button class="btn btn-teacher" id="btn-send-auto-reminders">
          <span>🔔</span> Send Auto Reminder (${s+c})
        </button>
      </div>

      <!-- Live Submission Table (Slide 5 & 15) -->
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 250px;">Student</th>
              <th style="width: 150px;">Status</th>
              <th style="width: 180px;">Score / Action</th>
              <th style="text-align: right;">Options</th>
            </tr>
          </thead>
          <tbody>
            ${a.map(e=>`
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div class="user-avatar student" style="width: 30px; height: 30px; font-size: 0.8rem; background: #e0f2fe; color: #0369a1; font-weight: 700;">
                      ${e.studentName.charAt(0)}
                    </div>
                    <div>
                      <strong style="color: var(--text-main); font-size: 0.9rem;">${e.studentName}</strong>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="status-pill status-${e.status}">
                    ${e.status}
                  </span>
                </td>
                <td>
                  ${e.status===`reviewed`?`
                    <span class="badge badge-green" style="font-weight: 700; font-size: 0.85rem;">${e.score||`9/10`}</span>
                  `:e.status===`submitted`?`
                    <button class="btn btn-sm btn-teacher review-sub-btn" data-student-id="${e.studentId}">
                      Review now
                    </button>
                  `:e.status===`late`?`
                    <span style="color: #ef4444; font-size: 0.8rem; font-weight: 600;">Overdue</span>
                  `:`
                    <span style="color: var(--text-faint); font-size: 0.8rem;">Waiting...</span>
                  `}
                </td>
                <td style="text-align: right;">
                  ${e.status===`reviewed`?`
                    <button class="btn btn-sm btn-outline review-sub-btn" data-student-id="${e.studentId}">
                      Edit Score
                    </button>
                  `:`
                    <button class="btn btn-sm btn-outline ping-student-btn" data-student-name="${e.studentName}" data-student-id="${e.studentId}">
                      Remind
                    </button>
                  `}
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>

      <!-- Auto reminder banner from Slide 5 & 15 -->
      <div class="auto-reminder-banner">
        <span>🔔</span>
        <span>Auto reminder sent to 2 students who have not submitted</span>
      </div>

      <!-- Bottom Pills Bar from Slide 5 & 15 -->
      <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.25rem;">
        <span class="status-pill status-submitted">
          <strong>${o}</strong> Submitted
        </span>
        <span class="status-pill status-pending">
          <strong>${s}</strong> Pending
        </span>
        <span class="status-pill status-late">
          <strong>${c}</strong> Late
        </span>
        <span class="status-pill status-reviewed">
          <strong>${l}</strong> Reviewed
        </span>
      </div>
    </div>

    <!-- Slide 5 & 15 Benefit & Tip Footer -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: clear status and on-time submissions</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: Pending, Submitted, Late, Reviewed update live</span>
    </div>
  `,document.getElementById(`btn-create-assignment`).onclick=()=>{p()},document.getElementById(`btn-send-auto-reminders`).onclick=()=>{i({title:`Auto Reminders Dispatched`,message:`Auto reminder notification sent to ${r.sendAutoReminders(n.id)} students who have not submitted.`,type:`success`}),f()},t.querySelectorAll(`.review-sub-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-student-id`),r=n.submissions.find(e=>e.studentId===t);m(n,r)}}),t.querySelectorAll(`.ping-student-btn`).forEach(t=>{t.onclick=()=>{let a=t.getAttribute(`data-student-name`);r.addNotification({title:`Direct Teacher Ping`,message:`Prof. Vikram Sen sent you a priority reminder for "${n.title}".`,role:`student`,targetView:`assignments`}),e.playAlert(),i({title:`Reminder Sent`,message:`Notification sent directly to ${a}.`,type:`info`})}})}function p(){a({title:`Create an Assignment`,bodyHtml:`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">Assignment Title</label>
        <input type="text" id="new-assign-title" class="form-input" placeholder="e.g. Worksheet 4 - Object Oriented JavaScript" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Target Class / Batch</label>
          <select id="new-assign-batch" class="form-select">
            <option value="Batch A">Batch A</option>
            <option value="Batch B">Batch B</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Deadline</label>
          <input type="text" id="new-assign-deadline" class="form-input" value="Tomorrow 5 PM" />
        </div>
      </div>

      <div class="form-group">
        <label class="switch-label">
          <input type="checkbox" id="new-assign-reminder" class="switch-input" checked />
          <span class="switch-track"></span>
          <div>
            <strong style="font-size: 0.85rem; color: var(--text-main);">Switch on Auto reminders</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Auto reminders go out before deadline</div>
          </div>
        </label>
      </div>

      <div class="form-group">
        <label class="form-label">Write short instructions</label>
        <textarea id="new-assign-instructions" class="form-textarea" placeholder="Write short instructions, then click Publish..."></textarea>
      </div>
    </div>
  `,maxWidth:`560px`,footerButtons:[{label:`Cancel`,className:`btn btn-outline`,onClick:()=>!0},{label:`Publish`,className:`btn btn-teacher`,onClick:e=>{let t=e.querySelector(`#new-assign-title`).value.trim(),n=e.querySelector(`#new-assign-batch`).value,a=e.querySelector(`#new-assign-deadline`).value.trim(),o=e.querySelector(`#new-assign-reminder`).checked,s=e.querySelector(`#new-assign-instructions`).value.trim();return t?(r.createAssignment({title:t,batch:n,deadlineText:a,instructions:s,autoReminder:o}),i({title:`Assignment Published`,message:`"${t}" created for ${n}.`,type:`success`}),f(),!0):(i({title:`Validation Error`,message:`Please enter a title.`,type:`warning`}),!1)}}]})}function m(e,t){a({title:`Review Submission`,bodyHtml:`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background: var(--bg-card-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <strong style="font-size: 1rem; color: var(--text-main);">${t.studentName}</strong> • ${e.title}
        <div style="font-size: 0.775rem; color: #2563eb; margin-top: 0.25rem;">
          File: <code>${t.fileName||`worksheet_submission.js`}</code>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 140px 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Score (e.g. 9/10)</label>
          <input type="text" id="review-score-input" class="form-input" value="${t.score||`9/10`}" />
        </div>

        <div class="form-group">
          <label class="form-label">Feedback</label>
          <input type="text" id="review-feedback-input" class="form-input" value="${t.feedback||`Great work!`}" />
        </div>
      </div>
    </div>
  `,maxWidth:`520px`,footerButtons:[{label:`Cancel`,className:`btn btn-outline`,onClick:()=>!0},{label:`Save & Review`,className:`btn btn-teacher`,onClick:n=>{let a=n.querySelector(`#review-score-input`).value.trim(),o=n.querySelector(`#review-feedback-input`).value.trim();return r.reviewSubmission(e.id,t.studentId,{score:a,feedback:o}),i({title:`Submission Reviewed`,message:`Graded ${t.studentName}: ${a}`,type:`success`}),f(),!0}}]})}var h=`d1`;function g(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state.doubts,a=n.find(e=>e.id===h)||n[0],o=[{id:`new`,label:`New`,count:n.filter(e=>e.status===`new`).length,headerClass:`col-red`},{id:`in_progress`,label:`In Progress`,count:n.filter(e=>e.status===`in_progress`).length,headerClass:`col-amber`},{id:`answered`,label:`Answered`,count:n.filter(e=>e.status===`answered`).length,headerClass:`col-blue`},{id:`resolved`,label:`Resolved`,count:n.filter(e=>e.status===`resolved`).length,headerClass:`col-green`}];t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Doubt Board</h1>
        <p class="view-subtitle">Slide 4 & 16: Four-column board. Drag a new doubt into In Progress, reply and resolve.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-red" style="padding: 0.35rem 0.75rem; font-weight: 700;">
          🔴 ${o[0].count} New Doubts Waiting
        </span>
      </div>
    </div>

    <!-- 4-Column Kanban Board (Slide 4 & 16) -->
    <div class="kanban-board-slide">
      ${o.map(e=>`
        <div class="kanban-column-slide">
          <div class="kanban-col-header-slide ${e.headerClass}">
            <span>${e.label}</span>
            <span style="font-size: 0.75rem; background: rgba(255,255,255,0.3); padding: 0.1rem 0.45rem; border-radius: var(--radius-full);">${e.count}</span>
          </div>

          <div class="kanban-card-body">
            ${n.filter(t=>t.status===e.id).map(e=>`
              <div class="doubt-card-slide ${e.id===h?`active-selected-doubt`:``}" data-doubt-id="${e.id}" style="${e.id===h?`border-color: #2563eb; background: #eff6ff;`:``}">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <strong style="font-size: 0.875rem; color: var(--text-main);">${e.studentName}</strong>
                  <span style="font-size: 0.7rem; color: var(--text-muted);">${e.createdAt}</span>
                </div>
                <div style="font-size: 0.75rem; font-weight: 600; color: #2563eb;">${e.topic}</div>
                <div style="font-size: 0.775rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                  ${e.question}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `).join(``)}
    </div>

    <!-- Bottom Inline Reply Tray (Slide 16) -->
    <div class="doubt-reply-tray">
      <div style="flex-shrink: 0; min-width: 180px;">
        <div style="font-size: 0.725rem; font-weight: 600; color: var(--text-muted);">ACTIVE DOUBT:</div>
        <strong style="font-size: 0.9rem; color: var(--text-main);">Reply to ${a.studentName} - ${a.topic}</strong>
      </div>

      <input type="text" id="inline-doubt-reply-input" class="form-input" placeholder="Type reply (e.g. Use arr.reverse() or [...arr].reverse())..." value="${a.teacherReply||`Use arr.reverse() or [...arr].reverse()`}" style="flex: 1;" />

      <button class="btn btn-primary" id="btn-send-doubt-reply">
        <span>Send</span>
      </button>

      <button class="btn btn-student" id="btn-resolve-doubt-quick">
        <span>Resolve</span>
      </button>
    </div>

    <!-- Notification Alert from Slide 16 -->
    <div id="doubt-resolved-alert" style="display: none; margin-top: 0.85rem; padding: 0.75rem 1rem; background: #d1fae5; border: 1px solid #a7f3d0; border-radius: var(--radius-md); color: #065f46; font-size: 0.825rem; font-weight: 600;">
      ✓ Notification sent to ${a.studentName} - doubt resolved!
    </div>

    <!-- Tip & Benefit Footer -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: no doubt gets lost!</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: the red badge shows new doubts waiting</span>
    </div>
  `,t.querySelectorAll(`.doubt-card-slide`).forEach(t=>{t.onclick=()=>{e.playClick(),h=t.getAttribute(`data-doubt-id`),g()}});let s=document.getElementById(`inline-doubt-reply-input`),c=document.getElementById(`doubt-resolved-alert`);document.getElementById(`btn-send-doubt-reply`).onclick=()=>{let e=s.value.trim();e&&(r.replyToDoubt(a.id,e),i({title:`Reply Dispatched`,message:`Answer sent to ${a.studentName}.`,type:`success`}),g())},document.getElementById(`btn-resolve-doubt-quick`).onclick=()=>{let t=s.value.trim();t&&r.replyToDoubt(a.id,t),r.updateDoubtStatus(a.id,`resolved`),c.style.display=`block`,e.playSuccess(),i({title:`Doubt Resolved`,message:`Notification sent to ${a.studentName} - doubt resolved!`,type:`success`}),setTimeout(()=>{g()},600)}}function _(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state.teacherTasks,a=n.filter(e=>!e.completed),o=n.filter(e=>e.completed);t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Teacher Task & Workload Management</h1>
        <p class="view-subtitle">Stop overload, prioritize lesson prep, worksheets, reviews, and student follow-ups.</p>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <span class="badge badge-amber">${a.length} Pending</span>
        <span class="badge badge-green">${o.length} Completed</span>
      </div>
    </div>

    <!-- Quick Add Form -->
    <div class="card" style="margin-bottom: 1.5rem;">
      <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">Add New Teaching Task</h3>
      <div style="display: grid; grid-template-columns: 1fr 180px 140px 100px; gap: 0.75rem; align-items: center;">
        <input type="text" id="task-title-input" class="form-input" placeholder="e.g. Prepare Worksheet 5 on Async/Await..." />
        
        <select id="task-priority-input" class="form-select">
          <option value="high">🔴 High Priority</option>
          <option value="medium" selected>🟠 Medium Priority</option>
          <option value="low">🔵 Low Priority</option>
        </select>

        <input type="text" id="task-due-input" class="form-input" value="Today 5 PM" />

        <button class="btn btn-teacher" id="btn-create-task" style="height: 100%;">
          Add Task
        </button>
      </div>
    </div>

    <!-- Tasks List -->
    <div class="card">
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${n.map(e=>`
          <div class="deadline-item" style="padding: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.85rem;">
              <input type="checkbox" ${e.completed?`checked`:``} class="task-page-cb" data-task-id="${e.id}" style="width: 20px; height: 20px; accent-color: var(--teacher-primary); cursor: pointer;" />
              <div>
                <div style="font-size: 0.95rem; ${e.completed?`text-decoration: line-through; color: var(--text-faint);`:`color: var(--text-main); font-weight: 600;`}">
                  ${e.title}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">
                  Due: ${e.due}
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="badge ${e.priority===`high`?`badge-red`:e.priority===`medium`?`badge-amber`:`badge-blue`}">
                ${e.priority.toUpperCase()}
              </span>
              <button class="btn-icon delete-task-btn" data-task-id="${e.id}" title="Remove Task" style="padding: 0.35rem; color: var(--color-danger);">
                ✕
              </button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `;let s=document.getElementById(`task-title-input`),c=document.getElementById(`task-priority-input`),l=document.getElementById(`task-due-input`),u=()=>{let e=s.value.trim();e&&(r.addTeacherTask(e,c.value,l.value),i({title:`Task Created`,message:`Added "${e}" to your checklist.`,type:`success`}),_())};document.getElementById(`btn-create-task`).onclick=u,s.onkeydown=e=>{e.key===`Enter`&&u()},t.querySelectorAll(`.task-page-cb`).forEach(e=>{e.onchange=()=>{let t=e.getAttribute(`data-task-id`);r.toggleTeacherTask(t),_()}}),t.querySelectorAll(`.delete-task-btn`).forEach(t=>{t.onclick=()=>{let n=t.getAttribute(`data-task-id`);r.state.teacherTasks=r.state.teacherTasks.filter(e=>e.id!==n),r.save(),e.playClick(),_()}})}function v(){let e=document.getElementById(`view-container`);if(!e)return;let t=r.state,n=t.user.student,i=t.studyPlanner;t.assignments.filter(e=>{let t=e.submissions.find(e=>e.studentId===n.id);return!t||t.status===`pending`||t.status===`late`});let a=t.doubts.filter(e=>e.studentId===n.id),o=a.filter(e=>e.status===`resolved`).length;e.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Welcome back, ${n.name}! 🌟</h1>
        <p class="view-subtitle">Batch A • Keep up your ${n.streakDays}-day learning streak and stay exam ready.</p>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-student" id="dash-smart-plan-btn">
          <span>📅</span> View My Study Plan
        </button>
        <button class="btn btn-primary" id="dash-ask-doubt-btn">
          <span>❓</span> Ask a Doubt
        </button>
      </div>
    </div>

    <!-- Metric Cards Row -->
    <div class="metrics-grid-3">
      <div class="metric-card green">
        <div>
          <div class="metric-label">Exam Readiness</div>
          <div class="metric-value" style="color: var(--student-primary);">${i.examReadiness}%</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Exam target: ${i.examDate}</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--student-primary);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
      </div>

      <div class="metric-card purple">
        <div>
          <div class="metric-label">Code Practice Solved</div>
          <div class="metric-value">${t.studentStats.solved}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Success score: ${t.studentStats.scorePercent}%</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--teacher-primary-light);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
      </div>

      <div class="metric-card amber">
        <div>
          <div class="metric-label">Doubts Resolved</div>
          <div class="metric-value">${o} / ${a.length}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">Fast teacher feedback loop</div>
        </div>
        <div class="metric-icon-wrap" style="color: var(--color-warning);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
      </div>
    </div>

    <!-- 2 Column Layout -->
    <div class="dashboard-columns">
      <!-- Left: Today's Recommended Study Plan -->
      <div class="card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div>
            <span class="badge badge-green" style="margin-bottom: 0.25rem;">SMART PLANNER</span>
            <h3 style="font-size: 1.15rem; font-weight: 700;">Weekly Study Schedule</h3>
          </div>
          <button class="btn btn-sm btn-outline" id="go-to-planner-btn">Adjust Plan</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${i.schedule.map(e=>`
            <div class="deadline-item" style="padding: 0.85rem 1rem;">
              <div style="display: flex; align-items: center; gap: 0.85rem;">
                <span class="badge ${e.completed?`badge-green`:`badge-amber`}" style="min-width: 48px; text-align: center; justify-content: center;">
                  ${e.day}
                </span>
                <div>
                  <strong style="color: var(--text-main); font-size: 0.9rem;">${e.subject}</strong>
                  <div style="font-size: 0.775rem; color: var(--text-muted);">${e.topic}</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.75rem; color: var(--text-faint);">${e.duration}</span>
                ${e.completed?`<span style="color: var(--student-primary); font-size: 0.85rem;">✓ Done</span>`:`<span style="color: var(--color-warning); font-size: 0.75rem;">Pending</span>`}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Right: Pending Submissions & Coding Challenge -->
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Coding Practice Banner -->
        <div class="card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border-color: rgba(16, 185, 129, 0.3);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <span class="badge badge-green">DAILY CODING CHALLENGE</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Problem #1</span>
          </div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.35rem;">Reverse an Array</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
            Test your knowledge of immutability and modern array techniques with instant test evaluation.
          </p>
          <button class="btn btn-student" id="dash-practice-now-btn" style="width: 100%;">
            Open Code Editor & Test Cases ➔
          </button>
        </div>

        <!-- Assignments Status -->
        <div class="card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <h4 style="font-size: 1rem; font-weight: 700;">My Assignments</h4>
            <button class="btn btn-sm btn-outline" id="dash-view-all-assign">View All</button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            ${t.assignments.map(e=>{let t=e.submissions.find(e=>e.studentId===n.id),r=t?t.status:`pending`;return`
                <div class="deadline-item" style="padding: 0.75rem 1rem;">
                  <div>
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-main);">${e.title}</div>
                    <div style="font-size: 0.725rem; color: var(--text-muted);">${e.deadlineText}</div>
                  </div>
                  <span class="status-pill status-${r}">${r}</span>
                </div>
              `}).join(``)}
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById(`dash-smart-plan-btn`).onclick=()=>r.setView(`studyPlan`),document.getElementById(`dash-ask-doubt-btn`).onclick=()=>r.setView(`askDoubt`),document.getElementById(`go-to-planner-btn`).onclick=()=>r.setView(`studyPlan`),document.getElementById(`dash-practice-now-btn`).onclick=()=>r.setView(`codingPractice`),document.getElementById(`dash-view-all-assign`).onclick=()=>r.setView(`assignments`)}function y(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state.studyPlanner;t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Smart Study Planner</h1>
        <p class="view-subtitle">Slide 6 & 18: Student enters study time, subjects, pending topics and exam date. The system builds a simple weekly plan.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700;">
          Exam Readiness: ${n.examReadiness}%
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
              ${n.hoursPerDay} hours
            </span>
          </div>
          <input type="range" id="study-hours-slider" class="form-range" min="0.5" max="4.0" step="0.5" value="${n.hoursPerDay}" />
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
  `;let a=document.getElementById(`study-hours-slider`),o=document.getElementById(`slider-display-val`);a.oninput=()=>{o.textContent=`${a.value} hours`},document.getElementById(`btn-generate-plan`).onclick=()=>{e.playSuccess(),i({title:`Plan Updated!`,message:`Weekly study plan updated for ${a.value} hours/day.`,type:`success`})}}function b(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state,a=n.user.student,o=n.doubts.filter(e=>e.studentId===a.id)[0]||n.doubts[0];t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Ask a Doubt</h1>
        <p class="view-subtitle">Slide 4 & 19: Student sends topic, question, screenshot and code. Teacher moves it New, In Progress, Answered, Resolved.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700;">
          Tracking Active
        </span>
      </div>
    </div>

    <!-- Main Card matching Slide 4 & 19 -->
    <div class="card" style="padding: 1.5rem; margin-bottom: 1.25rem;">
      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Topic</label>
        <select id="doubt-topic-select" class="form-select">
          <option value="JavaScript > Arrays" selected>JavaScript > Arrays</option>
          <option value="CSS > Flexbox">CSS > Flexbox</option>
          <option value="Database > SQL Joins">Database > SQL Joins</option>
          <option value="React > Hooks">React > Hooks</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom: 1rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Your question:</label>
        <input type="text" id="doubt-question-input" class="form-input" value="How do I reverse an array in JavaScript?" />
      </div>

      <div class="form-group" style="margin-bottom: 1.25rem;">
        <label class="form-label" style="font-size: 0.85rem; color: var(--text-muted);">Code (optional)</label>
        <textarea id="doubt-code-input" class="form-textarea" style="font-family: var(--font-mono); font-size: 0.85rem; min-height: 80px;">arr.reverse()</textarea>
      </div>

      <!-- Button Row: Attach Screenshot, File Pill, Submit Doubt (Slide 4 & 19) -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-attach-screenshot" style="border: 1px solid var(--border-default);">
            + Attach screenshot
          </button>
          <span class="badge badge-green" style="font-size: 0.775rem;">error.png</span>
        </div>

        <button class="btn btn-student" id="btn-submit-doubt" style="background: #059669; padding: 0.65rem 1.5rem;">
          Submit Doubt
        </button>
      </div>

      <!-- Confirmation Banner (Slide 4 & 19) -->
      <div id="doubt-submitted-banner" style="display: flex; align-items: center; gap: 0.5rem; background: #d1fae5; border: 1px solid #a7f3d0; border-radius: var(--radius-md); padding: 0.75rem 1rem; color: #065f46; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;">
        <span>✓ Doubt #12 submitted - your teacher is notified</span>
      </div>

      <!-- "Track your doubt" Horizontal Stepper (Slide 4 & 19) -->
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <strong style="font-size: 0.875rem; color: var(--text-muted); display: block; margin-bottom: 1rem;">Track your doubt</strong>

        <div style="display: flex; align-items: center; justify-content: space-between; position: relative; max-width: 600px; margin: 0 auto; padding: 1rem 0;">
          <!-- Line -->
          <div style="position: absolute; top: 50%; left: 30px; right: 30px; height: 3px; background: #e2e8f0; transform: translateY(-50%); z-index: 1;"></div>
          <div style="position: absolute; top: 50%; left: 30px; width: ${x(o.status)}; height: 3px; background: #059669; transform: translateY(-50%); z-index: 2;"></div>

          <!-- Step 1: New (Red) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #ef4444; border: 3px solid #fff; box-shadow: 0 0 0 2px #ef4444;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #ef4444;">New</span>
          </div>

          <!-- Step 2: In Progress (Orange) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #f59e0b; border: 3px solid #fff; box-shadow: 0 0 0 2px #f59e0b;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #f59e0b;">In Progress</span>
          </div>

          <!-- Step 3: Answered (Blue) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #2563eb; border: 3px solid #fff; box-shadow: 0 0 0 2px #2563eb;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #2563eb;">Answered</span>
          </div>

          <!-- Step 4: Resolved (Green) -->
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.35rem; z-index: 3; position: relative;">
            <div style="width: 22px; height: 22px; border-radius: 50%; background: #10b981; border: 3px solid #fff; box-shadow: 0 0 0 2px #10b981;"></div>
            <span style="font-size: 0.75rem; font-weight: 700; color: #10b981;">Resolved</span>
          </div>
        </div>

        <!-- Teacher reply feedback if available -->
        ${o.teacherReply?`
          <div style="margin-top: 1rem; background: var(--bg-card-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.75rem; font-weight: 700; color: #059669; margin-bottom: 0.2rem;">Teacher reply:</div>
            <div style="font-size: 0.85rem; color: var(--text-main);">${o.teacherReply}</div>
          </div>
        `:``}
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 4 & 19 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: no doubt gets lost!</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: every doubt is tracked, none are lost</span>
    </div>
  `,document.getElementById(`btn-submit-doubt`).onclick=()=>{let t=document.getElementById(`doubt-question-input`).value.trim(),n=document.getElementById(`doubt-topic-select`).value,a=document.getElementById(`doubt-code-input`).value.trim();t?(r.addDoubt({topic:n,question:t,code:a,screenshotName:`error.png`}),e.playSuccess(),i({title:`Doubt #12 submitted`,message:`Your teacher has been notified on their board.`,type:`success`}),b()):i({title:`Enter a Question`,message:`Please describe your doubt.`,type:`warning`})}}function x(e){return e===`new`?`0%`:e===`in_progress`?`33%`:e===`answered`?`66%`:e===`resolved`?`100%`:`33%`}function S(){let e=document.getElementById(`view-container`);if(!e)return;let t=r.state;t.user.student;let n=t.assignments;e.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">My Assignments</h1>
        <p class="view-subtitle">Slide 5 & 20: Open assignments, upload your file, submit before deadline and read teacher feedback.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-amber" style="font-weight: 700;">
          🔔 Bell Reminder Active
        </span>
      </div>
    </div>

    <!-- Assignments List matching Slide 20 -->
    <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 1.5rem;">
      <!-- Assignment 1: Worksheet 3 (Slide 20: Reviewed with 9/10 score) -->
      <div class="card" style="padding: 1.5rem;">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.5rem;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">Worksheet 3</h3>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.15rem;">
              Due Friday 5:00 PM | Batch A
            </div>
          </div>
          <span class="status-pill status-reviewed">Reviewed</span>
        </div>

        <p style="font-size: 0.875rem; color: var(--text-main); margin-bottom: 1rem;">
          Solve Q1-Q5 and upload your code file.
        </p>

        <!-- Teacher feedback box from Slide 20 -->
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1rem;">
          <div style="font-size: 0.775rem; font-weight: 700; color: #1d4ed8; margin-bottom: 0.2rem;">Teacher feedback</div>
          <div style="font-size: 0.875rem; color: #1e3a8a; font-weight: 600;">
            Great work! Score: <strong>9/10</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <button class="btn btn-sm btn-outline btn-submit-work" data-assign-id="assign1">
            Resubmit File
          </button>
        </div>
      </div>

      <!-- Assignment 2: HTML Project (Slide 20: Reviewed) -->
      <div class="card" style="padding: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">HTML Project</h3>
            <div style="font-size: 0.775rem; color: var(--text-muted);">Responsive semantic structure</div>
          </div>
          <span class="status-pill status-reviewed">Reviewed</span>
        </div>
      </div>

      <!-- Assignment 3: CSS Quiz (Slide 20: Submitted) -->
      <div class="card" style="padding: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">CSS Quiz</h3>
            <div style="font-size: 0.775rem; color: var(--text-muted);">Selectors & Flexbox questions</div>
          </div>
          <span class="status-pill status-submitted">Submitted</span>
        </div>
      </div>
    </div>

    <!-- Status Lifecycle Banner from Slide 20 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.85rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 1.25rem;">
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">
        Status: <span style="color: #f59e0b;">Pending</span> &gt; <span style="color: #10b981;">Submitted</span> &gt; <span style="color: #2563eb;">Reviewed</span>
      </div>
      <span style="font-size: 0.8rem; color: var(--text-muted);">All deliverables tracked live</span>
    </div>

    <!-- Tip from Slide 20 -->
    <div style="padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700; text-align: center;">
      Tip: a bell reminder appears before the deadline
    </div>
  `,e.querySelectorAll(`.btn-submit-work`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-assign-id`);C(n.find(e=>e.id===t)||n[0])}})}function C(e){let t=`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="background: var(--bg-card-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <strong style="font-size: 1rem; color: var(--text-main);">${e.title}</strong>
        <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.25rem;">
          Due Friday 5:00 PM | Batch A
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Upload your file</label>
        <div style="border: 2px dashed var(--border-default); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center; background: var(--bg-input); cursor: pointer;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
          <strong style="font-size: 0.875rem; color: var(--text-main);">Click to select code file</strong>
          <div style="font-size: 0.75rem; color: #2563eb; margin-top: 0.25rem;">
            Attached: worksheet3_solution.js
          </div>
        </div>
      </div>
    </div>
  `;a({title:`Submit: ${e.title}`,bodyHtml:t,maxWidth:`520px`,footerButtons:[{label:`Cancel`,className:`btn btn-outline`,onClick:()=>!0},{label:`Submit before deadline`,className:`btn btn-student`,onClick:()=>(r.submitAssignmentWork(e.id,{fileName:`worksheet3_solution.js`,codeSnippet:`// Solution code`}),i({title:`Submitted!`,message:`Your assignment is now submitted.`,type:`success`}),S(),!0)}]})}var w=0,T=null;function E(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state,i=n.codingProblems,a=i[w]||i[0],o=n.studentStats;t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Coding Practice Portal</h1>
        <p class="view-subtitle">Slide 7 & 21: Students solve, run and submit code. Practice and progress in one place.</p>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <span class="badge badge-green" style="font-weight: 700; font-size: 0.8rem;">
          ⚡ Live Execution Engine
        </span>
      </div>
    </div>

    <!-- Main Two-Pane Layout matching Slide 7 & 21 -->
    <div class="code-practice-layout">
      <!-- Left Pane: Problem Details & Progress -->
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="card" style="padding: 1.25rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
            <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">
              ${a.title}
            </h2>
            <span class="badge badge-green" style="font-weight: 700;">${a.difficulty}</span>
          </div>

          <p style="font-size: 0.875rem; color: var(--text-main); line-height: 1.4; margin-bottom: 0.85rem;">
            Return the array in reverse order.
          </p>

          <div style="background: var(--bg-card-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
            <code style="font-family: var(--font-mono); font-size: 0.85rem; color: #2563eb; font-weight: 600;">
              [1, 2, 3] -> [3, 2, 1]
            </code>
          </div>

          <!-- Problem Switcher -->
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            ${i.map((e,t)=>`
              <button class="btn btn-sm ${t===w?`btn-primary`:`btn-secondary`} switch-prob-btn" data-idx="${t}" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
                #${t+1} ${e.title}
              </button>
            `).join(``)}
          </div>

          <!-- "Your progress" Panel (Exact match to Slide 7 & 21) -->
          <div style="padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
            <strong style="font-size: 0.95rem; color: var(--text-main); display: block; margin-bottom: 0.65rem;">Your progress</strong>

            <div class="progress-boxes-3">
              <div class="progress-stat-box cyan">
                <div style="font-size: 0.75rem; font-weight: 600;">Solved</div>
                <div class="progress-box-num">${o.solved}</div>
              </div>

              <div class="progress-stat-box pink">
                <div style="font-size: 0.75rem; font-weight: 600;">Failed</div>
                <div class="progress-box-num">${o.failed}</div>
              </div>

              <div class="progress-stat-box purple">
                <div style="font-size: 0.75rem; font-weight: 600;">Score</div>
                <div class="progress-box-num">${o.scorePercent}%</div>
              </div>
            </div>

            <!-- Weak topics (Slide 21 Tip) -->
            <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.75rem;">
              <span>Focus areas: </span>
              ${o.weakTopics.map(e=>`<span class="badge badge-amber" style="margin-left: 0.2rem; font-size: 0.7rem;">${e}</span>`).join(``)}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Pane: Code Editor & Output (Slide 7 & 21) -->
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="code-editor-container">
          <div class="editor-header">
            <div class="editor-tab">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span>solution.js</span>
            </div>
            <button class="btn btn-sm btn-outline" id="editor-reset-btn" style="color: #94a3b8; font-size: 0.7rem; padding: 0.15rem 0.45rem;">
              Reset
            </button>
          </div>

          <textarea id="code-practice-editor" class="editor-textarea" spellcheck="false" style="height: 200px;">function reverse(arr) {
  return arr.slice().reverse();
}</textarea>

          <div class="editor-actions-bar">
            <span style="font-size: 0.75rem; color: #94a3b8;">ES6 JavaScript Engine</span>

            <div style="display: flex; gap: 0.65rem;">
              <button class="btn btn-student" id="btn-run-code" style="background: #10b981;">
                <span>▶ Run Code</span>
              </button>
              <button class="btn btn-primary" id="btn-submit-code" style="background: #2563eb;">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Output Box matching Slide 7 & 21 -->
        <div class="test-results-box" id="test-results-container" style="background: var(--bg-card); border-radius: var(--radius-lg); padding: 1.25rem;">
          ${O(a,T)}
        </div>
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 7 & 21 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: practice and progress in one place</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: your progress panel shows weak topics</span>
    </div>
  `,t.querySelectorAll(`.switch-prob-btn`).forEach(t=>{t.onclick=()=>{e.playClick(),w=Number(t.getAttribute(`data-idx`)),T=null,E()}}),document.getElementById(`editor-reset-btn`).onclick=()=>{e.playClick(),document.getElementById(`code-practice-editor`).value=a.starterCode,T=null,document.getElementById(`test-results-container`).innerHTML=O(a,null)},document.getElementById(`btn-run-code`).onclick=()=>{let e=document.getElementById(`code-practice-editor`).value;D(e,a,!1)},document.getElementById(`btn-submit-code`).onclick=()=>{let e=document.getElementById(`code-practice-editor`).value;D(e,a,!0)}}function D(t,n,a=!1){e.playSubmit();let o=[],s=!0;try{n.testCases.forEach((e,n)=>{try{let r=`
          ${t};
          return (${e.code});
        `,i=!!Function(r)();i||(s=!1),o.push({label:`Test ${n+1} passed`,passed:i,error:null})}catch(e){s=!1,o.push({label:`Test ${n+1} failed`,passed:!1,error:e.message})}})}catch(e){s=!1,n.testCases.forEach((t,n)=>{o.push({label:`Test ${n+1} failed`,passed:!1,error:e.message})})}T={results:o,allPassed:s,submitted:a};let c=document.getElementById(`test-results-container`);c&&(c.innerHTML=O(n,T)),s?(e.playSuccess(),i({title:`All tests passed! ✓`,message:`Clean solution.`,type:`success`})):e.playAlert(),a&&r.recordProblemAttempt(n.id,s)}function O(e,t){if(!t)return`
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.65rem;">
        Output
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.85rem; color: #10b981;">
        <div>✓ Test 1 passed</div>
        <div>✓ Test 2 passed</div>
        <div>✓ Test 3 passed</div>
      </div>
      <div style="margin-top: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
        <span style="font-weight: 700; color: #10b981; font-size: 0.85rem;">All tests passed</span>
        <span class="badge badge-blue">Ready</span>
      </div>
    `;let{results:n,allPassed:r,submitted:i}=t;return`
    <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.65rem;">
      Output
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.85rem;">
      ${n.map(e=>`
        <div style="color: ${e.passed?`#10b981`:`#ef4444`};">
          ${e.passed?`✓`:`✕`} ${e.label}
        </div>
      `).join(``)}
    </div>
    <div style="margin-top: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
      <span style="font-weight: 700; color: ${r?`#10b981`:`#ef4444`}; font-size: 0.85rem;">
        ${r?`All tests passed`:`Some tests failed`}
      </span>
      ${i?`<span class="badge badge-blue">Submitted</span>`:``}
    </div>
  `}var k=`All`,A=`JavaScript Array`;function j(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state,i=n.currentRole===`teacher`||n.currentRole===`admin`,a=n.resources,o=a.filter(e=>{let t=k===`All`||e.type.toLowerCase()===k.toLowerCase(),n=A.toLowerCase().trim();if(!n)return t;let r=n.split(/\s+/).filter(Boolean),i=`${e.title} ${e.summary} ${e.category} ${e.type}`.toLowerCase(),a=r.some(e=>i.includes(e));return t&&a});t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">Protech Knowledge Hub</h1>
        <p class="view-subtitle">Slide 8 & 22: One centralized platform for notes, PDFs, videos, code, worksheets and links.</p>
      </div>
      <div style="display: flex; gap: 0.65rem;">
        ${i?`
          <button class="btn btn-teacher" id="btn-add-resource">
            <span>+</span> Upload Resource
          </button>
        `:``}
      </div>
    </div>

    <!-- Search & Filter Card matching Slide 8 & 22 -->
    <div class="card" style="padding: 1.25rem; margin-bottom: 1.25rem;">
      <!-- Search Bar with Magnifying Glass -->
      <div style="position: relative; margin-bottom: 1rem;">
        <svg style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted);" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="hub-search-input" class="form-input" style="padding-left: 2.75rem; font-size: 0.95rem; border-radius: var(--radius-full);" placeholder="Search topic (e.g. JavaScript Array)..." value="${A}" />
      </div>

      <!-- Filter Pills: All, Notes, PDFs, Videos, Code, Worksheets -->
      <div class="filter-pills" id="hub-category-pills">
        ${[`All`,`Notes`,`PDFs`,`Videos`,`Code`,`Worksheets`].map(e=>{let t=e===`PDFs`?`PDF`:e===`Videos`?`Video`:e===`Worksheets`?`Worksheet`:e;return`
            <div class="filter-pill ${k.toLowerCase()===e.toLowerCase()||e===`All`&&k===`All`?`active`:``} hub-pill" data-cat="${t}">
              ${e}
            </div>
          `}).join(``)}
      </div>
    </div>

    <!-- Resource Rows List (Exact match to Slide 8 & 22) -->
    <div class="card" style="padding: 0; overflow: hidden; margin-bottom: 1.25rem;">
      <div style="display: flex; flex-direction: column;">
        ${o.map(e=>{let t=e.type.toUpperCase(),n=e.type===`Notes`?`badge-blue`:e.type===`PDF`?`badge-red`:e.type===`Video`?`badge-purple`:e.type===`Code`?`badge-green`:`badge-amber`;return`
            <div class="deadline-item open-resource-row" data-res-id="${e.id}" style="margin: 0; border-radius: 0; border-top: none; border-left: none; border-right: none; padding: 1rem 1.5rem; cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="badge ${n}" style="min-width: 72px; text-align: center; justify-content: center; font-weight: 700;">
                  ${t}
                </span>
                <div>
                  <strong style="color: var(--text-main); font-size: 0.95rem;">${e.title}</strong>
                  <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.15rem;">${e.date}</div>
                </div>
              </div>

              <button class="btn btn-sm btn-outline open-res-btn" data-res-id="${e.id}">
                Open
              </button>
            </div>
          `}).join(``)}
      </div>

      <!-- Instant Results Count matching Slide 8 & 22 -->
      <div style="padding: 0.85rem 1.5rem; background: var(--bg-card-subtle); border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-muted);">
        <strong>${o.length} results found instantly</strong>
      </div>
    </div>

    <!-- Benefit & Tip Footer matching Slide 8 & 22 -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.75rem 1rem; background: #e0f2fe; border: 1px solid #bae6fd; border-radius: var(--radius-md); color: #0369a1; font-size: 0.85rem; font-weight: 700;">
      <span>Benefit: find any resource in seconds</span>
      <span style="font-weight: 600; color: #0284c7;">Tip: one place for every resource</span>
    </div>
  `;let s=document.getElementById(`hub-search-input`);s.oninput=()=>{A=s.value,j()},t.querySelectorAll(`.hub-pill`).forEach(t=>{t.onclick=()=>{e.playClick(),k=t.getAttribute(`data-cat`),j()}}),t.querySelectorAll(`.open-resource-row, .open-res-btn`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.getAttribute(`data-res-id`),r=a.find(e=>e.id===n);r&&M(r)}});let c=document.getElementById(`btn-add-resource`);c&&(c.onclick=()=>N())}function M(t){e.playClick();let n=``;n=t.type===`Video`?`
      <div style="background: #000; border-radius: var(--radius-md); padding: 2.5rem 1.5rem; text-align: center; margin-bottom: 1rem; color: #fff;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">▶️</div>
        <div style="font-weight: 700; font-size: 1.1rem;">Playing: ${t.title}</div>
        <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">HD Class Recording • ${t.date}</div>
      </div>
    `:t.type===`Code`?`
      <div style="margin-bottom: 1rem;">
        <pre style="background: var(--bg-code); color: #38bdf8; padding: 1.25rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; max-height: 320px; overflow-y: auto;">${t.content}</pre>
      </div>
    `:`
      <div style="background: var(--bg-card-subtle); padding: 1.25rem; border-radius: var(--radius-md); font-size: 0.9rem; line-height: 1.6; color: var(--text-main); white-space: pre-wrap; margin-bottom: 1rem; border: 1px solid var(--border-subtle); max-height: 340px; overflow-y: auto;">
${t.content}
      </div>
    `;let r=`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="badge ${t.badgeClass||`badge-blue`}">${t.type}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted);">${t.author||`Protech Academy`}</span>
      </div>

      <p style="font-size: 0.875rem; color: var(--text-muted);">${t.summary}</p>

      ${n}
    </div>
  `;a({title:t.title,bodyHtml:r,maxWidth:`640px`,footerButtons:[{label:`Close`,className:`btn btn-secondary`,onClick:()=>!0},{label:`Copy Content`,className:`btn btn-outline`,onClick:()=>(navigator.clipboard.writeText(t.content||t.summary),i({title:`Copied!`,message:`Resource copied to clipboard.`,type:`info`}),!1)}]})}function N(){a({title:`Publish to Knowledge Hub`,bodyHtml:`
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
  `,maxWidth:`560px`,footerButtons:[{label:`Cancel`,className:`btn btn-outline`,onClick:()=>!0},{label:`Publish`,className:`btn btn-teacher`,onClick:t=>{let n=t.querySelector(`#new-res-title`).value.trim(),a=t.querySelector(`#new-res-type`).value,o=t.querySelector(`#new-res-cat`).value.trim()||`General`,s=t.querySelector(`#new-res-summary`).value.trim(),c=t.querySelector(`#new-res-content`).value.trim();return n?(r.state.resources.unshift({id:`res_`+Date.now(),title:n,type:a,category:o,summary:s||n,date:`Added just now`,author:r.state.user.teacher.name,content:c||s}),r.save(),e.playSuccess(),i({title:`Resource Added!`,message:`"${n}" published.`,type:`success`}),j(),!0):(i({title:`Title Required`,message:`Please enter a title.`,type:`warning`}),!1)}}]})}function P(){let t=document.getElementById(`view-container`);if(!t)return;let n=r.state,a=n.currentRole===`teacher`;t.innerHTML=`
    <div class="view-header">
      <div class="view-title-wrap">
        <h1 class="view-title">${a?`AI Teaching Assistant`:`AI Study Assistant`}</h1>
        <p class="view-subtitle">
          ${a?`Draft worksheets, quizzes, and coding exercises. You always review, edit and decide.`:`Get clear concept explanations, hints without spoilers, and personalized revision help.`}
        </p>
      </div>

      <!-- Helper Badge Principle from Slide 9 -->
      <div class="ai-helper-badge">
        <span>🤖</span>
        <span>${a?`AI Helper Badge • Teacher Reviews & Decides`:`AI Study Partner • Guided Hints`}</span>
      </div>
    </div>

    <div class="ai-assistant-container">
      <!-- Left Panel: Presets & Tools -->
      <div class="ai-presets-panel">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">
          ${a?`Teacher Work Tools`:`Study Accelerators`}
        </h4>
        <p style="font-size: 0.775rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          One-click prompt templates based on curriculum goals:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${(a?[{label:`📝 Generate Worksheet`,prompt:`Generate a 5-question worksheet on JavaScript Array methods with problem scenarios.`},{label:`⏱️ Create Quiz`,prompt:`Make 3 quiz questions on JS arrays with multiple choice options and answer keys.`},{label:`💻 Coding Exercise`,prompt:`Create an algorithmic coding exercise for beginners on String Reversal with starter code and test cases.`},{label:`📖 Summarize Topic`,prompt:`Summarize the core differences between CSS Flexbox and CSS Grid for quick student reference.`},{label:`💡 Suggest Assignment`,prompt:`Suggest an engaging mini-project assignment for students learning modern REST APIs and async/await.`}]:[{label:`💡 Explain Concept`,prompt:`Explain the difference between mutating and non-mutating array methods in simple terms.`},{label:`🔍 Give Hint (No Spoilers)`,prompt:`I am stuck reversing an array without using .reverse(). Can you give me a conceptual hint?`},{label:`🎯 Practice Questions`,prompt:`Give me 2 quick practice questions on CSS centering techniques to test my knowledge.`},{label:`📚 Summarize Notes`,prompt:`Summarize how Javascript Promises handle rejected states with catch and finally.`},{label:`📅 Revision Plan`,prompt:`Create a 3-day rapid revision strategy for my upcoming web development exam.`}]).map(e=>`
            <button class="btn btn-secondary ai-preset-btn" data-prompt="${e.prompt}" style="text-align: left; justify-content: flex-start; font-size: 0.8rem; padding: 0.65rem 0.85rem;">
              ${e.label}
            </button>
          `).join(``)}
        </div>

        <div style="margin-top: auto; padding: 1rem; background: var(--bg-card-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-size: 0.75rem;">
          <strong style="color: var(--brand-accent);">⚡ Slide 9 Golden Rule:</strong>
          <p style="color: var(--text-muted); margin-top: 0.35rem; line-height: 1.4;">
            "AI should ASSIST the teacher, not replace the teacher. It is a helper badge, never a boss badge."
          </p>
        </div>
      </div>

      <!-- Right Panel: Interactive Chat & Outputs -->
      <div class="ai-chat-panel">
        <div class="ai-chat-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></div>
            <strong style="font-size: 0.875rem;">Protech Intelligent Engine</strong>
          </div>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Context-aware & pedagogical</span>
        </div>

        <div class="ai-messages-area" id="ai-chat-messages">
          ${n.aiChatHistory.map(e=>`
            <div class="ai-msg ${e.sender}">
              <div class="ai-msg-avatar">${e.sender===`assistant`?`🤖`:a?`👨‍🏫`:`👩‍🎓`}</div>
              <div class="ai-msg-content">
                <div style="white-space: pre-wrap;">${e.text}</div>
                <div style="font-size: 0.675rem; opacity: 0.6; margin-top: 0.5rem; text-align: right;">${e.timestamp}</div>
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Input Area -->
        <div class="ai-input-area">
          <input type="text" id="ai-prompt-input" class="form-input" placeholder="${a?`Ask the AI helper (e.g. Make 3 quiz questions on JS arrays)...`:`Ask for an explanation or hint...`}" />
          <button class="btn ${a?`btn-teacher`:`btn-student`}" id="ai-send-btn">
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  `;let o=document.getElementById(`ai-chat-messages`),s=document.getElementById(`ai-prompt-input`),c=document.getElementById(`ai-send-btn`);o.scrollTop=o.scrollHeight;let l=(t=null)=>{let n=(t||s.value).trim();n&&(e.playSubmit(),s.value=``,r.addAiChatMessage(`user`,n),P(),setTimeout(()=>{let t=F(n,a);r.addAiChatMessage(`assistant`,t),e.playSuccess(),P(),i({title:a?`AI Helper Response Ready`:`AI Explanation Ready`,message:`Generated personalized curriculum material.`,type:`info`})},600))};c.onclick=()=>l(),s.onkeydown=e=>{e.key===`Enter`&&l()},t.querySelectorAll(`.ai-preset-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-prompt`);l(t)}})}function F(e,t){let n=e.toLowerCase();return n.includes(`quiz`)||n.includes(`question`)?`Here is a draft quiz for you:

**Q1. Which method adds an item to the end of an array?**
A) unshift()
B) push()  ✓
C) concat()
D) pop()
*Explanation: .push() appends elements to the end and returns new array length.*

**Q2. What does [1, 2, 3].reverse() return?**
A) [3, 2, 1] and leaves original unchanged
B) [3, 2, 1] and reverses original array in place  ✓
C) A shallow clone
*Explanation: reverse() mutates the calling array in place.*

**Q3. How do you find the index of the first matching element?**
A) .find()
B) .findIndex()  ✓
C) .filter()
*Explanation: findIndex returns the first matched index or -1 if not found.*

${t?`💡 *Teacher note: You can copy this into Worksheet 3 or publish it as a quiz!*`:`💡 *Study tip: Try testing these methods in the Coding Practice Portal!*`}`:n.includes(`worksheet`)||n.includes(`exercise`)?"### 📋 Practical Worksheet: JavaScript Array Mastery\n1. **Immutable Reversal**: Write a helper function that takes an array and reverses it without using .reverse().\n2. **Filter & Transform**: Given an array of student objects `{ name, score, batch }`, return names of students with score >= 80 in uppercase.\n3. **Array Flattening**: How does `Array.prototype.flatMap()` differ from `.map()` followed by `.flat()`?\n4. **Frequency Counter**: Count the occurrences of each word in a string using `reduce()`.\n5. **Memory Reference**: Explain what happens to `const b = a` when `a.push(10)` is executed.\n\n*AI helper note: Ready for teacher review and classroom distribution.*":n.includes(`hint`)||n.includes(`stuck`)?`🔍 **Conceptual Hint (No Spoilers!):**
Think about how you read a book backwards:
- What is the index of the very last item in an array? (Hint: \`arr.length - 1\`).
- How can you construct a new empty array and walk through the original array starting from the back towards index 0?
- Alternatively, think about swapping elements from both ends moving towards the middle!`:"Here is the pedagogical summary:\n\n- **Key Concept**: Understand how references work in memory vs primitive values.\n- **Common Pitfall**: Mutating original arrays unintentionally when rendering in reactive UI frameworks.\n- **Recommended Fix**: Use modern immutable operations: `[...arr].reverse()`, `arr.slice()`, or `arr.toReversed()`.\n- **Next Step**: Test your code in the Coding Practice Portal to verify all test cases pass!"}function I(){let e=document.getElementById(`view-container`);e&&(r.state,e.innerHTML=`
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
  `,document.getElementById(`btn-reset-demo`).onclick=()=>{confirm(`Reset prototype data back to initial slide presentation defaults?`)&&(r.resetAllData(),i({title:`Prototype Reset`,message:`Restored initial sample data.`,type:`info`}),I())})}function L(){c(),u();let e=r.state,t=e.currentRole,n=e.activeView;if(window.scrollTo({top:0,behavior:`smooth`}),t===`teacher`)switch(n){case`dashboard`:d();break;case`assignments`:f();break;case`doubts`:g();break;case`tasks`:_();break;case`knowledgeHub`:j();break;case`aiAssistant`:P();break;default:d()}else if(t===`student`)switch(n){case`dashboard`:v();break;case`studyPlan`:y();break;case`askDoubt`:b();break;case`assignments`:S();break;case`codingPractice`:E();break;case`knowledgeHub`:j();break;case`aiAssistant`:P();break;default:v()}else switch(n){case`dashboard`:I();break;case`knowledgeHub`:j();break;case`doubts`:g();break;case`assignments`:f();break;default:I()}}function R(){document.documentElement.setAttribute(`data-theme`,r.state.theme),L(),r.subscribe((e,t,n)=>{(e===`ROLE_CHANGED`||e===`VIEW_CHANGED`||e===`DATA_RESET`||e===`THEME_CHANGED`||e===`NOTIFICATIONS_READ`)&&L()}),setTimeout(()=>{i({title:`Protech Hub • FixIt Fiesta`,message:`Spot the Problem. Fix It Smart. Switch roles anytime in top right.`,type:`info`,duration:5e3})},700)}window.addEventListener(`DOMContentLoaded`,R);