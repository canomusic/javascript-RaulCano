const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor del primer índice
  const temp = array[index1];
  // Intercambiamos los valores
  array[index1] = array[index2];
  array[index2] = temp;
  
  return array;
}

// Ejemplo de uso:
console.log(swap(fantasticFour, 0, 2));
// Resultado: ["La mujer invisible", "Mr. Fantástico", "La antorcha humana", "La cosa"]
