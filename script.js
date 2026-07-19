/* ============================================================
   LOCK V2.2 STRUCTUUR — exact overgenomen uit de handleiding
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
    "01_FINANCIEEL": ["01_BANK_BETALINGEN","02_FACTUREN_BONNEN","03_BELASTING","04_VERZEKERINGEN_FINANCIEEN","05_PERSOONLIJKE_FINANCIEN"],
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

/* Submap-uitleg: dekt het gat dat na domeinkeuze ontstond.
   Key = "DOMEIN|SUBMAP". Elke entry: korte vraag + concrete voorbeelden. */
const SUBMAP_HULP = {
  "00_SYSTEM|01_NAS_STRUCTUUR": "NAS-regels, README's, mappenboom-exports, versiegeschiedenis van de structuur zelf.",
  "00_SYSTEM|02_BACKUPS": "Backupplannen, snapshots, restore-tests, backup-logs.",
  "00_SYSTEM|03_SOFTWARE_INSTALLERS": "Installers voor Windows-tools, CAD/naval software, AI/automation-tools, drivers.",
  "00_SYSTEM|04_LICENTIES_KEYS": "Softwarelicenties, serials/keys, accountgegevens voor toegang.",
  "00_SYSTEM|05_SCRIPTS_AUTOMATISERING": "Scripts voor bestandsbeheer, NAS-automatisering, AI-routing-tests, dry-run-output.",

  "01_ADMINISTRATIEF|01_FINANCIEEL": "Bank/betalingen, facturen/bonnen, belasting, verzekeringen, persoonlijke financiën.",
  "01_ADMINISTRATIEF|02_CONTRACTEN_JURIDISCH_ID": "Identiteit, diploma's/certificaten, arbeidscontracten, opleidingscontracten, juridische bewijzen.",
  "01_ADMINISTRATIEF|03_WONEN_NUTS": "Huur, energie/water, internet/mobiel, gemeentebelasting, woningdossiers.",
  "01_ADMINISTRATIEF|04_OVERHEID_DUO_KVK": "Overheidscorrespondentie, DUO/studiefinanciering, vergunningen, KvK-registratie.",
  "01_ADMINISTRATIEF|05_ZORG_VERVOER": "Zorgverzekering, medische documenten, auto, overig vervoer.",
  "01_ADMINISTRATIEF|06_ZAKELIJK_FORMEEL": "KvK/belasting bedrijf, samenwerkingscontracten, facturen/offertes, investeerders, oude ondernemingen.",

  "02_TECHNISCH|01_CAD_TEKENINGEN_MODELLEN": "Rhino, Maxsurf, AutoCAD, SolidWorks, supplier models, exports/renders/plots.",
  "02_TECHNISCH|02_BEREKENINGEN_ANALYSES": "Stabiliteit, hydrodynamica/weerstand, propulsion/powering, structuur/scantlings, weights/CG, systems, optimalisatie.",
  "02_TECHNISCH|03_RAPPORTEN_MEMOS_PRESENTATIES": "Rapporten, designbriefs, technische memo's, presentaties, review/feedback.",
  "02_TECHNISCH|04_TOOLS_SANDBOX_AI": "Excel-tools, Grasshopper/Rhino-tools, Python-scripts, AI-prompts/analyses, testdata.",

  "03_PERSOONLIJK|01_STUDIE_OPLEIDING": "NHL Maritieme Techniek, cursussen/certificaat-prep, opdrachten/tentamens, dictaten, samenvattingen, stage/scriptie.",
  "03_PERSOONLIJK|02_LOOPBAAN_WERKONTWIKKELING": "CV/portfolio, sollicitaties/vacatures, performance reviews, leerroutes, werkvoorbereiding.",
  "03_PERSOONLIJK|03_PLANNING_SYSTEMEN_ADHD": "Dag/weekplanning, Todoist, NAS-kennisarchief-reflectie, ADHD/energie/focus, tracking, persoonlijke handleidingen.",
  "03_PERSOONLIJK|04_SOCIAAL_INTERESSES": "Events/speeches, vereniging/dispuut, zeilen/boten, hobby/klussen, reizen, media/foto's.",
  "03_PERSOONLIJK|05_IDEEEN_INITIATIEVEN": "Business-ideeën, product-ideeën, AI/software-initiatieven, schrijfsels/concepten (nog geen KvK/contract).",

  "04_REFERENTIE|01_SCHEEPSBOUW_KENNIS": "Hydrodynamica, structuur/materialen, stabiliteit, systems engineering, yacht design/GA, productie, AI naval assistants, overige theorie.",
  "04_REFERENTIE|02_REGELGEVING_STANDAARDEN": "Classificatiebureaus, ISO, IMO/SOLAS/MARPOL/COLREG, CE/RCD, flagstate, verlopen/vervallen regelgeving.",
  "04_REFERENTIE|03_METHODES_FORMULES": "Weerstand/powering, stabiliteit, weights/CG, structuur/scantlings, algemene rekenmethodes — externe methodes, niet je eigen berekening.",
  "04_REFERENTIE|04_SOFTWARE_HANDLEIDINGEN": "Rhino, AutoCAD, Maxsurf, Python/AI, overige tools — handleidingen van buiten.",
  "04_REFERENTIE|05_PAPERS_BOEKEN_MARKT": "Papers, boeken/handbooks, marktinfo/bedrijven, cases/whitepapers, externe cursussen.",
  "04_REFERENTIE|06_EXTERNAL_INPUT_OUTPUT": "Supplier datasheets/manuals, externe tekeningen/modellen, system specs, vendor quotes.",

  "05_TEMPLATES|01_CAD_TEMPLATES": "CAD-startbestanden: AutoCAD/Rhino/Maxsurf/SolidWorks, drawing templates, titleblocks, symbols/blocks, render-settings.",
  "05_TEMPLATES|02_CALCULATION_TEMPLATES": "Lege rekentemplates: stability, resistance, propulsion, structural, systems, weights, cost, algemene Excel-formats.",
  "05_TEMPLATES|03_DOCUMENT_TEMPLATES": "Lege document-formats: rapporten/memos, e-mails/brieven, contracten/offertes, presentaties, forms/checklists.",
  "05_TEMPLATES|04_PROJECT_TEMPLATES": "Startpakketten: engineering-project, studie/scriptie, business/freelance, planning/budget, review/delivery.",
  "05_TEMPLATES|05_PROMPTS_AUTOMATION_TEMPLATES": "Prompttemplates, script starters, AI-routing configs, workflow-automatisering."
};

const TAGS = ["ADM","FIN","COR","BRIEF","PLAN","CALC","CAD","RPT","MEMO","REF"];
const VERSIES = ["V01","V02","V03","V04","VDEF","VUIT-A","VUIT-B","VUIT-C","VARCH"];
const ACTIES = ["VERWERKEN","OUD_WEG","ARCHIVEER","AI_VOORSTEL_NODIG"];
const COLS = ["Herkomst_Fix","Huidig_pad","Huidige_naam","Wat_is_het","Actie","Nieuw_domein","Nieuw_subdomein","Nieuw_laag3","Tag","Context","Beschrijving","Versie","Datum","Extensie","Nieuwe_bestandsnaam","AI_Voorstel_Toelichting","GOEDGEKEURD","Notitie"];

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
  const key=(ext||"").toLowerCase().replace(/^\./,"");
  return EXT_TYPE_MAP[key] || {label:key?key.toUpperCase()+"-bestand":"Onbekend bestandstype", hint:""};
}
function folderFromPath(path){
  if(!path) return "";
  const parts = path.split("\\").filter(Boolean);
  parts.pop();
  return parts.slice(-3).join(" / ");
}

/* ============================================================
   AUTO-SUGGESTIES — heuristiek op naam/pad/extensie.
   Voorstel, geen dwang: gebruiker kan altijd overschrijven.
   Werkt NIET op bestandsinhoud (die staat op de NAS, niet bereikbaar).
   ============================================================ */
function suggestFields(r){
  const s = {};
  const naam = r.Huidige_naam || "";
  const pad = r.Huidig_pad || "";
  const ext = (r.Extensie||"").toLowerCase().replace(/^\./,"");

  // 1) Tag uit [TAG] in de bestandsnaam
  const tagMatch = naam.match(/\[([A-Z]{2,6})\]/);
  if(tagMatch && TAGS.includes(tagMatch[1])) s.Tag = tagMatch[1];
  // anders: tag uit extensie
  else if(["dwg","3dm","dxf"].includes(ext)) s.Tag = "CAD";
  else if(["xlsx","xls"].includes(ext)) s.Tag = "CALC";

  // 2) Domein uit pad-hint
  const domeinen = ["00_SYSTEM","01_ADMINISTRATIEF","02_TECHNISCH","03_PERSOONLIJK","04_REFERENTIE","05_TEMPLATES"];
  for(const d of domeinen){ if(pad.includes(d)){ s.Nieuw_domein = d; break; } }

  // 3) Versie uit _Vxx of _VDEF in de naam
  const vMatch = naam.match(/_?(V\d{2}|VDEF|VUIT-[A-C]|VARCH)(?:[._]|$)/i);
  if(vMatch){
    const v = vMatch[1].toUpperCase();
    if(VERSIES.includes(v)) s.Versie = v;
  }

  // 4) Datum uit DD-MM-YYYY vooraan de naam
  const dMatch = naam.match(/(\d{2}-\d{2}-\d{4})/);
  if(dMatch) s.Datum = dMatch[1];

  // 5) Beschrijving: ruwe gok uit naam (deel tussen tag en versie), alleen als leeg
  if(tagMatch){
    let rest = naam.split("]").slice(1).join("]");
    rest = rest.replace(/\.[a-z0-9]+$/i,"");            // extensie eraf
    rest = rest.replace(/_?(V\d{2}|VDEF|VUIT-[A-C]|VARCH).*$/i,""); // versie eraf
    rest = rest.replace(/^[_\s]+|[_\s]+$/g,"");
    const parts = rest.split("_").filter(Boolean);
    if(parts.length>=1){ s.Context = s.Context || parts[0]; }
    if(parts.length>=2){ s.Beschrijving = parts.slice(1).join(" "); }
  }
  return s;
}

/* Per-veld invoerhulp: korte, concrete toelichting wat er ingevuld moet worden. */
const VELD_HULP = {
  Wat_is_het: "Eén zin: wat is dit bestand? Bepaalt of het verwerkt, gearchiveerd of weg kan.",
  Nieuw_domein: "Hoofdfunctie van het bestand. Zie de vraag per domein hieronder.",
  Nieuw_subdomein: "Inhoudssoort binnen het domein. Twijfel? 0_INBOX is altijd goed.",
  Nieuw_laag3: "Zoek-as binnen de submap. Mag leeg blijven als er geen logische laag 3 is.",
  Tag: "Rol van het bestand (niet de extensie). ADM/FIN/CALC/CAD/RPT/MEMO/REF etc.",
  Versie: "V01–V04 = werk · VDEF = definitief · VUIT = verstuurd · VARCH = oud.",
  Context: "Waar hoort het bij: project, boot, bedrijf, vak of systeem. Bv. MensSana, P1156.",
  Beschrijving: "Wat is het concreet in 1–3 woorden. Bv. Stabiliteit, Designbrief."
};

/* ============================================================
   STATE + OPSLAG (localStorage -- werkt op een eigen gehost domein
   zoals GitHub Pages; dit is een andere API dan de Claude-artifact
   window.storage die eerder structureel faalde)
   ============================================================ */
const LS_KEY = "nas_router_werkblad_v1";
const BACKUP_REMINDER_INTERVAL = 10;

let rows = [];
let currentIndex = 0;
let currentView = "import";
let listFilter = "openstaand";
let lastExportCount = 0;
let minikaartOpen = false;
let bulkPrompt = null; // {refIdx, indexes} of null
let approvalLog = []; // array van epoch-ms timestamps, laatste 500

function hasLocalStorage(){
  try{ const k="__t__"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; }
  catch(e){ return false; }
}
const storageAvailable = hasLocalStorage();
const LOG_KEY = "nas_router_approval_log_v1";

function logApproval(){
  approvalLog.push(Date.now());
  if(approvalLog.length>500) approvalLog = approvalLog.slice(-500);
  if(!storageAvailable) return;
  try{ localStorage.setItem(LOG_KEY, JSON.stringify(approvalLog)); }catch(e){}
}
function loadApprovalLog(){
  if(!storageAvailable) return;
  try{
    const raw = localStorage.getItem(LOG_KEY);
    if(raw) approvalLog = JSON.parse(raw) || [];
  }catch(e){ approvalLog = []; }
}
/* Dashboard-cijfers: snelheid (rijen/uur over laatste 20 min), vandaag, resterende tijd. */
function dashboardStats(){
  const now = Date.now();
  const todayStart = new Date(); todayStart.setHours(0,0,0,0);
  const doneToday = approvalLog.filter(t=>t>=todayStart.getTime()).length;
  const windowMs = 20*60*1000;
  const recent = approvalLog.filter(t=>t>=now-windowMs);
  let perHour = null;
  if(recent.length>=2){
    const spanMs = recent[recent.length-1]-recent[0];
    perHour = spanMs>0 ? Math.round(recent.length/(spanMs/3600000)) : null;
  }
  const openstaand = pendingRows().length;
  let etaMin = null;
  if(perHour && perHour>0){ etaMin = Math.round((openstaand/perHour)*60); }
  return { doneToday, perHour, openstaand, etaMin };
}
function formatEta(min){
  if(min===null) return "—";
  if(min<60) return `${min} min`;
  const h = Math.floor(min/60), m = min%60;
  return m>0 ? `${h}u ${m}m` : `${h}u`;
}

function saveState(){
  if(!storageAvailable) return;
  try{
    localStorage.setItem(LS_KEY, JSON.stringify({rows, currentIndex, lastExportCount, savedAt:Date.now()}));
  }catch(e){
    console.error("save failed", e);
    showToast("Opslaan lukt niet -- gebruik Export CSV om niets kwijt te raken");
  }
}
function loadState(){
  if(!storageAvailable) return;
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(!raw) return;
    const parsed = JSON.parse(raw);
    if(parsed.rows && parsed.rows.length){
      rows = parsed.rows;
      currentIndex = parsed.currentIndex || 0;
      lastExportCount = parsed.lastExportCount || 0;
      currentView = "process";
    }
  }catch(e){ console.error("load failed", e); }
}
function clearLocalStorage(){
  if(!storageAvailable) return;
  try{ localStorage.removeItem(LS_KEY); }catch(e){}
}

function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=>t.classList.remove("show"), 1800);
}

/* ============================================================
   CSV PARSING / EXPORT
   ============================================================ */
function parseCSV(text){
  const rowsRaw=[]; let i=0,field="",row=[],inQuotes=false;
  text = text.replace(/\r\n/g,"\n");
  while(i<text.length){
    const c=text[i];
    if(inQuotes){
      if(c==='"'){ if(text[i+1]==='"'){field+='"'; i+=2; continue;} inQuotes=false; i++; continue; }
      field+=c; i++; continue;
    } else {
      if(c==='"'){ inQuotes=true; i++; continue; }
      if(c===','){ row.push(field); field=""; i++; continue; }
      if(c==='\n'){ row.push(field); rowsRaw.push(row); row=[]; field=""; i++; continue; }
      field+=c; i++; continue;
    }
  }
  if(field.length||row.length){ row.push(field); rowsRaw.push(row); }
  return rowsRaw.filter(r=>r.length>1||(r[0]&&r[0].trim()!==""));
}
function csvEscape(val){
  val=(val===undefined||val===null)?"":String(val);
  if(/[",\n]/.test(val)) return '"'+val.replace(/"/g,'""')+'"';
  return val;
}
function normHeader(h){ return String(h||"").trim().toLowerCase().replace(/[\s_]+/g,"_"); }

function importCSV(text){
  const parsed = parseCSV(text);
  if(parsed.length<2){ showToast("CSV lijkt leeg."); return; }
  let headerRowIdx=0;
  for(let i=0;i<Math.min(parsed.length,5);i++){
    const normed=parsed[i].map(normHeader);
    if(normed.includes("herkomst_fix")&&normed.includes("huidig_pad")){ headerRowIdx=i; break; }
  }
  const header=parsed[headerRowIdx].map(normHeader);
  const dataRows=parsed.slice(headerRowIdx+1);
  const colIdx={};
  COLS.forEach(c=>{ colIdx[c]=header.indexOf(normHeader(c)); });
  if(colIdx["Herkomst_Fix"]===-1||colIdx["Huidig_pad"]===-1){
    showToast("Kolommen Herkomst_Fix/Huidig_pad niet gevonden -- verkeerd bestand?");
    return;
  }
  const get=(r,col)=>colIdx[col]!==-1?(r[colIdx[col]]||""):"";
  const newRows = dataRows.filter(r=>get(r,"Huidig_pad").trim()!=="").map(r=>({
    Herkomst_Fix:get(r,"Herkomst_Fix"), Huidig_pad:get(r,"Huidig_pad"), Huidige_naam:get(r,"Huidige_naam"),
    Wat_is_het:get(r,"Wat_is_het"), Actie:get(r,"Actie"), Nieuw_domein:get(r,"Nieuw_domein"),
    Nieuw_subdomein:get(r,"Nieuw_subdomein"), Nieuw_laag3:get(r,"Nieuw_laag3"), Tag:get(r,"Tag"),
    Context:get(r,"Context"), Beschrijving:get(r,"Beschrijving"), Versie:get(r,"Versie"), Datum:get(r,"Datum"),
    Extensie:get(r,"Extensie"), Nieuwe_bestandsnaam:get(r,"Nieuwe_bestandsnaam"),
    AI_Voorstel_Toelichting:get(r,"AI_Voorstel_Toelichting"), GOEDGEKEURD:get(r,"GOEDGEKEURD"), Notitie:get(r,"Notitie")
  }));
  rows = newRows;
  currentIndex = 0;
  lastExportCount = newRows.filter(isDone).length;
  saveState();
  showToast(`${newRows.length} rijen geïmporteerd`);
  currentView = "process";
  render();
}

function exportCSV(){
  try{
    const lines=[COLS.map(csvEscape).join(",")];
    rows.forEach(r=>{
      const naam=buildFilename(r);
      lines.push(COLS.map(c=>csvEscape(c==="Nieuwe_bestandsnaam"?(naam||r.Nieuwe_bestandsnaam):r[c])).join(","));
    });
    const csvContent = lines.join("\n");
    const blob = new Blob([csvContent], {type:"text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const ts = new Date().toISOString().slice(0,10)+"_"+new Date().toTimeString().slice(0,5).replace(":","");
    const doneCount = doneRows().length;
    a.href = url;
    a.download = `${ts}_WERKBLAD_Export_${doneCount}van${rows.length}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    lastExportCount = doneCount;
    saveState();
    showToast("CSV geëxporteerd -- controleer je Bestanden-app");
    render();
  }catch(e){
    console.error("export failed", e);
    showToast("Export mislukt -- probeer het nog eens");
  }
}

function buildFilename(r){
  if(r.Actie!=="VERWERKEN") return "";
  if(!r.Datum||!r.Tag||!r.Context||!r.Beschrijving||!r.Versie) return "";
  const ext = r.Extensie ? "."+r.Extensie.replace(/^\./,"") : "";
  return `${r.Datum}_[${r.Tag}]_${r.Context}_${r.Beschrijving}_${r.Versie}${ext}`;
}
function buildPath(r){
  if(!r.Nieuw_domein||!r.Nieuw_subdomein) return "";
  if(r.Nieuw_laag3&&r.Nieuw_laag3.trim()!=="") return `${r.Nieuw_domein}/${r.Nieuw_subdomein}/${r.Nieuw_laag3}`;
  return `${r.Nieuw_domein}/${r.Nieuw_subdomein}`;
}
function isRowComplete(r){
  if(!r.Actie) return false;
  if(r.Actie==="VERWERKEN") return !!(r.Nieuw_domein&&r.Nieuw_subdomein&&r.Tag&&r.Context&&r.Beschrijving&&r.Versie);
  if(r.Actie==="OUD_WEG"||r.Actie==="ARCHIVEER"||r.Actie==="AI_VOORSTEL_NODIG") return !!(r.Wat_is_het&&r.Wat_is_het.trim()!=="");
  return false;
}
function isDone(r){ return (r.GOEDGEKEURD||"").toLowerCase()==="ja"; }
function pendingRows(){ return rows.filter(r=>!isDone(r)); }
function doneRows(){ return rows.filter(isDone); }
function nextPendingIndex(fromIndex){
  const n = rows.length;
  for(let step=0; step<n; step++){
    const idx=(fromIndex+step)%n;
    if(!isDone(rows[idx])) return idx;
  }
  return -1;
}
function needsBackupReminder(){
  const d = doneRows().length;
  return d>0 && (d-lastExportCount)>=BACKUP_REMINDER_INTERVAL;
}

/* ============================================================
   BULK-APPLY — de kernversneller.
   Na het routeren van één rij: vind alle OPENSTAANDE rijen die lijken
   (zelfde bronmap + zelfde extensie) en pas dezelfde routing in 1x toe.
   ============================================================ */
function sourceFolder(r){
  const p = r.Huidig_pad || "";
  const parts = p.split("\\").filter(Boolean);
  parts.pop(); // bestandsnaam eraf
  return parts.join("\\");
}
function findSimilarPending(refRow, refIdx){
  const folder = sourceFolder(refRow);
  const ext = (refRow.Extensie||"").toLowerCase();
  const matches = [];
  rows.forEach((r,i)=>{
    if(i===refIdx) return;
    if(isDone(r)) return;
    if(sourceFolder(r)===folder && (r.Extensie||"").toLowerCase()===ext){
      matches.push(i);
    }
  });
  return matches;
}
/* Pas de routing-velden van de referentierij toe op de opgegeven rij-indexen.
   Alleen routing/actie -- NIET Context/Beschrijving/Versie (die zijn bestandsspecifiek),
   behalve Tag (die hoort meestal bij het bestandstype/map). GOEDGEKEURD wordt NIET
   automatisch gezet: jij houdt de eindcontrole, maar de invulling is gedaan. */
function applyRoutingToRows(refRow, indexes, mode){
  // mode: "full" = alle velden incl. context/beschrijving/versie + goedkeuren;
  //       "routing" = alleen actie+domein+submap+laag3+tag, niet goedkeuren.
  indexes.forEach(i=>{
    const r = rows[i];
    r.Actie = refRow.Actie;
    r.Nieuw_domein = refRow.Nieuw_domein;
    r.Nieuw_subdomein = refRow.Nieuw_subdomein;
    r.Nieuw_laag3 = refRow.Nieuw_laag3;
    r.Tag = refRow.Tag;
    if(mode==="full"){
      r.Context = refRow.Context;
      r.Beschrijving = refRow.Beschrijving;
      r.Versie = refRow.Versie;
      if(refRow.Wat_is_het && !r.Wat_is_het) r.Wat_is_het = refRow.Wat_is_het;
      if(isRowComplete(r)){ r.GOEDGEKEURD = "ja"; logApproval(); }
    }
  });
  saveState();
}

/* ============================================================
   RENDER
   ============================================================ */
function escapeHtml(s){ return String(s===undefined||s===null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function escapeAttr(s){ return String(s===undefined||s===null?"":s).replace(/"/g,"&quot;"); }

function render(){
  const app = document.getElementById("app");
  // Scroll-behoud: bewaar de huidige scrollpositie van het scrollbare .view-element
  // zodat een re-render (na veldwijziging) niet naar boven terugspringt.
  const oldView = app.querySelector(".view");
  const savedScroll = oldView ? oldView.scrollTop : 0;

  if(rows.length===0){ currentView="import"; }
  if(currentView==="import"){ renderImport(app); return; }
  if(currentView==="process"){ renderProcess(app); }
  else if(currentView==="list"){ renderList(app); }

  // Herstel scrollpositie op het nieuwe .view-element (na innerHTML-vervanging).
  const newView = app.querySelector(".view");
  if(newView && savedScroll>0){ newView.scrollTop = savedScroll; }
}

function renderTopbar(){
  const total=rows.length, done=doneRows().length;
  const pct = total?Math.round((done/total)*100):0;
  const untilNext = Math.max(0, BACKUP_REMINDER_INTERVAL-(done-lastExportCount));
  const due = needsBackupReminder();
  const stats = dashboardStats();
  return `
    <div class="topbar">
      <div class="topbar-row">
        <div class="title">NAS Router</div>
        <div class="counter">${done} / ${total} goedgekeurd</div>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      ${total>0?`<div class="dash-row">
        <span>${stats.doneToday} vandaag</span>
        <span>${stats.perHour?stats.perHour+'/uur':'— /uur'}</span>
        <span>${stats.openstaand} open</span>
        <span>nog ${formatEta(stats.etaMin)}</span>
      </div>`:""}
      ${total>0?`<div class="backup-status ${due?'backup-status-due':''}">${lastExportCount>0?`laatste export bij ${lastExportCount} rijen`:"nog niet geëxporteerd"} · ${due?"tik nu op Export CSV":`over ${untilNext} rijen weer exporteren`}</div>`:""}
    </div>`;
}
function renderBottombar(){
  return `<div class="bottombar">
    <button class="btn" id="navList">Lijst</button>
    <button class="btn" id="navProcess">Verwerken</button>
    <button class="btn btn-primary" id="navExport">Export CSV</button>
  </div>`;
}
function bindBottombar(){
  document.getElementById("navList").onclick=()=>{ currentView="list"; render(); };
  document.getElementById("navProcess").onclick=()=>{ currentView="process"; render(); };
  document.getElementById("navExport").onclick=()=>{ exportCSV(); };
}

function renderImport(app){
  app.innerHTML = `
    <div class="topbar"><div class="topbar-row"><div class="title">NAS Router — WERKBLAD</div></div></div>
    <div class="view"><div class="view-inner">
      <div class="empty-state">
        <h2>Geen actieve lijst</h2>
        <p>Importeer het WERKBLAD-tabblad (als CSV) uit je migratie-Excel. Alle 18 kolommen worden 1-op-1 herkend, inclusief Actie en GOEDGEKEURD.</p>
        <button class="btn btn-primary btn-block" id="btnImport">CSV importeren</button>
      </div>
    </div></div>`;
  document.getElementById("btnImport").onclick=()=>document.getElementById("fileInput").click();
}

function renderProcess(app){
  if(rows.length===0){ currentView="import"; return render(); }
  const idx = currentIndex;
  const r = rows[idx];

  if(!r){
    app.innerHTML = `
      ${renderTopbar()}
      <div class="view"><div class="view-inner">
        <div class="empty-state">
          <h2>${pendingRows().length===0?"Alles verwerkt":"Rij niet gevonden"}</h2>
          <p>${pendingRows().length===0?"Alle rijen staan op GOEDGEKEURD = ja. Exporteer de CSV terug voor de Excel op je PC.":"Ga terug naar de lijst om een geldige rij te kiezen."}</p>
          <button class="btn btn-primary btn-block" id="btnExportDone">CSV exporteren</button>
          <button class="btn btn-block" id="btnReview">Naar eerste rij</button>
        </div>
      </div></div>
      ${renderBottombar()}`;
    document.getElementById("btnExportDone").onclick=()=>exportCSV();
    document.getElementById("btnReview").onclick=()=>{ currentIndex=0; render(); };
    bindBottombar();
    return;
  }

  const domeinKeys = Object.keys(LOCK);
  const submapOptions = r.Nieuw_domein&&LOCK[r.Nieuw_domein]?Object.keys(LOCK[r.Nieuw_domein].submappen):[];
  const laag3Options = (r.Nieuw_domein&&r.Nieuw_subdomein&&LOCK[r.Nieuw_domein]&&LOCK[r.Nieuw_domein].submappen[r.Nieuw_subdomein])?LOCK[r.Nieuw_domein].submappen[r.Nieuw_subdomein]:[];
  const naam = buildFilename(r);
  const pad = buildPath(r);
  const compleet = isRowComplete(r);
  const rowDone = isDone(r);
  const typeInfo = fileTypeInfo(r.Extensie);
  const suggesties = suggestFields(r);

  // Progressive disclosure binnen VERWERKEN: toon volgende stap pas als vorige gevuld is.
  // Snelheid boven volledigheid: zodra domein+submap staan is de rij goed te keuren.
  const toonSubmap = !!r.Nieuw_domein;
  const toonRest = !!r.Nieuw_domein && !!r.Nieuw_subdomein;

  // Helper: suggestie-chip alleen tonen als veld leeg is en er een voorstel is.
  function suggChip(veld, labelPrefix){
    if(!suggesties[veld]) return "";
    if(r[veld]) return "";
    return `<div class="sugg-chip" data-sugg-veld="${veld}" data-sugg-waarde="${escapeAttr(suggesties[veld])}">${labelPrefix||"voorstel"}: <strong>${escapeHtml(suggesties[veld])}</strong> · tik om te gebruiken</div>`;
  }

  app.innerHTML = `
    ${renderTopbar()}
    <div class="view"><div class="view-inner">

      <div class="rownav">
        <button class="rownav-btn" id="btnPrevRow" ${idx===0?"disabled":""}>‹ Vorige</button>
        <div class="rownav-jump">
          <input type="number" id="inpJumpRow" class="rownav-input" value="${idx+1}" min="1" max="${rows.length}">
          <span class="rownav-of">/ ${rows.length}</span>
        </div>
        <button class="rownav-btn" id="btnNextRow" ${idx===rows.length-1?"disabled":""}>Volgende ›</button>
      </div>

      <div class="card">
        <div class="card-label">Rij ${idx+1} van ${rows.length} — ${escapeHtml(r.Herkomst_Fix)}</div>
        <div class="card-content">${escapeHtml(r.Huidige_naam)}</div>
        <div class="type-badge">${escapeHtml(typeInfo.label)}</div>
        ${typeInfo.hint?`<div class="card-meta" style="color:var(--warn);">${escapeHtml(typeInfo.hint)}</div>`:""}
        <div class="preview-grid">
          <div class="preview-row"><span class="preview-k">map</span><span class="preview-v">${escapeHtml(folderFromPath(r.Huidig_pad))||"—"}</span></div>
          <div class="preview-row"><span class="preview-k">gewijzigd</span><span class="preview-v">${escapeHtml(r.Datum)||"—"}</span></div>
          <div class="preview-row"><span class="preview-k">type</span><span class="preview-v">${escapeHtml(r.Extensie)||"—"}</span></div>
        </div>
        <div class="preview-fullpath-toggle" id="togglePad">volledig pad ▾</div>
        <div class="preview-fullpath" id="padBox" style="display:none;">${escapeHtml(r.Huidig_pad)}</div>
      </div>

      <button class="btn btn-block btn-warn-outline" id="btnGeenIdee">Weet ik niet — zet naar AI voorstel nodig</button>

      <div class="field">
        <div class="field-label">Wat is het</div>
        <div class="veld-hulp">${escapeHtml(VELD_HULP.Wat_is_het)}</div>
        <input type="text" class="textinput" id="inpWat" value="${escapeAttr(r.Wat_is_het)}" placeholder="korte omschrijving">
      </div>

      <div class="field">
        <div class="field-label">Actie</div>
        <div class="action-grid">
          ${ACTIES.map(a=>`<div class="action-btn ${r.Actie===a?'active':''}" data-actie="${a}">${a.replace(/_/g," ")}</div>`).join("")}
        </div>
      </div>

      ${r.Actie==="VERWERKEN"?`
        <div class="helper-toggle" id="toggleMinikaart"><span>Beslisboom / geen kaartje bij de hand?</span><span id="minikaartChevron">${minikaartOpen?"▴":"▾"}</span></div>
        <div class="helper-box" id="minikaartBox" style="display:${minikaartOpen?'block':'none'};">
          ${MINIKAART.map(l=>`<div>${escapeHtml(l)}</div>`).join("")}
        </div>

        <div class="field">
          <div class="field-label">Nieuw domein</div>
          <div class="veld-hulp">${escapeHtml(VELD_HULP.Nieuw_domein)}</div>
          ${suggChip("Nieuw_domein")}
          <div class="select-wrap"><select id="selDomein">
            <option value="">— kies domein —</option>
            ${domeinKeys.map(d=>`<option value="${d}" ${r.Nieuw_domein===d?"selected":""}>${d}</option>`).join("")}
          </select></div>
        </div>
        ${r.Nieuw_domein&&DOMEIN_HULP[r.Nieuw_domein]?`
          <div class="domain-help">
            <div class="domain-help-q">${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].vraag)}</div>
            <div class="domain-help-ex"><strong>Bijv.:</strong> ${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].voorbeelden)}</div>
            <div class="domain-help-not">${escapeHtml(DOMEIN_HULP[r.Nieuw_domein].niet)}</div>
          </div>`:""}

        ${toonSubmap?`
        <div class="field">
          <div class="field-label">Nieuw subdomein</div>
          <div class="veld-hulp">${escapeHtml(VELD_HULP.Nieuw_subdomein)}</div>
          <div class="select-wrap"><select id="selSubmap">
            <option value="">— kies submap —</option>
            ${submapOptions.map(s=>`<option value="${s}" ${r.Nieuw_subdomein===s?"selected":""}>${s}</option>`).join("")}
          </select></div>
        </div>
        ${!r.Nieuw_subdomein?`<div class="domain-help" style="margin-top:-6px;">Twijfel welke submap? Kies <strong>0_INBOX</strong> — dat is altijd goed, ook als je het nu niet zeker weet.</div>`:
          SUBMAP_HULP[`${r.Nieuw_domein}|${r.Nieuw_subdomein}`]?`<div class="domain-help" style="margin-top:-6px;"><div class="domain-help-ex">${escapeHtml(SUBMAP_HULP[`${r.Nieuw_domein}|${r.Nieuw_subdomein}`])}</div></div>`:""}
        `:""}

        ${toonRest?`
        <div class="field">
          <div class="field-label">Nieuw laag3 ${laag3Options.length===0?'<span style="font-weight:400;color:var(--dim)">(n.v.t.)</span>':''}</div>
          <div class="veld-hulp">${escapeHtml(VELD_HULP.Nieuw_laag3)}</div>
          <div class="select-wrap"><select id="selLaag3" ${laag3Options.length===0?"disabled":""}>
            <option value="">${laag3Options.length===0?"— geen laag 3 —":"— kies laag 3 —"}</option>
            ${laag3Options.map(l=>`<option value="${l}" ${r.Nieuw_laag3===l?"selected":""}>${l}</option>`).join("")}
          </select></div>
        </div>

        <div class="path-preview">${pad||"domein/submap(/laag3) verschijnt hier"}</div>
        <div class="section-gap"></div>

        <div class="row2">
          <div class="field"><div class="field-label">Tag</div>
            <div class="veld-hulp">${escapeHtml(VELD_HULP.Tag)}</div>
            ${suggChip("Tag")}
            <div class="select-wrap"><select id="selTag"><option value="">—</option>${TAGS.map(t=>`<option value="${t}" ${r.Tag===t?"selected":""}>${t}</option>`).join("")}</select></div>
          </div>
          <div class="field"><div class="field-label">Versie</div>
            <div class="veld-hulp">${escapeHtml(VELD_HULP.Versie)}</div>
            ${suggChip("Versie")}
            <div class="select-wrap"><select id="selVersie"><option value="">—</option>${VERSIES.map(v=>`<option value="${v}" ${r.Versie===v?"selected":""}>${v}</option>`).join("")}</select></div>
          </div>
        </div>

        <div class="field"><div class="field-label">Context</div>
          <div class="veld-hulp">${escapeHtml(VELD_HULP.Context)}</div>
          ${suggChip("Context")}
          <input type="text" class="textinput" id="inpContext" value="${escapeAttr(r.Context)}" placeholder="bv. MensSana, Azure, P1156"></div>
        <div class="field"><div class="field-label">Beschrijving</div>
          <div class="veld-hulp">${escapeHtml(VELD_HULP.Beschrijving)}</div>
          ${suggChip("Beschrijving")}
          <input type="text" class="textinput" id="inpBeschrijving" value="${escapeAttr(r.Beschrijving)}" placeholder="bv. Stabiliteit, Designbrief"></div>

        <div class="filename-preview">${naam||"DD-MM-YYYY_[TAG]_CONTEXT_BESCHRIJVING_VERSIE.ext"}</div>
        `:""}
      `:""}

      ${r.Actie==="OUD_WEG"?`<div class="warn-banner">Gaat naar 00_SYSTEM/00_TE_VERWIJDEREN_REVIEW met de originele naam. Niet automatisch verwijderd — jij beoordeelt later.</div>`:""}

      ${r.Actie==="ARCHIVEER"?`
        <div class="warn-banner">Gaat naar 99_ARCHIEF van het huidige (of onderstaande) domein, originele naam.</div>
        <div class="field"><div class="field-label">Nieuw domein <span style="font-weight:400;">(optioneel — leeg = huidig domein)</span></div>
          <div class="select-wrap"><select id="selDomeinArch">
            <option value="">— huidig domein —</option>
            ${domeinKeys.map(d=>`<option value="${d}" ${r.Nieuw_domein===d?"selected":""}>${d}</option>`).join("")}
          </select></div>
        </div>`:""}

      ${r.Actie==="AI_VOORSTEL_NODIG"?`
        <div class="warn-banner">Claude vult later de volledige routering in (domein + submap + laag3 + tag + context + beschrijving + versie) in AI_Voorstel_Toelichting. Jij vult hier alleen Wat_is_het goed in.
          ${r.AI_Voorstel_Toelichting?`<div style="margin-top:10px; background:var(--panel2); border:1px solid var(--accent-dim); border-radius:8px; padding:10px 12px;"><div style="color:var(--accent); font-weight:600; font-size:11px; margin-bottom:4px;">AI-VOORSTEL TOELICHTING</div><div style="font-size:12px; line-height:1.6;">${escapeHtml(r.AI_Voorstel_Toelichting)}</div></div>`:""}
        </div>`:""}

      ${!r.Actie?`<div class="warn-banner">Kies eerst een Actie hierboven.</div>`:""}

      <div class="field"><div class="field-label">Notitie <span style="font-weight:400;">(optioneel)</span></div>
        <input type="text" class="textinput" id="inpNotitie" value="${escapeAttr(r.Notitie)}"></div>

      <div class="goedgekeurd-toggle ${rowDone?'ja':''}" id="toggleGoedgekeurd">
        <div>
          <div style="font-weight:600; font-size:14px;">Goedgekeurd</div>
          <div class="gk-substatus" style="font-size:11px; color:var(--dim); margin-top:2px;">${compleet?"Rij is compleet voor deze Actie":"Nog niet compleet — check verplichte velden"}</div>
        </div>
        <div class="switch ${rowDone?'on':''}"><div class="switch-knob"></div></div>
      </div>

      <div class="section-gap"></div>
      <button class="btn btn-primary btn-block ${compleet?'':'btn-disabled'}" id="btnDone">Goedkeuren — volgende</button>
      <button class="btn btn-block" id="btnSkip">Overslaan</button>

    </div></div>
    ${renderBottombar()}`;

  // bindings
  document.getElementById("btnPrevRow").onclick=()=>{ if(idx>0){ currentIndex=idx-1; render(); } };
  document.getElementById("btnNextRow").onclick=()=>{ if(idx<rows.length-1){ currentIndex=idx+1; render(); } };
  document.getElementById("inpJumpRow").onchange=(e)=>{
    let t=parseInt(e.target.value,10); if(isNaN(t)) t=idx+1;
    t=Math.max(1,Math.min(rows.length,t));
    currentIndex=t-1; render();
  };

  // Live-update van afgeleide UI (bestandsnaam, pad, goedkeur-knop) ZONDER volledige
  // re-render -- dat behoudt focus en scrollpositie tijdens het typen in tekstvelden.
  function updateLiveElements(){
    const fnEl = document.querySelector(".filename-preview");
    if(fnEl){ fnEl.textContent = buildFilename(r) || "DD-MM-YYYY_[TAG]_CONTEXT_BESCHRIJVING_VERSIE.ext"; }
    const pathEl = document.querySelector(".path-preview");
    if(pathEl){ pathEl.textContent = buildPath(r) || "domein/submap(/laag3) verschijnt hier"; }
    updateApproveState();
  }
  function updateApproveState(){
    const nowCompleet = isRowComplete(r);
    const btn = document.getElementById("btnDone");
    if(btn){ btn.classList.toggle("btn-disabled", !nowCompleet); }
    const toggleSub = document.querySelector(".goedgekeurd-toggle .gk-substatus");
    if(toggleSub){ toggleSub.textContent = nowCompleet ? "Rij is compleet voor deze Actie" : "Nog niet compleet — check verplichte velden"; }
  }

  document.getElementById("inpWat").oninput=(e)=>{ r.Wat_is_het=e.target.value; updateApproveState(); };
  document.getElementById("inpWat").onblur=(e)=>{ r.Wat_is_het=e.target.value; saveState(); };
  document.getElementById("inpNotitie").oninput=(e)=>{ r.Notitie=e.target.value; };
  document.getElementById("inpNotitie").onblur=(e)=>{ r.Notitie=e.target.value; saveState(); };

  document.getElementById("btnGeenIdee").onclick=()=>{
    r.Actie="AI_VOORSTEL_NODIG";
    if(!r.Wat_is_het||r.Wat_is_het.trim()===""){
      r.Wat_is_het=`${fileTypeInfo(r.Extensie).label}, herkomst: ${r.Herkomst_Fix}, oorspronkelijk in ${folderFromPath(r.Huidig_pad)}`;
    }
    saveState(); render();
  };

  const togglePad = document.getElementById("togglePad");
  if(togglePad){
    togglePad.onclick=()=>{
      const box=document.getElementById("padBox");
      const open = box.style.display==="none";
      box.style.display = open?"block":"none";
      togglePad.textContent = open?"volledig pad ▴":"volledig pad ▾";
    };
  }

  document.querySelectorAll(".action-btn").forEach(el=>{
    el.onclick=()=>{ r.Actie=el.getAttribute("data-actie"); saveState(); render(); };
  });

  // Suggestie-chips: tik = voorstel overnemen in het bijbehorende veld.
  document.querySelectorAll(".sugg-chip").forEach(el=>{
    el.onclick=()=>{
      const veld = el.getAttribute("data-sugg-veld");
      const waarde = el.getAttribute("data-sugg-waarde");
      if(veld==="Nieuw_domein"){ r.Nieuw_domein=waarde; r.Nieuw_subdomein=""; r.Nieuw_laag3=""; }
      else { r[veld]=waarde; }
      saveState(); render();
    };
  });

  const toggleMinikaart = document.getElementById("toggleMinikaart");
  if(toggleMinikaart){
    toggleMinikaart.onclick=()=>{
      minikaartOpen = !minikaartOpen;
      const box=document.getElementById("minikaartBox");
      const chevron=document.getElementById("minikaartChevron");
      box.style.display = minikaartOpen?"block":"none";
      chevron.textContent = minikaartOpen?"▴":"▾";
    };
  }

  const selDomein = document.getElementById("selDomein");
  if(selDomein) selDomein.onchange=(e)=>{ r.Nieuw_domein=e.target.value; r.Nieuw_subdomein=""; r.Nieuw_laag3=""; saveState(); render(); };
  const selSubmap = document.getElementById("selSubmap");
  if(selSubmap) selSubmap.onchange=(e)=>{ r.Nieuw_subdomein=e.target.value; r.Nieuw_laag3=""; saveState(); render(); };
  const selLaag3 = document.getElementById("selLaag3");
  if(selLaag3) selLaag3.onchange=(e)=>{ r.Nieuw_laag3=e.target.value; saveState(); render(); };
  const selTag = document.getElementById("selTag");
  if(selTag) selTag.onchange=(e)=>{ r.Tag=e.target.value; saveState(); render(); };
  const selVersie = document.getElementById("selVersie");
  if(selVersie) selVersie.onchange=(e)=>{ r.Versie=e.target.value; saveState(); render(); };
  const inpContext = document.getElementById("inpContext");
  if(inpContext){ inpContext.oninput=(e)=>{ r.Context=e.target.value; updateLiveElements(); }; inpContext.onblur=(e)=>{ r.Context=e.target.value; saveState(); }; }
  const inpBeschrijving = document.getElementById("inpBeschrijving");
  if(inpBeschrijving){ inpBeschrijving.oninput=(e)=>{ r.Beschrijving=e.target.value; updateLiveElements(); }; inpBeschrijving.onblur=(e)=>{ r.Beschrijving=e.target.value; saveState(); }; }
  const selDomeinArch = document.getElementById("selDomeinArch");
  if(selDomeinArch) selDomeinArch.onchange=(e)=>{ r.Nieuw_domein=e.target.value; saveState(); render(); };

  document.getElementById("toggleGoedgekeurd").onclick=()=>{
    const nowCompleet = isRowComplete(r);
    const nowDone = isDone(r);
    if(!nowCompleet && !nowDone){ showToast("Vul eerst de verplichte velden in"); return; }
    r.GOEDGEKEURD = nowDone?"nee":"ja";
    if(!nowDone) logApproval();
    saveState(); render();
  };

  const btnDone = document.getElementById("btnDone");
  btnDone.onclick=()=>{
    if(!isRowComplete(r)){ showToast("Vul eerst de verplichte velden in"); return; }
    r.GOEDGEKEURD="ja";
    logApproval();
    saveState();
    // Zoek lijkende openstaande rijen (alleen zinvol bij VERWERKEN/ARCHIVEER met een doel).
    const similar = (r.Actie==="VERWERKEN"||r.Actie==="ARCHIVEER"||r.Actie==="OUD_WEG") ? findSimilarPending(r, idx) : [];
    if(similar.length>0){
      bulkPrompt = { refIdx: idx, indexes: similar };
      render();
      return;
    }
    const np=nextPendingIndex(idx+1);
    currentIndex = np!==-1?np:idx;
    showToast("Goedgekeurd");
    render();
  };
  document.getElementById("btnSkip").onclick=()=>{
    const np=nextPendingIndex(idx+1);
    currentIndex = np!==-1?np:idx;
    render();
  };

  // Bulk-prompt overlay: verschijnt na goedkeuren van een rij met lijkende openstaande rijen.
  if(bulkPrompt){
    const ref = rows[bulkPrompt.refIdx];
    const n = bulkPrompt.indexes.length;
    const folder = folderFromPath(ref.Huidig_pad);
    const ext = ref.Extensie;
    const doelPad = ref.Actie==="VERWERKEN" ? buildPath(ref) : (ref.Actie==="OUD_WEG"?"00_SYSTEM/00_TE_VERWIJDEREN_REVIEW":"99_ARCHIEF");
    const overlay = document.createElement("div");
    overlay.className = "bulk-overlay";
    overlay.innerHTML = `
      <div class="bulk-card">
        <div class="bulk-title">${n} lijkende bestanden gevonden</div>
        <div class="bulk-body">
          Zelfde map (<span class="bulk-hl">${escapeHtml(folder)}</span>) en type <span class="bulk-hl">.${escapeHtml(ext)}</span>.
          <div class="bulk-doel">Zelfde routing toepassen:<br><span class="bulk-hl">${escapeHtml(ref.Actie)} → ${escapeHtml(doelPad)}${ref.Tag?` · [${escapeHtml(ref.Tag)}]`:""}</span></div>
          <div class="bulk-note">"Volledig" neemt ook context/beschrijving/versie over en keurt goed — ideaal als de bestanden echt bij elkaar horen. "Alleen routing" vult domein/map/tag in maar laat je per bestand nog de details doen.</div>
        </div>
        <button class="btn btn-primary btn-block" id="bulkApplyApprove">Volledig kopiëren + goedkeuren (${n})</button>
        <button class="btn btn-block" id="bulkApplyOnly">Alleen routing invullen (${n})</button>
        <button class="btn btn-block" id="bulkSkip">Nee, alleen deze rij</button>
      </div>`;
    document.getElementById("app").appendChild(overlay);

    document.getElementById("bulkApplyApprove").onclick=()=>{
      applyRoutingToRows(ref, bulkPrompt.indexes, "full");
      const cnt = bulkPrompt.indexes.length;
      bulkPrompt = null;
      const np=nextPendingIndex(idx+1);
      currentIndex = np!==-1?np:idx;
      showToast(`${cnt} bestanden mee goedgekeurd`);
      render();
    };
    document.getElementById("bulkApplyOnly").onclick=()=>{
      applyRoutingToRows(ref, bulkPrompt.indexes, "routing");
      const cnt = bulkPrompt.indexes.length;
      bulkPrompt = null;
      const np=nextPendingIndex(idx+1);
      currentIndex = np!==-1?np:idx;
      showToast(`${cnt} bestanden vooringevuld`);
      render();
    };
    document.getElementById("bulkSkip").onclick=()=>{
      bulkPrompt = null;
      const np=nextPendingIndex(idx+1);
      currentIndex = np!==-1?np:idx;
      render();
    };
  }

  bindBottombar();
}

function renderList(app){
  const list = listFilter==="openstaand"?pendingRows():doneRows();
  app.innerHTML = `
    ${renderTopbar()}
    <div class="view"><div class="view-inner">
      <div class="tabs">
        <div class="tab ${listFilter==='openstaand'?'active':''}" id="tabOpen">Openstaand (${pendingRows().length})</div>
        <div class="tab ${listFilter==='goedgekeurd'?'active':''}" id="tabDone">Goedgekeurd (${doneRows().length})</div>
      </div>
      <div class="section-gap"></div>
      ${list.length===0?`<div class="empty-state"><p>Niets in deze lijst.</p></div>`:list.map(r=>{
        const globalIdx = rows.indexOf(r);
        const rowDone = isDone(r);
        return `<div class="list-item" data-idx="${globalIdx}">
          <div class="dot ${rowDone?'dot-done':'dot-pending'}"></div>
          <div class="list-item-text">${escapeHtml((r.Huidige_naam||"").slice(0,55))}
            <div class="list-item-sub">${r.Actie?r.Actie.replace(/_/g," "):"geen actie gekozen"}</div>
          </div>
        </div>`;
      }).join("")}
      <div class="section-gap"></div>
      <button class="btn btn-danger-outline btn-block" id="btnClearAll">Alle data wissen</button>
    </div></div>
    ${renderBottombar()}`;
  document.getElementById("tabOpen").onclick=()=>{ listFilter="openstaand"; render(); };
  document.getElementById("tabDone").onclick=()=>{ listFilter="goedgekeurd"; render(); };
  document.querySelectorAll(".list-item").forEach(el=>{
    el.onclick=()=>{ currentIndex=parseInt(el.getAttribute("data-idx")); currentView="process"; render(); };
  });
  document.getElementById("btnClearAll").onclick=()=>{
    if(confirm("Alle voortgang wissen en opnieuw beginnen met de originele lijst?")){
      clearLocalStorage();
      if(Array.isArray(window.EMBEDDED_WERKBLAD) && window.EMBEDDED_WERKBLAD.length>0){
        rows = window.EMBEDDED_WERKBLAD.map(r=>Object.assign({}, r));
        currentIndex=0; lastExportCount=0; currentView="process";
        saveState();
      } else {
        rows=[]; currentIndex=0; lastExportCount=0; currentView="import";
      }
      render();
    }
  };
  bindBottombar();
}

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("fileInput").addEventListener("change",(e)=>{
  const file=e.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=(evt)=>importCSV(evt.target.result);
  reader.readAsText(file);
  e.target.value="";
});

loadState();
loadApprovalLog();

// Als er nog geen opgeslagen voortgang is maar wel ingebouwde data bestaat:
// laad die automatisch, zodat je nooit een CSV hoeft te importeren.
if(rows.length === 0 && Array.isArray(window.EMBEDDED_WERKBLAD) && window.EMBEDDED_WERKBLAD.length > 0){
  rows = window.EMBEDDED_WERKBLAD.map(r => Object.assign({}, r));
  currentIndex = 0;
  lastExportCount = rows.filter(isDone).length;
  currentView = "process";
  saveState();
}

render();
if(!storageAvailable){
  showToast("Let op: opslag niet beschikbaar in deze browser -- voortgang blijft niet bewaard");
}
