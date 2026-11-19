// ===== LOADER TERMINAL =====
const lines = ["> Initializing Faceless Tech...","> Loading Systems...","> Verifying Identity: FACELESS TECH","> Access Granted...","> Welcome, Boss! TECH RULES ⚡"];
let li=0, ci=0;
function typeTerminal(){
  if(li>=lines.length) return;
  const el=document.getElementById("term"+(li+1));
  if(!el){ li++; ci=0; setTimeout(typeTerminal,100); return; }
  if(ci<=lines[li].length){ el.textContent=lines[li].substring(0,ci); ci++; setTimeout(typeTerminal,22); }
  else{ li++; ci=0; setTimeout(typeTerminal,180); }
}
typeTerminal();

let progress=0;
const bar=document.getElementById("progressBar");
const percent=document.getElementById("percent");
const loadLogs=["Connecting to server...","Loading video background...","Loading PFP...","Starting AI Engine...","Almost done..."];
let logIdx=0;
const interval=setInterval(()=>{
  progress+=Math.floor(Math.random()*8)+3;
  if(progress>=100){
    progress=100; clearInterval(interval);
    setTimeout(()=>{
      document.getElementById("loader").style.opacity="0";
      document.getElementById("loader").style.transition="0.6s";
      setTimeout(()=>{
        document.getElementById("loader").style.display="none";
        document.getElementById("main").classList.remove("hidden");
        startCounters();
        startLiveLogs();
      },600);
    },400);
  }
  bar.style.width=progress+"%";
  percent.textContent=progress+"%";
  const ll=document.getElementById("loadLog");
  if(ll && logIdx<loadLogs.length && progress>logIdx*20){ ll.textContent=loadLogs[logIdx]; logIdx++; }
},110);

// ===== TYPING EFFECT IN HERO =====
const words=["WhatsApp Bots","Telegram Bots","Discord Bots","Websites","AI Tools","Ethical Hacking","Hacker Tech Inc"];
let wi=0, wci=0, deleting=false;
function typeHero(){
  const el=document.getElementById("typeText");
  if(!el) return;
  const word=words[wi];
  if(!deleting){ wci++; el.textContent=word.substring(0,wci); if(wci===word.length){ deleting=true; setTimeout(typeHero,1400); return; } }
  else{ wci--; el.textContent=word.substring(0,wci); if(wci===0){ deleting=false; wi=(wi+1)%words.length; } }
  setTimeout(typeHero, deleting?40:80);
}
typeHero();

// ===== COUNTERS =====
function startCounters(){
  document.querySelectorAll(".counter").forEach(c=>{
    let target=+c.dataset.target, val=0;
    const t=setInterval(()=>{ val+=Math.ceil(target/40); if(val>=target){val=target; clearInterval(t);} c.textContent=val; },50);
  });
  // Visitor counter - fake live increase
  let visitors=1247;
  setInterval(()=>{
    visitors+=Math.floor(Math.random()*3)+1;
    const vc=document.getElementById("visitorCount");
    if(vc) vc.textContent=visitors.toLocaleString();
  },5000);
}

// ===== LIVE CLOCK =====
function updateClock(){
  const now=new Date();
  const time=now.toLocaleTimeString('en-NG',{hour12:false});
  const clock=document.getElementById("liveClock");
  if(clock) clock.textContent=time;
  const topClock=document.getElementById("topClock");
  if(topClock) topClock.textContent="🕒 "+time+" WAT";
  const ft=document.getElementById("footerTime");
  if(ft) ft.textContent="Time: "+time+" | Warri, Nigeria";
}
setInterval(updateClock,1000); updateClock();

// ===== THEME + MUSIC =====
const themeBtn=document.getElementById("themeBtn");
if(themeBtn){
  themeBtn.onclick=()=>{
    document.body.classList.toggle("light");
    themeBtn.textContent=document.body.classList.contains("light")?"☀️":"🌙";
  };
}
let musicOn=false;
const musicBtn=document.getElementById("musicBtn");
if(musicBtn){
  musicBtn.onclick=()=>{
    musicOn=!musicOn;
    musicBtn.textContent=musicOn?"🔊":"🎵";
    musicBtn.style.background=musicOn?"#00ff88":"#1a2340";
    if(musicOn) alert("🎵 Music Mode ON! Imagine your favourite Afrobeat playing - Tech Rules! 🎶");
    else alert("🔇 Music OFF");
  };
}

// ===== REVEAL ON SCROLL =====
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// ===== BACK TO TOP =====
window.onscroll=()=>{
  const btn=document.getElementById("topBtn");
  if(btn) btn.style.display=window.scrollY>500?"block":"none";
};

// ===== WHATSAPP FORM =====
function sendMsg(e){
  e.preventDefault();
  const name=document.getElementById("nameInput").value;
  const msg=document.getElementById("msgInput").value;
  const serviceEl=document.getElementById("serviceInput");
  const service=serviceEl?serviceEl.value:"";
  const text=`Hi Faceless Tech, I am ${name}. Service: ${service}. Message: ${msg}`;
  window.open("https://wa.me/2348071569914?text="+encodeURIComponent(text),"_blank");
}

// ===== PRICE CALCULATOR =====
function calcPrice(){
  const type=+document.getElementById("calcType").value;
  const speed=+document.getElementById("calcSpeed").value;
  const total=type+speed;
  const totalEl=document.getElementById("calcTotal");
  if(totalEl) totalEl.textContent="₦"+total.toLocaleString();
  const order=document.getElementById("calcOrder");
  if(order){
    const typeText=document.getElementById("calcType").options[document.getElementById("calcType").selectedIndex].text;
    order.href="https://wa.me/2348071569914?text="+encodeURIComponent("Hi Faceless Tech, I want: "+typeText+" Total: ₦"+total.toLocaleString());
  }
}
calcPrice();

// ===== PROJECT FILTER + SEARCH =====
function filterProjects(cat){
  document.querySelectorAll(".filter-btns button").forEach(b=>b.classList.remove("filter-active"));
  event.target.classList.add("filter-active");
  document.querySelectorAll("#projectsGrid .project").forEach(p=>{
    if(cat==="all" || p.dataset.cat.includes(cat)) p.style.display="block";
    else p.style.display="none";
  });
}
function searchProjects(q){
  q=q.toLowerCase();
  document.querySelectorAll("#projectsGrid .project").forEach(p=>{
    const text=p.textContent.toLowerCase();
    p.style.display=text.includes(q)?"block":"none";
  });
}

// ===== LIVE LOGS =====
const logMessages=[
  "[OK] WhatsApp Bot connected - 12 messages replied",
  "[INFO] New visitor from Lagos viewed portfolio",
  "[OK] AI Engine responding in 0.5s - Fast!",
  "[INFO] Telegram Bot: 5 new users joined",
  "[OK] Security check passed - No threats",
  "[INFO] New order received - Pro AI Bot",
  "[OK] Website speed: 98/100 - Excellent",
  "[INFO] Faceless Tech is ONLINE - Ready for work",
  "[OK] Database backup completed",
  "[INFO] Client from Warri sent 5 stars ⭐⭐⭐⭐⭐"
];
let logIndex=0;
function startLiveLogs(){
  setInterval(()=>{
    const box=document.getElementById("liveLogs");
    if(!box) return;
    const now=new Date().toLocaleTimeString('en-NG',{hour12:false});
    const msg=logMessages[logIndex % logMessages.length];
    logIndex++;
    const p=document.createElement("p");
    p.innerHTML=`<span class="log-time">[${now}]</span> <span class="log-ok">${msg}</span>`;
    box.appendChild(p);
    if(box.children.length>7) box.removeChild(box.children[0]);
  },4000);
}
function addLog(cmd){
  const box=document.getElementById("liveLogs");
  if(!box) return;
  const now=new Date().toLocaleTimeString('en-NG',{hour12:false});
  const p=document.createElement("p");
  let reply="Command received: "+cmd+" - Processing...";
  const c=cmd.toLowerCase();
  if(c.includes("help")) reply="Available: help, hire me, price, bot, website, who are you";
  else if(c.includes("hire")) reply="Great! Chat Simon on WhatsApp: wa.me/2348071569914 - He replies in 5 mins!";
  else if(c.includes("price")) reply="Starter Bot ₦5,000 | Pro AI Bot ₦15,000 | Website ₦10,000";
  else if(c.includes("bot")) reply="I build WhatsApp, Telegram & Discord Bots. Which one do you want?";
  else if(c.includes("who")) reply="I am Faceless Tech - Simon from Warri, Nigeria. Tech Rules!";
  else if(c.includes("hi")||c.includes("hello")) reply="Hello Boss! Welcome to Faceless Tech. How can I help you?";
  p.innerHTML=`<span class="log-time">[${now}]</span> <span style="color:#00bfff;">> ${cmd}</span><br><span class="log-ok">${reply}</span>`;
  box.appendChild(p);
  if(box.children.length>8) box.removeChild(box.children[0]);
}

// ===== AI CHAT =====
function sendAI(){
  const input=document.getElementById("aiInput");
  const box=document.getElementById("chatBox");
  if(!input||!box) return;
  const q=input.value.trim();
  if(!q) return;
  box.innerHTML+=`<p><b>👤 You:</b> ${q}</p>`;
  let ans="Great question! Chat Simon on WhatsApp for full details: wa.me/2348071569914";
  const l=q.toLowerCase();
  if(l.includes("price")||l.includes("cost")||l.includes("much")) ans="💰 Prices: Starter Bot ₦5,000, Pro AI Bot ₦15,000, Website ₦10,000, Combo ₦25,000. Pay 50% first, 50% after delivery.";
  else if(l.includes("bot")) ans="🤖 I build WhatsApp, Telegram & Discord Bots. They reply 24/7, manage groups, send media, and use AI. Want one? Order on WhatsApp!";
  else if(l.includes("website")) ans="🌐 Yes! I build modern websites like this one, with video background, loading screen, and contact form. Price starts ₦10,000, delivery in 1-2 days.";
  else if(l.includes("learn")||l.includes("teach")||l.includes("coding")) ans="🎓 Yes! Simon teaches coding. You don't need laptop, just phone. Chat him to start learning today!";
  else if(l.includes("who")||l.includes("simon")||l.includes("faceless")) ans="👤 Faceless Tech is Simon from Warri, Delta State, Nigeria. 100% self-taught. He learned from AI when nobody helped him. Now he builds bots that rule the world. Tech Rules ⚡";
  else if(l.includes("hi")||l.includes("hello")) ans="👋 Hello! Welcome to Faceless Tech! Ask me about bots, prices, or websites.";
  else if(l.includes("hack")) ans="🛡️ Simon does ETHICAL hacking only - to protect, not to harm. He can help secure your WhatsApp and website.";
  box.innerHTML+=`<p><b>🤖 Faceless AI:</b> ${ans}</p>`;
  box.scrollTop=box.scrollHeight;
  input.value="";
}

// ===== VIDEO FALLBACK + CONSOLE LOGS =====
console.log("%c FACELESS TECH ⚡ ", "background:#00ff88;color:#000;font-size:20px;font-weight:bold");
console.log("%c Tech Rules! Built by Simon - Warri, Nigeria ", "color:#00ff88;font-size:14px");
console.log("Visitor: Welcome Boss! Hire Simon on WhatsApp: https://wa.me/2348071569914");

document.addEventListener("DOMContentLoaded",()=>{
  const vid=document.getElementById("bg-video");
  if(vid){ vid.play().catch(()=>{ console.log("Video autoplay blocked - user needs to tap"); }); }
});
