/**
 * 在前面的例子中，我们调用了两次await，每次会等待一秒钟（总共2秒）。
 *  不过我们可以并行化处理它，因为a和b使用Promise.all相互依赖
 */

function doubleAfterSec(param){
  return new Promise(resolve=>{
    setTimeout(resolve(param*2),1000);
  })
}

 async function doubleAndAdd(a,b) {
   [a,b] = await Promise.all([doubleAfterSec(a),doubleAfterSec(b)])
   return a+b;
 }

 //  结果
doubleAndAdd(1,2).then((value)=>{
  console.log(value)
})