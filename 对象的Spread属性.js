//  ES7新特性

let {firstName,age,...remaining} = {
  firstName:'xie',
  lastName:'haitao',
  age:20,
  sex:'男'
}

console.log(firstName)  //  xie
console.log(age)  //  20
console.log(remaining) //  {lastName:'haitao',sex:'男'}