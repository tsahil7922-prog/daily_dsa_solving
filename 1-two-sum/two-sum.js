/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let obj ={}
   for(let i=0;i<nums.length;i++){
     let goal = target - nums[i]
     if(obj[goal] !=undefined){
        return [obj[goal], i];
     }else{
        obj[nums[i]] = i
     }
   }
};


twoSum([2,7,11,15],9)