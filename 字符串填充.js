//  ES7新特性
/**
 * String 中添加了两个实例方法—— String.prototype.padStart和String.prototype.padEnd，
 * 允许将空字符串或其他字符串附加/前置到原始字符串的开头或结尾。
 */


 console.log('5'.padStart(10))  //            5
 console.log('5'.padStart(10,'='))  //  =========5
 console.log('5'.padEnd(10))  // 5
 console.log('5'.padEnd(10,'*'))  // 5*********