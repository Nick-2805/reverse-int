module.exports = function reverse (n) {
//  let positiveNum;
//   if(n <0) {
//     positiveNum = -n;
//   } else {
//     positiveNum = n
//   }
  let positiveNum = Math.abs(n)
 let arr = String(positiveNum).split('')
  let reverseNumb = Number(arr.reverse().join('')) 
  return reverseNumb
}
