const holdCabinet1=['duct tape','gum',3.14,false,6.022e23]
const holdCabinet2=['orange drink','nerf toys','camera',42,'parsnip']

//console.log(holdCabinet1.concat(holdCabinet2))
const b=holdCabinet1.concat(holdCabinet2)
console.log(b)

console.log(holdCabinet1.slice(1,3))
console.log(holdCabinet2.slice(1,3))
console.log(holdCabinet1)
console.log(holdCabinet2)
console.log("doesnot affect the original arrays")

console.log(holdCabinet1.reverse())
console.log(holdCabinet2.sort())
console.log(holdCabinet1)
console.log(holdCabinet2)
console.log("original arrays are affected")

