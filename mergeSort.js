// Merge Sort

let nums = [15, 5, 8, 6, 18, 4, 1, 22, 44, 33]

const mergeSort = (nums) => {
    
    if (nums.length < 2) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        }
        else {
            sorted.push(right.shift())
        }
    }
    const ans = [...sorted, ...left, ...right]
    return ans;
}

console.log(mergeSort(nums))