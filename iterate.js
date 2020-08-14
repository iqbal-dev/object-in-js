
const obj = {
    x: 10,
    y: 20,
    z: 30
    
}
// console.log('x' in obj);
for (let value in obj) {
    console.log(value,obj[value]);
}