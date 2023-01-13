// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

console.log("sort 0, 1 and 2  && sort colors");









let arr = [2, 0,1,0 ,2,2,2,1,0 ,1,2,2,0 ,1,0 ,1,0 ,1,0,0,0,0,2,1,1,1,1,2]
let n = arr.length

function sorting(arr) {
  let i =0
  let j =0
  let k =arr.length - 1

  while(i <= k){
    if(arr[i] == 0){
      [arr[i],arr[j]] = [arr[j],arr[i]];
      i++;
      j++;
    }
    else if(arr[i] == 1){
      i++;
    }
    else{
      [arr[i],arr[k]] = [arr[k],arr[i]];
      k--;
    }
  }
  return arr
}
console.log(sorting(arr))