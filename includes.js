//  ES7 Array.prototype.includes
// includes是Array上的一个简单实例方法，能帮助我们轻松查找某项是否存在于数组中(处理 NaN的方式与 indexOf不同)。

const arr = [1,2,3,4,NaN];

//  indexOf
if(arr.indexOf(3)>=0){
  console.log('indexOf: true')
}

//  inclues
if(arr.includes(3)){
  console.log('includes: true')
}

arr.indexOf(NaN) // -1  不存在arr中

arr.includes(NaN) //  true 存在arr中
