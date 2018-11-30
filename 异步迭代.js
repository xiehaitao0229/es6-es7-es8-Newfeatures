//  ES8新特性
/**
 * 这是一个非常有用的功能。 它允许我们轻松的创建异步代码循环！
 * 此功能添加了一个新的“for-await-of”循环，允许我们在循环中调用返回promises（或带有一堆promise的Arrays）的异步函数。
 * 更酷的是循环会在在进行下一个循环之前等待每个Promise
 */

 const promises = [
   new Promise(resolve=>resolve(1)),
   new Promise(resolve=>resolve(2)),
   new Promise(resolve=>resolve(3))
 ]

 //  以前写法
 async function test1() {
   for(const obj of promises){
     console.log(obj)
   }
 }

 async function test2() {
  for await(const obj of promises){
    console.log(obj)
  }
 }

 test1()  //  promise,promise,promise

 test2() //  1,2,3

