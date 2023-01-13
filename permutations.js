// permutations;

let nums = [1,2,3];

const permute = (nums) => {
    let res = [];
    let n = nums.length;

    const dfs = (i, nums) => {
        if (i === n) {
            res.push(nums.slice());
            return;
        }

        for (let j = i; j < n; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    dfs(0, nums);
    return res;
}

console.log(permute(nums))