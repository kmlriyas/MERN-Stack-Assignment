function lengthOfLIS(nums) {
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array");
  }
  if (nums.length === 0) return 0;

  const dp = [];

  for (let num of nums) {
    // Binary search to find the correct position of `num` in `dp`
    let low = 0;
    let high = dp.length;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (dp[mid] < num) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    // If low is equal to dp.length, it means num is greater than all elements in dp
    if (low === dp.length) {
      dp.push(num);
    } else {
      dp[low] = num; // Replace element at index `low` with `num`
    }
  }

  return dp.length;
}

// Example usage
try {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  console.log(lengthOfLIS(nums)); // Output: 4
} catch (error) {
  console.error(error.message);
}
