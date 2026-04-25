let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// nom
nom = nom.trim();
if (nom === "") nom = "Inconnu";

// age
let ageNum = parseInt(age);

// email
let emailValide = email.includes("@") && email.split("@")[1].includes(".");

// score
let score = parseInt(scoreJeu);
if (Number.isNaN(score)) score = 0;

// estAdmin
let admin = (estAdmin === "true");

// derniereConnexion
let last = derniereConnexion ?? "Jamais connecté";

// connexions
let nb = parseInt(nombreConnexions);
let nbAff = (nb === 0) ? "Aucune connexion" : nb;

// affichage
console.log("===== RAPPORT =====");
console.log("nom:", nom);
console.log("age:", ageNum);
console.log("email:", emailValide ? "valide" : "invalide");
console.log("score:", score);
console.log("estAdmin:", admin);
console.log("derniereConnexion:", last);
console.log("connexions:", nbAff);