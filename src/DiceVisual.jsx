import React,{useState,useRef,useEffect} from 'react';
import './research-visuals.css';

const faces=[
 {name:'front',value:6,pips:[0,2,3,5,6,8]},
 {name:'back',value:1,pips:[4]},
 {name:'right',value:3,pips:[0,4,8]},
 {name:'left',value:4,pips:[0,2,6,8]},
 {name:'top',value:2,pips:[0,8]},
 {name:'bottom',value:5,pips:[0,2,4,6,8]},
];

export default function DiceVisual(){
 const [run,setRun]=useState(0),[paused,setPaused]=useState(false),[visible,setVisible]=useState(false);
 const ref=useRef(null);
 useEffect(()=>{
  const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.35});
  observer.observe(ref.current);
  return()=>observer.disconnect();
 },[]);
 return <div ref={ref} className={'dice-story'+(paused||!visible?' is-paused':'')}>
  <div key={run} className="dice-scene" role="img" aria-label="Three fix it prompts fly into a three-dimensional die, making it roll until it lands on six and sparkles.">
   <div className="dice-world"><div className="dice-shadow"/>
   <div className="dice-prompts" aria-hidden="true">{[0,1,2].map(i=><span key={i} className={"dice-fix dice-fix-"+i}>fix it</span>)}</div>
   <div className="dice-cube" aria-hidden="true">
    {faces.map(face=><div key={face.name} className={'dice-face face-'+face.name}>
     {Array.from({length:9},(_,i)=><span key={i} className={face.pips.includes(i)?'pip':'empty-pip'}/>)}
    </div>)}
   </div>
   <div className="dice-sparkles" aria-hidden="true">{Array.from({length:6},(_,i)=><svg key={i} className={'sparkle sparkle-'+i} viewBox="0 0 24 24"><path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" fill="currentColor"/></svg>)}</div>
   </div>
  </div>
  <div className="dice-controls">
   <button type="button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'Resume':'Pause'} animation</button>
   <button type="button" onClick={()=>{setRun(run+1);setPaused(false)}}>Roll again</button>
  </div>
 </div>;
}
