//  ES8新特性
/**
 * finally()是一个添加到Promise的新实例方法。 其主旨是允许在resolve 或 reject后运行回调以帮助清理。
 * finally的回调被调用时而没有任何参数，同时任何情况下都会被执行。
 */

 let myPromise = new Promise((resolve,reject)=>{
   resolve(123)
 })

 myPromise.then((value)=>{
  console.log(value)
 }).catch((e)=>{
   console.log(e)
 }).finally(()=>{
   console.log('最后一定会执行')
 })