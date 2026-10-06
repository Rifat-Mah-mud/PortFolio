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
    summary: "Workflow platform for multi-stage brand and product development reviews.",
    highlights: [
      "JWT role-based access for Manager/Admin and Brand Manager.",
      "PostgreSQL schema with brand-specific task templates generated per project.",
      "Dashboards for progress, members, products, and task detail.",
      "Express API and React UI served together on a single port."
    ],
    stack: "React, TypeScript, Vite, Tailwind, Express, Prisma, PostgreSQL, JWT",
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
    summary: "Live multi-category store for real customers in Bangladesh.",
    highlights: [
      "Product listings, authentication, admin panel, and order management.",
      "Deployed and used in production at novaraonline.xyz."
    ],
    stack: "PHP, MySQL, HTML, CSS, JavaScript",
    link: "https://novaraonline.xyz",
    source: "CV"
  },
  {
    id: "face-scan",
    title: "Face Scan",
    category: ["ai", "web"],
    summary: "Live camera matching that identifies people against stored face and image embeddings.",
    highlights: [
      "Browser capture with MediaPipe face detection in Next.js.",
      "FastAPI backend with InsightFace embeddings and CLIP image embeddings.",
      "PostgreSQL vector search (HNSW cosine) plus match cooldown and rate limits.",
      "Admin UI to add, edit, and manage reference identities."
    ],
    stack: "Next.js, TypeScript, MediaPipe, FastAPI, InsightFace, CLIP, PostgreSQL",
    source: "Face_Scan"
  },
  {
    id: "radiant-forms",
    title: "Radiant Forms",
    category: ["web"],
    summary: "Admin-managed HR forms with shareable public links, like Google Forms for internal use.",
    highlights: [
      "Four HR forms, each with one expiring share token.",
      "Public fill pages, admin submissions list, PDF preview via Puppeteer, Excel export.",
      "MySQL with JWT admin auth in a single Next.js app."
    ],
    stack: "Next.js, TypeScript, MySQL, JWT, Puppeteer, ExcelJS",
    source: "Form_Fill_Up"
  },
  {
    id: "chirocyst-smash",
    title: "Chirocyst Smash",
    category: ["web", "games"],
    summary: "PCOS wellness game for the Chirocyst brand: slice harmful habits, with an admin content CMS.",
    highlights: [
      "Playable Next.js game with levels and habit items stored in MySQL.",
      "Admin dashboards to edit levels and habit content that update gameplay immediately.",
      "JWT session auth and Zod-validated server actions."
    ],
    stack: "Next.js 16, React 19, TypeScript, Tailwind, Prisma, MySQL",
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
    summary: "Field sales mobile app for quizzes, product resources, surveys, and leaderboards.",
    highlights: [
      "OTP login, home, quiz play, PDF/office resource preview, surveys, and profile.",
      "Offline-friendly quiz submission queue and cached files.",
      "Force-update flow for Android sideload releases."
    ],
    stack: "Flutter, Dart, BLoC, Dio, Hive, GoRouter, pdfrx",
    source: "khuv last / KHub"
  },
  {
    id: "pill-reminder",
    title: "Pill Reminder",
    category: ["mobile"],
    summary: "Medication reminder app with schedules, intake history, and reliable local alarms.",
    highlights: [
      "Add schedules, track today’s doses, history, and profile.",
      "Local notifications plus native alarm scheduling and FCM.",
      "Offline sync for schedules and intake when the network returns.",
      "Clean architecture (domain / data / presentation) with Cubit/BLoC."
    ],
    stack: "Flutter, Dart, Firebase Messaging, local notifications, Dio",
    source: "Pill_Reminder"
  },
  {
    id: "tic-tac-toi",
    title: "Tic Tac Toi",
    category: ["mobile", "games"],
    summary: "Polished offline Tic Tac Toe with a King AI opponent, sound, and local stats.",
    highlights: [
      "Offline play with Hive persistence.",
      "Riverpod state, GoRouter navigation, and game sound effects."
    ],
    stack: "Flutter, Dart, Riverpod, Hive, GoRouter",
    source: "Tic_Tac_Toi"
  },
  {
    id: "bonova-calcium-quest",
    title: "Bonova Calcium Quest",
    category: ["web", "games"],
    summary: "Doctor-facing calcium game: feed a growing skeleton, avoid junk food, and track scores across five levels.",
    highlights: [
      "Five levels with a 1,200-point bone bar. Calcium foods score less as the quest goes on; junk always costs 50.",
      "Skeleton age runs from 2 to 59 across the quest, with resume, best score, and awards.",
      "Doctor accounts (signup, login, password reset) and an admin area for doctors, sessions, and reports.",
      "CSV export of sessions, doctors, and the roster."
    ],
    stack: "Next.js, TypeScript, React, Prisma, MySQL, Zod, Argon2",
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
    summary: "Turns a comic panel and its dialogue into a narrated 1080p clip without redrawing the artwork.",
    highlights: [
      "Original panel pixels stay as-is. Motion is a camera move (zoom and pan) over the uploaded art.",
      "Dialogue becomes speaker-aware narration, then local Piper speech, then an MP4 via FFmpeg.",
      "Next.js frontend and FastAPI backend, with SQLite for projects, chapters, and pages.",
      "Working proof of concept (one panel plus manual dialogue). The same TTS and render path is what later chapters will reuse."
    ],
    stack: "Next.js, TypeScript, Python, FastAPI, SQLite, Piper, FFmpeg",
    source: "pdf to video"
  },
  {
    id: "ubi-q-photo-frame",
    title: "Ubi-Q Photo Frame",
    category: ["web"],
    summary: "Doctors pick a frame, place a photo, and download a finished card. Admins see who used which frame.",
    highlights: [
      "Frame gallery, then a card editor that composites the photo into the frame and downloads a PNG.",
      "Doctor login. Each generated card is stored with the doctor and the frame.",
      "Admin dashboard of frame usage by doctor, with an Excel export."
    ],
    stack: "Next.js, TypeScript, Prisma, MySQL, JWT, Tailwind, ExcelJS",
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
  const highlights = featured
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
