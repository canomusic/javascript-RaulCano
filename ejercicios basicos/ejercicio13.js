function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    return { found: true, position: index };
  } else {
    return false;
  }
}

// Ejemplo de uso:
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

console.log(nameFinder(names, 'Natasha')); // { found: true, position: 3 }
console.log(nameFinder(names, 'Bob'));     // false
