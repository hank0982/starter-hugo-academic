export function updateCharacterLighting(group, highlighted) {
  group.traverse(object => {
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    for (const material of materials) {
      if (!material?.emissive) continue;
      material.emissive.set(highlighted ? 0x284858 : 0x000000);
      material.emissiveIntensity = 0.3;
    }
  });
}
