const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const veganMeals = [];

for (const meal of foodSchedule) {
    if (meal.isVegan) {
        veganMeals.push (meal.name)
    } else {
        const fruit = fruits [Math.floor (Math.random () * fruits.length)];
        if (!veganMeals.includes (fruit)) {
            veganMeals.push (fruit);
        }
    }
}

console.log (veganMeals);