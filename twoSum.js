function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < length.nums; i++) {
        const needed = target - nums[i];
        if (seen[needed] !== undefined) {
            return [seen[needed], i]
        }
    }
}