import { chromium } from "playwright";
import { pathToFileURL } from "url";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const tmp = path.join(root, "_ui-shots");
const destRoot = path.join(root, "assets", "images", "projects");
const desk = { width: 1440, height: 900 };
const phone = { width: 390, height: 844 };

fs.mkdirSync(tmp, { recursive: true });

function outDir(id) {
  const d = path.join(destRoot, id);
  fs.mkdirSync(d, { recursive: true });
  return d;
}

function writeHtml(name, html) {
  const p = path.join(tmp, name);
  fs.writeFileSync(p, html);
  return p;
}

const jobs = [];

function addFile(id, n, file, viewport = desk) {
  jobs.push({ id, n, url: pathToFileURL(file).href, viewport });
}

function addHtml(id, n, name, html, viewport = desk) {
  addFile(id, n, writeHtml(name, html), viewport);
}

const ts = path.join("Z:/Projects/IT_help_Chatbot/IT_Support_AI/ui ref design");
addFile("techsupport-pro", 1, path.join(ts, "login_techsupport_pro/code.html"));
addFile("techsupport-pro", 2, path.join(ts, "user_dashboard_techsupport_pro/code.html"));
addFile("techsupport-pro", 3, path.join(ts, "admin_overview_techsupport_pro/code.html"));
addFile("techsupport-pro", 4, path.join(ts, "helper_dashboard_techsupport_pro/code.html"));
addFile("techsupport-pro", 5, path.join(ts, "ticket_detail_user_techsupport_pro/code.html"));

const conf = "Z:/Projects/Conference_Invitation";
addFile("sacm-2026", 1, path.join(conf, "index.html"));
addFile("sacm-2026", 2, path.join(conf, "programme.html"));
addFile("sacm-2026", 3, path.join(conf, "invitation.html"));
addFile("sacm-2026", 4, path.join(conf, "venue.html"));
addFile("sacm-2026", 5, path.join(conf, "contact.html"));

addFile("radiant-pharma", 1, "Z:/Projects/RNL_chatbot/index.html");
addFile("radiant-pharma", 2, "Z:/Projects/RNL_chatbot/admin/admin_panel.html");
addFile("tic-tac-toi", 1, "Z:/Projects/Tic_Tac_Toi/tic_tac_toe_ui/tic_tac_toe_mobile_app/code.html", phone);

addHtml("radiant-pharma", 3, "rnl-chat-filled.html", fs.readFileSync("Z:/Projects/RNL_chatbot/index.html", "utf8"));
addHtml("radiant-pharma", 4, "rnl-admin-upload.html", fs.readFileSync("Z:/Projects/RNL_chatbot/admin/admin_panel.html", "utf8"));

addHtml(
  "chirocyst-smash",
  1,
  "chiro-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600&family=Inter:wght@400;600&family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
<style>
body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Inter,sans-serif;background:#fcf9f8;color:#1b1c1c;position:relative;overflow:hidden}
.blob{position:absolute;width:24rem;height:24rem;border-radius:999px;filter:blur(100px);opacity:.4}
.a{top:-12%;left:-10%;background:#ffafd1}
.b{bottom:-12%;right:-12%;background:#fdb0d2}
.logo{font-family:"Great Vibes",cursive;font-size:48px}
.logo .p{color:#b10372}.logo .s{color:#884b69}
.sub{color:#574049;margin:8px 0 24px}
.card{width:min(420px,92vw);background:#fff;border-radius:24px;padding:24px;border:1px solid #debec9;box-shadow:0 16px 40px rgba(214,49,143,.12);position:relative;z-index:1}
label{font-size:14px;font-weight:600;display:block;margin-bottom:6px}
.field{display:flex;align-items:center;background:#fcf9f8;border:1px solid #debec9;border-radius:12px;margin-bottom:16px}
.field span{margin-left:12px;color:#574049}
.field input{border:0;background:transparent;padding:12px;width:100%;font:inherit;outline:none}
.btn{width:100%;padding:14px;border:0;border-radius:999px;color:#fff;font-weight:600;background:linear-gradient(90deg,#b10372,#d22e8c);cursor:pointer}
.hint{font-size:13px;color:#574049;text-align:center;margin-top:16px}
</style></head><body>
<div class="blob a"></div><div class="blob b"></div>
<div class="logo"><span class="p">Chiro Cyst</span> <span class="s">Smash</span></div>
<p class="sub">Empower your wellness journey.</p>
<div class="card">
<label>Mobile Number</label>
<div class="field"><span class="material-symbols-outlined">call</span><input value="01700000000"></div>
<label>Password</label>
<div class="field"><span class="material-symbols-outlined">lock</span><input type="password" value="chirocyst"></div>
<p style="font-size:12px;color:#574049">Default password is <b>chirocyst</b></p>
<button class="btn">Login</button>
<p class="hint">New user? <b style="color:#b10372">Register</b></p>
</div></body></html>`,
  phone
);

addHtml(
  "chirocyst-smash",
  2,
  "chiro-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@600&family=Inter:wght@400;600&family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:linear-gradient(180deg,#fcf9f8,#fff7fb);color:#1b1c1c;min-height:100vh;padding-bottom:88px}
header{display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-bottom:1px solid #ffd8e6;background:#fcf9f8cc}
.logo{font-family:"Great Vibes",cursive;font-size:24px;color:#b10372}
main{max-width:390px;margin:auto;padding:40px 20px;text-align:center}
h2{font-family:"Playfair Display",serif;color:#b10372;font-size:24px;margin:0 0 8px}
.play{display:flex;align-items:center;justify-content:center;gap:10px;padding:20px;border-radius:999px;color:#fff;text-decoration:none;font-family:"Playfair Display",serif;font-size:22px;background:linear-gradient(90deg,#b10372,#d22e8c);box-shadow:0 12px 30px rgba(177,3,114,.22);margin:28px 0 16px}
.row{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-radius:999px;border:1px solid #884b69;color:#884b69;margin-bottom:10px;background:#ffd8e710}
nav{position:fixed;bottom:0;left:0;right:0;max-width:390px;margin:auto;display:flex;justify-content:space-around;padding:10px;background:#fff;border-top:1px solid #ffd8e6;border-radius:22px 22px 0 0}
.act{background:#d22e8c;color:#fff;border-radius:999px;padding:6px 16px;text-align:center;font-size:10px;font-weight:600}
.idle{color:#574049;text-align:center;font-size:10px;font-weight:600}
</style></head><body>
<header><span class="material-symbols-outlined">menu</span><div class="logo">Chiro Cyst Smash</div><span class="material-symbols-outlined">account_circle</span></header>
<main>
<h2>Welcome Back, Amina</h2>
<p style="color:#574049">Ready to smash some cysts?</p>
<div class="play"><span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">play_circle</span>Play</div>
<div class="row"><span>leaderboard Leaderboard</span><span>›</span></div>
<div class="row"><span>Information</span><span>›</span></div>
<p style="margin-top:28px;color:#574049;font-size:14px">Quit</p>
</main>
<nav><div class="act">home<br>Home</div><div class="idle">sports_esports<br>Levels</div><div class="idle">Rankings</div><div class="idle">Learn</div></nav>
</body></html>`,
  phone
);

addHtml(
  "chirocyst-smash",
  3,
  "chiro-levels.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;600&family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:#fcf9f8;padding:24px 16px 96px}
h1{font-family:"Playfair Display",serif;color:#b10372;text-align:center}
.card{background:#fff;border:1px solid #debec9;border-radius:18px;padding:16px;margin:12px 0;display:flex;gap:12px;align-items:center}
.icon{width:48px;height:48px;border-radius:999px;background:#ffd8e6;display:grid;place-items:center;color:#b10372}
.lock{opacity:.5}
nav{position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-around;padding:10px;background:#fff;border-top:1px solid #ffd8e6}
.act{background:#d22e8c;color:#fff;border-radius:999px;padding:8px 14px;font-size:12px}
</style></head><body>
<h1>Select Level</h1>
<div class="card"><div class="icon">1</div><div><b>Level 1</b><div style="color:#574049;font-size:13px">60 seconds · unlocked</div></div></div>
<div class="card"><div class="icon">2</div><div><b>Level 2</b><div style="color:#574049;font-size:13px">75 seconds · unlocked</div></div></div>
<div class="card lock"><div class="icon">3</div><div><b>Level 3</b><div style="color:#574049;font-size:13px">Locked</div></div></div>
<nav><span>Home</span><span class="act">Levels</span><span>Rankings</span><span>Learn</span></nav>
</body></html>`,
  phone
);

addHtml(
  "chirocyst-smash",
  4,
  "chiro-admin.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
body{margin:0;display:flex;min-height:100vh;font-family:Inter,sans-serif;background:#f6f3f2;color:#1b1c1c}
aside{width:240px;background:#fff;padding:24px;border-right:1px solid #debec9}
.logo{font-family:"Great Vibes",cursive;font-size:28px;color:#b10372}
.admin{font-size:12px;letter-spacing:.2em;color:#884b69;margin:8px 0 20px}
a{display:block;padding:10px 12px;border-radius:10px;text-decoration:none;color:#574049;margin-bottom:6px}
a.on{background:#ffd8e6;color:#b10372;font-weight:600}
main{padding:32px;flex:1}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:#fff;border-radius:16px;padding:20px;border:1px solid #debec9}
b{font-size:28px;color:#b10372}
</style></head><body>
<aside><div class="logo">Chiro Cyst Smash</div><div class="admin">ADMIN</div>
<a class="on">Overview</a><a>Users</a><a>Levels</a><a>Habits</a><a>Leaderboard</a><a>Logout</a></aside>
<main><h1>Welcome, Admin</h1>
<div class="stats"><div class="card"><div>Registered Players</div><b>128</b></div>
<div class="card"><div>Games Played</div><b>1,042</b></div>
<div class="card"><div>Habit Items</div><b>24</b></div></div></main></body></html>`
);

addHtml(
  "ynotes",
  1,
  "ynotes-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:#f9f9ff;color:#111c2d}
nav{display:flex;justify-content:space-between;align-items:center;padding:16px 32px;background:#fff;border-bottom:1px solid #e7eeff}
.brand{display:flex;gap:8px;align-items:center;color:#00236f;font-weight:700;font-size:22px}
.pill{background:#00236f;color:#fff;padding:8px 16px;border-radius:999px;text-decoration:none}
hero, .hero{margin:24px;border-radius:16px;padding:56px 24px;text-align:center;color:#fff;background:linear-gradient(135deg,#00236f,#fd761a)}
h1{font-size:36px;margin:0 0 12px}
.search{max-width:560px;margin:20px auto 0;display:flex;gap:8px;padding:8px;border-radius:999px;background:#ffffff22;border:1px solid #ffffff33}
.search input{flex:1;background:transparent;border:0;color:#fff;padding:8px 12px;outline:none}
.search button{background:#fd761a;border:0;border-radius:999px;padding:10px 18px;font-weight:600}
.chips{display:flex;gap:8px;padding:16px 32px;flex-wrap:wrap}
.chip{padding:8px 18px;border-radius:999px;background:#fff;border:1px solid #e7eeff}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:0 32px 40px}
.card{background:#fff;border-radius:16px;padding:16px;border:1px solid #e7eeff}
.price{color:#fd761a;font-weight:700}
</style></head><body>
<nav><div class="brand"><span class="material-symbols-outlined">book_5</span>YNotes</div><div>Home · Browse · Login <a class="pill">Register</a></div></nav>
<div class="hero"><h1>Bangladesh's Academic Notes Marketplace</h1>
<p>Unlock top-tier academic resources or monetize your expertise.</p>
<div class="search"><input placeholder="Search notes, subjects, exams..."><button>Search</button></div></div>
<div class="chips"><span class="chip">CSE</span><span class="chip">EEE</span><span class="chip">BBA</span><span class="chip">English</span></div>
<div class="grid">
<div class="card"><h3>Intro to Algorithms — Demo Pack</h3><p class="price">৳149</p></div>
<div class="card"><h3>Physics 101 Lecture Notes</h3><p class="price">৳199</p></div>
<div class="card"><h3>Discrete Math Cheatsheet</h3><p class="price">৳99</p></div>
</div></body></html>`
);

addHtml(
  "ynotes",
  2,
  "ynotes-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Material+Symbols+Outlined&display=swap" rel="stylesheet">
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f9f9ff;font-family:Inter,sans-serif;color:#111c2d}
.card{width:420px;background:#fff;border-radius:20px;padding:36px;border:1px solid #e7eeff}
.brand{display:flex;justify-content:center;gap:8px;color:#00236f;font-size:28px;font-weight:700}
label{display:block;margin:14px 0 6px;font-weight:600}
input{width:100%;padding:12px;border:1px solid #e7eeff;border-radius:10px;box-sizing:border-box}
button{width:100%;margin-top:18px;padding:12px;border:0;border-radius:10px;background:#00236f;color:#fff;font-weight:600}
</style></head><body>
<div class="card">
<div class="brand"><span class="material-symbols-outlined">book_5</span>YNotes</div>
<h2 style="text-align:center">Welcome back</h2>
<p style="text-align:center;color:#5b6475">Log in to access your study materials</p>
<label>Email address</label><input value="student@university.edu">
<label>Password</label><input type="password" value="password">
<p style="text-align:right;color:#00236f">Forgot Password?</p>
<button>Log In</button>
<p style="text-align:center;margin-top:16px">New to YNotes? <b style="color:#00236f">Register here</b></p>
</div></body></html>`
);

addHtml(
  "ynotes",
  3,
  "ynotes-dash.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
body{margin:0;display:flex;min-height:100vh;font-family:Inter,sans-serif;background:#f9f9ff;color:#111c2d}
aside{width:240px;background:#fff;padding:20px;border-right:1px solid #e7eeff}
a{display:block;padding:10px;border-radius:10px;color:#5b6475;text-decoration:none}
a.on{background:#e7eeff;color:#00236f;font-weight:600}
main{padding:28px;flex:1}
.wallet{background:#00236f;color:#fff;border-radius:16px;padding:20px;max-width:320px}
.orange{background:#fd761a;border:0;color:#fff;padding:8px 14px;border-radius:999px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px}
.card{background:#fff;border-radius:14px;padding:16px;border:1px solid #e7eeff}
</style></head><body>
<aside><h2 style="color:#00236f">YNotes</h2>
<a class="on">Home Feed</a><a>Browse Notes</a><a>My Notes</a><a>Saved</a><a>Balance</a><a>Profile</a></aside>
<main><h1>Welcome back, Nayeem</h1>
<div class="wallet"><div>Current Balance</div><b style="font-size:28px">৳1,240</b> <button class="orange">Recharge</button></div>
<div class="grid"><div class="card">Unlocked notes<br><b>8</b></div><div class="card">Recently viewed<br><b>Physics 101</b></div><div class="card">Saved<br><b>3</b></div></div>
</main></body></html>`
);

addHtml(
  "ynotes",
  4,
  "ynotes-creator.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
body{margin:0;display:flex;min-height:100vh;font-family:Inter,sans-serif;background:#f9f9ff}
aside{width:240px;background:#fff;padding:20px;border-right:1px solid #e7eeff}
a{display:block;padding:10px;color:#5b6475;text-decoration:none}
a.on{background:#e7eeff;color:#00236f;font-weight:600}
main{padding:28px;flex:1}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.card{background:#fff;padding:16px;border-radius:14px;border:1px solid #e7eeff}
.up{background:#fd761a;color:#fff;border:0;padding:10px 16px;border-radius:10px;font-weight:600}
</style></head><body>
<aside><h2 style="color:#00236f">Creator</h2><a class="on">Dashboard</a><a>My Uploads</a><a>Earnings</a><a>Analytics</a><a>Withdrawal</a></aside>
<main><h1>Creator Dashboard</h1><button class="up">Quick Upload</button>
<div class="stats" style="margin-top:20px">
<div class="card">Sales<br><b>42</b></div><div class="card">Revenue<br><b>৳18,900</b></div>
<div class="card">Your share 70%<br><b>৳13,230</b></div><div class="card">Notes<br><b>11</b></div>
</div></main></body></html>`
);

addHtml(
  "brand-lifecycle",
  1,
  "pdr-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:Inter,sans-serif;background:linear-gradient(135deg,#FFF6F4,#fff,#F3F3F3);position:relative}
.blob{position:absolute;border-radius:999px;filter:blur(60px)}
.a{width:18rem;height:18rem;left:-4rem;top:-4rem;background:#FF48001a}
.b{width:22rem;height:22rem;right:-4rem;bottom:-4rem;background:#335CFF1a}
.card{width:420px;background:#fff;border-radius:16px;padding:32px;position:relative;box-shadow:0 20px 50px rgba(0,0,0,.08)}
.icon{width:48px;height:48px;border-radius:12px;background:#FFF6F4;display:grid;place-items:center;color:#FF4800;font-weight:700}
h1{font-family:Manrope,sans-serif}
label{display:block;margin:12px 0 6px;font-size:13px;font-weight:600}
input{width:100%;padding:12px;border:1px solid #E1E4EA;border-radius:10px;box-sizing:border-box}
button{width:100%;margin-top:18px;padding:12px;border:0;border-radius:10px;background:#FF4800;color:#fff;font-family:Manrope,sans-serif;font-weight:700}
</style></head><body>
<div class="blob a"></div><div class="blob b"></div>
<div class="card"><div class="icon">▣</div>
<h1>Welcome back</h1><p style="color:#687588">Sign in with your SAP ID to continue</p>
<label>SAP ID</label><input value="EMP001">
<label>Password</label><input type="password" value="admin123">
<label><input type="checkbox" checked> Remember Me</label>
<button>Sign in</button>
<p style="color:#335CFF;font-size:13px">Forgot Password</p>
</div></body></html>`
);

addHtml(
  "brand-lifecycle",
  2,
  "pdr-dash.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:#F3F3F3;color:#111827}
.wrap{max-width:1280px;margin:auto;padding:24px}
nav{background:#FAFAFA;border-radius:40px;padding:10px 18px;display:flex;gap:12px;margin-bottom:20px}
nav span{padding:10px 16px;border-radius:999px}
.on{background:#fff;font-weight:600}
main{background:#fff;border-radius:40px;padding:28px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.card{border:1px solid #E1E4EA;border-radius:16px;padding:16px}
.bar{height:8px;border-radius:8px;background:#eee;margin-top:8px}
.fill{height:8px;border-radius:8px;width:62%;background:#FF4800}
table{width:100%;margin-top:20px;border-collapse:collapse}
th,td{padding:12px;border-bottom:1px solid #E1E4EA;text-align:left}
</style></head><body><div class="wrap">
<nav><span class="on">Dashboard</span><span>Task List</span><span>Members</span><span>Projects</span><span>Logout</span></nav>
<main><div class="stats">
<div class="card">Total Projects<br><b>12</b><div class="bar"><div class="fill"></div></div></div>
<div class="card">Total Pending<br><b>5</b><div class="bar"><div class="fill" style="width:40%;background:#FF8447"></div></div></div>
<div class="card">Total Complete<br><b>7</b><div class="bar"><div class="fill" style="width:70%;background:#1FC16B"></div></div></div>
<div class="card">In review<br><b>3</b><div class="bar"><div class="fill" style="width:30%;background:#9500FF"></div></div></div>
</div><h2>Project</h2>
<table><tr><th>Brand</th><th>Stage</th><th>Owner</th></tr>
<tr><td>Demo Serum</td><td>Design</td><td>Maya Chen</td></tr>
<tr><td>Demo Tea Blend</td><td>Review</td><td>Jordan Lee</td></tr>
</table></main></div></body></html>`
);

addHtml(
  "brand-lifecycle",
  3,
  "pdr-tasks.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:#F3F3F3}
.wrap{max-width:1280px;margin:auto;padding:24px}
nav{background:#FAFAFA;border-radius:40px;padding:12px 18px;margin-bottom:16px}
main{background:#fff;border-radius:40px;padding:24px}
.btn{background:#FF4800;color:#fff;border:0;padding:10px 16px;border-radius:10px;font-weight:600}
table{width:100%;border-collapse:collapse;margin-top:16px}
th,td{padding:12px;border-bottom:1px solid #E1E4EA;text-align:left}
.tab{display:inline-block;padding:8px 12px;border-radius:999px;background:#FFF6F4;color:#FF4800;margin-right:8px}
</style></head><body><div class="wrap">
<nav>Dashboard · <b>Task List</b> · Members · Projects</nav>
<main><div style="display:flex;justify-content:space-between"><h1>Task List</h1><button class="btn">Create New Task</button></div>
<span class="tab">Under Review</span><span>Completed</span>
<table><tr><th>Task</th><th>Brand</th><th>Status</th></tr>
<tr><td>Label copy v2</td><td>Demo Serum</td><td>In review</td></tr>
<tr><td>Packaging dieline</td><td>Demo Tea Blend</td><td>Pending</td></tr>
</table></main></div></body></html>`
);

addHtml(
  "brand-lifecycle",
  4,
  "pdr-members.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:Inter,system-ui;background:#F3F3F3}
.wrap{max-width:1280px;margin:auto;padding:24px}
main{background:#fff;border-radius:40px;padding:24px}
table{width:100%;border-collapse:collapse} th,td{padding:12px;border-bottom:1px solid #E1E4EA;text-align:left}
</style></head><body><div class="wrap"><main>
<h1>Members</h1><p>BE / BM · Team Leader · Manager</p>
<table><tr><th>SAP ID</th><th>Name</th><th>Role</th></tr>
<tr><td>EMP001</td><td>Maya Chen</td><td>Manager</td></tr>
<tr><td>EMP014</td><td>Jordan Lee</td><td>Brand Manager</td></tr>
</table></main></div></body></html>`
);

addHtml(
  "face-scan",
  1,
  "face-idle.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
html,body{margin:0;height:100%;font-family:system-ui}
.scan-page{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(800px 500px at 50% 20%,#1a3d38 0%,transparent 55%),#050807;color:#fff}
.scan-idle{display:flex;flex-direction:column;align-items:center;gap:18px;padding:28px 24px;max-width:22rem;text-align:center}
.scan-brand{margin:0;font-size:2.4rem;font-weight:700;letter-spacing:-.03em}
.scan-idle-copy{margin:0;color:rgba(255,255,255,.72);line-height:1.45;font-size:1.05rem}
.scan-camera-btn{font-size:1.6rem;font-weight:600;padding:1rem 3.2rem;border:none;background:#0b6e63;color:#fff;border-radius:14px;box-shadow:0 12px 28px rgba(11,110,99,.35)}
</style></head><body><main class="scan-page"><div class="scan-idle">
<p class="scan-brand">Face Scan</p>
<p class="scan-idle-copy">Stand in good light, face the camera, then tap Scan.</p>
<button class="scan-camera-btn">Scan</button>
</div></main></body></html>`
);

addHtml(
  "face-scan",
  2,
  "face-nomatch.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
html,body{margin:0;height:100%;font-family:system-ui}
.scan-page{position:fixed;inset:0;background:radial-gradient(800px 500px at 50% 20%,#1a3d38 0%,transparent 55%),#050807}
.scan-modal-backdrop{position:fixed;inset:0;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.62)}
.scan-modal{width:min(420px,100%);background:#f4f8f6;color:#10221f;border-radius:18px;padding:28px 24px;text-align:center}
.scan-modal h2{margin:0 0 10px;font-size:1.45rem}
.scan-modal p{margin:0;color:#5a6f6a;line-height:1.5}
.scan-modal-btn{margin-top:22px;border:none;border-radius:12px;padding:12px 22px;background:#0b6e63;color:#fff;font-weight:600}
</style></head><body><main class="scan-page">
<div class="scan-modal-backdrop"><div class="scan-modal">
<h2>Face does not match</h2>
<p>We couldn't recognize this face. Please move to a clear place with good visibility, face the camera directly, and try again.</p>
<button class="scan-modal-btn">Try again</button>
</div></div></main></body></html>`
);

addHtml(
  "face-scan",
  3,
  "face-admin-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Outfit:wght@400;600&display=swap" rel="stylesheet">
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:Outfit,sans-serif;background:radial-gradient(1200px 600px at 10% -10%,#d7efe8,transparent 55%),linear-gradient(180deg,#eef4f1,#e3ebe7);color:#10221f}
.card{width:400px;background:rgba(255,255,255,.72);border-radius:22px;padding:28px;backdrop-filter:blur(10px)}
h1{font-family:Fraunces,serif;display:flex;gap:10px;align-items:center}
.mark{width:12px;height:12px;border-radius:3px;background:linear-gradient(135deg,#0b6e63,#3aa89a)}
label{display:block;margin:12px 0 6px;font-weight:600}
input{width:100%;padding:12px;border:1px solid #c9d8d3;border-radius:10px;box-sizing:border-box}
button{width:100%;margin-top:16px;padding:12px;border:0;border-radius:12px;background:#0b6e63;color:#fff;font-weight:600}
</style></head><body><div class="card">
<h1><span class="mark"></span>Face Scan</h1>
<p style="color:#5a6f6a">Sign in to manage people, reference photos, and match videos.</p>
<label>Userid</label><input placeholder="admin" value="admin">
<label>Password</label><input type="password" value="••••••••">
<button>Sign in</button>
</div></body></html>`
);

addHtml(
  "face-scan",
  4,
  "face-admin-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Outfit:wght@400;600&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Outfit,sans-serif;color:#10221f;background:radial-gradient(1200px 600px at 10% -10%,#d7efe8,transparent 55%),#eef4f1}
.top{display:flex;justify-content:space-between;padding:18px 28px;background:#f4f8f6b3;border-bottom:1px solid #c9d8d3}
.brand{font-family:Fraunces,serif;font-weight:700;font-size:1.35rem}
nav a{padding:8px 12px;border-radius:10px;text-decoration:none;color:#5a6f6a}
.home{background:#10221f;color:#fff!important}
.cta{background:#16a34a;color:#fff!important}
main{width:min(980px,calc(100% - 40px));margin:32px auto}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:#fff;border-radius:14px;padding:12px;box-shadow:0 18px 40px rgba(16,34,31,.08)}
.ph{height:160px;border-radius:10px;background:#d7efe8}
</style></head><body>
<div class="top"><div class="brand">Face Scan</div><nav><a class="home">Home</a><a>Edit</a><a class="cta">Add photo & video</a><a>Open scan</a></nav></div>
<main><h1 style="font-family:Fraunces,serif">Uploaded photos</h1>
<div class="grid">
<div class="card"><div class="ph"></div><p>Demo Visitor 07</p></div>
<div class="card"><div class="ph"></div><p>Demo Visitor 12</p></div>
<div class="card"><div class="ph"></div><p>Demo Visitor 18</p></div>
</div></main></body></html>`
);

addHtml(
  "radiant-forms",
  1,
  "forms-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
:root{--brand:#c8102e;--bg:#f6f7f9;--border:#e2e4e9}
body{margin:0;background:var(--bg);font-family:Segoe UI,sans-serif;color:#1a1a1a}
.page-narrow{max-width:480px;margin:auto;padding:60px 20px}
.card{background:#fff;border:1px solid var(--border);border-radius:10px;padding:24px}
.logo{height:42px;width:160px;background:#c8102e;color:#fff;display:grid;place-items:center;font-weight:700;border-radius:6px;margin-bottom:12px}
label{display:block;font-weight:600;font-size:13.5px;margin:12px 0 6px}
input{width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:8px;box-sizing:border-box}
.btn{width:100%;margin-top:12px;padding:10px 18px;border:0;border-radius:8px;background:var(--brand);color:#fff;font-weight:600}
</style></head><body><div class="page-narrow"><div class="card">
<div class="logo">RADIANT</div>
<p style="color:#6b7280;margin-top:-4px">Admin Login</p>
<label>Email or Admin ID</label><input placeholder="10001 or admin@example.com" value="10001">
<label>Password</label><input type="password" value="password">
<button class="btn">Log In</button>
</div></div></body></html>`
);

addHtml(
  "radiant-forms",
  2,
  "forms-dash.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
:root{--brand:#c8102e;--bg:#f6f7f9;--border:#e2e4e9;--success:#16a34a}
body{margin:0;background:var(--bg);font-family:Segoe UI,sans-serif}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;background:#fff;border-bottom:1px solid var(--border)}
.brand-text{color:var(--brand);font-weight:700;margin-left:8px}
.page{max-width:960px;margin:auto;padding:32px 20px}
.grid-2x2{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:24px}
.form-tile{background:#fff;border:1px solid var(--border);border-radius:10px;padding:24px;text-align:left}
.status{display:inline-block;margin-top:10px;font-size:12.5px;padding:3px 10px;border-radius:999px}
.active{background:#dcfce7;color:var(--success)}
.inactive{background:#f3f4f6;color:#6b7280}
.btn{padding:10px 18px;border:1px solid var(--border);background:#fff;border-radius:8px}
</style></head><body>
<div class="topbar"><div><b>RADIANT</b><span class="brand-text">Forms</span></div><button class="btn">Log out</button></div>
<div class="page"><h1>Forms</h1><p style="color:#6b7280">Select a form to view submissions, share its link, or export data.</p>
<div class="grid-2x2">
<div class="form-tile"><h2>Candidate's Information</h2><span class="status active">Link active</span></div>
<div class="form-tile"><h2>Employment Record</h2><span class="status inactive">No active link</span></div>
<div class="form-tile"><h2>Nominee Form</h2><span class="status active">Link active</span></div>
<div class="form-tile"><h2>Candidate's Family Information</h2><span class="status inactive">No active link</span></div>
</div></div></body></html>`
);

addHtml(
  "radiant-forms",
  3,
  "forms-fill.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;background:#f6f7f9;font-family:Arial,sans-serif;color:#333}
.paper{max-width:720px;margin:32px auto;background:#fff;padding:32px;border:1px solid #e2e4e9}
h1{text-align:center;text-decoration:underline;font-size:20px}
.photo{width:120px;height:140px;border:1px solid #333;float:right}
label{font-size:13px} input{border:0;border-bottom:1px solid #333;width:60%}
table{width:100%;border-collapse:collapse;margin-top:16px}
td,th{border:1px solid #333;padding:8px;font-size:13px}
.btn{margin-top:20px;background:#c8102e;color:#fff;border:0;padding:10px 18px;border-radius:8px}
</style></head><body><div class="paper">
<div class="photo"></div>
<p style="color:#c8102e;font-weight:700">RADIANT</p>
<h1>Candidate's Information</h1>
<p>Full name: <input value="Demo Applicant"></p>
<p>Department: <input value="Sample Ops"></p>
<table><tr><th>Date</th><th>Position</th></tr><tr><td>2026-01-12</td><td>Associate (demo)</td></tr></table>
<button class="btn">Submit</button>
</div></body></html>`
);

addHtml(
  "radiant-forms",
  4,
  "forms-thanks.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;background:#f6f7f9;font-family:Segoe UI,sans-serif;display:grid;place-items:center;min-height:100vh}
.card{background:#fff;border:1px solid #e2e4e9;border-radius:10px;padding:40px;text-align:center;max-width:420px}
</style></head><body><div class="card"><div style="font-size:40px">✅</div><h1>Thank you!</h1><p style="color:#6b7280">Your form was submitted. HR will review it.</p></div></body></html>`
);

addHtml(
  "khorocboi",
  1,
  "kb-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Inter:wght@400;500&family=JetBrains+Mono&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F7F9FB;font-family:Inter,sans-serif;color:#191C1E}
header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}
h1{font-family:Manrope,sans-serif;color:#0050CB;font-size:24px;margin:0}
.hero{margin:12px 16px;padding:20px;border-radius:16px;background:#0066FF;color:#F8F7FF;position:relative;overflow:hidden}
.hero small{font-family:"JetBrains Mono",monospace;letter-spacing:.08em}
.hero b{font-family:Manrope,sans-serif;font-size:40px;display:block}
.list{padding:16px}
.item{background:#fff;border-radius:16px;padding:14px;margin-bottom:10px;display:flex;gap:12px;align-items:center;border:1px solid #C2C6D888}
.av{width:48px;height:48px;border-radius:999px;background:#BEEBEB;display:grid;place-items:center;color:#0050CB}
fab{position:fixed;right:20px;bottom:24px;width:56px;height:56px;border-radius:16px;background:#0066FF;color:#fff;display:grid;place-items:center;font-size:28px}
</style></head><body>
<header><span>☰</span><h1>KhorocBoi</h1><span></span></header>
<div class="hero"><small>MONTHLY INSIGHTS</small><div>Total Spent this Month</div><b>৳245</b></div>
<div class="list"><h3>Recent History</h3>
<div class="item"><div class="av">📅</div><div>Today<br><small>bus vara 20 tk · cha 15 tk</small></div></div>
<div class="item"><div class="av">📅</div><div>Yesterday<br><small>banana 20 tk apple 30 tk</small></div></div>
</div><fab>+</fab></body></html>`,
  phone
);

addHtml(
  "khorocboi",
  2,
  "kb-daily.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F7F9FB;font-family:Inter,sans-serif;min-height:100vh;display:flex;flex-direction:column}
header{padding:16px} h1{margin:0;font-family:Manrope,sans-serif;color:#0050CB;font-size:22px}
textarea{flex:1;border:0;padding:16px;font-size:16px;font-family:Inter,sans-serif;background:#F7F9FB;resize:none}
.bar{background:#fff;border-radius:16px 16px 0 0;padding:16px;box-shadow:0 -8px 20px rgba(0,0,0,.08)}
.total{color:#0050CB;font-weight:700;font-size:20px}
</style></head><body>
<header><h1>Saturday bazaar</h1><div style="color:#424656">19 Aug 2026 · Saved ●</div></header>
<textarea>bus vara 20 tk
cha 15 tk
peyara 40 tk</textarea>
<div class="bar">Total <span class="total">৳75</span></div>
</body></html>`,
  phone
);

addHtml(
  "khorocboi",
  3,
  "kb-analytics.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F7F9FB;font-family:Inter,sans-serif}
header{background:#0066FF;color:#F8F7FF;padding:16px 16px 24px}
.hero{margin:16px;background:#0066FF;color:#fff;border-radius:16px;padding:16px;border-top:4px solid #0050CB}
.card{margin:16px;background:#fff;border-radius:16px;padding:16px;border:1px solid #C2C6D8}
.bar{height:120px;background:linear-gradient(#0066FF,#0066FF) 10% 100%/18% 40% no-repeat,linear-gradient(#0066FF,#0066FF) 40% 100%/18% 70% no-repeat,linear-gradient(#0066FF,#0066FF) 70% 100%/18% 55% no-repeat,#F7F9FB;border-radius:12px}
chip{display:inline-block;background:#0066FF;color:#fff;border-radius:999px;padding:6px 12px;margin:8px 16px 0;font-size:12px}
</style></head><body>
<header><h2 style="margin:0">Analytics</h2></header>
<chip>This month</chip>
<div class="hero"><div>Total</div><b style="font-size:36px;font-family:Manrope,sans-serif">৳245</b></div>
<div class="card"><div class="bar"></div><p>Food · Transport · Snacks</p></div>
</body></html>`,
  phone
);

addHtml(
  "knowledge-hub",
  1,
  "kh-login.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
body{margin:0;min-height:100vh;background:#F1F1F1;font-family:Inter,sans-serif;color:#111}
.wrap{padding:48px 28px}
h1{font-size:20px;font-weight:600}
p{color:#28303F;font-size:14px}
label{display:block;margin:16px 0 6px;font-weight:500}
.req{color:#E93544}
input{width:100%;padding:14px;border:0;background:#F5F7FA;border-radius:8px;box-sizing:border-box}
button{width:100%;margin-top:24px;height:56px;border:0;border-radius:12px;background:#2F78EE;color:#fff;font-size:16px}
a{color:#27A376}
</style></head><body><div class="wrap">
<h1>Welcome to Knowledge HUB</h1>
<p>Enter your SAP ID to receive an OTP.</p>
<label>SAP ID <span class="req">*</span></label>
<input placeholder="Enter SAP ID" value="EMP001">
<button>Send OTP</button>
<p><a>Need help?</a></p>
</div></body></html>`,
  phone
);

addHtml(
  "knowledge-hub",
  2,
  "kh-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F1F1F1;font-family:Inter,sans-serif}
.panel{margin-top:80px;background:#F4F4F4;border-radius:30px 30px 0 0;padding:20px;min-height:70vh}
.head{display:flex;gap:12px;align-items:center}
.av{width:48px;height:48px;border-radius:999px;background:#fff}
.qa{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#fff;padding:12px;border-radius:8px;margin:16px 0}
.exam{background:#fff;border-radius:12px;padding:12px}
.start{background:#2F78EE;color:#fff;border:0;border-radius:999px;padding:8px 16px}
</style></head><body>
<div class="panel">
<div class="head"><div class="av"></div><div><div>Radiant Demo</div><small>SAP EMP001</small></div></div>
<div class="qa"><div>Resource</div><div>Exam</div><div>Point Table</div><div>Survey</div></div>
<div class="exam"><div style="height:80px;background:#e8eefc;border-radius:8px;margin-bottom:8px"></div>
<b style="font-family:'Plus Jakarta Sans'">Product knowledge — Week 12 demo</b>
<div><button class="start">START EXAM</button></div></div>
</div></body></html>`,
  phone
);

addHtml(
  "knowledge-hub",
  3,
  "kh-quiz.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#fff;font-family:Inter,sans-serif;padding:16px}
.timer{background:#1A27A376;color:#04271B;display:inline-block;padding:6px 12px;border-radius:8px}
.q{background:#F2FBFF;border:1px solid #33CBE1FC;border-radius:12px;padding:16px;margin:16px 0}
.opt{border:1px solid #E9EAEC;border-radius:10px;padding:12px;margin:8px 0}
.sel{background:#2F78EE14;border-color:#2F78EE}
</style></head><body>
<div class="timer">01:24</div>
<div class="q"><b>4/10</b><p>Demo product Aura Soap is mainly used for?</p></div>
<div class="opt sel">A. Daily cleansing (demo)</div>
<div class="opt">B. Hair color</div>
<div class="opt">C. Engine oil</div>
</body></html>`,
  phone
);

addHtml(
  "knowledge-hub",
  4,
  "kh-profile.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@500&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#fff;font-family:Inter,sans-serif;padding:16px;color:#111}
.av{width:80px;height:80px;border-radius:999px;background:#eee;margin:12px auto}
h1{text-align:center;font-family:Lexend,sans-serif;font-size:14px}
input{width:100%;padding:12px;background:#F5F7FA;border:0;border-radius:8px;margin:8px 0}
.save{width:100%;height:48px;border:0;border-radius:999px;background:#2F78EE;color:#fff}
.out{width:100%;margin-top:12px;border:0;background:transparent;color:#E30613}
</style></head><body>
<h2 style="font-size:16px;font-weight:500">Profile</h2>
<div class="av"></div><h1>Demo Rep</h1>
<input value="EMP001"><input value="demo.rep@example.com">
<button class="save">Save</button>
<button class="out">Sign out</button>
</body></html>`,
  phone
);

addHtml(
  "pill-reminder",
  1,
  "pill-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F9F9FF;font-family:Inter,sans-serif;color:#1A1C1E;padding-bottom:72px}
header{padding:16px;font-family:"Source Serif 4",serif;color:#1A2B47;font-size:20px;font-weight:700}
.cal{background:#F9F9FF;padding:8px 16px;display:flex;gap:8px}
.d{width:40px;text-align:center;padding:8px;border-radius:10px}
.on{background:#D1E4FF;color:#1A2B47}
.add{margin:12px 16px;width:calc(100% - 32px);padding:12px;border:0;border-radius:12px;background:#904A4B;color:#fff;font-weight:600}
.card{margin:12px 16px;background:#fff;border-radius:16px;padding:14px;border-left:4px solid #2E7D32;display:flex;gap:10px;align-items:center}
.miss{border-left-color:#BA1A1A}
nav{position:fixed;bottom:0;left:0;right:0;height:64px;background:#F2F3FC;display:flex;justify-content:space-around;align-items:center;font-size:12px}
.ind{background:#D1E4FF;color:#1A2B47;padding:6px 10px;border-radius:12px}
</style></head><body>
<header>JBL Pill Reminder</header>
<div class="cal"><div class="d">17</div><div class="d on">18</div><div class="d">19</div><div class="d">20</div></div>
<button class="add">Add new medicine</button>
<div class="card">💊 Vitamin D demo · 10:00 · Taken</div>
<div class="card miss">💊 Omega demo · 21:00 · Missed</div>
<nav><span class="ind">Home</span><span>My Pills</span><span>History</span><span>Schedules</span></nav>
</body></html>`,
  phone
);

addHtml(
  "pill-reminder",
  2,
  "pill-add.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<style>
body{margin:0;background:#F9F9FF;font-family:Inter,system-ui;padding:16px}
h1{font-size:17px;font-weight:600;text-align:center}
.card{background:#fff;border-radius:16px;padding:16px;margin:12px 0;border:1px solid #C4C6D0}
label{display:block;margin:8px 0 4px;font-size:13px}
input{width:100%;padding:10px;border:1px solid #C4C6D0;border-radius:10px;box-sizing:border-box}
button{width:100%;height:48px;border:0;border-radius:999px;background:#1A2B47;color:#fff;font-weight:600;margin-top:16px}
</style></head><body>
<h1>Add Schedule</h1>
<div class="card"><label>Medicine</label><input value="DemoMed">
<label>Time</label><input value="08:00">
<label>Frequency</label><input value="Daily"></div>
<button>Save schedule</button>
</body></html>`,
  phone
);

addHtml(
  "pill-reminder",
  3,
  "pill-history.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<style>
body{margin:0;background:#F9F9FF;font-family:Inter,system-ui;padding:16px 16px 72px}
.chip{display:inline-block;padding:4px 10px;border-radius:999px;font-size:12px}
.ok{background:#e8f5e9;color:#2E7D32}.bad{background:#ffebee;color:#BA1A1A}
.row{background:#fff;border-radius:16px;padding:14px;margin:8px 0}
nav{position:fixed;bottom:0;left:0;right:0;height:64px;background:#F2F3FC;display:flex;justify-content:space-around;align-items:center}
</style></head><body>
<h1>History</h1>
<div class="row">Vitamin D demo · 18 Aug <span class="chip ok">Taken</span></div>
<div class="row">Omega demo · 18 Aug <span class="chip bad">Missed</span></div>
<nav><span>Home</span><span>My Pills</span><span>History</span><span>Schedules</span></nav>
</body></html>`,
  phone
);

addHtml(
  "tic-tac-toi",
  2,
  "ttt-diff.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F8F9FA;font-family:Inter,sans-serif;color:#191C1D;padding:16px}
h1{font-family:Quicksand,sans-serif;font-size:20px}
.card{background:#F3F4F5;border-radius:18px;padding:16px;margin:12px 0;display:flex;gap:12px;align-items:center;height:52px}
.t{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;color:#fff;font-weight:700}
</style></head><body>
<h1>Choose difficulty</h1>
<div class="card"><div class="t" style="background:#006A65">E</div>Easy</div>
<div class="card"><div class="t" style="background:#AE2F34">M</div>Medium</div>
<div class="card"><div class="t" style="background:#E53935">H</div>Hard</div>
</body></html>`,
  phone
);

addHtml(
  "tic-tac-toi",
  3,
  "ttt-game.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@800&family=Inter&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#F8F9FA;font-family:Quicksand,sans-serif;padding:12px;text-align:center}
.board{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:320px;margin:24px auto}
.cell{aspect-ratio:1;background:#E1E3E4;border-radius:16px;display:grid;place-items:center;font-size:42px;font-weight:800}
.x{color:#AE2F34}.o{color:#006A65}
.chip{display:inline-block;background:#E1E3E4;border-radius:16px;padding:8px 14px;margin-top:12px}
</style></head><body>
<div>Tic Tac Toi</div>
<p><span style="color:#AE2F34">●</span> Your turn (X)</p>
<div class="board">
<div class="cell x">X</div><div class="cell o">O</div><div class="cell"></div>
<div class="cell"></div><div class="cell x">X</div><div class="cell"></div>
<div class="cell o">O</div><div class="cell"></div><div class="cell"></div>
</div>
<div class="chip">You 4 · AI 2</div>
</body></html>`,
  phone
);

addHtml(
  "lung-xray",
  1,
  "lung-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#f5f7fa;color:#123}
nav{background:#0d7377;color:#fff;padding:16px 28px;font-weight:700}
.wrap{max-width:960px;margin:auto;padding:32px;display:grid;grid-template-columns:1fr 1fr;gap:24px}
.box{background:#fff;border-radius:12px;padding:20px;min-height:280px;border:1px dashed #9aa}
.btn{background:#0d7377;color:#fff;border:0;padding:12px 18px;border-radius:8px}
.bar{background:#eee;height:10px;border-radius:8px;margin:8px 0}
.fill{height:10px;background:#0d7377;width:92%;border-radius:8px}
.note{background:#fff3cd;padding:8px;border-radius:8px;font-size:13px}
</style></head><body>
<nav>Explainable Lung Disease Diagnosis — research demo</nav>
<div class="wrap"><div>
<div class="box">SAMPLE IMAGE<br><small>Synthetic schematic, not a patient scan</small></div>
<button class="btn">Classify</button>
</div><div>
<div class="note">Synthetic demo, not for clinical use</div>
<p>Normal</p><div class="bar"><div class="fill"></div></div>
<p>Pneumonia-like 4%</p><div class="bar"><div class="fill" style="width:4%"></div></div>
</div></div></body></html>`
);

addHtml(
  "lung-xray",
  2,
  "lung-xai.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#f5f7fa}
nav{background:#0d7377;color:#fff;padding:16px 28px}
.tabs{padding:16px 28px} .tab{padding:8px 14px;border-radius:8px;background:#0d7377;color:#fff;margin-right:8px}
.panel{margin:0 28px;background:#fff;height:360px;border-radius:12px;display:grid;place-items:center;background:radial-gradient(circle at 40% 45%,#f6b26b,transparent 40%),#222;color:#eee}
</style></head><body>
<nav>XAI view</nav>
<div class="tabs"><span class="tab">Grad-CAM</span> SHAP · LIME</div>
<div class="panel">Demo heatmap overlay</div>
</body></html>`
);

addHtml(
  "lung-xray",
  3,
  "lung-metrics.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#f5f7fa}
nav{background:#0d7377;color:#fff;padding:16px 28px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:28px}
.card{background:#fff;padding:20px;border-radius:12px}
</style></head><body>
<nav>Training metrics</nav>
<div class="grid"><div class="card">Accuracy<br><b>92.80%</b></div>
<div class="card">Validation<br><b>~94%</b></div>
<div class="card">Dataset<br><b>32k demo merge</b></div></div>
</body></html>`
);

addHtml(
  "fifa-2026",
  1,
  "fifa-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,sans-serif;background:#1a1033;color:#fff}
nav{display:flex;justify-content:space-between;padding:16px 24px}
.hero{padding:40px 24px;background:linear-gradient(135deg,#3b1d7a,#c9a22733)}
.card{background:#2a1b4a;margin:16px 24px;padding:16px;border-radius:16px}
.lock{font-size:12px;color:#c9a227}
</style></head><body>
<nav><b>WC26 Predictions</b><span>DemoUser</span></nav>
<div class="hero"><h1>Matchday</h1><p>Fan predictions — demo tournament</p></div>
<div class="card"><div class="lock">LOCKED after kickoff</div><h3>Northland vs Riveria</h3><p>Your pick 2–1</p></div>
<div class="card"><h3>Leaderboard</h3><p>You · rank 12 · 84 pts</p></div>
</body></html>`
);

addHtml(
  "fifa-2026",
  2,
  "fifa-board.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:Inter,system-ui;background:#1a1033;color:#fff;padding:24px}
table{width:100%;border-collapse:collapse}
td{padding:12px;border-bottom:1px solid #ffffff22}
</style></head><body>
<h1>Live leaderboard</h1>
<p>Northland 1–0 Riveria</p>
<table><tr><td>1</td><td>KickOffKid</td><td>120</td></tr>
<tr><td>2</td><td>GoalBot</td><td>110</td></tr>
<tr><td>12</td><td>DemoUser</td><td>84</td></tr></table>
</body></html>`
);

addHtml(
  "fifa-2026",
  3,
  "fifa-otp.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#1a1033;color:#fff;font-family:Inter,system-ui}
.card{width:360px;background:#2a1b4a;padding:28px;border-radius:16px}
.otp{display:flex;gap:8px} .otp div{width:40px;height:48px;border:1px solid #c9a227;border-radius:8px;display:grid;place-items:center}
button{width:100%;margin-top:16px;padding:12px;border:0;border-radius:10px;background:#c9a227;font-weight:700}
</style></head><body><div class="card">
<h2>Predict World Cup 2026 — demo</h2>
<p>+880 1XXX-XXX123</p>
<div class="otp"><div>4</div><div>8</div><div>2</div><div>1</div><div>0</div><div>6</div></div>
<button>Verify OTP</button>
</div></body></html>`
);

addHtml(
  "novara",
  1,
  "novara-home.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#faf7f2;color:#222}
nav{display:flex;justify-content:space-between;padding:16px 28px;background:#fff;border-bottom:1px solid #eee}
.hero{padding:48px 28px;background:#efe6d9}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:28px}
.card{background:#fff;padding:12px;border-radius:8px}
.ph{height:160px;background:#e6dccb}
.price{color:#8B3A3A;font-weight:700}
</style></head><body>
<nav><b>NOVARA</b><span>Shop · Cart</span></nav>
<div class="hero"><h1>Demo storefront</h1><p>Lifestyle goods — sample catalog</p></div>
<div class="grid">
<div class="card"><div class="ph"></div><p>Ceramic mug</p><div class="price">৳890</div></div>
<div class="card"><div class="ph"></div><p>Cotton tote</p><div class="price">৳1290</div></div>
<div class="card"><div class="ph"></div><p>Desk lamp</p><div class="price">৳1890</div></div>
</div></body></html>`
);

addHtml(
  "novara",
  2,
  "novara-cart.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#faf7f2;padding:28px}
.row{display:flex;justify-content:space-between;background:#fff;padding:16px;margin:8px 0;border-radius:8px}
button{background:#8B3A3A;color:#fff;border:0;padding:12px 20px;border-radius:8px}
</style></head><body>
<h1>Cart</h1>
<div class="row"><span>Ceramic mug × 1</span><span>৳890</span></div>
<div class="row"><span>Cotton tote × 1</span><span>৳1290</span></div>
<p><b>Total ৳2180</b></p>
<button>Checkout</button>
</body></html>`
);

addHtml(
  "novara",
  3,
  "novara-admin.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>
body{margin:0;font-family:system-ui;background:#f4f4f4}
nav{background:#222;color:#fff;padding:14px 20px}
table{width:100%;background:#fff;border-collapse:collapse;margin:20px}
td,th{padding:12px;border-bottom:1px solid #eee;text-align:left}
</style></head><body>
<nav>Novara Admin</nav>
<table><tr><th>Order</th><th>Status</th></tr>
<tr><td>NV-2001</td><td>Packed</td></tr>
<tr><td>NV-2004</td><td>Shipped</td></tr>
</table></body></html>`
);

const browser = await chromium.launch();
const page = await browser.newPage();

for (const job of jobs) {
  const dir = outDir(job.id);
  const file = path.join(dir, `${job.n}.png`);
  await page.setViewportSize(job.viewport);
  try {
    await page.goto(job.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(1200);
    if (job.id === "radiant-pharma" && job.n === 3) {
      await page.evaluate(() => {
        const log = document.querySelector("#chat-log, .messages, main");
        if (log) {
          log.insertAdjacentHTML(
            "beforeend",
            `<div style="padding:12px"><div style="background:#dff0e8;padding:10px;border-radius:12px;margin:8px 0">What is HerbCalm used for? (demo)</div><div style="background:#fff;padding:10px;border-radius:12px">Demo reply: follow the pack insert. Not a real product.</div></div>`
          );
        }
      });
    }
    await page.screenshot({ path: file, fullPage: false });
    console.log("ok", job.id, job.n);
  } catch (e) {
    console.error("fail", job.id, job.n, e.message);
  }
}

await browser.close();
console.log("done", jobs.length);
