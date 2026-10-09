import React,{useEffect,useRef,useState} from 'react';
export default function NewsList({children}){
 const ref=useRef(null),[height,setHeight]=useState(null);
 useEffect(()=>{const el=ref.current;const items=[...el.children].slice(0,3);const measure=()=>setHeight(Math.ceil(items.reduce((sum,item)=>sum+item.getBoundingClientRect().height,0)));const observer=new ResizeObserver(measure);items.forEach(item=>observer.observe(item));measure();return()=>observer.disconnect()},[]);
 return <div ref={ref} className="news-list" role="region" aria-label="News updates, scroll for older news" tabIndex={0} style={{maxHeight:height?height+'px':undefined}}>{children}</div>;
}
