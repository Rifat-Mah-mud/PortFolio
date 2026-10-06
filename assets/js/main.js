const projects = [
  {
    id: "techsupport-pro",
    priority: 2,
    title: "TechSupport Pro",
    category: ["ai", "web"],
    summary: "Enterprise IT help desk with role-based portals, live chat, and an AI troubleshooting assistant.",
    highlights: [
      "User, Helper, and Admin portals for the full ticket lifecycle: create, assign, accept/reject, status tracking, and attachments.",
      "Real-time chat and notifications with Socket.IO and Redis; background jobs with BullMQ.",
      "AI assistant (Ollama, Llama 3.1 8B) for troubleshooting and ticket creation from chat.",
      "NestJS REST API with JWT auth and RBAC; Next.js 14 frontend with Tailwind and Zustand."
    ],
    stack: "TypeScript, NestJS, Next.js, Prisma, PostgreSQL, Redis, Socket.IO, BullMQ, Ollama",
    source: "IT_help_Chatbot"
  },
  {
    id: "radiant-pharma",
    priority: 3,
    title: "Radiant Nutraceuticals Pharma Assistant",
    category: ["ai"],
    summary: "Bilingual English/Bangla chatbot covering 33 herbal products, with an admin pipeline for document updates.",
    highlights: [
      "Answers dosage, side effects, warnings, and interactions from a curated 33-product knowledge base.",
      "English replies via local LLM; Bangla replies from curated fields to keep product facts stable.",
      "Admin panel extracts content from PDF, PPTX, DOCX, and TXT to refresh the medicine database.",
      "RAG with sentence-transformers embeddings over the product catalog."
    ],
    stack: "Python, FastAPI, Ollama, ChromaDB / RAG, LangChain-style pipeline, document OCR/extraction",
    source: "RNL_chatbot"
  },
  {
    id: "ynotes",
    priority: 4,
    title: "YNotes — Academic Notes Marketplace",
    category: ["web"],
    summary: "Full-stack EdTech marketplace for students, creators, and admins in Bangladesh.",
    highlights: [
      "Three roles (Student, Creator, Admin) on Next.js 14 and TypeScript.",
      "Normalized PostgreSQL schema and 71+ REST endpoints with Prisma and NextAuth v5.",
      "SSLCommerz wallet top-ups (bKash, Nagad, Rocket) with IPN callbacks.",
      "Secure PDF delivery via Cloudflare R2, 70/30 creator revenue share, analytics, and moderation."
    ],
    stack: "Next.js 14, TypeScript, PostgreSQL, Prisma, NextAuth v5, Tailwind, Cloudflare R2, SSLCommerz, Redis",
    source: "Ynote_Web_Platform-main"
  },
  {
    id: "brand-lifecycle",
    title: "Brand Lifecycle Task Manager",
    category: ["web"],
    summary: "Role-based tool that tracks pharmaceutical brands through a 30-step development lifecycle with dependency-gated steps.",
    highlights: [
      "Creating a project copies 30 step templates into subtasks, with default durations from 2 to 180 days per step.",
      "Workflow engine: a step starts only when the step it depends on is finished, and finishing one auto-starts the next eligible step.",
      "Task status and completion counts are recalculated inside the same Prisma transaction; finishing key steps unlocks the forecast, MRP, brand name, and logo fields.",
      "Three roles (manager, brand manager, team leader) with 7-day JWTs, an active-account check on every request, and pgcrypto bcrypt password hashing.",
      "About 20 REST endpoints, including a transactional batch update capped at 30 subtasks, plus start/finish actions.",
      "Styled Excel exports, in-browser logo compression, and 24 Vitest test files; Express API and React UI served together on one port."
    ],
    stack: "React 19, TypeScript, Vite, Tailwind, React Router, Express, Prisma, PostgreSQL, JWT, ExcelJS, Vitest",
    source: "Product_Development_Review_App"
  },
  {
    id: "lung-ensemble",
    priority: 1,
    title: "Explainable Hybrid Ensemble Diagnosis of Five Lung Conditions from Lung-Segmented Chest X-rays",
    category: ["ai"],
    summary: "ULAB CSE thesis: a five-class chest X-ray system that segments the lungs, classifies the crop, and explains the decision only on lung tissue.",
    highlights: [
      "Segments both lungs, crops the film, and refuses a label when the upload fails the lung check.",
      "Fine-tunes DenseNet201, ResNet50, VGG16, and EfficientNet-B3 on 35,686 lung-cropped images with one two-phase schedule.",
      "Soft-averages the four models for pneumonia and COVID-19. Normal versus tuberculosis uses EfficientNet-B3, a horizontal flip, and a 0.6 threshold.",
      "89.23% accuracy and 91.67% macro-F1 on 7,651 held-out images. Grad-CAM++, LIME, and SHAP stay inside the lung mask."
    ],
    sections: [
      {
        heading: "Problem",
        text: "Bacterial pneumonia, viral pneumonia, COVID-19, tuberculosis, and a normal film often look alike on a chest X-ray. A network that sees the whole radiograph can also react to ribs, text, and the image border. This project classifies those five labels from public chest X-rays and shows which lung pixels drove the decision."
      },
      {
        heading: "Pipeline",
        text: "An end-to-end pipeline and a Flask demo. A pretrained PSPNet finds both lungs, stores a binary mask, and crops around them. Films that fail basic lung checks are rejected, so the app does not assign a disease to a selfie, a hand film, or a badly clipped radiograph. Each accepted crop is converted to grayscale, lightly denoised, and contrast-enhanced with CLAHE. Four ImageNet models — DenseNet201, ResNet50, VGG16, and EfficientNet-B3 — are fine-tuned on 35,686 training images, with checkpoints chosen on 7,645 validation images. Training uses one shared two-phase schedule: the new five-class head first, then selected deeper blocks at a much smaller learning rate."
      },
      {
        heading: "Decision",
        text: "At inference the four probability vectors are averaged. If that average points to bacterial pneumonia, COVID-19, or viral pneumonia, the averaged label is kept. If it points to normal or tuberculosis, EfficientNet-B3 is run again on a horizontally flipped copy, and the score P(TB) / (P(Normal) + P(TB)) with threshold 0.6 chooses between those two labels. Grad-CAM++, LIME, and SHAP are drawn only inside the lung mask. The Flask demo follows the same path as training."
      },
      {
        heading: "Results",
        text: "On 7,651 held-out images the deployed rule reaches 89.23% accuracy and 91.67% macro-F1. The strongest single model, EfficientNet-B3, reaches 89.02%. The 0.6 gate raises tuberculosis recall from 70.0% to 84.2%. A stricter gate of 0.8 reaches 89.88% accuracy and cuts tuberculosis recall, so 0.6 is the one used. The same four backbones were retrained under four published recipes on this split; those ensembles land between 86.55% and 87.95% accuracy. A mask-on-crop baseline reaches 92.16% accuracy with 88.97% macro-F1 and misses many viral-pneumonia cases. The hybrid rule has the highest macro-F1. Remaining errors sit mainly on the normal–tuberculosis pair."
      }
    ],
    note: "Research prototype, not a certified medical device.",
    figures: [
      {
        src: "assets/images/projects/lung-ensemble/1.png",
        alt: "Confusion matrix for five lung classes, shown as a percent of each true class.",
        caption: "Held-out confusion matrix as a percent of each true class. Tuberculosis recall is 84.2%, and most remaining errors are with normal."
      },
      {
        src: "assets/images/projects/lung-ensemble/5.png",
        alt: "Correct COVID-19 chest X-ray with Grad-CAM++, LIME, and SHAP limited to the lung mask.",
        caption: "Correct COVID-19 case: original film, then Grad-CAM++, LIME, and SHAP inside the lung mask."
      }
    ],
    stack: "Python, PyTorch, OpenCV, PSPNet, CLAHE, Grad-CAM++, LIME, SHAP, Flask",
    source: "thesis"
  },
  {
    id: "lung-xray",
    title: "Explainable Lung Diagnosis (DenseNet201)",
    category: ["ai"],
    summary: "Earlier single-model study: one DenseNet201 classifier for five lung diseases from chest X-rays, with XAI visualizations.",
    highlights: [
      "DenseNet201 with two-phase transfer learning: 92.80% on Kaggle and ~94% validation on a merged 32K set.",
      "Dataset merged from NIH, RSNA, Kaggle, and Montgomery TB sources.",
      "Grad-CAM, SHAP, and LIME for clinical interpretability.",
      "Deployed as a Flask web application."
    ],
    stack: "Python, TensorFlow, Keras, OpenCV, SHAP, LIME, Flask, NumPy, scikit-learn",
    source: "CV"
  },
  {
    id: "fifa-2026",
    title: "FIFA World Cup Prediction App",
    category: ["web"],
    summary: "Mobile-first World Cup 2026 prediction platform with live leaderboards.",
    highlights: [
      "OTP authentication, JWT sessions, and a secure onboarding flow.",
      "Match predictions with kickoff locking and automated ranking.",
      "Live match and leaderboard sync with Socket.IO and TanStack Query.",
      "Responsive Tailwind UI on PostgreSQL and Prisma."
    ],
    stack: "Next.js, TypeScript, PostgreSQL, Prisma, Auth.js, Socket.IO, Tailwind CSS",
    source: "CV"
  },
  {
    id: "novara",
    title: "Novara — E-Commerce Platform",
    category: ["web"],
    summary: "Multi-category online store built for customers in Bangladesh.",
    highlights: [
      "Multi-category product listings for shoppers.",
      "Customer authentication for accounts and orders.",
      "Admin panel for products and order management.",
      "Server-rendered PHP pages over a MySQL database."
    ],
    stack: "PHP, MySQL, HTML, CSS, JavaScript",
    source: "CV"
  },
  {
    id: "face-scan",
    title: "Face Scan",
    category: ["ai", "web"],
    summary: "Camera kiosk that recognises a person's face in the browser and plays the video linked to them, with an admin panel for enrolment.",
    highlights: [
      "MediaPipe BlazeFace runs in the browser; once a face holds inside the guide box for 250 ms, it is cropped, downscaled to 400 px, and sent to the API.",
      "InsightFace buffalo_l produces a 512-d embedding, and only when exactly one face is in the frame.",
      "pgvector cosine search over an HNSW index, with a 0.55 similarity threshold for a match.",
      "Enrolment photos without a clear face fall back to an OpenCLIP ViT-B-32 embedding so they can still be stored.",
      "Load protection: one scan per IP every 2.5 s, at most 4 concurrent embedding jobs, and a 25 s replay cooldown per person.",
      "Admin panel creates a person, photo embedding, and video in one transaction, behind a bcrypt login and a 7-day httpOnly cookie."
    ],
    stack: "Next.js 15, React 19, TypeScript, MediaPipe, FastAPI, InsightFace, OpenCLIP, PyTorch, PostgreSQL + pgvector",
    source: "Face_Scan"
  },
  {
    id: "radiant-forms",
    title: "Radiant Forms",
    category: ["web"],
    summary: "Admin-managed HR forms with expiring public share links, and PDF output that recreates the original paper forms.",
    highlights: [
      "Four HR forms (Candidate Information, Employment Record, Nominee, Family Information) driven by one config file for rendering, validation, and export.",
      "Each form has a share link built from a random 32-byte token, valid for as many days as the admin chooses.",
      "Hand-written MySQL schema with 17 tables, including child tables for repeating sections like education, jobs, dependents, and nominees.",
      "Shared client/server validation, duplicate-candidate blocking (HTTP 409), and JPG/PNG photo uploads up to 2 MB.",
      "Admin can view, edit, and delete submissions, preview them, download a Puppeteer PDF, or export Excel with one sheet per section.",
      "JWT admin auth in a 12-hour httpOnly cookie, plus an admin-creation script and a deploy script for self-hosting."
    ],
    stack: "Next.js 14, React 18, TypeScript, MySQL (mysql2), JWT, bcrypt, Puppeteer, ExcelJS",
    source: "Form_Fill_Up"
  },
  {
    id: "chirocyst-smash",
    title: "Chirocyst Smash",
    category: ["web", "games"],
    summary: "PCOS wellness game for the Chirocyst brand: slice harmful habits, with an admin content CMS.",
    highlights: [
      "Canvas game with arcing items, swipe trails, slice animations, combos, and pause/resume on requestAnimationFrame.",
      "Scoring of +10 per correct cut and −15 per wrong one, plus a hormone-balance meter that rewards cuts and punishes misses.",
      "Three database-driven levels, each with its own goal score, duration, spawn rate, speed, and gravity.",
      "Habits are tagged CUT or PROTECT, each with an emoji, a short science note, and a tip; players also get a leaderboard and an info page.",
      "Admin dashboard with stats, level and habit editors that change gameplay immediately, user management, and Excel export of users.",
      "JWT sessions in httpOnly cookies, bcrypt passwords, Zod-validated server actions, and Vitest tests."
    ],
    stack: "Next.js 16, React 19, TypeScript, Tailwind, Prisma, MySQL, jose (JWT), Zod, Web Audio API, Vitest",
    source: "ChiroCyst_Game"
  },
  {
    id: "sacm-2026",
    title: "South Asia Cardiovascular Meet 2026",
    category: ["web"],
    summary: "Invitation-only five-page congress site for a medical meeting in Thimphu, Bhutan.",
    highlights: [
      "Home, programme, invitation, venue, and contact pages.",
      "Fully static HTML/CSS/JS with a shared design system and countdown.",
      "Editorial typography (Playfair Display + Lato) for a formal medical brand."
    ],
    stack: "HTML, CSS, JavaScript",
    source: "Conference_Invitation"
  },
  {
    id: "khorocboi",
    priority: 6,
    title: "KhorocBoi",
    category: ["mobile", "ai"],
    summary: "Personal expense tracker that parses Bangla, English, and Banglish notes into amounts.",
    highlights: [
      "Free-form lines like “bus vara 20 tk” become structured expenses.",
      "Offline dictionary + regex; optional Groq LLM fallback cached locally.",
      "Daily history, analytics charts, light/dark mode.",
      "Email + passcode cloud backup via a Vercel + Upstash Redis API."
    ],
    stack: "Flutter, Dart, Hive, Groq, Next.js API, Upstash Redis",
    link: "https://github.com/Rifat-Mah-mud/KhorocBoi",
    source: "KhorocBoi"
  },
  {
    id: "knowledge-hub",
    title: "Knowledge HUB",
    category: ["mobile"],
    summary: "Field-sales app for pharmaceutical reps with timed quizzes, leaderboards, surveys, and a monthly resource library.",
    highlights: [
      "Mobile number and OTP login with a 120-second resend cooldown, secure session storage, and automatic token refresh.",
      "Timed quizzes: 60 seconds per question, no going back, and a question is marked wrong if the app is backgrounded for over 10 seconds.",
      "Failed quiz submissions are saved in Hive and retried by a WorkManager job with exponential backoff and jitter until they succeed.",
      "Resource library organised by month, product, and category; PDFs open in-app with pdfrx and Office files in a WebView.",
      "Leaderboard with month filters and trophies, surveys, and profile editing, built from Figma designs.",
      "Self-update from GitHub Releases with download progress and a force-update screen; 10 test files across the feature modules."
    ],
    stack: "Flutter, Dart, BLoC, get_it, GoRouter, Dio, fpdart, Hive, WorkManager, pdfrx",
    source: "khuv last / KHub"
  },
  {
    id: "pill-reminder",
    title: "Pill Reminder",
    category: ["mobile"],
    summary: "Android medicine reminder whose alarms keep firing when the app is killed or offline, with dose history synced to a REST API.",
    highlights: [
      "Daily, every-X-days, weekly, monthly, and yearly schedules across morning, afternoon, evening, and night slots, with search over 36,085 medicines.",
      "Doses are scheduled up to 30 days ahead, timezone-aware, through a native Kotlin AlarmManager layer with full-screen alarms, snooze, and a ringtone picker.",
      "Alarms are rescheduled after reboot and re-checked by WorkManager every 12 hours; Firebase push acts as a backup channel.",
      "Intake records and schedule changes are queued in SQLite while offline and uploaded when the connection returns.",
      "JWT access/refresh tokens in secure storage, silent refresh on 401, and OTP password reset.",
      "Clean architecture across five feature modules with Cubit/BLoC; screens include a calendar home, history, My Pills, and profile."
    ],
    stack: "Flutter, Dart, Kotlin, Cubit/BLoC, get_it, Dio, sqflite, WorkManager, Firebase Messaging, local notifications",
    source: "Pill_Reminder"
  },
  {
    id: "tic-tac-toi",
    title: "Tic Tac Toi",
    category: ["mobile", "games"],
    summary: "Offline Tic Tac Toe with a minimax King AI, three difficulty levels, a coin toss, and local stats.",
    highlights: [
      "Pure-Dart minimax engine with memoisation; the full game tree is precomputed at startup, so Hard-mode moves are instant lookups.",
      "Hard never loses, Medium plays the perfect move 70% of the time, and Easy blocks an immediate loss half the time.",
      "Animated coin toss decides who picks X or O; if the player picks O, the AI opens.",
      "Seven screens on GoRouter with shared transitions; Riverpod handles vs-AI and vs-friend modes, theme, sound, and haptics.",
      "Hive stores wins, losses, draws, and streaks per difficulty, plus settings.",
      "Unit tests include 20 Hard-vs-Hard games that must all end in a draw."
    ],
    stack: "Flutter, Dart, Riverpod, Hive, GoRouter, audioplayers, flutter_test",
    source: "Tic_Tac_Toi"
  },
  {
    id: "bonova-calcium-quest",
    title: "Bonova Calcium Quest",
    category: ["web", "games"],
    summary: "Doctor-facing calcium game: feed a growing skeleton, avoid junk food, and track scores across five levels.",
    highlights: [
      "Five levels with a 1,200-point bone bar. Calcium foods score 50, 40, 30, 20, then 10 as the quest goes on; junk always costs 50.",
      "Skeleton age runs from 2 to 59 across the quest, with resume, best score, awards, health tips, and a skeleton gallery.",
      "Sessions send a heartbeat every 30 seconds and save checkpoints; the server rejects impossible scores before saving.",
      "Argon2id passwords, hashed and revocable session tokens, a 15-minute lockout after 5 failed logins, and an audit log.",
      "Security headers on every response (CSP, X-Frame-Options DENY, nosniff, strict referrer policy).",
      "Admin area for doctors, sessions, and staff, with date-range CSV exports protected against spreadsheet formula injection."
    ],
    stack: "Next.js 16, React 19, TypeScript, Tailwind, Prisma, MySQL, Zod, Argon2, Vitest",
    source: "benova game webapp"
  },
  {
    id: "easy-prescription",
    priority: 5,
    title: "Easy Prescription",
    category: ["web", "mobile", "ai"],
    summary: "Scan a handwritten prescription, match the medicines, then save, speak, or download it as a PDF.",
    highlights: [
      "Photo or upload goes through OCR.space (handwriting engine, with a fallback engine).",
      "Brand names are matched to a medicine catalog with Levenshtein distance and Soundex, plus a manual pick when the guess is weak.",
      "English and Bangla screens, OTP login, history, PDF download, and ElevenLabs speech of the confirmed medicines.",
      "Same flow on the web (React) and in the Flutter app. Admin panel for users, medicines, and generics."
    ],
    stack: "React, TypeScript, Vite, Tailwind, Express, MySQL, Flutter, OCR.space, ElevenLabs",
    source: "easy Prescription"
  },
  {
    id: "comic-to-video",
    title: "Comic-to-Video",
    category: ["ai", "web"],
    summary: "Turns an uploaded comic chapter into a narrated 1080p MP4 without redrawing the artwork.",
    highlights: [
      "Accepts a PDF, a ZIP, or a set of images up to 250 MB, streamed to disk; PDF pages are rendered at 180 DPI.",
      "Three-tier OCR: Gemini vision first, then OCR.space, then local RapidOCR on normal and inverted tiles.",
      "Tall webtoon pages are split into overlapping 1400 px tiles, with deduplication and a needs-review flag on doubtful lines.",
      "OCR lines are classified (dialogue, scream, narration, SFX) and rewritten as speaker-aware narration the user can edit.",
      "Background render: Piper speech, a 4 s FFmpeg zoom per page at 1920×1080 and 30 fps, then concat and AAC mux, with progress polling.",
      "Next.js frontend and FastAPI backend with SQLite and Alembic. Proof of concept: panel detection is not built yet."
    ],
    stack: "Next.js 15, TypeScript, Python, FastAPI, SQLAlchemy, SQLite, Gemini, RapidOCR, Piper, FFmpeg",
    source: "pdf to video"
  },
  {
    id: "ubi-q-photo-frame",
    title: "Ubi-Q Photo Frame",
    category: ["web"],
    summary: "Doctors place their photo in a branded Ubi-Q frame and download a high-resolution card. Admins track usage per frame.",
    highlights: [
      "Phone-number login that registers new doctors on first use, with bcrypt passwords and a 7-day httpOnly JWT cookie.",
      "Card editor with 4 frames (square and circular), a 50–200% zoom slider, and arrow controls to position the photo.",
      "Canvas compositing at 4× pixel ratio, with a flood-fill mask of the frame's centre so the photo never spills outside it.",
      "Every download is stored as a generated card linked to the doctor and frame.",
      "Admin dashboard of frame usage by doctor, with an Excel export.",
      "Feature-based structure with 16 Vitest test files covering auth, sessions, image composition, and export."
    ],
    stack: "Next.js 16, React 19, TypeScript, Tailwind, shadcn/ui, Prisma, MySQL, JWT, Zod, ExcelJS, Vitest",
    source: "Ubi-Q Photo Frame"
  },
  {
    id: "gavirad-mart",
    priority: 7,
    title: "Gavirad Mart",
    category: ["mobile", "web"],
    summary: "Points and rewards mobile app for field sales officers (MIOs). I built the backend and the admin panel.",
    highlights: [
      "Daily sales import turns boxes sold into points with monthly targets, bonus bands, and flash sale multipliers; MIOs redeem points for rewards.",
      "Built for 10,000 MIOs active at once: ledger-backed balances, row locks, idempotent redeems, and background recalculation jobs.",
      "OTP login over SMS with lockouts, rotating refresh tokens, live reward stock over WebSocket, and scheduled jobs in Bangladesh time.",
      "Admin panel served by the backend: MIO and territory management, Excel uploads, rewards, redemptions, banners, trash, and an audit log."
    ],
    stack: "Node.js, Express 5, TypeScript, Prisma, MySQL, WebSocket, Next.js 16, React 19, Zod, clean architecture",
    source: "Gavirad_Mart_Backend _&_Admin"
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderProject(project) {
  const featured = Number.isFinite(project.priority);
  const highlights = (project.highlights || []).length
    ? `<ul class="project-points">${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : "";
  const note = project.note ? `<p class="project-note">${escapeHtml(project.note)}</p>` : "";
  const figures = (project.figures || [])
    .map((figure) => `
      <figure class="proof">
        <img src="${escapeHtml(figure.src)}" alt="${escapeHtml(figure.alt)}">
        <figcaption>${escapeHtml(figure.caption)}</figcaption>
      </figure>
    `)
    .join("");
  const writeup = (project.sections || [])
    .map((section) => `<h4>${escapeHtml(section.heading)}</h4><p>${escapeHtml(section.text)}</p>`)
    .join("");
  const details = writeup
    ? `<details class="project-writeup"><summary>Full write-up</summary>${writeup}</details>`
    : "";
  const link = project.link
    ? `<p class="project-link"><a href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">${escapeHtml(project.link.replace(/^https?:\/\//, ""))}</a></p>`
    : "";

  return `
    <article class="project-card${featured ? " is-featured" : ""}">
      <h3>${escapeHtml(project.title)}</h3>
      <p class="project-summary">${escapeHtml(project.summary)}</p>
      ${highlights}
      ${note}
      ${figures ? `<div class="proof-grid">${figures}</div>` : ""}
      ${details}
      <p class="project-stack">${escapeHtml(project.stack)}</p>
      ${link}
    </article>
  `;
}

function renderProjects(filter) {
  const list = document.getElementById("project-list");
  const visible = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === "all" || project.category.includes(filter))
    .sort((a, b) => (a.project.priority ?? 50) - (b.project.priority ?? 50) || a.index - b.index);
  list.innerHTML = visible.map(({ project }) => renderProject(project)).join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects("all");
