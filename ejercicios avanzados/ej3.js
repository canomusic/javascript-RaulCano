const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
    },
  },
];

// Objeto para contar cuántas veces aparece cada sonido
const soundCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (soundCount[sound]) {
      soundCount[sound]++;
    } else {
      soundCount[sound] = 1;
    }
  }
}

console.log("Cantidad de veces que cada sonido ha sido agregado como favorito:");
console.log(soundCount);
