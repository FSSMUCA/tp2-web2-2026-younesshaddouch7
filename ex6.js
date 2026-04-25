let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Partie A
console.log(nom ?? "valeur par défaut");
console.log(age ?? "valeur par défaut");
console.log(ville ?? "valeur par défaut");
console.log(score ?? "valeur par défaut");
console.log(actif ?? "valeur par défaut");

// Partie B
console.log(nom || "valeur par défaut");
console.log(age || "valeur par défaut");
console.log(ville || "valeur par défaut");
console.log(score || "valeur par défaut");
console.log(actif || "valeur par défaut");

// Partie C
console.log("nom :", (nom ?? "x") === (nom || "x") ? "même" : "différent");
console.log("age :", (age ?? "x") === (age || "x") ? "même" : "différent");
console.log("ville :", (ville ?? "x") === (ville || "x") ? "même" : "différent");
console.log("score :", (score ?? "x") === (score || "x") ? "même" : "différent");
console.log("actif :", (actif ?? "x") === (actif || "x") ? "même" : "différent");