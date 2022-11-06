const cargohold=["oxygen tanks","space suits","parrot","instruction manual","meal packs","slinky","security blanks"];
cargohold[5]="space tether";
console.log(cargohold)

console.log(cargohold.pop());
console.log(cargohold)

console.log(cargohold.shift());
console.log(cargohold)

cargohold.unshift(1138)
cargohold.push('20 meters')
console.log(`${cargohold}`)
console.log(cargohold.length)