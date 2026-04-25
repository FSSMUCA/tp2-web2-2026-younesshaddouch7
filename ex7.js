let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total:", sousTotal);

let reduction = (codePromo != null && estMembre)
  ? sousTotal * reductionPourcentage / 100
  : 0;

console.log("Réduction:", reduction);

let total = sousTotal - reduction;
console.log("Total:", total);

let paiement = soldeCompte >= total;

console.log(paiement ? "Paiement accepté" : "Solde insuffisant");

if (paiement) {
  soldeCompte -= total;
}

console.log("===== RÉCAP =====");
console.log("Produit:", nomProduit);
console.log("Total:", total);
console.log("Solde:", soldeCompte);