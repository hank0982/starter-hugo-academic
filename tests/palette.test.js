import {test} from 'node:test';import assert from 'node:assert/strict';
function luminance(hex){const rgb=hex.match(/[a-f0-9]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722}
function contrast(a,b){const values=[luminance(a),luminance(b)].sort((a,b)=>b-a);return(values[0]+.05)/(values[1]+.05)}
const pairs=[['Human-AI link','#174b83','#f0f5fb'],['Human-AI tag','#174b83','#deebfa'],['Traces link','#654900','#faf6e8'],['Traces tag','#654900','#f8ecc0'],['Pre-AI link','#842c40','#fbf1f3'],['Pre-AI tag','#842c40','#f6dfe5'],['Secondary text','#465b70','#f0f5fb'],['Blue controller','#f5f7fa','#294d76'],['Yellow controller','#f5f7fa','#64572d'],['Burgundy controller','#f5f7fa','#633341']];
for(const[name,fg,bg]of pairs)test(name+' meets WCAG AA normal-text contrast',()=>{const ratio=contrast(fg,bg);assert.ok(ratio>=4.5,`${name}: ${ratio.toFixed(2)}:1`);console.log(`${name}: ${ratio.toFixed(2)}:1`)});
