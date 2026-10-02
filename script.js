const rosters=[
{title:"HT2s",badge:"CombatAce",players:["RumbleFury"]},
{title:"LT2s",badge:"CombatGarib",players:["Ayan","Yajur","ThunderBlood","Gendmaker","Kristal","Chadpsl","BulkingArc","OG_Nueth","RevengeOP","pokemon_gg"]},
{title:"HT3s",badge:"CombatAce",players:["rajasaltin_","Yokosa_","ShieldDemonn","STR1XY_Cr1tzz","Honoured","___GRIFFIN___","RexyAlone","Deadpoint","Bhanuxd","GWMDEVIL12","HunterXD","Artik","Virat","Kickeded","Broken"]},
{title:"LT3s",badge:"CombatAce",players:["Dev5128","zarolem","Ekansh","Zenthor_Exe","SimpleLol","Mirai","ThunderDaArc","j4xny","Eternxlz","TheSentryVoid","TR4VE","Shirisz","Raw","HighT1er","DangrousGuy","NclSenpai","KiLLOv3rDose"]}
];
const grid=document.querySelector("#rosterGrid");
rosters.forEach((roster,i)=>{
  const card=document.createElement("article");
  card.className="roster-card reveal";
  card.style.transitionDelay=`${i*100}ms`;
  card.innerHTML=`<p class="eyebrow"><span></span> ROSTER ${String(i+1).padStart(2,"0")}</p><h3>${roster.title}</h3><p class="tier">${roster.badge}</p><div class="names">${roster.players.map(p=>`<span>${p}</span>`).join("")}</div>`;
  grid.appendChild(card);
});

const nav=document.querySelector("#nav"),menu=document.querySelector(".menu-btn");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const cursor=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const learnBtn=document.querySelector(".learn-btn");const learnPanel=document.querySelector("#learn-more");const learnClose=document.querySelector(".learn-close-btn");function toggleLearn(open){learnPanel.classList.toggle("open",open);learnPanel.setAttribute("aria-hidden",String(!open));learnBtn.setAttribute("aria-expanded",String(open));learnBtn.classList.toggle("active",open);if(open)setTimeout(()=>learnPanel.scrollIntoView({behavior:"smooth",block:"start"}),80)}learnBtn?.addEventListener("click",()=>toggleLearn(!learnPanel.classList.contains("open")));learnClose?.addEventListener("click",()=>{toggleLearn(false);setTimeout(()=>document.querySelector(".hero")?.scrollIntoView({behavior:"smooth"}),80)});

// JINX entrance screen
const siteGate = document.getElementById("siteGate");
const enterJinx = document.getElementById("enterJinx");

enterJinx?.addEventListener("click", () => {
  const music = document.getElementById("jinxTheme");
  if (music) {
    music.volume = 0.45;
    music.play().catch(() => {});
  }

  document.body.classList.remove("site-locked");
  siteGate?.classList.add("leave");
  window.setTimeout(() => siteGate?.remove(), 950);
});

const musicToggle = document.getElementById("musicToggle");
const jinxTheme = document.getElementById("jinxTheme");

musicToggle?.addEventListener("click", () => {
  if (!jinxTheme) return;
  if (jinxTheme.paused) {
    jinxTheme.play().catch(() => {});
    musicToggle.setAttribute("aria-label", "Pause JINX music");
    musicToggle.setAttribute("aria-pressed", "true");
    musicToggle.innerHTML = "<span>♫</span> JINX RADIO";
  } else {
    jinxTheme.pause();
    musicToggle.setAttribute("aria-label", "Play JINX music");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.innerHTML = "<span>Ⅱ</span> JINX RADIO";
  }
});

const heroLearnMore = document.getElementById("heroLearnMore");
heroLearnMore?.addEventListener("click", (event) => {
  const about = document.getElementById("about");
  if (!about) return;
  event.preventDefault();
  about.scrollIntoView({ behavior: "smooth", block: "start" });
});

const heroJoinJinx = document.getElementById("heroJoinJinx");
heroJoinJinx?.addEventListener("click", () => {
  window.open("https://discord.gg/u3Tbq6GNrK", "_blank", "noopener,noreferrer");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

