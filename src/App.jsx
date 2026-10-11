import React,{useState} from 'react';
export {papers} from './research-data.js';
import HeroSection from './HeroSection.jsx';
import ResearchSection from './ResearchSection.jsx';
import NewsSection from './NewsSection.jsx';
import AboutSection from './AboutSection.jsx';
import PublicationsSection from './PublicationsSection.jsx';
import ContactSection from './ContactSection.jsx';
export default function App(){const [lens,setLens]=useState('with');return <div className={'site lens-'+lens}><a className="skip" href="#main">Skip to content</a><header><a className="wordmark" href="#">YHC<span className="dot"/></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#research">Research</a><a href="#news">News</a><a href="/posts/">Posts</a><a href="#publications">Publications</a><a href="#contact">Contact <span>↗︎</span></a></nav></header><main id="main" tabIndex={-1}><HeroSection lens={lens} setLens={setLens}/><ResearchSection lens={lens}/><NewsSection /><AboutSection /><PublicationsSection /><ContactSection /></main><footer><a className="wordmark" href="#">YHC<span className="dot"/></a><span>Understanding software creators. With curiosity.</span><a href="#">Back to top ↑</a></footer></div>}
