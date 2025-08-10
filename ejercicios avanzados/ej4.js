function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// 🧪 Ejemplos de uso:
console.log(findArrayIndex(mainCharacters, "Leia"));       //  1
console.log(findArrayIndex(mainCharacters, "Rey"));        //  4
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));    //  6
console.log(findArrayIndex(mainCharacters, "Yoda"));       //  -1 (no está)

//Segunda parte ejercicio 4


function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos de uso:
console.log(removeItem([...mainCharacters], "Leia"));  
// ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

console.log(removeItem([...mainCharacters], "Rey"));   
// ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]

console.log(removeItem([...mainCharacters], "Yoda"));  
// ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"] (sin cambios)
