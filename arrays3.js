const cargoHold= ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold.splice(3,0,'keys')
console.log(cargoHold)

let a=cargoHold.indexOf('instruction manual')
cargoHold.splice(a,1);
console.log(cargoHold);

cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold)






