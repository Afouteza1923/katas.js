//! Ejercicio 1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log (avengers [0]);

//! Ejercicio 1.2

avengers [0] = "IRONMAN";
console.log (avengers);

//! Ejercicio 1.3

console.log (avengers.length);

//! Ejercicio 1.4

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ("Morty", "Summer");
console.log (rickAndMortyCharacters);
console.log (rickAndMortyCharacters[rickAndMortyCharacters.length -1]);

//! Ejercicio 1.5

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop ("Lapiz Lopez");
rickAndMortyCharacters.pop ([rickAndMortyCharacters.length - 1]);
rickAndMortyCharacters.pop ();
console.log (rickAndMortyCharacters [0], rickAndMortyCharacters [rickAndMortyCharacters.length - 1]);

//! Ejercicio 1.6

rickAndMortyCharacters.splice (1, 1);
console.log (rickAndMortyCharacters);