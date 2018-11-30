//  ES7特性
/**
 * Object.entries()与Object.keys相关，但它并不是仅返回键，而是以数组方式返回键和值。
 * 这样一来，在循环中使用对象或将对象转换为Maps等操作将会变得非常简单。
 *  
 * */  
 
const animal = {cat:1,dog:2,pig:3};

//  ES6
Object.keys(animal).forEach(function(key){
  console.log('key: '+key+' value: '+ animal[key])
})

console.log('-----------------')
//  ES7
for(let [key,value] of Object.entries(animal)){
  console.log(`key: ${key} value: ${value}`)
}