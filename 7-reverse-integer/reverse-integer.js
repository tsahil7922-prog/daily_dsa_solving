/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
      let revrValue =0
let isNegative = x < 0
    let org = Math.abs(x)
    while(org>0)
    {
      let lastDigit = org%10
      revrValue = revrValue * 10 +  lastDigit

org = Math.floor(org / 10);
        
    }
  if (isNegative)  revrValue = -revrValue
  if(revrValue < - (2 ** 31) || revrValue > (2 ** 31 - 1)){
    return 0
  }
  return revrValue
};