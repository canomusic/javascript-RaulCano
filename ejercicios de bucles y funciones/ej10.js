const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return `La capital de ${country} es ${capitals[country]}.`;
  } else {
    return `No se encontró la capital de ${country}.`;
  }
}

// Ejemplos de uso:
console.log(getCapital('France'));    // La capital de France es Paris.
console.log(getCapital('Brazil'));    // No se encontró la capital de Brazil.
