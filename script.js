// Loader Terminal
const lines = ["> Initializing Faceless Tech...","> Loading Systems...","> Verifying Identity: FACELESS TECH","> Access Granted..."];
let li=0, ci=0;
function typeTerminal(){
  if(li>=lines.length) return;
  const el=document.getElementById("term"+(li+1));
  if(!el) return;
  if(ci<=lines[li].length){ el.textContent=lines[li].substring(0,ci); ci++; setTimeout(typeTerminal,22); }
  else{ li++; ci=0; setTimeout(typeTerminal,180); }
}
typeTerminal();

let progress=0;
const bar=document.getElementById("progressBar");
const percent=document.getElementById("percent");
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
      },600);
    },400);
  }
  bar.style.width=progress+"%";
  percent.textContent=progress+"%";
},110);

// Typing effect in Hero
const words=["WhatsApp Bots","Telegram Bots","Discord Bots","Websites","AI Tools","Ethical Hacking"];
let wi=0, wci=0, deleting=false;
function typeHero(){
  const el=document.getElementById("typeText");
  if(!el) return;
  const word=words[wi];
  if(!deleting){ wci++; el.textContent=word.substring(0,wci); if(wci===word.length){ deleting=true; setTimeout(typeHero,1200); return; } }
  else{ wci--; el.textContent=word.substring(0,wci); if(wci===0){ deleting=false; wi=(wi+1)%words.length; } }
  setTimeout(typeHero, deleting?40:80);
}
typeHero();

// Counters
function startCounters(){
  document.querySelectorAll(".counter").forEach(c=>{
    let target=+c.dataset.target, val=0;
    const t=setInterval(()=>{ val++; c.textContent=val; if(val>=target) clearInterval(t); },60);
  });
}

// Theme Toggle
const themeBtn=document.getElementById("themeBtn");
themeBtn.onclick=()=>{
  document.body.classList.toggle("light");
  themeBtn.textContent=document.body.classList.contains("light")?"☀️":"🌙";
};

// Reveal on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Back to top show/hide
window.onscroll=()=>{
  document.getElementById("topBtn").style.display=window.scrollY>500?"block":"none";
};

// WhatsApp Form
function sendMsg(e){
  e.preventDefault();
  const name=document.getElementById("nameInput").value;
  const msg=document.getElementById("msgInput").value;
  const text=`Hi Faceless Tech, I am ${name}. ${msg}`;
  window.open("https://wa.me/2348071569914?text="+encodeURIComponent(text),"_blank");
}
