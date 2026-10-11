import projects from './projects.json';
import paperData from './paper-data.json';
const paperRecords=[
{year:'2026',venue:'FSE',title:'Building Software by Rolling the Dice: A Qualitative Study of Vibe Coding',short:'Building software by rolling the dice',desc:'How do people actually build with AI? Exploring prompting, trust, and the uncertainty of vibe coding.',url:'https://doi.org/10.1145/3797105',lens:'with',tags:'Vibe coding · Human-AI interaction'},
{year:'2025',venue:'MSR',title:'Learning from Mistakes: Understanding Ad-hoc Logs through Analyzing Accidental Commits',short:'Learning from mistakes',desc:'Accidentally committed logs offer a window into how developers understand their code.',url:'https://arxiv.org/abs/2501.09892',lens:'understand',tags:'Repository mining · Developer practices'},
{year:'2023',venue:'HICSS',title:'Adapting Software Teams to the New Normal: An Early Case Study of Transitioning to Hybrid Work Under COVID-19',url:'https://scholarspace.manoa.hawaii.edu/items/a921364a-e702-4432-8883-ee6f18803286'},
{year:'2023',venue:'IEEE Software',title:'Co-Designing for a Hybrid Workplace Experience in Software Development',url:'https://doi.org/10.1109/MS.2022.3229894'},
{year:'2021',venue:'CSCW',title:'“I can show what I really like.” Eliciting Preferences via Quadratic Voting',url:'https://doi.org/10.1145/3449281'}];
const existingPapers=paperRecords.map((p,i)=>({...p,award:i===0?'ACM SIGSOFT Distinguished Paper Award':null,originalUrl:p.url,url:'/research/'+['2026-fse','2025-msr','2023hicss','ieee-software-2023','quadratic-voting'][i]+'/'}));
export const papers=[{...paperData.at(-1),url:'/research/2026-emse/'},...existingPapers];
export const researchWork=[
{...existingPapers[0],lens:'with',visualType:'dice',icon:'⚄',visualLabel:'prompt → build → inspect → repeat',status:'Published · FSE 2026'},
{...existingPapers[1],lens:'understand',visualType:'deleted-logs',icon:'⌘',visualLabel:'logs → traces → understanding',status:'Published · MSR 2025'},
{...paperData.at(-1),url:'/research/2026-emse/',short:'Following breadcrumbs in code',lens:'understand',visualType:'breadcrumbs',icon:'⋯',visualLabel:'Java · JavaScript · Python',desc:'Following the traces of runtime comprehension across three languages. A journal follow-up to Learning from Mistakes.',status:'Accepted · EMSE'},
...existingPapers.slice(2,4).map((p,i)=>({...p,lens:'collaboration',icon:i===0?'⇄':'◈',short:i===0?'Adapting software teams to hybrid work':'Co-designing the hybrid workplace',desc:i===0?'Understanding software teams’ experiences and preferences as they transition to hybrid work.':'Helping software practitioners shape their hybrid workplace together through co-design workshops.',visualLabel:'people → teams → collaboration',status:'Published'})),
...projects.map((p,i)=>({...p,visualType:i===3?'swarm':null,url:p.recruiting?'/opportunities/#project-'+i:'/projects/'+(i===1?'llm-call-tracing':'managing-ai-agents')+'/',icon:['⇄','⌁','⌂','◎'][i],visualLabel:['libraries → convergence or divergence','tests → calls → behavior','people + agents + teams','interleave → switch → coordinate'][i]}))];

export const spotlights=[{id:'understand',icon:'♙',title:'Traces of creation',caption:'What do code, tests, logs, and library choices reveal about how software is created?'},{id:'collaboration',icon:'♙ ♙',title:'Pre-AI: Developer collaboration',caption:'Understand how people collaborate to create software.'},{id:'with',icon:'▧',title:'Human-AI collaboration',caption:'Understand people, software, and AI agents together in the workspace.'}];
