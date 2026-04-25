const IMAGE_URLS = {
  "A-MC 0": "https://drive.google.com/thumbnail?id=16OZWPwTCOzdVSNZXOKXzLwGRT1CiAUtS&sz=w1000",
  "A-MC 1.1": "https://drive.google.com/thumbnail?id=1Vzx8TDp6UkTNHwYIL_tRensS03rMV3at&sz=w1000",
  "A-MC 1.2": "https://drive.google.com/thumbnail?id=1ib2CushQ2QGBLhli-R-Uh3j6hhbCu6x8&sz=w1000",
  "A-MC 1.3": "https://drive.google.com/thumbnail?id=1cp8ViRVB9Fq_kTM6R8o8FT1NjTPNTuBm&sz=w1000",
  "A-MC 2.1": "https://drive.google.com/thumbnail?id=1JpqPFed32nBIpha2_BkGlbwMEergFejy&sz=w1000",
  "A-MC 2.2": "https://drive.google.com/thumbnail?id=1Mz_YUj8_WSfolYVGLv4JwAGigGl_HUUZ&sz=w1000",
  "A-MC 2.3": "https://drive.google.com/thumbnail?id=1pYmqPB776Cz4KpKEOT3Owmv9C5PvZsdS&sz=w1000",
  "A-MC 3.1": "https://drive.google.com/thumbnail?id=1Fy0iR_zq53MwtkdMlSztdQR-ppcyINqp&sz=w1000",
  "A-MC 3.2": "https://drive.google.com/thumbnail?id=18PdfDZ_XIxYkTuJN-8Mg4QrgreCOTA4T&sz=w1000",
  "A-MC 3.3": "https://drive.google.com/thumbnail?id=1SuUkFMpRd1cQq8Eu8pnOaN_zpm8dTEat&sz=w1000",
  "A-MC 4.1": "https://drive.google.com/thumbnail?id=1f56GyLAWob5wkZk2iEucWmPNkLZEtuW7&sz=w1000",
  "A-MC 4.2": "https://drive.google.com/thumbnail?id=1P1PRBR9kOhvL8bxZniboL5o9JZ8LSy1A&sz=w1000",
 "A-MC 4.3": "https://drive.google.com/thumbnail?id=1RES_2NjSJiffUpBSFqaHt4HBb3j_OELT&sz=w1000",
  "A-MC 5.1": "https://drive.google.com/thumbnail?id=1ONI7b4NYO48c-sAWI8gXvPGqajOIIv1u&sz=w1000",
  "A-MC 5.2": "https://drive.google.com/thumbnail?id=1-yTHk69IXGrW4fQ_g_s1FGOGLvIqsvGK&sz=w1000",
  "A-MC 5.3": "https://drive.google.com/thumbnail?id=1Npim_U-6xVWTZ0FqfN2xYKvORr1y0JVt&sz=w1000",
  "A-MC 6.1": "https://drive.google.com/thumbnail?id=1Q39DgvRn8uHIKuoIEqRBnu_efoGPU7Fp&sz=w1000",
  "A-MC 6.2": "https://drive.google.com/thumbnail?id=1R5mGWlETKAYN6Rqs_uIhHO2CGrabIy0b&sz=w1000",
  "A-MC 6.3": "https://drive.google.com/thumbnail?id=16TvYsLyLX6AVNtm0K7I1i6aOIhiAclwQ&sz=w1000",
  "A-MC 7.1": "https://drive.google.com/thumbnail?id=1s_RM_tOKDqWB1kTNOoYOs9l1v8H5Vlsh&sz=w1000",
  "A-MC 7.2": "https://drive.google.com/thumbnail?id=1HE4YwCZBhmoIiYiKHLyXJ746wLpqom3y&sz=w1000",
  "A-MC 7.3": "https://drive.google.com/thumbnail?id=1RgICnJk3ZZakEUfv74Iph4f3oW4WI5yw&sz=w1000",
  "A-MC 8.1": "https://drive.google.com/thumbnail?id=1qB21bbuti0LjCZADpl8O7BcCwori4yth&sz=w1000",
  "A-MC 8.2": "https://drive.google.com/thumbnail?id=14qVt5DF3E46ST_J7YgCXURomsywOMlE6&sz=w1000",
  "A-MC 8.3": "https://drive.google.com/thumbnail?id=1uDADSwoJuKyZq5c1x5ViQ12Mz_UQTGSz&sz=w1000",
  "A-MC 9.1": "https://drive.google.com/thumbnail?id=1QY3jG5HhI4W-w5FWo11SWOOa37dDkwLE&sz=w1000",
  "A-MC 9.2": "https://drive.google.com/thumbnail?id=1Buij7uYcsOsbFY81Z3t8OcCNIwge97oV&sz=w1000",
  "A-MC 9.3": "https://drive.google.com/thumbnail?id=1FllZKxq6yRIrzsJ1hE537r018l1lOSo1&sz=w1000",
  "A-MC 10.1": "https://drive.google.com/thumbnail?id=10AMEM2PFVRW0z3Wh520KGqfanKLWwB9_&sz=w1000",
  "A-MC 10.2": "https://drive.google.com/thumbnail?id=1RbFhCxHqvrE9dLU73W6vDZCcTtcTYJb6&sz=w1000",
  "A-MC 10.3": "https://drive.google.com/thumbnail?id=15IzpzMaXF5-XHOYUjSi49ojw568EX9Sp&sz=w1000",
  "A-MC 11.1": "https://drive.google.com/thumbnail?id=1Ith9nD5gij5S34b-rHntWuUSeVpGJMcw&sz=w1000",
  "A-MC 11.2": "https://drive.google.com/thumbnail?id=1_aYrsL13v6mFqT7f9yh4uiMmk7ozGJ-L&sz=w1000",
  "A-MC 11.3": "https://drive.google.com/thumbnail?id=1ND8KvFT7fFA4289FRwaD0bEOra5_nGoS&sz=w1000",
  "A-MC 12.1": "https://drive.google.com/thumbnail?id=1_lZ3aovZBsPZnpD6ANisiuDGbBoUuzt6&sz=w1000",
  "A-MC 12.2": "https://drive.google.com/thumbnail?id=15PTuGmEA69avY-audmynemTGN_KkaOl2&sz=w1000",
  "A-MC 12.3": "https://drive.google.com/thumbnail?id=1MAMXbv8FFcAXvWxZO5nrjXB-10mENwnN&sz=w1000"
};

const cards = [
  {codigo:"A-MC 1.1",nombre:"Flexiones Inclinadas",familia:"Empuje",nivel:"Despertar",tipo:"reps",musculos:["pectoral","triceps","core"],errores:["cadera hundida","codos abiertos","no activar core"],indicador:"Cuerpo alineado, manos estables y bajada controlada sin hundir la cadera.",cargas:[6,8,10,12,14,16]},
  {codigo:"A-MC 1.2",nombre:"Flexiones Rodillas",familia:"Empuje",nivel:"Pro",tipo:"reps",musculos:["pectoral","triceps","core"],errores:["arqueo lumbar","manos adelantadas","elevar cadera"],indicador:"Rodillas apoyadas, tronco alineado y flexión controlada sin arquear la zona lumbar.",cargas:[8,10,12,14,16,20]},
  {codigo:"A-MC 1.3",nombre:"Flexiones Suelo",familia:"Empuje",nivel:"Leyenda",tipo:"reps",musculos:["pectoral","triceps","core"],errores:["cadera hundida","rango incompleto","cuello adelantado"],indicador:"Cuerpo firme en bloque, pecho baja con control y sube sin perder alineación.",cargas:[10,12,15,18,22,26]},

  {codigo:"A-MC 2.1",nombre:"Abdominal Piernas Elevadas",familia:"Core anterior",nivel:"Despertar",tipo:"reps",musculos:["recto abdominal","abdomen"],errores:["tirar del cuello","despegar lumbar","impulsarse con las piernas"],indicador:"Abdomen activo, lumbar controlada y subida limpia sin tirar del cuello.",cargas:[8,10,12,14,16,18]},
  {codigo:"A-MC 2.2",nombre:"Abdominal Oblicuos a Tobillos",familia:"Core anterior",nivel:"Pro",tipo:"reps",musculos:["oblicuos","abdomen"],errores:["girar demasiado el tronco","movimiento rápido sin control","despegar los pies"],indicador:"Toques laterales controlados, pies estables y tronco activo sin balanceos.",cargas:[12,15,18,22,26,30]},
  {codigo:"A-MC 2.3",nombre:"Abdominal Codo-Rodilla",familia:"Core anterior",nivel:"Leyenda",tipo:"reps",musculos:["recto abdominal","oblicuos"],errores:["tirar del cuello","lumbar despegada","mover piernas sin control"],indicador:"Cruce codo-rodilla coordinado, abdomen firme y movimiento sin tirones.",cargas:[16,20,24,28,32,36]},

  {codigo:"A-MC 3.1",nombre:"Superman Alterno",familia:"Cadena posterior",nivel:"Despertar",tipo:"cycles",musculos:["gluteos","espalda"],errores:["arquear demasiado la lumbar","movimiento brusco","tension cervical"],indicador:"Elevación alterna suave, espalda estable y cuello relajado.",cargas:[3,4,5,6,7,8]},
  {codigo:"A-MC 3.2",nombre:"Puente Isométrico",familia:"Cadena posterior",nivel:"Pro",tipo:"time",musculos:["gluteos","core"],errores:["cadera baja","peso desigual entre apoyos","arqueo lumbar"],indicador:"Cadera arriba, línea estable entre hombros y rodillas, sin hundirse.",cargas:[25,30,35,40,45,50]},
  {codigo:"A-MC 3.3",nombre:"Superman en Cuadrupedia",familia:"Cadena posterior",nivel:"Leyenda",tipo:"cycles",musculos:["core","gluteos","espalda"],errores:["rotacion de la pelvis","balanceo lateral","elevar demasiado la pierna"],indicador:"Brazo y pierna opuestos extendidos con equilibrio y pelvis estable.",cargas:[6,8,10,12,14,16]},

  {codigo:"A-MC 4.1",nombre:"Sentadilla Isométrica",familia:"Piernas",nivel:"Despertar",tipo:"time",musculos:["cuadriceps","gluteos"],errores:["rodillas hacia dentro","talones levantados","subir para descansar"],indicador:"Posición estable, rodillas alineadas y talones apoyados durante toda la pausa.",cargas:[20,25,30,35,40,45]},
  {codigo:"A-MC 4.2",nombre:"Zancadas Alternas",familia:"Piernas",nivel:"Pro",tipo:"reps",musculos:["cuadriceps","gluteos"],errores:["rodilla hacia dentro","paso demasiado corto","tronco inclinado"],indicador:"Paso suficiente, tronco erguido y rodilla alineada en cada repetición.",cargas:[10,12,14,16,18,20]},
  {codigo:"A-MC 4.3",nombre:"Sentadilla Completa",familia:"Piernas",nivel:"Leyenda",tipo:"time",musculos:["cuadriceps","gluteos"],errores:["valgo de rodilla","talones levantados","cadera sube antes que el pecho"],indicador:"Bajada profunda controlada, talones apoyados y subida coordinada.",cargas:[30,35,40,45,50,60]},

  {codigo:"A-MC 5.1",nombre:"Fondos Tríceps Piernas Flexionadas",familia:"Triceps",nivel:"Despertar",tipo:"reps",musculos:["triceps","hombros"],errores:["codos abiertos","tronco lejos del banco","mirar arriba tensando el cuello"],indicador:"Codos atrás, cuerpo cerca del apoyo y bajada controlada.",cargas:[8,10,12,14,16,18]},
  {codigo:"A-MC 5.2",nombre:"Fondos Tríceps Piernas Extendidas",familia:"Triceps",nivel:"Pro",tipo:"reps",musculos:["triceps","hombros"],errores:["usar las piernas para impulsarse","bloquear los codos","elevar los hombros"],indicador:"Empuje limpio de brazos, hombros estables y piernas sin ayudar.",cargas:[10,12,14,16,18,22]},
  {codigo:"A-MC 5.3",nombre:"Flexiones Diamante",familia:"Triceps",nivel:"Leyenda",tipo:"reps",musculos:["triceps","pectoral"],errores:["codos abiertos","rango parcial","cadera hundida"],indicador:"Manos juntas, cuerpo alineado y flexión completa con control.",cargas:[8,10,12,14,16,18]},

  {codigo:"A-MC 6.1",nombre:"Plancha Frontal",familia:"Core isometrico",nivel:"Despertar",tipo:"time",musculos:["core","abdomen","gluteos"],errores:["cadera muy baja","cadera muy alta","mirar al frente"],indicador:"Cuerpo recto, abdomen activo y mirada neutra al suelo.",cargas:[20,25,30,35,40,45]},
  {codigo:"A-MC 6.2",nombre:"Plancha Lateral",familia:"Core isometrico",nivel:"Pro",tipo:"time",musculos:["oblicuos","gluteo medio"],errores:["cadera cae","rotacion del tronco","tension en cuello"],indicador:"Línea lateral estable, cadera elevada y tronco sin girar.",cargas:[20,25,30,35,40,45]},
  {codigo:"A-MC 6.3",nombre:"Plancha Dinámica",familia:"Core isometrico",nivel:"Leyenda",tipo:"reps",musculos:["core","hombros","gluteos"],errores:["balanceo excesivo","mano demasiado adelantada","no alternar el brazo"],indicador:"Alternancia fluida, tronco estable y sin balanceo excesivo.",cargas:[10,12,14,16,18,20]},

  {codigo:"A-MC 7.1",nombre:"Burpee sin Flexión ni Salto",familia:"Metabolico",nivel:"Despertar",tipo:"reps",musculos:["piernas","core"],errores:["espalda redondeada","no activar abdomen en la plancha","entrar con brusquedad"],indicador:"Paso limpio al suelo, plancha estable y regreso sin perder control.",cargas:[6,8,10,12,14,16]},
  {codigo:"A-MC 7.2",nombre:"Burpee con Salto",familia:"Metabolico",nivel:"Pro",tipo:"reps",musculos:["piernas","core","hombros"],errores:["impacto duro en la recepcion","caer con el pecho","salto descontrolado"],indicador:"Entrada estable, salto coordinado y recepción suave.",cargas:[6,8,10,12,14,16]},
  {codigo:"A-MC 7.3",nombre:"Burpee Completo",familia:"Metabolico",nivel:"Leyenda",tipo:"reps",musculos:["pectoral","piernas","core"],errores:["flexion incompleta","golpes fuertes al aterrizar","perder alineacion en plancha"],indicador:"Secuencia completa, flexión real, plancha firme y aterrizaje controlado.",cargas:[4,6,8,10,12,14]},

  {codigo:"A-MC 8.1",nombre:"Escalera Hacia Adelante",familia:"Coordinacion",nivel:"Despertar",tipo:"cycles",musculos:["piernas","gemelos"],errores:["mirar abajo","pisar lineas","golpear con talon"],indicador:"Pasos ágiles, ritmo continuo y apoyos limpios dentro del patrón.",cargas:[2,3,4,5,6,7]},
  {codigo:"A-MC 8.2",nombre:"Escalera Lateral",familia:"Coordinacion",nivel:"Pro",tipo:"cycles",musculos:["piernas","gemelos","core"],errores:["cruzar demasiado las piernas","cadera muy alta","rigidez corporal"],indicador:"Desplazamiento lateral coordinado, ligero y sin perder ritmo.",cargas:[3,4,5,6,7,8]},
  {codigo:"A-MC 8.3",nombre:"Escalera Hacia Atrás",familia:"Coordinacion",nivel:"Leyenda",tipo:"cycles",musculos:["piernas","core"],errores:["mirar hacia atras","pasos demasiado largos","llegar al giro sin estabilizar"],indicador:"Patrón atrás controlado, pasos cortos y estabilidad en el giro.",cargas:[4,5,6,7,8,10]},

  {codigo:"A-MC 9.1",nombre:"Remo Invertido Prono",familia:"Traccion prono",nivel:"Despertar",tipo:"reps",musculos:["dorsales","espalda","biceps"],errores:["cadera cae","rango incompleto","subir la barbilla antes que el pecho"],indicador:"Cuerpo firme, tirón limpio y pecho se acerca con control.",cargas:[6,8,10,12,14,16]},
  {codigo:"A-MC 9.2",nombre:"Dominada Isométrica Prona",familia:"Traccion prono",nivel:"Pro",tipo:"time",musculos:["dorsales","biceps"],errores:["encoger hombros","balanceo del cuerpo","perder agarre por fatiga"],indicador:"Sostén alto estable, hombros colocados y cuerpo sin balanceo.",cargas:[10,15,20,25,30,35]},
  {codigo:"A-MC 9.3",nombre:"Dominadas Pronas",familia:"Traccion prono",nivel:"Leyenda",tipo:"reps",musculos:["dorsales","biceps"],errores:["kipping involuntario","no controlar la bajada","rango incompleto"],indicador:"Subida completa y bajada controlada sin impulso externo.",cargas:[2,3,4,5,6,8]},

  {codigo:"A-MC 10.1",nombre:"Jumping Jack",familia:"Cardio",nivel:"Despertar",tipo:"rpm",musculos:["piernas","hombros"],errores:["golpear con talones","ritmo descontrolado","brazos y piernas fuera de tiempo"],indicador:"Apertura y cierre coordinados, ritmo estable y apoyos ligeros.",cargas:[30,40,50,60,70,80]},
  {codigo:"A-MC 10.2",nombre:"Skipping",familia:"Cardio",nivel:"Pro",tipo:"rpm",musculos:["piernas","core"],errores:["aterrizar con talon","braceo descoordinado","inclinarse hacia delante"],indicador:"Rodillas activas, braceo acompasado y apoyo ligero.",cargas:[60,80,100,120,140,160]},
  {codigo:"A-MC 10.3",nombre:"Mountain Climber",familia:"Cardio",nivel:"Leyenda",tipo:"rpm",musculos:["core","hombros","piernas"],errores:["cadera muy alta","encoger hombros","correr sin control tecnico"],indicador:"Plancha estable, rodillas alternas y ritmo técnico sostenido.",cargas:[40,50,60,70,80,100]},

  {codigo:"A-MC 11.1",nombre:"Remo Invertido Supino",familia:"Traccion supino",nivel:"Despertar",tipo:"reps",musculos:["dorsales","biceps"],errores:["codos muy abiertos","caida brusca","arquear la lumbar"],indicador:"Tirón estable, cuerpo alineado y descenso controlado.",cargas:[6,8,10,12,14,16]},
  {codigo:"A-MC 11.2",nombre:"Dominada Isométrica Supina",familia:"Traccion supino",nivel:"Pro",tipo:"time",musculos:["biceps","dorsales"],errores:["elevar hombros","romper alineacion del cuello","balanceo del cuerpo"],indicador:"Sostén firme arriba, cuello neutro y hombros bien colocados.",cargas:[10,15,20,25,30,35]},
  {codigo:"A-MC 11.3",nombre:"Dominadas Supinas",familia:"Traccion supino",nivel:"Leyenda",tipo:"reps",musculos:["biceps","dorsales"],errores:["impulsarse con piernas","no extender abajo","tirar del cuello"],indicador:"Recorrido completo, control abajo-arriba y sin impulso de piernas.",cargas:[2,3,4,5,6,8]},

  {codigo:"A-MC 12.1",nombre:"Elevación Punta-Talón en Bordillo",familia:"Reactivo",nivel:"Despertar",tipo:"reps",musculos:["gemelos","soleo"],errores:["caida brusca del talon","tobillos en x","hacerlo demasiado rapido"],indicador:"Sube y baja con control, tobillos alineados y apoyo estable.",cargas:[10,12,14,16,18,20]},
  {codigo:"A-MC 12.2",nombre:"Zancadas en Bordillo",familia:"Reactivo",nivel:"Pro",tipo:"reps",musculos:["cuadriceps","gluteos","tobillo"],errores:["rodilla hacia dentro","tronco inclinado","caida rigida en la bajada"],indicador:"Zancada equilibrada, rodilla alineada y bajada controlada.",cargas:[8,10,12,14,16,18]},
  {codigo:"A-MC 12.3",nombre:"Saltos a Pies Juntos en Bordillo",familia:"Reactivo",nivel:"Leyenda",tipo:"cycles",musculos:["gemelos","gluteos","cuadriceps"],errores:["aterrizaje rigido","impacto fuerte del talon","inclinar el tronco hacia delante"],indicador:"Salto y recepción suaves, pies juntos y equilibrio al caer.",cargas:[6,8,10,12,14,16]}
];

// -------------------- Estado global --------------------
const players = { A: "", B: "" };
const ranking = {};
const streaks = {};
let currentCard = null;
let currentLoad = null;
let collections = {};
let achievements = [];
let roundsTarget = 0;
let currentRound = 0;
let suddenDeathState = null;
let lastDuelResult = null;
let pendingFeedbackResult = null;

let respuestasJugadores = {
  A: null,
  B: null
};

// -------------------- DOM --------------------
const els = {
  startIntroBtn: document.getElementById("startIntroBtn"),
  startBtn: document.getElementById("startBtn"),
  fullscreenBtn: document.getElementById("fullscreenBtn"),

  familyFilter: document.getElementById("familyFilter"),
  levelFilter: document.getElementById("levelFilter"),
  avoidOwnedToggle: document.getElementById("avoidOwnedToggle"),
  roundsSelect: document.getElementById("roundsSelect"),

  drawCardBtn: document.getElementById("drawCardBtn"),
  rollDiceBtn: document.getElementById("rollDiceBtn"),
  nextToCardBtn: document.getElementById("nextToCardBtn"),
  nextToDiceBtn: document.getElementById("nextToDiceBtn"),
  nextToExecutionBtn: document.getElementById("nextToExecutionBtn"),
  resolveDuelBtn: document.getElementById("resolveDuelBtn"),
  resolveSuddenBtn: document.getElementById("resolveSuddenBtn"),

  btnSiguienteDuelo: document.getElementById("btnSiguienteDuelo"),
  btnFinalizar: document.getElementById("btnFinalizar"),
  btnAlbum: document.getElementById("btnAlbum"),
  btnContinuarResultado: document.getElementById("btnContinuarResultado"),

  btnVerCromo: document.getElementById("btnVerCromo"),

  cardDisplay: document.getElementById("cardDisplay"),
  diceValue: document.getElementById("diceValue"),
  diceSummary: document.getElementById("diceSummary"),
  diceCube: document.getElementById("diceCube"),

  executionGuideText: document.getElementById("executionGuideText"),
  executionChecklist: document.getElementById("executionChecklist"),

  feedbackNameA: document.getElementById("feedbackNameA"),
  feedbackNameB: document.getElementById("feedbackNameB"),
  feedbackNameJugadorA: document.getElementById("feedbackNameJugadorA"),
  feedbackNameJugadorB: document.getElementById("feedbackNameJugadorB"),

  suddenDeathRoundInfo: document.getElementById("suddenDeathRoundInfo"),
  suddenQuestionA: document.getElementById("suddenQuestionA"),
  suddenQuestionB: document.getElementById("suddenQuestionB"),
  suddenOptionsA: document.getElementById("suddenOptionsA"),
  suddenOptionsB: document.getElementById("suddenOptionsB"),
  suddenExplainA: document.getElementById("suddenExplainA"),
  suddenExplainB: document.getElementById("suddenExplainB"),
  suddenFeedback: document.getElementById("suddenFeedback"),
  suddenNameA: document.getElementById("suddenNameA"),
  suddenNameB: document.getElementById("suddenNameB"),

  panelFinalDuelo: document.getElementById("panelFinalDuelo"),
  rankingSummary: document.getElementById("rankingSummary"),
  informeFinal: document.getElementById("informeFinal"),
  achievementsBox: document.getElementById("achievementsBox"),

  collectionModal: document.getElementById("collectionModal"),
  fullCollectionContent: document.getElementById("fullCollectionContent"),
  resetCollectionBtn: document.getElementById("resetCollectionBtn"),
  closeCollectionModalBtn: document.getElementById("closeCollectionModalBtn"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  lightboxModal: document.getElementById("lightboxModal"),
  lightboxImage: document.getElementById("lightboxImage"),
  lightboxCode: document.getElementById("lightboxCode"),
  lightboxCloseBtn: document.getElementById("lightboxCloseBtn"),

  toast: document.getElementById("toast")
};

// -------------------- Utilidades --------------------
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getCardImage(code) {
  return IMAGE_URLS[code] || "";
}

function getTypeLabel(tipo) {
  if (tipo === "reps") return "repeticiones";
  if (tipo === "time") return "segundos";
  if (tipo === "cycles") return "ciclos";
  if (tipo === "rpm") return "rpm";
  return "";
}

function collectionKey(name) {
  return `efboral_album_${name}`;
}

function showToast(message, icon = "🔔") {
  if (!els.toast) return;
  els.toast.textContent = `${icon} ${message}`;
  els.toast.classList.remove("hidden");
  els.toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    els.toast.classList.remove("show");
    els.toast.classList.add("hidden");
  }, 2600);
}

function showStep(stepId) {
  document.querySelectorAll(".step-panel").forEach(step => step.classList.remove("active"));
  const target = document.getElementById(stepId);
  if (target) {
    target.classList.add("active");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function populateFilters() {
  const families = ["all", ...new Set(cards.map(c => c.familia))];
  els.familyFilter.innerHTML = families
    .map(f => `<option value="${escapeHtml(f)}">${f === "all" ? "Todas" : escapeHtml(f)}</option>`)
    .join("");
}

function loadCollection(name) {
  if (!name) return;
  try {
    const raw = localStorage.getItem(collectionKey(name));
    collections[name] = raw ? JSON.parse(raw) : [];
  } catch {
    collections[name] = [];
  }
}

function saveCollection(name) {
  if (!name) return;
  localStorage.setItem(collectionKey(name), JSON.stringify(collections[name] || []));
}

function addToCollection(name, code) {
  if (!name) return;
  if (!collections[name]) collections[name] = [];
  if (!collections[name].includes(code)) {
    collections[name].push(code);
    collections[name].sort((a, b) => a.localeCompare(b, "es"));
    saveCollection(name);
  }
}

function resetCollection(name) {
  collections[name] = [];
  saveCollection(name);
}

function setPlayerNamesInUI() {
  const a = players.A || "Retador";
  const b = players.B || "Retado";

  if (els.feedbackNameA) els.feedbackNameA.textContent = a;
  if (els.feedbackNameB) els.feedbackNameB.textContent = b;
  if (els.suddenNameA) els.suddenNameA.textContent = a;
  if (els.suddenNameB) els.suddenNameB.textContent = b;
  if (els.feedbackNameJugadorA) els.feedbackNameJugadorA.textContent = a;
  if (els.feedbackNameJugadorB) els.feedbackNameJugadorB.textContent = b;
}

function clearExecutionChoices() {
  document.querySelectorAll('input[name="aTechnique"], input[name="aIndicator"], input[name="bTechnique"], input[name="bIndicator"]').forEach(input => {
    input.checked = false;
  });
}

function getEligibleCards() {
  const selectedFamily = els.familyFilter.value;
  const selectedLevel = els.levelFilter.value;
  const avoidOwned = els.avoidOwnedToggle.checked;
  let pool = [...cards];

  if (selectedFamily !== "all") pool = pool.filter(c => c.familia === selectedFamily);
  if (selectedLevel !== "all") pool = pool.filter(c => c.nivel === selectedLevel);

  if (avoidOwned && players.A && collections[players.A]) {
    const ownedCodes = collections[players.A];
    const missing = pool.filter(c => !ownedCodes.includes(c.codigo));
    if (missing.length > 0) pool = missing;
  }

  return pool;
}

function openCardLightbox(card) {
  if (!card) return;
  const imgUrl = getCardImage(card.codigo);
  if (!imgUrl) return;

  els.lightboxImage.src = imgUrl;
  els.lightboxCode.textContent = `${card.codigo} · ${card.nombre}`;
  els.lightboxModal.classList.remove("hidden");
}

// -------------------- Render base --------------------
function renderInitialCardState() {
  const placeholder = getCardImage("A-MC 0");
  els.cardDisplay.className = "card-display card-display--empty";
  els.cardDisplay.innerHTML = `
    <div class="card-hero">
      <div class="card-image-wrap">
        ${placeholder
          ? `<img class="card-image" src="${placeholder}" alt="A-MC 0">`
          : `<div style="padding:18px;text-align:center;color:#94a3b8;">No se encontró la imagen A-MC 0</div>`}
      </div>
      <div>
        <div class="card-title">A-MC 0 · Inicio del duelo</div>
        <div class="card-subtitle">Pulsa Robar cromo para comenzar.</div>
        <div class="info-box" style="margin-top:0;">Aquí aparecerá la imagen del cromo, sus grupos musculares, errores clave e indicador de logro.</div>
      </div>
    </div>
  `;

  if (els.executionGuideText) {
    els.executionGuideText.textContent = "";
  }

  if (els.executionChecklist) {
    els.executionChecklist.classList.add("hidden");
    els.executionChecklist.innerHTML = "";
  }

  if (els.btnVerCromo) {
    els.btnVerCromo.classList.add("hidden");
    els.btnVerCromo.textContent = "Ver cromo actual";
  }

  if (els.suddenExplainA) {
    els.suddenExplainA.classList.add("hidden");
    els.suddenExplainA.innerHTML = "";
  }
  if (els.suddenExplainB) {
    els.suddenExplainB.classList.add("hidden");
    els.suddenExplainB.innerHTML = "";
  }
  if (els.suddenFeedback) {
    els.suddenFeedback.classList.add("hidden");
    els.suddenFeedback.innerHTML = "";
  }

  if (els.rankingSummary) {
    els.rankingSummary.classList.add("hidden");
    els.rankingSummary.innerHTML = "";
  }

  if (els.informeFinal) {
    els.informeFinal.classList.add("hidden");
    els.informeFinal.innerHTML = "";
  }

  if (els.achievementsBox) {
    els.achievementsBox.classList.add("hidden");
    els.achievementsBox.innerHTML = "";
  }

  if (els.panelFinalDuelo) {
    els.panelFinalDuelo.classList.add("hidden");
  }

  pendingFeedbackResult = null;
  lastDuelResult = null;
  clearExecutionChoices();
}

function applyCardRarity(card) {
  els.cardDisplay.classList.remove("card-despertar", "card-pro", "card-leyenda");
  if (card.nivel === "Despertar") els.cardDisplay.classList.add("card-despertar");
  if (card.nivel === "Pro") els.cardDisplay.classList.add("card-pro");
  if (card.nivel === "Leyenda") {
    els.cardDisplay.classList.add("card-leyenda");
    showToast("¡Cromo Leyenda!", "🔥");
  }
}

function renderCard(card) {
  const image = getCardImage(card.codigo);

  els.cardDisplay.className = "card-display";
  els.cardDisplay.innerHTML = `
    <div class="card-hero">
      <div class="card-image-wrap">
        ${image
          ? `<img class="card-image js-card-image" src="${image}" alt="${escapeHtml(card.codigo)} · ${escapeHtml(card.nombre)}">`
          : `<div style="padding:18px;text-align:center;color:#94a3b8;">No se encontró imagen para ${escapeHtml(card.codigo)}</div>`}
      </div>
      <div>
        <div class="card-title">${escapeHtml(card.nombre)}</div>
        <div class="card-subtitle">${escapeHtml(card.codigo)} · ${escapeHtml(card.familia)} · ${escapeHtml(card.nivel)}</div>
        <div class="card-meta">
          <span class="mini-chip">Tipo: ${escapeHtml(getTypeLabel(card.tipo))}</span>
          <span class="mini-chip">Familia: ${escapeHtml(card.familia)}</span>
          <span class="mini-chip">Nivel: ${escapeHtml(card.nivel)}</span>
        </div>
        <div class="info-box" style="margin-top:0;">Ambos realizan el mismo ejercicio con la misma carga aleatoria.</div>
      </div>
    </div>

    <div class="card-lists">
      <div class="card-list">
        <h3>💪 Grupos musculares</h3>
        <ul>${card.musculos.map(m => `<li>${escapeHtml(m)}</li>`).join("")}</ul>
      </div>
      <div class="card-list">
        <h3>⚠️ Errores clave</h3>
        <ul>${card.errores.map(e => `<li>${escapeHtml(e)}</li>`).join("")}</ul>
      </div>
    </div>
  `;

  const clickableImage = els.cardDisplay.querySelector(".js-card-image");
  if (clickableImage) {
    clickableImage.style.cursor = "pointer";
    clickableImage.addEventListener("click", () => openCardLightbox(card));
  }

  applyCardRarity(card);
}

// -------------------- Logros y resultado final --------------------
function getAchievementMeta(name) {
  if (name.includes("Primer")) return "🥉";
  if (name.includes("3 victorias")) return "🔥";
  if (name.includes("Maestro")) return "👑";
  if (name.includes("Despertar")) return "🌱";
  if (name.includes("Pro")) return "🏅";
  if (name.includes("Leyenda")) return "⚔️";
  if (name.includes("Coleccionista")) return "📚";
  return "⭐";
}

function unlockAchievement(name) {
  if (!achievements.includes(name)) {
    achievements.push(name);
    renderAchievements();
    showToast(`Logro desbloqueado: ${name}`, "🏆");
  }
}

function checkAchievements(winnerName = "") {
  const aAlbum = collections[players.A]?.length || 0;

  if (aAlbum >= 1) unlockAchievement("Primer cromo");
  if (aAlbum >= 12) unlockAchievement("Coleccionista 12");
  if (winnerName && (streaks[winnerName] || 0) >= 3) unlockAchievement("3 victorias seguidas");
  if (currentCard?.nivel === "Despertar") unlockAchievement("Despertar conquistado");
  if (currentCard?.nivel === "Pro") unlockAchievement("Pro conquistado");
  if (currentCard?.nivel === "Leyenda") unlockAchievement("Leyenda conquistada");

  if (winnerName && currentCard?.familia) {
    const familyCount = (collections[winnerName] || [])
      .map(code => cards.find(c => c.codigo === code))
      .filter(Boolean)
      .filter(c => c.familia === currentCard.familia)
      .length;

    if (familyCount >= 3) {
      unlockAchievement(`Maestro de ${currentCard.familia}`);
    }
  }
}

function renderAchievements() {
  if (!els.achievementsBox) return;
  if (!achievements.length) {
    els.achievementsBox.classList.add("hidden");
    els.achievementsBox.innerHTML = "";
    return;
  }

  els.achievementsBox.innerHTML = `
    <strong>🏆 Logros desbloqueados</strong><br>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
      ${achievements.map(a => `<span class="achievement-chip">${getAchievementMeta(a)} ${escapeHtml(a)}</span>`).join("")}
    </div>
  `;
  els.achievementsBox.classList.remove("hidden");
}

function renderResultSummary() {
  const aScore = ranking[players.A] || 0;
  const bScore = ranking[players.B] || 0;
  const aAlbum = collections[players.A]?.length || 0;
  const bAlbum = collections[players.B]?.length || 0;

  els.rankingSummary.innerHTML = `
    <strong>📊 Informe final del duelo</strong><br>
    ${escapeHtml(players.A)}: ${aScore} punto(s) · Álbum ${aAlbum}/36<br>
    ${escapeHtml(players.B)}: ${bScore} punto(s) · Álbum ${bAlbum}/36<br>
    Ronda actual: ${roundsTarget > 0 ? `${currentRound}/${roundsTarget}` : currentRound}
  `;
  els.rankingSummary.classList.remove("hidden");
}

function renderExecutionChecklist(type, scores = null) {
  let text = "";
  if (type === "none") text = "⚡ Resultado automático: nadie cumple.";
  if (type === "winA") text = `⚡ Resultado automático: gana ${escapeHtml(players.A)}.`;
  if (type === "winB") text = `⚡ Resultado automático: gana ${escapeHtml(players.B)}.`;
  if (type === "tie") text = "⚡ Resultado automático: empate técnico. Se activa el desempate pedagógico.";

  if (scores) {
    text += `<br>${escapeHtml(players.A)}: ${scores.a}/2 · ${escapeHtml(players.B)}: ${scores.b}/2`;
  }

  els.executionChecklist.innerHTML = text;
  els.executionChecklist.classList.remove("hidden");
}

function renderInformeFinal(resultado) {
  if (!resultado) return;

  let titulo = "";
  let motivo = "";
  let cierre = "";

  if (resultado.ganador === "none") {
    titulo = "❌ Nadie gana el duelo";
    motivo = resultado.motivo || "Ningún jugador consigue una ejecución válida suficiente.";
    cierre = "Conviene revisar el cromo y volver a intentarlo con más control técnico.";
  } else if (resultado.ganador === "A") {
    titulo = `🏆 Gana ${escapeHtml(players.A)}`;
    motivo = resultado.motivo || `${escapeHtml(players.A)} resuelve mejor el duelo.`;
    cierre = "La victoria se explica por una mejor ejecución o por acierto en el desempate pedagógico.";
  } else if (resultado.ganador === "B") {
    titulo = `🏆 Gana ${escapeHtml(players.B)}`;
    motivo = resultado.motivo || `${escapeHtml(players.B)} resuelve mejor el duelo.`;
    cierre = "La victoria se explica por una mejor ejecución o por acierto en el desempate pedagógico.";
  }

  els.informeFinal.innerHTML = `
    <strong>${titulo}</strong><br>
    ${motivo}<br>
    ${cierre}
  `;
  els.informeFinal.classList.remove("hidden");
}

function mostrarPanelFinal(resultado) {
  lastDuelResult = resultado;
  renderResultSummary();
  renderInformeFinal(resultado);
  renderAchievements();
  els.panelFinalDuelo.classList.remove("hidden");
  showStep("stepResult");
}

// -------------------- Preguntas y feedback pedagógico --------------------
function getCorrectIndex(options) {
  return options.findIndex(opt => opt.correct);
}

function makeQuestion(key, prompt, options, reasonType, reasonValue) {
  return { key, prompt, options, reasonType, reasonValue };
}

function buildQuestionPool(card) {
  const pool = [];
  const loadText = currentLoad ? `${currentLoad.value} ${currentLoad.unit}` : "la carga marcada";

  pool.push(
    makeQuestion(
      "indicador_control",
      `¿Qué idea refleja mejor el indicador de logro de "${card.nombre}"?`,
      [
        { text: `Mantener control técnico mientras se completa ${loadText}.`, correct: true },
        { text: "Ir rápido aunque se pierda calidad técnica.", correct: false }
      ],
      "indicador",
      card.indicador
    )
  );

  pool.push(
    makeQuestion(
      "carga_tecnica",
      "¿Qué se valida realmente en este duelo?",
      [
        { text: "La carga marcada por los dados y el indicador de logro.", correct: true },
        { text: "Solo terminar la carga, aunque la técnica falle.", correct: false }
      ],
      "indicador",
      card.indicador
    )
  );

  card.errores.forEach((error, idx) => {
    pool.push(
      makeQuestion(
        `error_${idx}`,
        `¿Por qué conviene corregir "${error}"?`,
        [
          { text: "Porque mejora el control y la calidad del ejercicio.", correct: true },
          { text: "Porque solo sirve para terminar más rápido.", correct: false }
        ],
        "error",
        error
      )
    );
  });

  card.musculos.forEach((musculo, idx) => {
    pool.push(
      makeQuestion(
        `musculo_${idx}`,
        `¿Qué grupo muscular está especialmente implicado en este cromo?`,
        [
          { text: musculo, correct: true },
          { text: idx === 0 ? "cuello" : card.musculos[0], correct: false }
        ],
        "musculo",
        musculo
      )
    );
  });

  return pool;
}

function pickDistinctQuestions(pool, usedKeys) {
  const available = pool.filter(q => !usedKeys.has(q.key));
  const source = available.length >= 2 ? available : pool.filter(q => !usedKeys.has(q.key) || available.length === 0);

  const first = randomFrom(source);
  const remaining = source.filter(q => q.key !== first.key);
  const second = remaining.length ? randomFrom(remaining) : first;

  usedKeys.add(first.key);
  if (second.key !== first.key) usedKeys.add(second.key);

  return { questionA: first, questionB: second };
}

function renderSuddenOptions(container, name, options) {
  container.innerHTML = options.map((opt, idx) => `
    <label class="choice-chip">
      <input type="radio" name="${name}" value="${idx}">
      <span>${escapeHtml(opt.text)}</span>
    </label>
  `).join("");
}

function startSuddenDeathRound() {
  if (!currentCard) return;

  if (!suddenDeathState) {
    suddenDeathState = {
      round: 0,
      usedKeys: new Set(),
      pool: buildQuestionPool(currentCard)
    };
  }

  suddenDeathState.round += 1;
  const pair = pickDistinctQuestions(suddenDeathState.pool, suddenDeathState.usedKeys);
  suddenDeathState.questionA = pair.questionA;
  suddenDeathState.questionB = pair.questionB;

  respuestasJugadores = { A: null, B: null };
  pendingFeedbackResult = null;

  els.suddenDeathRoundInfo.innerHTML = `Tanda ${suddenDeathState.round} · preguntas paralelas basadas en el cromo`;
  els.suddenDeathRoundInfo.classList.remove("hidden");

  els.suddenQuestionA.textContent = suddenDeathState.questionA.prompt;
  els.suddenQuestionB.textContent = suddenDeathState.questionB.prompt;

  renderSuddenOptions(els.suddenOptionsA, "suddenA", suddenDeathState.questionA.options);
  renderSuddenOptions(els.suddenOptionsB, "suddenB", suddenDeathState.questionB.options);

  els.suddenExplainA.classList.add("hidden");
  els.suddenExplainB.classList.add("hidden");
  els.suddenExplainA.innerHTML = "";
  els.suddenExplainB.innerHTML = "";
  els.suddenFeedback.classList.add("hidden");
  els.suddenFeedback.innerHTML = "";

  showStep("stepSudden");
}

function getSuddenAnswer(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? Number(selected.value) : null;
}

function getQuestionByPlayer(playerKey) {
  return playerKey === "A" ? suddenDeathState.questionA : suddenDeathState.questionB;
}

function esCorrecta(playerKey, answerIndex) {
  if (answerIndex === null || answerIndex === undefined) return false;
  const question = getQuestionByPlayer(playerKey);
  return answerIndex === getCorrectIndex(question.options);
}

function obtenerTextoRespuesta(playerKey, answerIndex) {
  const question = getQuestionByPlayer(playerKey);
  return question?.options?.[answerIndex]?.text || "";
}

function obtenerExplicacion(playerKey, answerIndex) {
  const question = getQuestionByPlayer(playerKey);
  const correcta = esCorrecta(playerKey, answerIndex);

  if (!question || !currentCard) return "Revisa la información del cromo para justificar mejor tu respuesta.";

  if (question.reasonType === "error") {
    return correcta
      ? `Se considera correcto porque "${question.reasonValue}" aparece como error clave del cromo. Corregirlo mejora la ejecución y ayuda a cumplir el indicador de logro.`
      : `No es correcta. "${question.reasonValue}" figura como error clave del cromo y debe corregirse para ejecutar con calidad.`;
  }

  if (question.reasonType === "musculo") {
    return correcta
      ? `Es correcto porque "${question.reasonValue}" aparece entre los grupos musculares implicados en este cromo. Reconocerlo ayuda a entender qué zona trabaja realmente.`
      : `No es correcta. El cromo señala "${question.reasonValue}" como grupo muscular implicado, así que conviene revisar esa información para comprender mejor el ejercicio.`;
  }

  return correcta
    ? `Es correcto porque el indicador de logro del cromo exige: "${currentCard.indicador}". La respuesta mantiene el foco en la ejecución correcta.`
    : `No es correcta. El indicador de logro real del cromo dice: "${currentCard.indicador}", así que la prioridad no es solo acabar sino hacerlo con buena técnica.`;
}

function calcularGanador() {
  const aCorrecta = esCorrecta("A", respuestasJugadores.A);
  const bCorrecta = esCorrecta("B", respuestasJugadores.B);

  if (aCorrecta && !bCorrecta) return "A";
  if (!aCorrecta && bCorrecta) return "B";
  return "tie";
}

function evaluarRespuestas() {
  const resultado = {
    A: {
      respuesta: respuestasJugadores.A,
      respuestaTexto: obtenerTextoRespuesta("A", respuestasJugadores.A),
      correcta: esCorrecta("A", respuestasJugadores.A),
      explicacion: obtenerExplicacion("A", respuestasJugadores.A)
    },
    B: {
      respuesta: respuestasJugadores.B,
      respuestaTexto: obtenerTextoRespuesta("B", respuestasJugadores.B),
      correcta: esCorrecta("B", respuestasJugadores.B),
      explicacion: obtenerExplicacion("B", respuestasJugadores.B)
    },
    ganador: calcularGanador(),
    motivo: ""
  };

  if (resultado.ganador === "A") {
    resultado.motivo = `${players.A} gana porque acierta en el desempate y ${players.B} falla.`;
  } else if (resultado.ganador === "B") {
    resultado.motivo = `${players.B} gana porque acierta en el desempate y ${players.A} falla.`;
  } else {
    resultado.motivo = "Ambos jugadores mantienen el empate en esta tanda.";
  }

  return resultado;
}

function mostrarFeedbackDesempate(resultado) {
  const renderJugador = (clave, nombre, elemento) => {
    const data = resultado[clave];
    const emoji = data.correcta ? "✅" : "❌";
    const respuesta = data.respuestaTexto
      ? `Respuesta elegida: ${escapeHtml(data.respuestaTexto)}`
      : "Sin respuesta registrada";

    elemento.innerHTML = `
      <strong>${emoji} ${escapeHtml(nombre)}</strong><br>
      ${respuesta}<br>
      ${escapeHtml(data.explicacion)}
    `;
    elemento.classList.remove("hidden");
  };

  renderJugador("A", players.A, els.suddenExplainA);
  renderJugador("B", players.B, els.suddenExplainB);

  if (resultado.ganador === "A") {
    els.suddenFeedback.innerHTML = `✅ ${escapeHtml(players.A)} resuelve la tanda porque acierta y ${escapeHtml(players.B)} falla.`;
  } else if (resultado.ganador === "B") {
    els.suddenFeedback.innerHTML = `✅ ${escapeHtml(players.B)} resuelve la tanda porque acierta y ${escapeHtml(players.A)} falla.`;
  } else {
    els.suddenFeedback.innerHTML = "🤝 Ambos aciertan o ambos fallan. Sigue el empate y habrá una nueva tanda.";
  }

  els.suddenFeedback.classList.remove("hidden");
}

function resolverDesempate() {
  const resultado = evaluarRespuestas();
  pendingFeedbackResult = resultado;
  mostrarFeedbackDesempate(resultado);

  if (resultado.ganador === "A") {
    ranking[players.A] = (ranking[players.A] || 0) + 1;
    streaks[players.A] = (streaks[players.A] || 0) + 1;
    streaks[players.B] = 0;
    addToCollection(players.A, currentCard.codigo);
    checkAchievements(players.A);
  } else if (resultado.ganador === "B") {
    ranking[players.B] = (ranking[players.B] || 0) + 1;
    streaks[players.B] = (streaks[players.B] || 0) + 1;
    streaks[players.A] = 0;
    addToCollection(players.B, currentCard.codigo);
    checkAchievements(players.B);
  }

  if (resultado.ganador === "tie") {
    els.btnContinuarResultado.textContent = "Siguiente tanda ➡";
  } else {
    els.btnContinuarResultado.textContent = "Ver resultado final ➡";
  }

  showStep("stepFeedback");
}

// -------------------- Flujo principal --------------------
function handleStartDuel() {
  const playerA = document.getElementById("playerA").value.trim();
  const playerB = document.getElementById("playerB").value.trim();

  if (!playerA || !playerB) {
    alert("Escribe el nombre de ambos jugadores.");
    return;
  }

  players.A = playerA;
  players.B = playerB;
  roundsTarget = Number(els.roundsSelect.value || 0);
  currentRound = 0;

  if (!(playerA in ranking)) ranking[playerA] = 0;
  if (!(playerB in ranking)) ranking[playerB] = 0;
  if (!(playerA in streaks)) streaks[playerA] = 0;
  if (!(playerB in streaks)) streaks[playerB] = 0;

  loadCollection(playerA);
  loadCollection(playerB);

  currentCard = null;
  currentLoad = null;
  achievements = [];
  suddenDeathState = null;
  lastDuelResult = null;
  pendingFeedbackResult = null;
  respuestasJugadores = { A: null, B: null };

  setPlayerNamesInUI();
  renderInitialCardState();

  els.diceValue.textContent = "—";
  els.diceSummary.textContent = "Pulsa “Tirar dados” para generar la carga del reto.";
  els.nextToExecutionBtn.disabled = true;

  showStep("stepControl");
  showToast("¡Duelo iniciado! Configura los filtros y roba un cromo.", "⚔️");
}

function drawCard() {
  const pool = getEligibleCards();
  if (!pool.length) {
    alert("No quedan cromos disponibles. Cambia familia, nivel o desactiva evitar repetidos.");
    return;
  }

  currentCard = randomFrom(pool);
  currentLoad = null;
  suddenDeathState = null;
  lastDuelResult = null;
  pendingFeedbackResult = null;
  respuestasJugadores = { A: null, B: null };

  renderCard(currentCard);

  if (els.btnVerCromo) {
    els.btnVerCromo.textContent = `${currentCard.codigo} · ${currentCard.nombre}`;
    els.btnVerCromo.classList.remove("hidden");
  }

  if (els.executionGuideText) {
    els.executionGuideText.textContent = currentCard.indicador;
  }

  els.diceValue.textContent = "—";
  els.diceSummary.textContent = "Pulsa “Tirar dados” para generar la carga del reto.";
  els.executionChecklist.classList.add("hidden");
  els.executionChecklist.innerHTML = "";
  els.nextToExecutionBtn.disabled = true;
  clearExecutionChoices();

  showToast(`${currentCard.nombre}. Ahora tira los dados.`, "🎴");
}

function rollDice() {
  if (!currentCard) {
    alert("Primero roba un cromo.");
    return;
  }

  const cargas = currentCard.cargas;
  if (!cargas || cargas.length !== 6) {
    alert("Este cromo no tiene cargas válidas.");
    return;
  }

  els.diceCube.classList.remove("rolling");
  void els.diceCube.offsetWidth;
  els.diceCube.classList.add("rolling");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * 6);
    const valor = cargas[randomIndex];
    const unidad = getTypeLabel(currentCard.tipo);

    currentLoad = { value: valor, unit: unidad };
    els.diceValue.textContent = `${valor} ${unidad}`;
    els.diceSummary.textContent = `Carga generada: ${valor} ${unidad}.`;
    els.nextToExecutionBtn.disabled = false;

    showToast(`Carga: ${valor} ${unidad}`, "🎲");
  }, 780);
}

function getSelectedRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? Number(el.value) : null;
}

function getExecutionScores() {
  const aTechnique = getSelectedRadioValue("aTechnique");
  const aIndicator = getSelectedRadioValue("aIndicator");
  const bTechnique = getSelectedRadioValue("bTechnique");
  const bIndicator = getSelectedRadioValue("bIndicator");

  if ([aTechnique, aIndicator, bTechnique, bIndicator].some(v => v === null)) {
    return null;
  }

  return {
    a: aTechnique + aIndicator,
    b: bTechnique + bIndicator
  };
}

function resolveAutomaticResult(scores) {
  currentRound += 1;

  if (scores.a === 0 && scores.b === 0) {
    const resultado = {
      ganador: "none",
      motivo: "Ningún jugador consigue completar la carga con una ejecución válida según el indicador de logro."
    };
    lastDuelResult = resultado;
    renderExecutionChecklist("none", scores);
    mostrarPanelFinal(resultado);
    showToast("Nadie cumple.", "❌");
    return;
  }

  if (scores.a > scores.b) {
    ranking[players.A] = (ranking[players.A] || 0) + 1;
    streaks[players.A] = (streaks[players.A] || 0) + 1;
    streaks[players.B] = 0;
    addToCollection(players.A, currentCard.codigo);
    checkAchievements(players.A);

    const resultado = {
      ganador: "A",
      motivo: `${players.A} gana porque obtiene mejor valoración automática en técnica e indicador.`
    };
    lastDuelResult = resultado;
    renderExecutionChecklist("winA", scores);
    mostrarPanelFinal(resultado);
    showToast(`${players.A} gana el duelo.`, "🏆");
    return;
  }

  if (scores.b > scores.a) {
    ranking[players.B] = (ranking[players.B] || 0) + 1;
    streaks[players.B] = (streaks[players.B] || 0) + 1;
    streaks[players.A] = 0;
    addToCollection(players.B, currentCard.codigo);
    checkAchievements(players.B);

    const resultado = {
      ganador: "B",
      motivo: `${players.B} gana porque obtiene mejor valoración automática en técnica e indicador.`
    };
    lastDuelResult = resultado;
    renderExecutionChecklist("winB", scores);
    mostrarPanelFinal(resultado);
    showToast(`${players.B} gana el duelo.`, "🏆");
    return;
  }

  renderExecutionChecklist("tie", scores);
  suddenDeathState = null;
  startSuddenDeathRound();
  showToast("Empate técnico. Se activa el desempate pedagógico.", "⚡");
}

function handleResolveDuel() {
  if (!currentCard || !currentLoad) {
    alert("Primero roba un cromo y tira los dados.");
    return;
  }

  const scores = getExecutionScores();
  if (!scores) {
    alert("Completa las 4 decisiones del mini feedback antes de resolver el duelo.");
    return;
  }

  resolveAutomaticResult(scores);
}

function handleResolveSuddenRound() {
  if (!suddenDeathState) return;

  const answerA = getSuddenAnswer("suddenA");
  const answerB = getSuddenAnswer("suddenB");

  if (answerA === null || answerB === null) {
    alert("Responde ambas preguntas antes de resolver la tanda.");
    return;
  }

  respuestasJugadores.A = answerA;
  respuestasJugadores.B = answerB;
  resolverDesempate();
}

function handleContinueAfterFeedback() {
  if (!pendingFeedbackResult) return;

  if (pendingFeedbackResult.ganador === "tie") {
    startSuddenDeathRound();
    return;
  }

  lastDuelResult = pendingFeedbackResult;
  mostrarPanelFinal(pendingFeedbackResult);
}

// -------------------- Reset --------------------
function resetDuel() {
  if (roundsTarget > 0 && currentRound >= roundsTarget) {
    resetGame();
    return;
  }

  currentCard = null;
  currentLoad = null;
  suddenDeathState = null;
  lastDuelResult = null;
  pendingFeedbackResult = null;
  respuestasJugadores = { A: null, B: null };

  renderInitialCardState();
  els.diceValue.textContent = "—";
  els.diceSummary.textContent = "Pulsa “Tirar dados” para generar la carga del reto.";
  els.nextToExecutionBtn.disabled = true;

  showStep("stepCard");
  showToast("Nuevo duelo listo. Roba un nuevo cromo.", "⏭️");
}

function resetGame() {
  players.A = "";
  players.B = "";
  currentCard = null;
  currentLoad = null;
  achievements = [];
  roundsTarget = 0;
  currentRound = 0;
  suddenDeathState = null;
  lastDuelResult = null;
  pendingFeedbackResult = null;
  respuestasJugadores = { A: null, B: null };

  document.getElementById("playerA").value = "";
  document.getElementById("playerB").value = "";
  els.roundsSelect.value = "0";
  els.avoidOwnedToggle.checked = true;
  els.nextToExecutionBtn.disabled = true;

  renderInitialCardState();
  setPlayerNamesInUI();
  els.diceValue.textContent = "—";
  els.diceSummary.textContent = "Pulsa “Tirar dados” para generar la carga del reto.";

  showStep("stepIntro");
  showToast("Partida finalizada. Puedes empezar una nueva.", "🏁");
}

// -------------------- Álbum --------------------
function showFullCollectionModal() {
  if (!players.A && !players.B) {
    alert("Primero inicia una partida.");
    return;
  }

  let html = "";

  if (players.A) {
    html += `<div class="collection-section"><h3>⚔️ ${escapeHtml(players.A)} (Retador)</h3><div class="collection-grid-container">`;
    const colA = collections[players.A] || [];
    colA.forEach(code => {
      const card = cards.find(c => c.codigo === code);
      const imgUrl = getCardImage(code);
      html += `
        <div class="collection-card" data-code="${escapeHtml(code)}" data-img="${imgUrl}">
          <div class="collection-thumb-wrap">
            <img class="collection-thumb" src="${imgUrl}" alt="${escapeHtml(code)}">
          </div>
          <div class="collection-code">${escapeHtml(card ? `${code}` : code)}</div>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  if (players.B) {
    html += `<div class="collection-section"><h3>🛡️ ${escapeHtml(players.B)} (Retado)</h3><div class="collection-grid-container">`;
    const colB = collections[players.B] || [];
    colB.forEach(code => {
      const card = cards.find(c => c.codigo === code);
      const imgUrl = getCardImage(code);
      html += `
        <div class="collection-card" data-code="${escapeHtml(code)}" data-img="${imgUrl}">
          <div class="collection-thumb-wrap">
            <img class="collection-thumb" src="${imgUrl}" alt="${escapeHtml(code)}">
          </div>
          <div class="collection-code">${escapeHtml(card ? `${code}` : code)}</div>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  els.fullCollectionContent.innerHTML = html || `<div class="info-box">Todavía no hay cromos en el álbum.</div>`;
  els.collectionModal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  document.querySelectorAll("#fullCollectionContent .collection-card").forEach(cardEl => {
    cardEl.addEventListener("click", () => {
      const code = cardEl.getAttribute("data-code");
      const card = cards.find(c => c.codigo === code);
      if (card) openCardLightbox(card);
    });
  });
}

function closeCollectionModal() {
  els.collectionModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function closeLightbox() {
  els.lightboxModal.classList.add("hidden");
}

// -------------------- Pantalla completa --------------------
async function toggleFullscreen() {
  const hasFakeFs = document.body.classList.contains("mobile-fullscreen");

  try {
    if (!document.fullscreenElement && !hasFakeFs && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
      els.fullscreenBtn.textContent = "Salir de pantalla completa";
      return;
    }
  } catch (e) {}

  if (document.fullscreenElement) {
    await document.exitFullscreen();
    els.fullscreenBtn.textContent = "Pantalla completa";
    return;
  }

  if (!hasFakeFs) {
    document.body.classList.add("mobile-fullscreen");
    els.fullscreenBtn.textContent = "Salir de pantalla completa";
  } else {
    document.body.classList.remove("mobile-fullscreen");
    els.fullscreenBtn.textContent = "Pantalla completa";
  }
}

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement || document.body.classList.contains("mobile-fullscreen")) {
    els.fullscreenBtn.textContent = "Salir de pantalla completa";
  } else {
    els.fullscreenBtn.textContent = "Pantalla completa";
  }
});

// -------------------- Eventos --------------------
els.startIntroBtn.addEventListener("click", () => showStep("stepConfig"));
els.startBtn.addEventListener("click", handleStartDuel);
els.fullscreenBtn.addEventListener("click", toggleFullscreen);

els.nextToCardBtn.addEventListener("click", () => showStep("stepCard"));

els.nextToDiceBtn.addEventListener("click", () => {
  if (!currentCard) {
    showToast("Primero roba un cromo.", "⚠️");
    return;
  }
  showStep("stepDice");
});

els.nextToExecutionBtn.addEventListener("click", () => {
  if (!currentLoad) {
    showToast("Primero tira los dados.", "⚠️");
    return;
  }
  showStep("stepExecution");
});

els.drawCardBtn.addEventListener("click", drawCard);
els.rollDiceBtn.addEventListener("click", rollDice);
els.resolveDuelBtn.addEventListener("click", handleResolveDuel);
els.resolveSuddenBtn.addEventListener("click", handleResolveSuddenRound);

els.btnSiguienteDuelo.addEventListener("click", resetDuel);
els.btnFinalizar.addEventListener("click", resetGame);
els.btnAlbum.addEventListener("click", showFullCollectionModal);
els.btnContinuarResultado.addEventListener("click", handleContinueAfterFeedback);

els.btnVerCromo.addEventListener("click", () => openCardLightbox(currentCard));

els.closeCollectionModalBtn.addEventListener("click", closeCollectionModal);
els.modalCloseBtn.addEventListener("click", closeCollectionModal);
els.lightboxCloseBtn.addEventListener("click", closeLightbox);

els.resetCollectionBtn.addEventListener("click", () => {
  if (!players.A) {
    alert("No hay un retador activo.");
    return;
  }

  if (confirm(`¿Reiniciar álbum de ${players.A}?`)) {
    resetCollection(players.A);
    showFullCollectionModal();
    showToast("Álbum del retador reiniciado.", "🔄");
  }
});

window.addEventListener("click", (e) => {
  if (e.target === els.collectionModal) closeCollectionModal();
  if (e.target === els.lightboxModal) closeLightbox();
});

// -------------------- Init --------------------
populateFilters();
renderInitialCardState();
setPlayerNamesInUI();
showStep("stepIntro");
