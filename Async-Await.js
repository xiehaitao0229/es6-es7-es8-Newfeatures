//  ES7 新特性
/**
 * 到目前为止，这是最重要和最有用的功能。 异步函数允许我们不必处理回调并使整个代码看起来很简单
 * async关键字告诉JavaScript编译器以不同方式处理函数。 
 * 只要到达该函数中的await关键字，编译器就会暂停。
 * 它假定await之后的表达式返回一个promise并等待，直到promise被解决或被拒绝，然后才进一步移动。
 */

 function getUser(userId){
   return new Promise(resolve=>{
     setTimeout(()=>{
       resolve('xht')
     },1000)
   })
 }

 function getBalance(user){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       if(user=='xht'){
         resolve('$1000')
       }else{
         reject('unknown user')
       }
     },1000)
   })
 }

 //  ES6
 function getAccount(userId){
   getUser(userId)
    .then(getBalance)
    .then(account=>{
      console.log(account)
    })
 }

 //  ES7
 async function  getAccount2(userId) {
   let user = await getUser(userId);
   let account = await getBalance(user);
   console.log(account)
 }