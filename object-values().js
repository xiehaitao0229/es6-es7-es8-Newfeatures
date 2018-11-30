//  ES7特性
//  Object.values()是一个与Object.keys()类似的新函数，不过它返回的是Object自身属性的所有值，不包括原型链中的任何值。

const animal = {cat:1,dog:2,pig:3};

//  ES6 获取对象的值
const values1 = Object.keys(animal).map(key=>animal[key])
console.log(values1) //  [1,2,3]

//  ES7 获取对象的值
const values2 = Object.values(animal);
console.log(values2)  //  [1,2,3]
