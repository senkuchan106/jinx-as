const rosters=[
{title:"HT2",players:["RumbleFury"]},
{title:"LT2",players:["Ayan","Yajur","ThunderBlood","Gendmaker","Kristal","Chadpsl","BulkingArc","OG_Nueth","pokemon_gg"]},
{title:"HT3",players:["rajasaltin_","Yokosa_","STR1XY_Cr1tzz","Honoured","___GRIFFIN___","GWMDEVIL12","HunterXD","Artik","Virat","Kickeded","Broken"]},
{title:"LT3",players:["Dev5128","zarolem","Ekansh","Zenthor_Exe","ShieldDemonn","SimpleLol","Mirai","ThunderDaArc","Wraithhh","Aieri_","Senku","Eternxlz","TheSentryVoid","TR4VE","Shirisz","HighT1er","NclSenpai","KiLLOv3rDose","j4xny"]}];
const tc={HT2:"#ffd23f",LT2:"#d9a521",HT3:"#c9cdd8",LT3:"#cd7f32"};
const tr=c=>`<svg class="tr" viewBox="0 0 24 24"><path fill="${c}" d="M6 2h12v6a6 6 0 0 1-12 0z"/><path fill="none" stroke="${c}" stroke-width="2" d="M6 4H3v2a4 4 0 0 0 4 4M18 4h3v2a4 4 0 0 1-4 4"/><path fill="${c}" d="M11 14h2v4h-2zM7 19h10v3H7z"/></svg>`;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$("#rosterGrid").innerHTML=rosters.map(r=>`<article class="rcard rv ${r.title.toLowerCase()}" data-tilt><h3>${tr(tc[r.title])}${r.title}</h3><div class="names">${r.players.map((p,i)=>`<span style="--i:${i}">${p}</span>`).join("")}</div></article>`).join("");
$$(".app li").forEach((li,i)=>li.style.setProperty("--i",i%12));
$$(".split").forEach(h=>{h.innerHTML=h.innerHTML.split("<br>").map(l=>`<span class="ln"><span>${l}</span></span>`).join("")});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv,.split").forEach(el=>io.observe(el));
// scroll: progress bar, parallax, hide nav on scroll down
const nav=$("#nav"),bar=$("#progress");let ly=0,tick=false;
addEventListener("scroll",()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
bar.style.transform=`scaleX(${y/h})`;nav.classList.toggle("hide",y>ly&&y>300&&!nav.classList.contains("open"));ly=y;
$$("[data-par]").forEach(el=>el.style.translate=`0 ${y*el.dataset.par}px`);tick=false})},{passive:true});
// 3D tilt
if(matchMedia("(hover:hover)").matches){
$$("[data-tilt]").forEach(el=>{const base=el.classList.contains("sticker")?" rotate(5deg)":"";
el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transition="transform .1s";el.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg) translateZ(0)${base}`});
el.addEventListener("pointerleave",()=>{el.style.transition="transform .6s cubic-bezier(.2,.8,.2,1)";el.style.transform=base.trim()||""})});
// magnetic buttons
$$(".mag").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener("pointerleave",()=>b.style.transform="")})}
// nav text scramble
$$(".links a").forEach(a=>{const t=a.textContent;a.addEventListener("mouseenter",()=>{let n=0;const id=setInterval(()=>{a.textContent=[...t].map((c,i)=>i<n?c:"#%&@*X"[Math.random()*6|0]).join("");if(++n>t.length){clearInterval(id);a.textContent=t}},35)})});
// menu + radio
$("#burger").onclick=()=>nav.classList.toggle("open");$$(".links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const au=$("#theme"),rb=$("#radio"),intro=$("#intro");
au.addEventListener("play",()=>rb.setAttribute("aria-pressed","true"));au.addEventListener("pause",()=>rb.setAttribute("aria-pressed","false"));
rb.onclick=()=>au.paused?au.play().catch(()=>{}):au.pause();
const enter=snd=>{if(snd){au.volume=0;au.play().then(()=>{let v=0;const f=setInterval(()=>{v=Math.min(.45,v+.03);au.volume=v;if(v>=.45)clearInterval(f)},120)}).catch(()=>{})}
document.body.classList.add("go");document.body.classList.remove("lock");intro.classList.add("leave");setTimeout(()=>intro.remove(),1700)};
$("#go").onclick=()=>enter(true);$("#goQuiet").onclick=()=>enter(false);

(()=>{const cv=document.createElement("canvas");cv.width=cv.height=16;const x=cv.getContext("2d");for(let i=0;i<16;i++)for(let k=0;k<16;k++){const l=10+Math.random()*10|0;x.fillStyle=`rgb(${l+6},${l-4},${l+14})`;x.fillRect(i,k,1,1)}
document.documentElement.style.setProperty("--tile",`url(${cv.toDataURL()})`);
const pts=$("#pts");for(let i=0;i<42;i++){const p=document.createElement("i");p.className="pt";p.style.cssText=`--x:${Math.random()*100}%;--s:${3+Math.random()*6|0}px;--d:${6+Math.random()*9}s;--w:-${Math.random()*12}s;--dx:${(Math.random()-.5)*160}px;--c:${Math.random()>.35?"#c77dff":"#7b2ff7"}`;pts.appendChild(p)}
const st=["Connecting to JINX AS...","Logging in...","Downloading terrain...","Building chunks...","Joining world..."],tips=["Win or lose doesn't matter.","Hop in VC. Play with your mates.","Chill. Play. Remember."];
let n=0;$("#tip").textContent=tips[0];const t=setInterval(()=>{n=Math.min(100,n+3+Math.random()*9);$("#fill").style.width=n+"%";$("#stat").textContent=st[Math.min(4,n/20|0)];if(n>=100){clearInterval(t);setTimeout(()=>intro.classList.add("ok"),350)}},110);
const ti=setInterval(()=>{const e=$("#tip");if(!e)return clearInterval(ti);e.textContent=tips[Math.random()*3|0]},1100)})();

const fit=s=>{const t=s.querySelector("textPath");t.style.letterSpacing="0px";const L=t.getComputedTextLength();t.style.letterSpacing=(490.09-L)/t.textContent.length+"px"};
document.fonts.ready.then(()=>$$(".badge,.spin svg").forEach(fit));
