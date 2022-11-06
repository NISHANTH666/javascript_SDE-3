let str="In space,no onecan hear you code";
console.log(str.split())
console.log(str.split('e'))
console.log(str.split(' '))
console.log(str.split(''))

let arr=['B','n','n',5]
console.log(arr.join())
console.log(arr.join('a'))
console.log(arr.join(' '))
console.log(arr.join(''))

console.log(str)
console.log(arr)
console.log("affected")

let s="water,space suits,food,plasma sword,batteries"
let a=s.split(",");
let res=""
for(let i=0;i<a.length;i++){
    res=res+a[i]+" ";
}
console.log(res)