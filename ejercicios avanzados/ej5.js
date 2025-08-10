function rollDice(numFaces) {
  // Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido)
  // Multiplicamos por numFaces para ajustar el rango y luego usamos Math.floor para redondear hacia abajo
  // Sumamos 1 para que el resultado vaya de 1 a numFaces (en lugar de 0 a numFaces-1)
  return Math.floor(Math.random() * numFaces) + 1;
}

// Ejemplos de uso:
console.log(rollDice(6));  // Número aleatorio entre 1 y 6
console.log(rollDice(20)); // Número aleatorio entre 1 y 20
console.log(rollDice(4));  // Número aleatorio entre 1 y 4
