function averageWord(list) {
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      // Si es número, lo sumamos directamente
      sum += list[i];
    } else if (typeof list[i] === 'string') {
      // Si es string, sumamos su longitud
      sum += list[i].length;
    }
  }

  // Devolvemos el resultado final
  return sum;
}
