"use strict";

/* ============================================================
   LOCK V2.2 STRUCTUUR
   ============================================================ */
const LOCK = {
  "00_SYSTEM": { submappen: {
    "0_INBOX": [],
    "01_NAS_STRUCTUUR": ["01_READMES_REGELS","02_MAPPENBOOM_EXPORTS","03_BESLISHULP_CHEATSHEETS","04_VERSIEGESCHIEDENIS"],
    "02_BACKUPS": ["01_BACKUP_PLANNEN","02_SNAPSHOTS","03_RESTORE_TESTS","04_BACKUP_LOGS"],
    "03_SOFTWARE_INSTALLERS": ["01_WINDOWS_TOOLS","02_CAD_NAVAL_SOFTWARE","03_AI_AUTOMATION_TOOLS","04_DRIVERS_UTILITIES"],
    "04_LICENTIES_KEYS": ["01_SOFTWARE_LICENTIES","02_SERIALS_KEYS","03_ACCOUNTS_TOEGANG"],
    "05_SCRIPTS_AUTOMATISERING": ["01_FILE_TOOLS","02_NAS_SCRIPTS","03_AI_ROUTING_TESTS","04_DRY_RUN_OUTPUT"],
    "99_ARCHIEF": []
  }},
  "01_ADMINISTRATIEF": { submappen: {
    "0_INBOX": [],
    "01_FINANCIEEL": ["01_BANK_BETALINGEN","02_FACTUREN_BONNEN","03_BELASTING","04_VERZEKERINGEN_FINANCIEEL","05_PERSOONLIJKE_FINANCIEN"],
    "02_CONTRACTEN_JURIDISCH_ID": ["01_IDENTITEIT","02_DIPLOMAS_CERTIFICATEN","03_CONTRACTEN_WERK","04_OPLEIDING_CONTRACTEN_INSCHRIJVING","05_JURIDISCHE_BEWIJZEN"],
    "03_WONEN_NUTS": ["01_HUUR_WONING","02_ENERGIE_WATER","03_INTERNET_MOBIEL","04_GEMEENTE_BELASTING_WONEN","05_WONINGDOSSIERS"],
    "04_OVERHEID_DUO_KVK": ["01_OVERHEID_CORRESPONDENTIE","02_DUO_STUDIEFINANCIERING","03_VERGUNNINGEN","04_KVK_REGISTRATIE"],
    "05_ZORG_VERVOER": ["01_ZORGVERZEKERING","02_MEDISCHE_DOCUMENTEN","03_AUTO","04_OVERIG_VERVOER"],
    "06_ZAKELIJK_FORMEEL": ["01_KVK_BELASTING_BEDRIJF","02_CONTRACTEN_SAMENWERKINGEN","03_FACTUREN_OFFERTES","04_INVESTEERDERS_FINANCIERING","05_OUDE_ONDERNEMINGEN"],
    "99_ARCHIEF": []
  }},
  "02_TECHNISCH": { submappen: {
    "0_INBOX": [],
    "01_CAD_TEKENINGEN_MODELLEN": ["01_RHINO","02_MAXSURF","03_AUTOCAD","04_SOLIDWORKS","05_SUPPLIER_MODELS","06_EXPORTS_RENDERS_PLOTS"],
    "02_BEREKENINGEN_ANALYSES": ["01_STABILITEIT","02_HYDRODYNAMICA_WEERSTAND","03_PROPULSION_POWERING","04_STRUCTUUR_SCANTLINGS","05_WEIGHTS_CG","06_SYSTEMS_INSTALLATIONS","07_OPTIMIZATION_COST_PERFORMANCE"],
    "03_RAPPORTEN_MEMOS_PRESENTATIES": ["01_RAPPORTEN","02_DESIGNBRIEFS","03_TECHNISCHE_MEMOS","04_PRESENTATIES","05_REVIEW_FEEDBACK"],
    "04_TOOLS_SANDBOX_AI": ["01_EXCEL_TOOLS","02_GRASSHOPPER_RHINO_TOOLS","03_PYTHON_SCRIPTS","04_AI_PROMPTS_ANALYSES","05_TESTDATA_POC"],
    "99_ARCHIEF": []
  }},
  "03_PERSOONLIJK": { submappen: {
    "0_INBOX": [],
    "01_STUDIE_OPLEIDING": ["01_NHL_MARITIEME_TECHNIEK","02_CURSUSSEN_CERTIFICAAT_PREP","03_OPDRACHTEN_TENTAMENS","04_DICTATEN_THEORIE_STUDIE","05_SAMENVATTINGEN_EIGEN_OVERZICHTEN","06_STAGE_SCRIPTIE_REFLECTIE"],
    "02_LOOPBAAN_WERKONTWIKKELING": ["01_CV_PORTFOLIO_PROFIEL","02_SOLLICITATIES_VACATURES","03_PERFORMANCE_REVIEWS_FEEDBACK","04_PROFESSIONELE_LEERROUTES","05_WERKVOORBEREIDING_GROEIPLAN"],
    "03_PLANNING_SYSTEMEN_ADHD": ["01_DAG_WEEKPLANNING","02_TODOIST_TAAKSYSTEMEN","03_NAS_KENNISARCHIEF","04_ADHD_ENERGIE_FOCUS","05_TRACKING_OVERZICHTEN","06_PERSOONLIJKE_HANDLEIDINGEN"],
    "04_SOCIAAL_INTERESSES": ["01_EVENTS_SPEECHES","02_VERENIGING_DISPUUT_COMMISSIES","03_ZEILEN_BOTEN","04_HOBBY_MAKEN_KLUSSEN","05_REIZEN_TRIPS","06_MEDIA_FOTOS_PERSOONLIJK"],
    "05_IDEEEN_INITIATIEVEN": ["01_BUSINESS_IDEEEN","02_PRODUCT_IDEEEN","03_AI_SOFTWARE_INITIATIEVEN","04_SCHRIJFSELS_CONCEPTEN","05_VERENIGING_INITIATIEVEN"],
    "99_ARCHIEF": []
  }},
  "04_REFERENTIE": { submappen: {
    "0_INBOX": [],
    "01_SCHEEPSBOUW_KENNIS": ["01_HYDRODYNAMICA","02_STRUCTUUR_MATERIALEN","03_STABILITEIT","04_SYSTEMS_ENGINEERING","05_YACHT_DESIGN_GA","06_PRODUCTIE_BOUW","07_AI_NAVAL_ASSISTANTS","08_OVERIGE_THEORIE_STUDIE_NASLAG"],
    "02_REGELGEVING_STANDAARDEN": ["01_CLASSIFICATIEBUREAUS","02_ISO","03_IMO_SOLAS_MARPOL_COLREG","04_CE_RCD","05_FLAGSTATE_NATIONAAL","06_EXPIRED_SUPERSEDED"],
    "03_METHODES_FORMULES": ["01_WEERSTAND_POWERING","02_STABILITEIT","03_WEIGHTS_CG","04_STRUCTUUR_SCANTLINGS","05_ALGEMENE_REKENMETHODES"],
    "04_SOFTWARE_HANDLEIDINGEN": ["01_RHINO","02_AUTOCAD","03_MAXSURF","04_PYTHON_AI","05_OVERIGE_TOOLS"],
    "05_PAPERS_BOEKEN_MARKT": ["01_PAPERS","02_BOEKEN_HANDBOOKS","03_MARKT_BEDRIJVEN","04_CASES_WHITEPAPERS","05_CURSUSSEN_EXTERN"],
    "06_EXTERNAL_INPUT_OUTPUT": ["01_SUPPLIER_DATASHEETS","02_SUPPLIER_MANUALS","03_EXTERNAL_DRAWINGS_MODELS","04_SYSTEM_SPECS","05_VENDOR_QUOTES_INFO","06_OTHER_EXTERNAL_INPUT"],
    "99_ARCHIEF": []
  }},
  "05_TEMPLATES": { submappen: {
    "0_INBOX": [],
    "01_CAD_TEMPLATES": ["01_AUTOCAD","02_RHINO","03_MAXSURF","04_SOLIDWORKS","05_DRAWING_TEMPLATES","06_TITLEBLOCKS","07_SYMBOLS_BLOCKS_LIBRARIES","08_RENDER_EXPORT_SETTINGS"],
    "02_CALCULATION_TEMPLATES": ["01_STABILITY","02_RESISTANCE_HYDRODYNAMICS","03_PROPULSION_POWERING","04_STRUCTURAL","05_SYSTEMS_INSTALLATIONS","06_WEIGHTS_COG","07_COST_FINANCIAL","08_GENERAL_EXCEL_FORMATS"],
    "03_DOCUMENT_TEMPLATES": ["01_REPORTS_MEMOS","02_EMAILS_LETTERS","03_CONTRACTS_OFFERS_QUOTES","04_PRESENTATIONS","05_FORMS_CHECKLISTS","06_NOTEBOOKS_PLANNERS"],
    "04_PROJECT_TEMPLATES": ["01_ENGINEERING_PROJECT","02_STUDY_THESIS_PROJECT","03_BUSINESS_FREELANCE_PROJECT","04_PLANNING_BUDGET_PACKAGE","05_REVIEW_DELIVERY_PACKAGE"],
    "05_PROMPTS_AUTOMATION_TEMPLATES": ["01_PROMPTS","02_SCRIPT_STARTERS","03_AI_ROUTING_CONFIGS","04_WORKFLOW_AUTOMATION"],
    "99_ARCHIEF": []
  }}
};

const DOMEIN_HULP = {
  "00_SYSTEM": { vraag:"NAS, backups, scripts, licenties, software, systeemdocumentatie?", voorbeelden:"README's, backupplannen, scripts, software-installers, licenties/keys", niet:"Niet: persoonlijke uitleg over de structuur → 03_PERSOONLIJK" },
  "01_ADMINISTRATIEF": { vraag:"Kan een instantie, werkgever, bank, verzekeraar, verhuurder, belastingdienst, klant of formele partij dit vragen?", voorbeelden:"loonstrook, contract, KvK-uittreksel, diploma als bewijs, factuur, polis", niet:"Niet: businessidee zonder KvK → 03_PERSOONLIJK, leren voor certificaat → 03_PERSOONLIJK" },
  "02_TECHNISCH": { vraag:"Heb ik dit zelf technisch gemaakt, berekend, getekend, geanalyseerd of opgeleverd?", voorbeelden:"Rhino-model, stabiliteitsberekening, designbrief, technische memo, eigen tool/script", niet:"Niet: externe methode/norm → 04_REFERENTIE, lege rekentemplate → 05_TEMPLATES" },
  "03_PERSOONLIJK": { vraag:"Gaat dit over jouw studie, loopbaan, planning, ADHD, interesses of ideeën?", voorbeelden:"CV, sollicitatie, studiemateriaal, Todoist-notities, hobby/reizen, businessidee zonder KvK", niet:"Niet: officieel bewijsstuk → 01_ADMINISTRATIEF, technische output → 02_TECHNISCH" },
  "04_REFERENTIE": { vraag:"Is dit kennis van anderen — normen, papers, manuals, datasheets — die je later raadpleegt?", voorbeelden:"ISO/classificatieregel, paper, software-handleiding, supplier datasheet, external drawing", niet:"Niet: eigen berekening → 02_TECHNISCH, lege template → 05_TEMPLATES" },
  "05_TEMPLATES": { vraag:"Is dit leeg of generiek startmateriaal dat je kopieert voor nieuw werk?", voorbeelden:"lege Excel-rekentemplate, titleblock, rapportformat, prompttemplate", niet:"Niet: ingevuld projectbestand → juiste inhoudsdomein" }
};

const MINIKAART = [
  "Officieel / financieel / juridisch? → 01_ADMINISTRATIEF",
  "Zelf technisch gemaakt? → 02_TECHNISCH",
  "Over jou / studie / loopbaan / ADHD / idee? → 03_PERSOONLIJK",
  "Kennis van anderen / externe input? → 04_REFERENTIE",
  "Startmateriaal om te kopiëren? → 05_TEMPLATES",
  "Twijfel langer dan 15 sec? → 0_INBOX van het domein waar je het meest aan denkt"
];

const TAGS = ["ADM","FIN","COR","BRIEF","PLAN","CALC","CAD","RPT","MEMO","REF"];
const VERSIES = ["V01","V02","V03","V04","VDEF","VUIT-A","VUIT-B","VUIT-C","VARCH"];
const ACTIES = ["VERWERKEN","OUD_WEG","ARCHIVEER","AI_VOORSTEL_NODIG"];

const COLS = ["Herkomst_Fix","Huidig_pad","Huidige_naam","Wat_is_het","Actie","Nieuw_domein",
  "Nieuw_subdomein","Nieuw_laag3","Tag","Context","Beschrijving","Versie","Datum","Extensie",
  "Nieuwe_bestandsnaam","AI_Voorstel_Toelichting","GOEDGEKEURD","Notitie"];

const STORAGE_KEY = "nas_router_werkblad_v1";
const BACKUP_REMINDER_INTERVAL = 10;

const EXT_TYPE_MAP = {
  pdf:{label:"PDF-document",hint:"tekst/scan, mogelijk formulier of rapport"},
  doc:{label:"Word-document",hint:""}, docx:{label:"Word-document",hint:""},
  xls:{label:"Excel-bestand",hint:""}, xlsx:{label:"Excel-bestand",hint:""},
  ppt:{label:"PowerPoint",hint:""}, pptx:{label:"PowerPoint",hint:""},
  png:{label:"Afbeelding",hint:"kan een screenshot, figuur of scan zijn"},
  jpg:{label:"Afbeelding",hint:"kan een foto of figuur zijn"}, jpeg:{label:"Afbeelding",hint:""},
  gif:{label:"Afbeelding/animatie",hint:"vaak een figuur uit een naslagdocument"},
  dwg:{label:"CAD-tekening (AutoCAD)",hint:""},
  "3dm":{label:"Rhino 3D-model",hint:""},
  bak:{label:"Back-upbestand",hint:"vaak automatisch gegenereerd, check of origineel bestaat"},
  lnk:{label:"Snelkoppeling (Windows)",hint:"verwijst naar iets anders, zelf geen inhoud"},
  url:{label:"Internet-snelkoppeling",hint:""},
  msg:{label:"Outlook-mailbericht",hint:""},
  txt:{label:"Tekstbestand",hint:""},
  md:{label:"Markdown-notitie",hint:""},
  csv:{label:"CSV-data",hint:""},
  cab:{label:"Windows CAB-archief",hint:"vaak systeem/installatiebestand"},
  pat:{label:"CAD-arcering/patroonbestand",hint:""},
  str:{label:"STR-bestand",hint:"onbekend formaat, vaak legacy CAD/tool-export"},
  idx:{label:"Indexbestand",hint:"vaak automatisch, geen zelfstandige inhoud"},
  log:{label:"Logbestand",hint:"technisch logboek, meestal niet te bewaren als kennis"},
  html:{label:"Webpagina (opgeslagen)",hint:""}, htm:{label:"Webpagina (opgeslagen)",hint:""},
  css:{label:"Stylesheet (webcode)",hint:""},
  ics:{label:"Agenda-item",hint:""}
};

function fileTypeInfo(ext){
  const key = (ext||"").toLowerCase().replace(/^\\./,"");
  return EXT_TYPE_MAP[key] || {label: key ? key.toUpperCase()+"-bestand" : "Onbekend bestandstype", hint:""};
}
function folderFromPath(path){
  if(!path) return "";
  const parts = path.split("\\\\").filter(Boolean);
  parts.pop();
  return parts.slice(-3).join(" / ");
}

function parseCSV(text){
  const rowsRaw = [];
  let i=0, field="", row=[], inQuotes=false;
  text = text.replace(/\\r\\n/g,"\\n");
  while(i < text.length){
    const ch = text[i];
    if(inQuotes){
      if(ch === '"'){
        if(text[i+1] === '"'){ field+='"'; i+=2; continue; }
        inQuotes=false; i++; continue;
      } else { field+=ch; i++; continue; }
    } else {
      if(ch === '"'){ inQuotes=true; i++; continue; }
      if(ch === ','){ row.push(field); field=""; i++; continue; }
      if(ch === '\\n'){ row.push(field); rowsRaw.push(row); row=[]; field=""; i++; continue; }
      field+=ch; i++; continue;
    }
  }
  if(field.length || row.length){ row.push(field); rowsRaw.push(row); }
  return rowsRaw.filter(r => r.length>1 || (r[0] && r[0].trim()!==""));
}
function csvEscape(val){
  val = (val===undefined||val===null) ? "" : String(val);
  if(/[",\\n]/.test(val)) return '"' + val.replace(/"/g,'""') + '"';
  return val;
}
function normHeader(h){ return String(h||"").trim().toLowerCase().replace(/[\\s_]+/g,"_"); }

function buildFilename(r){
  if(r.Actie !== "VERWERKEN") return "";
  if(!r.Datum || !r.Tag || !r.Context || !r.Beschrijving || !r.Versie) return "";
  const ext = r.Extensie ? "."+r.Extensie.replace(/^\\./,"") : "";
  return `${r.Datum}_[${r.Tag}]_${r.Context}_${r.Beschrijving}_${r.Versie}${ext}`;
}
function buildPath(r){
  if(!r.Nieuw_domein || !r.Nieuw_subdomein) return "";
  if(r.Nieuw_laag3 && r.Nieuw_laag3.trim()!=="") return `${r.Nieuw_domein}/${r.Nieuw_subdomein}/${r.Nieuw_laag3}`;
  return `${r.Nieuw_domein}/${r.Nieuw_subdomein}`;
}
function isRowComplete(r){
  if(!r.Actie) return false;
  if(r.Actie === "VERWERKEN"){
    return !!(r.Nieuw_domein && r.Nieuw_subdomein && r.Tag && r.Context && r.Beschrijving && r.Versie);
  }
  if(r.Actie === "OUD_WEG" || r.Actie === "ARCHIVEER" || r.Actie === "AI_VOORSTEL_NODIG"){
    return !!(r.Wat_is_het && r.Wat_is_het.trim()!=="");
  }
  return false;
}
function isDone(r){ return (r.GOEDGEKEURD||"").toLowerCase() === "ja"; }

/* ============================================================
   STATE (vervangt useState)
   ============================================================ */
const state = {
  rows: [],
  currentIndex: 0,
  view: "import",
  listFilter: "openstaand",
  lastExportCount: 0,
  minikaartOpen: false,
  loaded: false,
  storageOk: true,
  debugLog: [],
  showDebug: false
};

let saveDebounceTimer = null;
let toastTimer = null;

function addDebugLine(line){
  state.debugLog.push(`${new Date().toTimeString().slice(0,8)} ${line}`);
  if(state.debugLog.length > 20) state.debugLog.shift();
  if(state.showDebug) renderDebugOverlay();
}

function showToast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.add("hidden"), 1800);
}

/* ---- localStorage i.p.v. window.storage ---- */
function loadFromStorage(){
  addDebugLine(`localStorage aanwezig: ${typeof window.localStorage !== "undefined"}`);
  try{
    const raw = window.localStorage.getItem(STORAGE_KEY);
    addDebugLine(`storage.get resultaat: ${raw === null ? "null" : raw.slice(0,120)}`);
    if(raw){
      const parsed = JSON.parse(raw);
      if(parsed.rows && parsed.rows.length){
        state.rows = parsed.rows;
        state.currentIndex = parsed.currentIndex || 0;
        state.lastExportCount = parsed.lastExportCount || 0;
        state.view = "process";
        addDebugLine("state hersteld, view -> process");
      }
    } else {
      addDebugLine("geen eerdere data gevonden -- normaal bij eerste gebruik");
    }
  }catch(e){
    addDebugLine(`storage.get FOUT: ${e && e.message ? e.message : String(e)}`);
  }finally{
    state.loaded = true;
  }
}

function saveToStorage(){
  if(!state.loaded) return;
  clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(()=>{
    try{
      addDebugLine(`storage.set gestart (${state.rows.length} rijen)...`);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({rows:state.rows, currentIndex:state.currentIndex, lastExportCount:state.lastExportCount}));
      state.storageOk = true;
    }catch(e){
      addDebugLine(`storage.set FOUT: ${e && e.message ? e.message : String(e)}`);
      state.storageOk = false;
      showToast("Opslaan lukt niet -- gebruik Export CSV om niets kwijt te raken");
    }
  }, 400);
}

function setState(patch){
  Object.assign(state, patch);
  saveToStorage();
  render();
}
function updateRow(idx, patch){
  state.rows[idx] = Object.assign({}, state.rows[idx], patch);
  saveToStorage();
  render();
}

function getPendingRows(){ return state.rows.filter(r=>!isDone(r)); }
function getDoneRows(){ return state.rows.filter(r=>isDone(r)); }
function needsBackupReminder(){
  const done = getDoneRows().length;
  return done > 0 && (done - state.lastExportCount) >= BACKUP_REMINDER_INTERVAL;
}
function nextPendingIndex(fromIndex){
  const n = state.rows.length;
  for(let step=0; step<n; step++){
    const idx = (fromIndex+step) % n;
    if(!isDone(state.rows[idx])) return idx;
  }
  return -1;
}

/* ============================================================
   CSV import / export
   ============================================================ */
function importCSV(text){
  const parsed = parseCSV(text);
  if(parsed.length < 2){ showToast("CSV lijkt leeg."); return; }

  let headerRowIdx = 0;
  for(let i=0; i<Math.min(parsed.length,5); i++){
    const normed = parsed[i].map(normHeader);
    if(normed.includes("herkomst_fix") && normed.includes("huidig_pad")){ headerRowIdx = i; break; }
  }
  const header = parsed[headerRowIdx].map(normHeader);
  const dataRows = parsed.slice(headerRowIdx+1);
  const colIdx = {};
  COLS.forEach(colName=>{ colIdx[colName] = header.indexOf(normHeader(colName)); });

  if(colIdx["Herkomst_Fix"] === -1 || colIdx["Huidig_pad"] === -1){
    showToast("Kolommen Herkomst_Fix/Huidig_pad niet gevonden -- verkeerd bestand?");
    return;
  }
  const get = (r, col) => colIdx[col]!==-1 ? (r[colIdx[col]]||"") : "";

  const newRows = dataRows
    .filter(r => get(r,"Huidig_pad").trim() !== "")
    .map((r)=>({
      Herkomst_Fix: get(r,"Herkomst_Fix"), Huidig_pad: get(r,"Huidig_pad"), Huidige_naam: get(r,"Huidige_naam"),
      Wat_is_het: get(r,"Wat_is_het"), Actie: get(r,"Actie"), Nieuw_domein: get(r,"Nieuw_domein"),
      Nieuw_subdomein: get(r,"Nieuw_subdomein"), Nieuw_laag3: get(r,"Nieuw_laag3"), Tag: get(r,"Tag"),
      Context: get(r,"Context"), Beschrijving: get(r,"Beschrijving"), Versie: get(r,"Versie"), Datum: get(r,"Datum"),
      Extensie: get(r,"Extensie"), Nieuwe_bestandsnaam: get(r,"Nieuwe_bestandsnaam"),
      AI_Voorstel_Toelichting: get(r,"AI_Voorstel_Toelichting"), GOEDGEKEURD: get(r,"GOEDGEKEURD"), Notitie: get(r,"Notitie")
    }));

  state.rows = newRows;
  state.currentIndex = 0;
  state.lastExportCount = newRows.filter(isDone).length;
  showToast(`${newRows.length} rijen geïmporteerd`);
  state.view = "process";
  saveToStorage();
  render();
}

function exportCSV(){
  try{
    const lines = [COLS.map(csvEscape).join(",")];
    state.rows.forEach(r=>{
      const naam = buildFilename(r);
      lines.push(COLS.map(c => csvEscape(c==="Nieuwe_bestandsnaam" ? (naam||r.Nieuwe_bestandsnaam) : r[c])).join(","));
    });
    const csvContent = lines.join("\\n");
    const blob = new Blob([csvContent], {type:"text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const ts = new Date().toISOString().slice(0,10)+"_"+new Date().toTimeString().slice(0,5).replace(":","");
    const doneCount = getDoneRows().length;
    a.href = url;
    a.download = `${ts}_WERKBLAD_Export_${doneCount}van${state.rows.length}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    state.lastExportCount = doneCount;
    showToast("CSV geëxporteerd -- controleer je Downloads");
    saveToStorage();
    render();
  }catch(e){
    showToast("Export mislukt -- probeer het nog eens");
  }
}

function handleFileChange(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (evt)=> importCSV(evt.target.result);
  reader.readAsText(file);
  e.target.value = "";
}

function goPrev(){ if(state.currentIndex > 0){ state.currentIndex--; render(); } }
function goNext(){ if(state.currentIndex < state.rows.length-1){ state.currentIndex++; render(); } }
function jumpTo(n){
  let t = parseInt(n,10);
  if(isNaN(t)) t = state.currentIndex+1;
  t = Math.max(1, Math.min(state.rows.length, t));
  state.currentIndex = t-1;
  render();
}
function approveCurrentAndAdvance(){
  updateRow(state.currentIndex, {GOEDGEKEURD:"ja"});
  const np = nextPendingIndex(state.currentIndex+1);
  state.currentIndex = np !== -1 ? np : state.currentIndex;
  showToast("Goedgekeurd");
  render();
}
function skipCurrent(){
  const np = nextPendingIndex(state.currentIndex+1);
  state.currentIndex = np !== -1 ? np : state.currentIndex;
  render();
}
function toggleGoedgekeurd(r, idx, compleet){
  const currentlyDone = isDone(r);
  if(!compleet && !currentlyDone){ showToast("Vul eerst de verplichte velden in"); return; }
  updateRow(idx, {GOEDGEKEURD: currentlyDone ? "nee" : "ja"});
}
function markGeenIdee(r, idx){
  const patch = {Actie:"AI_VOORSTEL_NODIG"};
  if(!r.Wat_is_het || r.Wat_is_het.trim()===""){
    patch.Wat_is_het = `${fileTypeInfo(r.Extensie).label}, herkomst: ${r.Herkomst_Fix}, oorspronkelijk in ${folderFromPath(r.Huidig_pad)}`;
  }
  updateRow(idx, patch);
}
function clearAll(){
  if(window.confirm("Alle rijen en voortgang wissen? Dit kan niet ongedaan gemaakt worden.")){
    state.rows = []; state.currentIndex = 0; state.lastExportCount = 0;
    window.localStorage.removeItem(STORAGE_KEY);
    state.view = "import";
    render();
  }
}

/* ============================================================
   RENDERING (vervangt JSX)
   ============================================================ */
function escapeHtml(s){
  return String(s===undefined||s===null?"":s).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

function renderDebugOverlay(){
  const el = document.getElementById("debug-overlay");
  if(!state.showDebug){ el.classList.add("hidden"); return; }
  el.classList.remove("hidden");
  el.innerHTML = `
    <div class="debug-header"><strong>Diagnose-log</strong><span id="debug-close" class="debug-close">×</span></div>
    <div class="debug-info">localStorage type: ${typeof window.localStorage}<br>loaded: ${state.loaded} · storageOk: ${state.storageOk} · rows: ${state.rows.length}</div>
    ${state.debugLog.length===0 ? "<div>Nog geen logregels.</div>" : state.debugLog.map(l=>`<div class="debug-line">${escapeHtml(l)}</div>`).join("")}
  `;
  document.getElementById("debug-close").onclick = ()=>{ state.showDebug=false; renderDebugOverlay(); };
}

function topBarHtml(total, done){
  const pct = total ? Math.round((done/total)*100) : 0;
  const remind = needsBackupReminder();
  const untilNext = Math.max(0, BACKUP_REMINDER_INTERVAL - (done - state.lastExportCount));
  return `
  <div class="topbar">
    <div class="topbar-row"><div class="label">NAS Router</div><div class="mono">${done} / ${total} goedgekeurd</div></div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    ${total>0 ? `<div class="backup-hint ${remind?'warn':''}">${state.lastExportCount>0?`laatste export bij ${state.lastExportCount} rijen`:"nog niet geëxporteerd"} · ${remind?"tik nu op Export CSV":`over ${untilNext} rijen weer exporteren`}</div>` : ""}
  </div>`;
}

function bottomBarHtml(){
  return `
  <div class="bottombar">
    <button class="btn" data-action="setView" data-view="list">Lijst</button>
    <button class="btn" data-action="setView" data-view="process">Verwerken</button>
    <button class="btn btn-accent" data-action="exportCSV">Export CSV</button>
  </div>`;
}

function importViewHtml(){
  return `
  <div class="header-bar"><div class="label">NAS Router — WERKBLAD</div></div>
  <div class="content center">
    <h2>Geen actieve lijst</h2>
    <p>Importeer het WERKBLAD-tabblad (als CSV) uit je migratie-Excel. Alle 18 kolommen worden 1-op-1 herkend, inclusief Actie en GOEDGEKEURD.</p>
    <button class="btn btn-accent full" id="import-btn">CSV importeren</button>
  </div>`;
}

function processViewHtml(){
  const idx = state.currentIndex;
  const r = state.rows[idx];
  const doneRows = getDoneRows();
  const pendingRows = getPendingRows();

  if(!r){
    return `
      ${topBarHtml(state.rows.length, doneRows.length)}
      <div class="content center" style="padding-bottom:100px">
        <h2>${pendingRows.length===0 ? "Alles verwerkt" : "Rij niet gevonden"}</h2>
        <p>${pendingRows.length===0 ? "Alle rijen staan op GOEDGEKEURD = ja. Exporteer de CSV terug voor de Excel op je PC." : "Ga terug naar de lijst om een geldige rij te kiezen."}</p>
        <button class="btn btn-accent full" data-action="exportCSV" style="margin-bottom:10px">CSV exporteren</button>
        <button class="btn full" data-action="firstRow">Naar eerste rij</button>
      </div>
      ${bottomBarHtml()}`;
  }

  const domeinKeys = Object.keys(LOCK);
  const submapOptions = r.Nieuw_domein && LOCK[r.Nieuw_domein] ? Object.keys(LOCK[r.Nieuw_domein].submappen) : [];
  const laag3Options = (r.Nieuw_domein && r.Nieuw_subdomein && LOCK[r.Nieuw_domein] && LOCK[r.Nieuw_domein].submappen[r.Nieuw_subdomein]) ? LOCK[r.Nieuw_domein].submappen[r.Nieuw_subdomein] : [];
  const naam = buildFilename(r);
  const pad = buildPath(r);
  const compleet = isRowComplete(r);
  const rowIsDone = isDone(r);
  const typeInfo = fileTypeInfo(r.Extensie);

  let actionSpecificHtml = "";
  if(r.Actie === "VERWERKEN"){
    actionSpecificHtml = `
      <div class="minikaart-toggle" id="minikaart-toggle"><span>Beslisboom / geen kaartje bij de hand?</span><span>${state.minikaartOpen ? "▴" : "▾"}</span></div>
      ${state.minikaartOpen ? `<div class="minikaart-panel">${MINIKAART.map(l=>`<div>${escapeHtml(l)}</div>`).join("")}</div>` : ""}

      <div class="field">
        <div class="field-label">Nieuw domein</div>
        <select id="sel-domein" class="select">
          <option value="">— kies domein —</option>
          ${domeinKeys.map(d=>`<option value="${d}" ${r.Nieuw_domein===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>

      ${r.Nieuw_domein && DOMEIN_HULP[r.Nieuw_domein] ? `
        <div class="hulp-box">
          <div class="hulp-vraag">${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].vraag)}</div>
          <div class="hulp-voorbeelden"><strong>Bijv.:</strong> ${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].voorbeelden)}</div>
          <div class="hulp-niet">${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].niet)}</div>
        </div>` : `<div class="hulp-box hulp-box-empty">Kies een domein hierboven om per domein de vraag + voorbeelden uit de LOCK-handleiding te zien.</div>`}

      <div class="field">
        <div class="field-label">Nieuw subdomein</div>
        <select id="sel-subdomein" class="select" ${!r.Nieuw_domein?"disabled":""}>
          <option value="">— kies submap —</option>
          ${submapOptions.map(s=>`<option value="${s}" ${r.Nieuw_subdomein===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>

      <div class="field">
        <div class="field-label">Nieuw laag3 ${laag3Options.length===0 && r.Nieuw_subdomein ? '<span class="dim">(n.v.t.)</span>' : ""}</div>
        <select id="sel-laag3" class="select" ${(!r.Nieuw_subdomein || laag3Options.length===0)?"disabled":""}>
          <option value="">${laag3Options.length===0 ? "— geen laag 3 —" : "— kies laag 3 —"}</option>
          ${laag3Options.map(l=>`<option value="${l}" ${r.Nieuw_laag3===l?"selected":""}>${l}</option>`).join("")}
        </select>
      </div>

      ${r.Nieuw_domein && !r.Nieuw_subdomein ? `<div class="hint-inbox">Twijfel welke submap? Kies <strong>0_INBOX</strong> — dat is altijd goed, ook als je het nu niet zeker weet.</div>` : ""}

      <div class="pad-preview">${pad || "domein/submap(/laag3) verschijnt hier"}</div>
      <div style="height:8px"></div>

      <div class="grid-2">
        <div>
          <div class="field-label">Tag</div>
          <select id="sel-tag" class="select">
            <option value="">—</option>
            ${TAGS.map(t=>`<option value="${t}" ${r.Tag===t?"selected":""}>${t}</option>`).join("")}
          </select>
        </div>
        <div>
          <div class="field-label">Versie</div>
          <select id="sel-versie" class="select">
            <option value="">—</option>
            ${VERSIES.map(v=>`<option value="${v}" ${r.Versie===v?"selected":""}>${v}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="field">
        <div class="field-label">Context</div>
        <input type="text" id="inp-context" class="input" value="${escapeHtml(r.Context)}" placeholder="bv. MensSana, Azure, P1156">
      </div>
      <div class="field">
        <div class="field-label">Beschrijving</div>
        <input type="text" id="inp-beschrijving" class="input" value="${escapeHtml(r.Beschrijving)}" placeholder="bv. Stabiliteit, Designbrief">
      </div>

      <div class="filename-preview">${naam || "DD-MM-YYYY_[TAG]_CONTEXT_BESCHRIJVING_VERSIE.ext"}</div>
    `;
  } else if(r.Actie === "OUD_WEG"){
    actionSpecificHtml = `<div class="warn-box">Gaat naar 00_SYSTEM/00_TE_VERWIJDEREN_REVIEW met de originele naam. Niet automatisch verwijderd — jij beoordeelt later.</div>`;
  } else if(r.Actie === "ARCHIVEER"){
    actionSpecificHtml = `
      <div class="warn-box">Gaat naar 99_ARCHIEF van het huidige (of onderstaande) domein, originele naam.</div>
      <div class="field">
        <div class="field-label">Nieuw domein <span class="dim">(optioneel — leeg = huidig domein)</span></div>
        <select id="sel-domein-archief" class="select">
          <option value="">— huidig domein —</option>
          ${domeinKeys.map(d=>`<option value="${d}" ${r.Nieuw_domein===d?"selected":""}>${d}</option>`).join("")}
        </select>
      </div>`;
  } else if(r.Actie === "AI_VOORSTEL_NODIG"){
    actionSpecificHtml = `
      <div class="warn-box">
        Claude vult bij upload de volledige routering in (domein + submap + laag3 + tag + context + beschrijving + versie) in AI_Voorstel_Toelichting. Jij vult hier alleen Wat_is_het goed in.
        ${r.AI_Voorstel_Toelichting ? `<div class="ai-toelichting"><div class="ai-toelichting-title">AI-VOORSTEL TOELICHTING</div><div>${escapeHtml(r.AI_Voorstel_Toelichting)}</div></div>` : ""}
      </div>`;
  } else {
    actionSpecificHtml = `<div class="warn-box">Kies eerst een Actie hierboven.</div>`;
  }

  return `
    ${topBarHtml(state.rows.length, doneRows.length)}
    <div class="content" style="padding-bottom:100px">
      <div class="nav-row">
        <button class="btn nav-btn" id="btn-prev" ${idx===0?"disabled":""}>‹ Vorige</button>
        <div class="nav-jump">
          <input type="number" id="inp-jump" class="jump-input" value="${idx+1}" min="1" max="${state.rows.length}">
          <span class="dim mono">/ ${state.rows.length}</span>
        </div>
        <button class="btn nav-btn" id="btn-next" ${idx===state.rows.length-1?"disabled":""}>Volgende ›</button>
      </div>

      <div class="file-card">
        <div class="file-card-header">Rij ${idx+1} van ${state.rows.length} — ${escapeHtml(r.Herkomst_Fix)}</div>
        <div class="file-card-name mono">${escapeHtml(r.Huidige_naam)}</div>
        <div class="tag-row"><span class="type-badge">${escapeHtml(typeInfo.label)}</span></div>
        ${typeInfo.hint ? `<div class="type-hint mono">${escapeHtml(typeInfo.hint)}</div>` : ""}
        <div class="mono dim small" style="margin-top:8px">stond in: ${escapeHtml(folderFromPath(r.Huidig_pad))}</div>
        <div class="mono dim small">gewijzigd: ${escapeHtml(r.Datum)} · ext: ${escapeHtml(r.Extensie)}</div>
        <div class="mono dim small pad-break" style="opacity:0.6">${escapeHtml(r.Huidig_pad)}</div>
      </div>

      <button class="btn btn-outline-warn full" id="btn-geen-idee">Weet ik niet — zet naar AI voorstel nodig</button>

      <div class="field">
        <div class="field-label">Wat is het</div>
        <input type="text" id="inp-wat" class="input" value="${escapeHtml(r.Wat_is_het)}" placeholder="korte omschrijving">
      </div>

      <div class="field">
        <div class="field-label">Actie</div>
        <div class="grid-2">
          ${ACTIES.map(a=>`<div class="actie-btn ${r.Actie===a?'actie-active':''}" data-actie="${a}">${a.replace(/_/g," ")}</div>`).join("")}
        </div>
      </div>

      ${actionSpecificHtml}

      <div class="field">
        <div class="field-label">Notitie <span class="dim">(optioneel)</span></div>
        <input type="text" id="inp-notitie" class="input" value="${escapeHtml(r.Notitie)}">
      </div>

      <div class="toggle-row ${rowIsDone?'toggle-on':''}" id="toggle-goedgekeurd">
        <div>
          <div class="toggle-title">Goedgekeurd</div>
          <div class="toggle-sub">${compleet ? "Rij is compleet voor deze Actie" : "Nog niet compleet — check verplichte velden"}</div>
        </div>
        <div class="switch ${rowIsDone?'switch-on':''}"><div class="switch-knob"></div></div>
      </div>

      <button class="btn btn-accent full" id="btn-approve" ${!compleet?"disabled":""} style="margin-bottom:10px;opacity:${compleet?1:0.5}">Goedkeuren — volgende</button>
      <button class="btn full" id="btn-skip">Overslaan</button>
    </div>
    ${bottomBarHtml()}
  `;
}

function listViewHtml(){
  const doneRows = getDoneRows();
  const pendingRows = getPendingRows();
  const list = state.listFilter === "openstaand" ? pendingRows : doneRows;
  return `
    ${topBarHtml(state.rows.length, doneRows.length)}
    <div class="content" style="padding-bottom:100px">
      <div class="filter-row">
        <div class="filter-btn ${state.listFilter==='openstaand'?'filter-active':''}" data-filter="openstaand">Openstaand (${pendingRows.length})</div>
        <div class="filter-btn ${state.listFilter==='goedgekeurd'?'filter-active':''}" data-filter="goedgekeurd">Goedgekeurd (${doneRows.length})</div>
      </div>
      ${list.length===0 ? `<div class="content center"><p>Niets in deze lijst.</p></div>` :
        list.map(r=>{
          const globalIdx = state.rows.indexOf(r);
          const rowDone = isDone(r);
          return `<div class="list-item" data-idx="${globalIdx}">
            <div class="dot ${rowDone?'dot-done':'dot-pending'}"></div>
            <div class="list-item-text mono">
              ${escapeHtml((r.Huidige_naam||"").slice(0,55))}
              <div class="list-item-sub">${r.Actie ? r.Actie.replace(/_/g," ") : "geen actie gekozen"}</div>
            </div>
          </div>`;
        }).join("")}
      <div style="height:8px"></div>
      <button class="btn btn-danger full" id="btn-clear">Alle data wissen</button>
    </div>
    ${bottomBarHtml()}
  `;
}

/* ============================================================
   MAIN RENDER + EVENT DELEGATION
   ============================================================ */
function render(){
  const root = document.getElementById("view-root");
  if(!state.loaded){
    root.innerHTML = `<div class="loading">Laden…</div>`;
    return;
  }
  if(state.view === "import"){
    root.innerHTML = importViewHtml();
  } else if(state.view === "process" && state.rows.length > 0){
    root.innerHTML = processViewHtml();
  } else if(state.view === "list"){
    root.innerHTML = listViewHtml();
  } else {
    state.view = "import";
    root.innerHTML = importViewHtml();
  }
  attachViewEvents();
  renderDebugOverlay();
}

function attachViewEvents(){
  document.querySelectorAll('[data-action="setView"]').forEach(btn=>{
    btn.onclick = ()=>{ state.view = btn.dataset.view; render(); };
  });
  const exportBtn = document.querySelector('[data-action="exportCSV"]');
  if(exportBtn) exportBtn.onclick = exportCSV;

  const importBtn = document.getElementById("import-btn");
  if(importBtn) importBtn.onclick = ()=> document.getElementById("file-input").click();

  const firstRowBtn = document.getElementById("firstRow") || document.querySelector('[data-action="firstRow"]');
  if(firstRowBtn) firstRowBtn.onclick = ()=>{ state.currentIndex = 0; render(); };

  const btnPrev = document.getElementById("btn-prev");
  if(btnPrev) btnPrev.onclick = goPrev;
  const btnNext = document.getElementById("btn-next");
  if(btnNext) btnNext.onclick = goNext;
  const inpJump = document.getElementById("inp-jump");
  if(inpJump){
    inpJump.addEventListener("keydown", (e)=>{ if(e.key==="Enter"){ jumpTo(e.target.value); e.target.blur(); } });
    inpJump.addEventListener("blur", (e)=> jumpTo(e.target.value));
  }

  const idx = state.currentIndex;
  const r = state.rows[idx];

  const minikaartToggle = document.getElementById("minikaart-toggle");
  if(minikaartToggle) minikaartToggle.onclick = ()=>{ state.minikaartOpen = !state.minikaartOpen; render(); };

  const btnGeenIdee = document.getElementById("btn-geen-idee");
  if(btnGeenIdee) btnGeenIdee.onclick = ()=> markGeenIdee(r, idx);

  const inpWat = document.getElementById("inp-wat");
  if(inpWat) inpWat.addEventListener("blur", (e)=> updateRow(idx, {Wat_is_het: e.target.value}));

  document.querySelectorAll(".actie-btn").forEach(btn=>{
    btn.onclick = ()=> updateRow(idx, {Actie: btn.dataset.actie});
  });

  const selDomein = document.getElementById("sel-domein");
  if(selDomein) selDomein.onchange = (e)=> updateRow(idx, {Nieuw_domein: e.target.value, Nieuw_subdomein:"", Nieuw_laag3:""});
  const selSubdomein = document.getElementById("sel-subdomein");
  if(selSubdomein) selSubdomein.onchange = (e)=> updateRow(idx, {Nieuw_subdomein: e.target.value, Nieuw_laag3:""});
  const selLaag3 = document.getElementById("sel-laag3");
  if(selLaag3) selLaag3.onchange = (e)=> updateRow(idx, {Nieuw_laag3: e.target.value});
  const selDomeinArchief = document.getElementById("sel-domein-archief");
  if(selDomeinArchief) selDomeinArchief.onchange = (e)=> updateRow(idx, {Nieuw_domein: e.target.value});
  const selTag = document.getElementById("sel-tag");
  if(selTag) selTag.onchange = (e)=> updateRow(idx, {Tag: e.target.value});
  const selVersie = document.getElementById("sel-versie");
  if(selVersie) selVersie.onchange = (e)=> updateRow(idx, {Versie: e.target.value});
  const inpContext = document.getElementById("inp-context");
  if(inpContext) inpContext.addEventListener("blur", (e)=> updateRow(idx, {Context: e.target.value}));
  const inpBeschrijving = document.getElementById("inp-beschrijving");
  if(inpBeschrijving) inpBeschrijving.addEventListener("blur", (e)=> updateRow(idx, {Beschrijving: e.target.value}));
  const inpNotitie = document.getElementById("inp-notitie");
  if(inpNotitie) inpNotitie.addEventListener("blur", (e)=> updateRow(idx, {Notitie: e.target.value}));

  const toggleGoedk = document.getElementById("toggle-goedgekeurd");
  if(toggleGoedk) toggleGoedk.onclick = ()=> toggleGoedkeurdHandler(r, idx);

  const btnApprove = document.getElementById("btn-approve");
  if(btnApprove) btnApprove.onclick = approveCurrentAndAdvance;
  const btnSkip = document.getElementById("btn-skip");
  if(btnSkip) btnSkip.onclick = skipCurrent;

  document.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.onclick = ()=>{ state.listFilter = btn.dataset.filter; render(); };
  });
  document.querySelectorAll(".list-item").forEach(item=>{
    item.onclick = ()=>{ state.currentIndex = parseInt(item.dataset.idx,10); state.view = "process"; render(); };
  });
  const btnClear = document.getElementById("btn-clear");
  if(btnClear) btnClear.onclick = clearAll;
}

function toggleGoedkeurdHandler(r, idx){
  const compleet = isRowComplete(r);
  toggleGoedkeurd(r, idx, compleet);
}

/* ============================================================
   INIT (vervangt useEffect bij mount)
   ============================================================ */
document.addEventListener("DOMContentLoaded", ()=>{
  loadFromStorage();
  render();

  document.getElementById("file-input").addEventListener("change", handleFileChange);
  document.getElementById("debug-btn").addEventListener("click", ()=>{ state.showDebug = true; renderDebugOverlay(); });

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").catch(()=>{});
  }
});
