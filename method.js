

const obj = {
    x: 10,
    y: 20,
    z: 30
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


const obj2 = Object.assign({},obj);
obj2.x = 100;
console.log(obj2)
console.log(obj);