function doubleAfterSec(param){
  return new Promise(resolve=>{
    setTimeout(resolve(param*2),1000);
  })
}


async function doubleAndAdd(a,b) {
  a = await doubleAfterSec(a);
  b = await doubleAfterSec(b);
  return a+b;
}

//  结果
doubleAndAdd(1,2).then((value)=>{
  console.log(value)
})

