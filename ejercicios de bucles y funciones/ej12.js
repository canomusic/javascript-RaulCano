const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const found = mutants.some(mutant => mutant.power === power);
  
  if (found) {
    return `Mutante(s) con el poder "${power}" encontrado(s).`;
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`;
  }
}

// Ejemplo de uso
console.log(findMutantByPower(mutants, 'telepathy')); 
//  Mutante(s) con el poder "telepathy" encontrado(s).

console.log(findMutantByPower(mutants, 'invisibility')); 
//  No se encontró ningún mutante con el poder "invisibility".
