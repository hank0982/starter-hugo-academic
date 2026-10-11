import React from 'react';
import NewsList from './NewsList.jsx';
import {ArrowText} from './Arrow.jsx';
import {Markdown} from './Pages.jsx';
import news from './news.json';

export default function NewsSection({}){return <section id="news" className="news-section"><p className="eyebrow">LATEST / NEWS</p><h2>A few <span className="serif">updates.</span></h2><NewsList>{news.map((item,i)=><article className="news-item" key={i}><time dateTime={item.date}>{item.date}</time><div className="news-content"><Markdown source={item.text}/>{item.publicationUrl&&<a className="text-link news-paper-link" href={item.publicationUrl}><ArrowText>{item.publicationLinkLabel||'Read the paper ↗︎'}</ArrowText></a>}</div></article>)}</NewsList></section>}
