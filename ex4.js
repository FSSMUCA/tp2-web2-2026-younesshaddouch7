let pairs = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let count = 0;

for (let i = 0; i < pairs.length; i++) {
  let x = pairs[i][0];
  let y = pairs[i][1];

  let eq = (x == y);
  let seq = (x === y);

  if (eq && !seq) count++;

  console.log(x + " == " + y + " -> " + eq + " | " +
              x + " === " + y + " -> " + seq);
}

console.log("---");
console.log(count + " paire(s) où == et === donnent des résultats différents");