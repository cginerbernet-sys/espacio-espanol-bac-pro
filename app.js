const levels = [
  {id:'seconde',name:'Seconde',number:'2de',range:'A2 → A2+',tagline:'Descubrir y ganar confianza',fr:'Découvrir et prendre confiance',color:'#087f8c'},
  {id:'premiere',name:'Première',number:'1re',range:'A2+ → B1',tagline:'Avanzar con autonomía',fr:'Progresser en autonomie',color:'#c2415c'},
  {id:'terminale',name:'Terminale',number:'Tle',range:'B1 · BAC',tagline:'Consolidar y prepararse',fr:'Consolider et se préparer',color:'#6d3cc6'}
];
const units = {
  seconde:[
    ['bienvenido','¡Bienvenido a mi vida!','Presentarse, hablar de la familia y explicar su horario.','Se présenter, parler de sa famille et expliquer son emploi du temps.','💬'],
    ['deporte','Deporte, ¡te amo!','Hablar de deportes, ocio y rutinas.','Parler des sports, des loisirs et des habitudes.','⚽'],
    ['malaga','¡Vamos a Málaga!','Descubrir una ciudad y aprender a orientarse.','Découvrir une ville et apprendre à s’orienter.','🗺️'],
    ['comida','¡Comida para picar!','Compartir gustos y recetas del mundo hispánico.','Partager des goûts et des recettes du monde hispanique.','🍽️'],
    ['moda','¡La moda mola!','Describir estilos y comparar prendas.','Décrire des styles et comparer des vêtements.','👕'],
    ['series','Estrenos de nueva temporada','Presentar una serie y expresar una opinión.','Présenter une série et exprimer une opinion.','🎬']
  ],
  premiere:[
    ['pura-vida','¡Pura vida!','Preparar y presentar un viaje sostenible.','Préparer et présenter un voyage durable.','🌿'],
    ['fiesta','¡Vámonos de fiesta!','Descubrir y presentar celebraciones.','Découvrir et présenter des fêtes.','🎉'],
    ['tecnologias','Tecnologías para mejorar el mundo','Aconsejar y presentar una solución tecnológica.','Conseiller et présenter une solution technologique.','📱'],
    ['mujeres','¡Arriba mujeres!','Narrar el recorrido de una mujer comprometida.','Raconter le parcours d’une femme engagée.','✊'],
    ['perfil','¡El mejor perfil!','Hablar de competencias y preparar una entrevista.','Parler de ses compétences et préparer un entretien.','💼']
  ],
  terminale:[
    ['erasmus','Un billete para Erasmus+','Presentar un proyecto de movilidad.','Présenter un projet de mobilité.','✈️'],
    ['planeta','¡Luchemos por la vida!','Debatir y proponer soluciones ambientales.','Débattre et proposer des solutions écologiques.','🌍'],
    ['colombia','Colombia: ¡basta de prejuicios!','Cuestionar estereotipos y valorar un país.','Remettre en question les stéréotypes et valoriser un pays.','🇨🇴'],
    ['arte','Mi arte, mi arma','Interpretar y crear un mensaje comprometido.','Interpréter et créer un message engagé.','🎨'],
    ['bac','Recorrido Bac','Entrenarse con método y confianza.','S’entraîner avec méthode et confiance.','🎓']
  ]
};
const lessons = {
  bienvenido:{level:'seconde',label:'UNIDAD 1 · A2',title:'¡Bienvenido a mi vida!',intro:'Aprende a presentarte, habla de tu vida cotidiana y da la bienvenida a un compañero hispanohablante.',introFr:'Apprends à te présenter, parle de ton quotidien et accueille un camarade hispanophone.',vocab:[['Me llamo…','Je m’appelle…'],['Tengo quince años.','J’ai quinze ans.'],['Soy francés / francesa.','Je suis français / française.'],['Vivo en…','J’habite à…'],['Me gusta…','J’aime…'],['Mi asignatura favorita es…','Ma matière préférée est…']],grammar:[['SER','Identidad, origen y profesión','Identité, origine et profession','Soy alumno.'],['TENER','Edad y posesión','Âge et possession','Tengo quince años.'],['LLAMARSE','Nombre y presentación','Nom et présentation','Me llamo Hugo.']],question:'Él ___ dieciséis años.',questionFr:'Il a seize ans.',options:['tengo','tiene','tienes'],answer:1,mission:'Graba una presentación de 45 a 60 segundos.',missionFr:'Enregistre une présentation de 45 à 60 secondes.',checks:['5 informaciones personales','3 asignaturas de tu horario','Una frase de bienvenida']},
  erasmus:{level:'terminale',label:'UNIDAD 6 · B1',title:'Un billete para Erasmus+',intro:'Imagina una movilidad profesional, presenta tus motivaciones y prepara tu candidatura.',introFr:'Imagine une mobilité professionnelle, présente tes motivations et prépare ta candidature.',vocab:[['Solicitar unas prácticas','Demander un stage'],['Adquirir experiencia','Acquérir de l’expérience'],['Mejorar mi nivel','Améliorer mon niveau'],['Trabajar en equipo','Travailler en équipe'],['Adaptarse','S’adapter'],['Salir de su zona de confort','Sortir de sa zone de confort']],grammar:[['FUTURO','Presentar un proyecto','Présenter un projet','Trabajaré en España.'],['CONDICIONAL','Expresar un deseo','Exprimer un souhait','Me gustaría participar.'],['PARA + INFINITIVO','Expresar una finalidad','Exprimer un but','Viajo para aprender.']],question:'Me gustaría ___ unas prácticas en Valencia.',questionFr:'J’aimerais faire un stage à Valence.',options:['hacer','haré','hice'],answer:0,mission:'Graba un vídeo breve para presentar tu candidatura Erasmus+.',missionFr:'Enregistre une courte vidéo pour présenter ta candidature Erasmus+.',checks:['Tu formación y especialidad','Dos motivaciones personales','Dos beneficios profesionales']}
};
Object.assign(lessons, window.ENRICHED_LESSONS || {});
const unitMedia=window.UNIT_MEDIA || {};
const unitCloze=window.UNIT_CLOZE || {};
const state={completed:new Set(JSON.parse(localStorage.getItem('ee-completed')||'[]')),last:localStorage.getItem('ee-last')||''};
const $=s=>document.querySelector(s);
function renderLevels(){ $('#level-cards').innerHTML=levels.map((l,i)=>`<button class="level-card ${l.id}" data-level="${l.id}"><span class="eyebrow">NIVEL ${i+1}</span><h3>${l.name}</h3><p>${l.tagline}</p><small>${l.fr}</small><div class="level-meta"><span>${l.range}</span><span>Ver unidades →<small>Voir les unités</small></span></div><span class="level-number">${l.number}</span></button>`).join(''); }
function showCatalog(id,updateUrl=true){
  const l=levels.find(x=>x.id===id); if(!l)return;
  document.documentElement.style.setProperty('--level-color',l.color);
  $('#niveles').hidden=true; $('#unit-view').hidden=true; $('#tool-view').hidden=true; $('#catalog').hidden=false;
  $('#catalog-heading').innerHTML=`<p class="eyebrow">${l.name.toUpperCase()} · ${l.range}</p><h2>${l.tagline}</h2><p class="translation">${l.fr}</p>`;
  $('#unit-grid').innerHTML=units[id].map((u,i)=>`<button class="unit-card" data-unit="${u[0]}"><span class="unit-index">UNIDAD ${i+1}</span><div style="font-size:2rem" aria-hidden="true">${u[4]}</div><h3>${u[1]}</h3><p>${u[2]}</p><small class="translation">${u[3]}</small><span class="unit-footer"><small>Abrir unidad<br>Ouvrir l’unité</small><i class="status-dot ${state.completed.has(u[0])?'done':''}"></i></span></button>`).join('');
  if(updateUrl)location.hash=`nivel/${id}`;
}
function showLesson(id,updateUrl=true){
  const d=lessons[id]; if(!d)return;
  const l=levels.find(x=>x.id===d.level);
  document.documentElement.style.setProperty('--level-color',l.color);
  state.last=id; localStorage.setItem('ee-last',id);
  $('#catalog').hidden=true; $('#niveles').hidden=true; $('#unit-view').hidden=false;
  const exercises=(d.exercises||[{instruction:'Elige la respuesta correcta.',instructionFr:'Choisis la bonne réponse.',prompt:d.question,options:d.options,answer:d.answer}]);
  const media=unitMedia[id];
  const cloze=unitCloze[id]||[];
  const practice=exercises.map((q,n)=>`<article class="practice-card quiz" data-answer="${q.answer}">
    <span class="exercise-number">${n+1}</span><h3>${q.instruction}</h3><p class="translation">${q.instructionFr}</p>
    <p class="quiz-prompt"><b>${q.prompt}</b></p>${q.options.map((o,i)=>`<button class="quiz-option" data-option="${i}">${o}</button>`).join('')}
    <button class="button primary check-answer" type="button">Comprobar <small>Vérifier</small></button><div class="feedback" hidden></div>
    ${q.tip?`<details><summary>Una pista <small>Un indice</small></summary><p>${q.tip}</p><p class="translation">${q.tipFr}</p></details>`:''}</article>`).join('');
  $('#unit-view').innerHTML=`<header class="unit-hero"><button class="button light" data-back="${d.level}">← Unidades <small>Unités</small></button><p class="eyebrow" style="color:#fff;margin-top:2rem">${d.label}</p><h1>${d.title}</h1><p>${d.intro}</p><p class="translation">${d.introFr}</p></header><div class="unit-body">
    <nav class="learning-path" aria-label="Etapas"><span class="path-step"><b>01 Descubre</b><small>Découvre</small></span><span class="path-step"><b>02 Aprende</b><small>Apprends</small></span><span class="path-step"><b>03 Practica</b><small>Pratique</small></span><span class="path-step"><b>04 Exprésate</b><small>Exprime-toi</small></span><span class="path-step"><b>05 Misión</b><small>Mission</small></span></nav>
    <section class="lesson-block discover"><p class="eyebrow">01 · DESCUBRE</p><h2>Conecta el tema con tu vida</h2><p class="translation">Relie le thème à ta propre vie</p><p>Antes de empezar, piensa en una experiencia, una palabra o una imagen que relaciones con este tema.</p><p class="translation">Avant de commencer, pense à une expérience, un mot ou une image que tu associes à ce thème.</p></section>
    ${media?`<section class="lesson-block comprehension"><p class="eyebrow">COMPRENDE · LEE Y ESCUCHA</p><h2>${media.title}</h2><p class="translation">Lis d’abord, puis écoute sans regarder le texte.</p><div class="media-actions"><button class="button listen-button" type="button" data-speech="${id}">▶ Escuchar <small>Écouter</small></button><button class="button secondary stop-audio" type="button">■ Parar <small>Arrêter</small></button></div><article class="reading-text" lang="es">${media.text}</article><details class="glossary"><summary>Ayuda de vocabulario <small>Aide lexicale</small></summary>${media.gloss.map(g=>`<p><b>${g[0]}</b> · ${g[1]}</p>`).join('')}</details><article class="practice-card quiz media-quiz" data-answer="${media.answer}"><span class="exercise-number">?</span><h3>Comprueba lo esencial</h3><p class="translation">Vérifie l’essentiel</p><p class="quiz-prompt"><b>${media.q}</b></p>${media.options.map((o,i)=>`<button class="quiz-option" data-option="${i}">${o}</button>`).join('')}<button class="button primary check-answer" type="button">Comprobar <small>Vérifier</small></button><div class="feedback" hidden></div></article></section>`:''}
    <section class="lesson-block"><p class="eyebrow">02 · APRENDE · LÉXICO</p><h2>Mis palabras esenciales</h2><p class="translation">Mes mots essentiels</p><p>Pulsa cada tarjeta, lee en voz alta y crea una frase personal.</p><p class="translation">Clique sur chaque carte, lis à voix haute et crée une phrase personnelle.</p><div class="vocab-grid">${d.vocab.map(v=>`<button class="flip-card"><b>${v[0]}</b><small class="translation">Ver en francés · Voir en français</small><span class="fr">${v[1]}</span></button>`).join('')}</div>
    <h2 style="margin-top:2rem">La caja de herramientas</h2><p class="translation">La boîte à outils grammaticale</p><div class="grammar-grid">${d.grammar.map(g=>`<article class="grammar-card"><b>${g[0]}</b><p>${g[1]}</p><small class="translation">${g[2]}</small><em>${g[3]}</em></article>`).join('')}</div></section>
    <section class="lesson-block practice-zone"><p class="eyebrow">03 · PRACTICA</p><h2>Entrénate y comprende tus errores</h2><p class="translation">Entraîne-toi et comprends tes erreurs</p><div class="practice-grid">${practice}</div>${cloze.length?`<h2 style="margin-top:2rem">Completa las frases</h2><p class="translation">Complète les phrases</p><p>Escribe solamente la palabra que falta.</p><p class="translation">Écris uniquement le mot manquant.</p><div class="cloze-grid">${cloze.map((c,i)=>`<article class="cloze-card" data-cloze-answer="${c.answer}"><label for="cloze-${id}-${i}">${c.sentence}<small class="translation">${c.fr}</small></label><input id="cloze-${id}-${i}" type="text" autocomplete="off" spellcheck="false" aria-describedby="cloze-help-${id}-${i}"><button class="button secondary check-cloze" type="button">Corregir <small>Corriger</small></button><details id="cloze-help-${id}-${i}"><summary>Una pista <small>Un indice</small></summary>${c.hint}</details><div class="feedback" hidden></div></article>`).join('')}</div>`:''}</section>
    <section class="lesson-block pronunciation"><p class="eyebrow">🔊 PRONUNCIACIÓN</p><h2>Escucha, repite y mejora</h2><p class="translation">Écoute, répète et améliore-toi</p><p class="pronunciation-line" lang="es">${media?media.pron:'Habla despacio y articula cada palabra.'}</p><button class="button listen-button" type="button" data-pronunciation="${id}">▶ Escuchar el modelo <small>Écouter le modèle</small></button><ol class="pronunciation-steps"><li>Escucha sin repetir. <small>Écoute sans répéter.</small></li><li>Repite por grupos de palabras. <small>Répète par groupes de mots.</small></li><li>Grábate con tu teléfono y compara. <small>Enregistre-toi et compare.</small></li></ol></section>
    <section class="lesson-block production"><p class="eyebrow">04 · EXPRÉSATE</p><h2>Producción guiada</h2><p class="translation">Production guidée</p><p>${d.production||'Utiliza el vocabulario y la gramática para crear una producción personal.'}</p><p class="translation">${d.productionFr||'Utilise le vocabulaire et la grammaire pour créer une production personnelle.'}</p><div class="method-box"><b>Antes de terminar:</b><small>Avant de terminer :</small><span>✓ He respetado la consigna.</span><span>✓ He reutilizado el vocabulario.</span><span>✓ He revisado los verbos y los acuerdos.</span></div></section>
    <section class="lesson-block mission"><p class="eyebrow" style="color:#8be4d8">05 · MISIÓN FINAL</p><h2>${d.mission}</h2><p class="translation">${d.missionFr}</p><ul class="checklist">${d.checks.map(c=>`<li>✓ ${c}</li>`).join('')}</ul><button class="button complete-unit" data-complete="${id}">${state.completed.has(id)?'✓ Unidad completada':'Marcar como completada'} <small>${state.completed.has(id)?'Unité terminée':'Marquer comme terminée'}</small></button></section>
  </div>`; if(updateUrl)location.hash=`unidad/${id}`; updateProgress();
}
function updateProgress(){const total=Object.keys(lessons).length,pct=Math.round(state.completed.size/total*100);$('#progress-button').firstChild.textContent=pct+'% ';$('#progress-bar').style.width=pct+'%';$('#progress-summary').innerHTML=`Has completado <b>${state.completed.size} de ${total}</b> unidades disponibles.<span class="translation">Tu as terminé ${state.completed.size} unité(s) sur ${total} disponibles.</span>`;}
function showTool(type,updateUrl=true){
  const view=$('#tool-view'); const names={vocab:['🗂️ Banco de vocabulario','Banque de vocabulaire'],grammar:['🧠 Gramática en contexto','Grammaire en contexte'],pronunciation:['🔊 Taller de pronunciación','Atelier de prononciation'],culture:['🌎 Ventanas culturales','Fenêtres culturelles']};
  let cards='';
  if(type==='vocab')cards=Object.entries(lessons).map(([id,l])=>`<article class="resource-card"><p class="eyebrow">${l.label}</p><h3>${l.title}</h3><ul>${l.vocab.map(v=>`<li><b>${v[0]}</b><small>${v[1]}</small></li>`).join('')}</ul><button class="text-button" data-open-unit="${id}">Practicar esta unidad <small>Pratiquer cette unité</small></button></article>`).join('');
  if(type==='grammar')cards=Object.entries(lessons).map(([id,l])=>`<article class="resource-card"><p class="eyebrow">${l.label}</p><h3>${l.title}</h3>${l.grammar.map(g=>`<p><b>${g[0]}</b><small>${g[1]} · ${g[2]}</small><em>${g[3]}</em></p>`).join('')}<button class="text-button" data-open-unit="${id}">Hacer los ejercicios <small>Faire les exercices</small></button></article>`).join('');
  if(type==='pronunciation')cards=Object.entries(unitMedia).map(([id,m])=>`<article class="resource-card"><p class="eyebrow">MODELO ORAL</p><h3>${lessons[id].title}</h3><p lang="es">${m.pron}</p><button class="button listen-button" data-pronunciation="${id}">▶ Escuchar <small>Écouter</small></button></article>`).join('');
  if(type==='culture')cards=Object.entries(lessons).map(([id,l])=>`<article class="resource-card"><p class="eyebrow">${l.label}</p><h3>${l.title}</h3><p>${l.intro}</p><p class="translation">${l.introFr}</p><button class="text-button" data-open-unit="${id}">Explorar el tema <small>Explorer le thème</small></button></article>`).join('');
  view.innerHTML=`<div class="tool-view-header"><div><p class="eyebrow">CAJA DE HERRAMIENTAS</p><h2>${names[type][0]}</h2><p class="translation">${names[type][1]}</p></div><button class="button secondary close-tool" type="button">Cerrar <small>Fermer</small></button></div><div class="resource-grid">${cards}</div>`;
  view.hidden=false; if(updateUrl)location.hash=`herramienta/${type}`;
}
function speakSpanish(text){
  if(!('speechSynthesis' in window)){alert('La lectura oral no está disponible en este navegador.\nLa lecture audio n’est pas disponible dans ce navigateur.');return;}
  speechSynthesis.cancel(); const utterance=new SpeechSynthesisUtterance(text); utterance.lang='es-ES'; utterance.rate=.86;
  const voices=speechSynthesis.getVoices(); const spanish=voices.find(v=>v.lang.toLowerCase().startsWith('es')); if(spanish)utterance.voice=spanish;
  speechSynthesis.speak(utterance);
}
document.addEventListener('click',e=>{
  const tool=e.target.closest('[data-tool]'); if(tool)showTool(tool.dataset.tool);
  const openUnit=e.target.closest('[data-open-unit]'); if(openUnit)showLesson(openUnit.dataset.openUnit);
  if(e.target.closest('.close-tool')){$('#tool-view').hidden=true;location.hash='herramientas';}
  const listen=e.target.closest('[data-speech]');
  if(listen){const m=unitMedia[listen.dataset.speech];if(m)speakSpanish(m.text);}
  const pronunciation=e.target.closest('[data-pronunciation]');
  if(pronunciation){const m=unitMedia[pronunciation.dataset.pronunciation];if(m)speakSpanish(m.pron);}
  if(e.target.closest('.stop-audio')&&'speechSynthesis' in window)speechSynthesis.cancel();
  const clozeButton=e.target.closest('.check-cloze');
  if(clozeButton){
    const card=clozeButton.closest('.cloze-card'),input=card.querySelector('input'),feedback=card.querySelector('.feedback');
    const expected=card.dataset.clozeAnswer.trim(),given=input.value.trim();
    const normalize=s=>s.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    feedback.hidden=false;
    if(!given){feedback.className='feedback bad';feedback.innerHTML='Escribe una respuesta antes de corregir.<span class="translation">Écris une réponse avant de corriger.</span>';}
    else if(given.toLocaleLowerCase('es')===expected.toLocaleLowerCase('es')){feedback.className='feedback good';feedback.innerHTML='¡Correcto! La frase está completa.<span class="translation">Correct ! La phrase est complète.</span>';}
    else if(normalize(given)===normalize(expected)){feedback.className='feedback good';feedback.innerHTML=`La palabra es correcta. Revisa el acento: <b>${expected}</b>.<span class="translation">Le mot est correct. Vérifie l’accent.</span>`;}
    else{feedback.className='feedback bad';feedback.innerHTML='Todavía no. Abre la pista, observa el sujeto y vuelve a intentarlo.<span class="translation">Pas encore. Ouvre l’indice, observe le sujet et réessaie.</span>';}
  }
});
document.addEventListener('click',e=>{const level=e.target.closest('[data-level]');if(level)showCatalog(level.dataset.level);const unit=e.target.closest('[data-unit]');if(unit)showLesson(unit.dataset.unit);const back=e.target.closest('[data-back]');if(back)showCatalog(back.dataset.back);const flip=e.target.closest('.flip-card');if(flip)flip.classList.toggle('revealed');const option=e.target.closest('.quiz-option');if(option){option.parentElement.querySelectorAll('.quiz-option').forEach(x=>x.classList.remove('selected'));option.classList.add('selected')}const check=e.target.closest('.check-answer');if(check){const quiz=check.closest('.quiz'),chosen=quiz.querySelector('.selected'),feedback=quiz.querySelector('.feedback');feedback.hidden=false;if(!chosen){feedback.className='feedback bad';feedback.innerHTML='Elige primero una respuesta.<span class="translation">Choisis d’abord une réponse.</span>'}else if(chosen.dataset.option===quiz.dataset.answer){feedback.className='feedback good';feedback.innerHTML='¡Muy bien! Es la respuesta correcta.<span class="translation">Très bien ! C’est la bonne réponse.</span>'}else{feedback.className='feedback bad';feedback.innerHTML='Todavía no. Observa el sujeto y vuelve a intentarlo.<span class="translation">Pas encore. Observe le sujet et réessaie.</span>'}}const complete=e.target.closest('[data-complete]');if(complete){state.completed.add(complete.dataset.complete);localStorage.setItem('ee-completed',JSON.stringify([...state.completed]));complete.innerHTML='✓ Unidad completada <small>Unité terminée</small>';updateProgress()}});
$('.menu-button').addEventListener('click',e=>{const open=$('#main-nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open)});$('#back-levels').addEventListener('click',()=>{$('#catalog').hidden=true;$('#niveles').hidden=false;location.hash='niveles'});$('#continue-button').addEventListener('click',()=>state.last?showLesson(state.last):location.hash='niveles');$('#progress-button').addEventListener('click',()=>$('#progress-dialog').showModal());$('.dialog-close').addEventListener('click',()=>$('#progress-dialog').close());$('#reset-progress').addEventListener('click',()=>{state.completed.clear();localStorage.removeItem('ee-completed');updateProgress();$('#progress-dialog').close()});
function routeFromHash(){
  const route=decodeURIComponent(location.hash.slice(1)); const [kind,id]=route.split('/');
  if(kind==='unidad'&&lessons[id]){showLesson(id,false);return;}
  if(kind==='nivel'&&levels.some(l=>l.id===id)){showCatalog(id,false);return;}
  if(kind==='herramienta'&&['vocab','grammar','pronunciation','culture'].includes(id)){showTool(id,false);return;}
  $('#catalog').hidden=true; $('#unit-view').hidden=true; $('#tool-view').hidden=true; $('#niveles').hidden=false;
}
window.addEventListener('hashchange',routeFromHash);
renderLevels();updateProgress();routeFromHash();
