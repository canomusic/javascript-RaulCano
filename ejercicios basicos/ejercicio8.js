// Ejercicio 8
// Buscar la palabra más larga:
// Completa la función que, tomando un array de strings como argumento, devuelva el más largo.
// En caso de que dos strings tengan la misma longitud, deberá devolver el primero.

function findLongestWord(stringList) {
  let longest = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }

  return longest;
}

// Prueba con el array de Avengers
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
console.log(findLongestWord(avengers)); // Resultado: "Captain A."
