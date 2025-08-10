function average(numberList) {
  // Inicializamos la suma en 0
  let sum = 0;

  // Recorremos todos los números del array y los sumamos
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  // Devolvemos la suma dividida entre la cantidad de números (promedio)
  return sum / numberList.length;
}
