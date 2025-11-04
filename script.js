// ---------- DOM refs ----------
const startBtn = document.getElementById('startBtn');
const welcomeModal = document.getElementById('welcomeModal');
const mainContent = document.getElementById('mainContent');

const auroraCanvas = document.getElementById('auroraCanvas');

const ambient = document.getElementById('ambient');
const pageSound = document.getElementById('pageSound');
const finalSound = document.getElementById('finalSound');

// Sonidos especiales
const vegvWind = document.getElementById('vegvWind'); // Vegvísir
const geysirBoom = document.getElementById('geysirBoom'); // Geysir

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const iconWrap = document.getElementById('iconWrap');
const titleText = document.getElementById('titleText');
const reasonText = document.getElementById('reasonText');
const vegvisirImg = document.getElementById('vegvisirImg');

const finalModal = document.getElementById('finalModal');
const closeFinal = document.getElementById('closeFinal');

let index = 0;

// ---------- Razones ----------
const razones = [
  { icon: "🌌", title: "Auroras Boreales", text: "Sabes que las auroras boreales son consideradas un fenómeno muy romántico debido a su belleza mágica y a la atmósfera de misterio y asombro que crean? Pues me llamaras moñas pero las auroras y tu? mira que plan mas bueno!. Eres mi fenomeno mas romantico amor 😋" },
  { icon: "💫", title: "Nuestras Noches", text: "Todas las noches que paso contigo en verdad son muy muy magicas, pero siento que estas noches que pasaremos juntas son mas magicas aun, porque estamos en un viaje increible y que mas increible que las noches contigo + unas auroras? ☃️😍." },
  { icon: "📖", title: "Historias", text: "Leí por ahí que en Islandia hay una ley que no te deja ponerle cualquier nombre a tus hijos. Literal, existe un comité oficial que decide si el nombre suena lo suficientemente islandés. Así que nada de Jéximar o Yusneidi como en Venezuela JAJAJAJAJAJA. Eso quiere decir que nuestros futuros hijos no podrían nacer allá... porque con lo creativa que sería poniéndole nombre, fijo nos deportan antes de que lo tenga JAJAJAJAJ. También los islandeses creen mucho en los duendes, dicen que en Islandia hay jardines donde viven ellos y que la gente no construye si creen que molestan a los 'elfos'. Así que no importa si no podemos vivir en Islandia ni ponerle nombre vikingo a los niños, pero igual eso no quita que volveremos en verano señores claro que siii!!" },
  { icon: "⚔️", title: "Valentía", text: "Entre todo lo que leí sobre Islandia para poder hacerte unas razones de un país que nos hace mucha ilusión estaban varias cosas que me gustaron mucho, pero te comentaré una: en Islandia, cuando un volcán entra en erupción, la gente no huye del todo, se queda mirando y aprende. Y me recordó a ti, porque tú no huyes de los problemas, los enfrentas con calma. Bueno, a veces xd. Te quedas mirando, observando el problema y asumiéndolo. Me parece muy valiente de tu parte y me gusta mucho porque eres muy lista bebesita. Lo eres y lograrás todo lo que quieras!!" },
  { icon: "🎄", title: "Travesuras", text: "Te voy a pegar una historia del elfo celoso. Dicen que en un campo de lava en el sur de Islandia vivía un elfo llamado Bjarki, conocido por ser bastante coqueto. Un día, mientras paseaba, vio a una humana tan luminosa que hasta los líquenes parecían florecer a su paso. Era tan hermosa que Bjarki decidió gastarle una de sus típicas bromas: le escondió una piedra del camino para verla tropezar. Pero la humana, lejos de enfadarse, rió. Y esa risa fue tan dulce que al elfo se le olvidaron todos sus hechizos. Desde entonces, cuentan que cada vez que alguien enamorado tropieza en Islandia y se ríe en lugar de quejarse, es porque Bjarki anda cerca, recordando cómo se enamoró por accidente. Pues con lo torpe que soy yo no me extraña que me tropezara con una piedra, me riera y me enamorara de ti otra vez, beibi. Qué travieso el elfo enamorando gente así jajajaja." },
  { icon: "🔥", title: "Llama", text: "Piropos a lo islandés xd. En Islandia, bajo el suelo hay tanta energía geotérmica que el país literalmente vive sobre un mar de fuego. Y me gusta pensar que tú eres mi versión personal de eso porque literal te veo y ya me quito las 🩲😋." },
  { icon: "❄️", title: "Hielo & Fuego", text: "Como Islandia, somos fuego y hielo: equilibrio perfecto." },
  { icon: "💖", title: "Nuestro Amor", text: "Gracias por ser mi compañera de aventuras, gracias por venir conmigo, gracias por quedarte conmigo y por ser tan linda y tener taaaaanta paciencia xd. TE AMO🐧❤️‍🩹." },
  { icon: "🛶", title: "Vegvísir", text: "Que nos guíe siempre el Vegvísir. Te preguntarás a qué se refiere esto. Es un dato curioso de Islandia: en los tiempos vikingos se usaba esta brújula para guiar y proteger a los viajeros. Representa la búsqueda del camino correcto en la vida y superar las dificultades. Y mirándolo así, me recuerda a nosotras y a este viaje. Quiero tenerla para que seas mi amuleto de la suerte y nos guíes por siempre. 🥺🤞🏻", img:"imagenes/vegvisir.png" },
  { icon: "🌋", title: "Geysir", text: "Le pedí a ChatGPT que me dijera algo sobre el géiser para así poder hacerte mi texto con mis palabras y me dijo: “El géiser Strokkur lanza chorros de agua hirviendo cada 10 minutos… yo solo necesito verte un segundo para hervir igual.” Pero buenoooo, qué cochino se vuelve de repente, aunque tiene toda la razón 😘😉", img:"imagenes/geysir.png" }
];

// ---------- Auroras canvas ----------
const canvas = auroraCanvas;
const ctx = canvas.getContext('2d');

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function rand(min,max){ return Math.random()*(max-min)+min; }

const bands = [];
for(let i=0;i<8;i++){
  bands.push({
    x: rand(-400, canvas.width+400),
    y: rand(canvas.height*0.02, canvas.height*0.55),
    w: rand(300, 900),
    h: rand(80, 260),
    hue: rand(90, 320),
    speed: rand(0.03, 0.5),
    phase: rand(0, Math.PI*2),
    amp: rand(8, 44)
  });
}

function drawAuroras(){
  const bg = ctx.createLinearGradient(0,0,0,canvas.height);
  bg.addColorStop(0,'#000012'); bg.addColorStop(1,'#020208');
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<40;i++){
    ctx.fillStyle = 'rgba(255,255,255,0.02)';
    ctx.fillRect((i*73)%canvas.width, (i*131)%canvas.height, 1, 1);
  }

  bands.forEach(b=>{
    b.x += b.speed;
    if(b.x > canvas.width + 800) b.x = -900 - rand(0,200);
    const yWave = b.y + Math.sin(Date.now()*0.0016 + b.phase) * b.amp;
    const hue = (b.hue + Math.sin(Date.now()*0.0009 + b.phase)*40 + 360) % 360;
    const grad = ctx.createRadialGradient(b.x, yWave, 0, b.x, yWave, b.w);
    grad.addColorStop(0, `hsla(${hue},86%,60%,0.44)`);
    grad.addColorStop(0.45, `hsla(${(hue+30)%360},86%,60%,0.18)`);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(b.x, yWave, b.w, b.h, Math.sin(Date.now()*0.0008 + b.phase)*0.6, 0, Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(drawAuroras);
}
drawAuroras();

// ---------- Audio unlock ----------
startBtn.addEventListener('click', async () => {
  try {
    ambient.volume = 0.16;
    await ambient.play();
    await pageSound.play().then(()=>pageSound.pause());
    await finalSound.play().then(()=>finalSound.pause());
    if(vegvWind) await vegvWind.play().then(()=>vegvWind.pause());
    if(geysirBoom) await geysirBoom.play().then(()=>geysirBoom.pause());
  } catch(e){ console.log('Audio bloqueado hasta interacción', e); }
  welcomeModal.style.display = 'none';
  mainContent.classList.remove('hidden');
  showPage(index);
});

// ---------- Fade + swipe ----------
const pageInner = document.getElementById('pageInner');
let startX=0, currentX=0, isTouching=false, dragDistance=0;

function onStart(x){ startX=x; currentX=x; isTouching=true; pageInner.style.transition='none'; }
function onMove(x){ 
  if(!isTouching) return; 
  currentX=x; dragDistance=currentX-startX;
  pageInner.style.transform=`translateX(${dragDistance*0.25}px)`;
  pageInner.style.opacity=`${Math.max(0.35,1-Math.abs(dragDistance)/600)}`;
}
function onEnd(){
  if(!isTouching) return;
  isTouching=false;
  pageInner.style.transition='transform 280ms ease, opacity 320ms ease';
  pageInner.style.transform='';
  pageInner.style.opacity='';
  if(dragDistance < -60) goNext();
  else if(dragDistance > 60) goPrev();
  dragDistance=0;
}
pageInner.addEventListener('touchstart', e=>onStart(e.touches[0].clientX), {passive:true});
pageInner.addEventListener('touchmove', e=>onMove(e.touches[0].clientX), {passive:true});
pageInner.addEventListener('touchend', onEnd);
let mouseDown=false;
pageInner.addEventListener('mousedown', e=>{ mouseDown=true; onStart(e.clientX); });
window.addEventListener('mousemove', e=>{ if(mouseDown) onMove(e.clientX); });
window.addEventListener('mouseup', ()=>{ if(mouseDown){ mouseDown=false; onEnd(); } });

// ---------- Page show ----------
function fadeTo(newIndex){
  pageInner.classList.add('fade-out');
  setTimeout(()=> {
    index=newIndex;
    showPage(index);
    pageInner.classList.remove('fade-out');
    pageInner.classList.add('fade-in');
    setTimeout(()=>pageInner.classList.remove('fade-in'),420);
  },360);
}

function showPage(i){
  const r=razones[i];
  iconWrap.innerHTML=`<div class="iconEmoji" aria-hidden="true">${r.icon}</div>`;
  titleText.textContent=r.title;
  reasonText.textContent=r.text;
  vegvisirImg.innerHTML=r.img? `<img src="${r.img}" alt="${r.title}" class="centerImg">` : '';
  try{ pageSound.currentTime=0; pageSound.play().catch(()=>{}); } catch(e){}

  if(i===8 && vegvWind){ vegvWind.currentTime=0; vegvWind.play().catch(()=>{}); }
  if(i===9 && geysirBoom){ geysirBoom.currentTime=0; geysirBoom.play().catch(()=>{}); }
}

// ---------- Navegación ----------
function goNext(){ 
  if(index < razones.length-1) fadeTo(index+1); 
  else { 
    finalModal.style.display='flex'; 
    try{ ambient.pause(); finalSound.play().catch(()=>{}); }catch(e){} 
  } 
}
function goPrev(){ if(index>0) fadeTo(index-1); }

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

document.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight'||e.key==='Enter') goNext();
  if(e.key==='ArrowLeft') goPrev();
});

closeFinal.addEventListener('click', ()=>{
  finalModal.style.display='none';
  try{ ambient.play().catch(()=>{}); } catch(e){}
  const finalVideo=document.getElementById('finalVideo');
  if(finalVideo){ finalVideo.pause(); finalVideo.currentTime=0; }

  // Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log("Service Worker registrado ✅"))
    .catch(err => console.log("Error al registrar SW:", err));
}

});
