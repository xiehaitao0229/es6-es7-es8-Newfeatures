//  ES7新特性
/**
 * 在函数参数中添加尾随逗号
 * 这是一个次要更新，允许我们在最后一个函数参数后面有逗号。 为什么？ 
 * 帮助使用像git blame这样的工具来确保只有新的开发人员的代码被标注。
 */

 function Person(name,age,){
   this.name = name;
   this.age = age;
 }

 console.log(Person)