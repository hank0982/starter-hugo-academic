import React from 'react';
import {Arrow} from './Arrow.jsx';
export default function SwarmVisual(){return <div className="swarm-visual" aria-hidden="true"><div className="agent-lane"><span>Agent A</span><i/><i/><i/></div><div className="agent-lane"><span>Agent B</span><i/><i/><i/></div><div className="agent-lane"><span>Agent C</span><i/><i/><i/></div><div className="switch-path"><Arrow down/> <span><Arrow/></span> <Arrow down/></div><div className="creator-label">one creator · many parallel tasks</div></div>}
