//  ES7新特性
/**
 * 此方法返回给定对象的所有属性的全部详细信息（包括getter方法 get和 setter方法 set）
 * 添加它的主要目的是允许浅层拷贝/克隆对象到另一个对象，该对象也复制getter和setter函数而不是Object.assign。
 * Object.assign用于浅层拷贝除了原始源对象的getter和setter函数之外的所有细节。(注意)
 */

 let Animal = {
  cat:1,
  dog:2,
  pig:3,
  get Name(){
    return this.name;
  },
  set Name(name){
    this.name = name
  }
 }

 console.log(Animal)

 console.log(Object.getOwnPropertyDescriptor(Animal,'Name'))

 let xht = Object.assign({},Animal);  //  浅拷贝  没有拷贝get set函数
 console.log('浅拷贝',xht)

 console.log('-------------有了Object.getOwnPropertyDescriptor之后')

 const newXht = Object.defineProperties({},Object.getOwnPropertyDescriptor(Animal));
 console.log(Object.getOwnPropertyDescriptor(newXht,'Name'))
 console.log(newXht)  //  可以把set get函数拷贝过来