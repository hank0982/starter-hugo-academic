import React from 'react';
export function Arrow({down=false}){return <svg aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" style={{display:'inline-block',verticalAlign:'-.12em',transform:down?'rotate(90deg)':undefined}}><path d="M5 19 19 5M7 5h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
export function ArrowText({children}){return String(children).split(/([↗↘]\uFE0E?)/).map((part,i)=>part.startsWith('↗')||part.startsWith('↘')?<Arrow key={i} down={part.startsWith('↘')}/>:part)}
