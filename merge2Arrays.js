console.log("Merge 2 Sorted Array")

let nums1 = [1, 2, 3]
let nums2 = [2, 5, 6]

function merge(nums1, nums2) {
  let res = []

  let i = 0      // running on nums1
  let j = 0      // running on nums2
  let k = 0      // running on res the result

  while (i < nums1.length && j < nums2.length) {

    if (nums1[i] < nums2[j]) {
      res[k] = nums1[i]
      i++;
      k++;

    } else {
      res[k] = nums2[j]
      j++;
      k++;
    }





    
  }    
  // <---------------------- part one done

  while (i < nums1.length) {
    res[k] = nums1[i]
    i++;
    k++;
  }

  while (j < nums2.length) {
    res[k] = nums2[j]
    j++;
    k++;
  }

  return res;
}
console.log(merge(nums1, nums2))