import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Group,Mesh,BoxGeometry,MeshStandardMaterial,Sprite,SpriteMaterial} from 'three';
import {updateCharacterLighting} from '../src/stage-materials.js';
test('character spotlight changes tolerate speech-bubble sprites',()=>{
 const group=new Group(),material=new MeshStandardMaterial(),spriteMaterial=new SpriteMaterial();
 group.add(new Mesh(new BoxGeometry(),material),new Sprite(spriteMaterial));
 for(const highlighted of [true,false,true]){
  assert.doesNotThrow(()=>updateCharacterLighting(group,highlighted));
  assert.equal(material.emissive.getHex(),highlighted?0x284858:0);
 }
 assert.equal(spriteMaterial.opacity,1);
});
