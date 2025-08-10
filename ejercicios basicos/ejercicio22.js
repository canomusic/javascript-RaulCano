const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan && fruitIndex < fruits.length) {
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true; // Ya que es fruta
    fruitIndex++;
  }
}

console.log(foodSchedule);
