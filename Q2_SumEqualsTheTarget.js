function twoSum(nums, target) {
  // Create an empty object to store the indices of the complements
  const map = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.hasOwnProperty(complement)) {
      // If found, return the indices
      return [map[complement], i];
    }

    // Store the current number's index in the map
    map[nums[i]] = i;
  }

  // Handle the case when no solution is found (though the prompt assumes there is always exactly one solution)
  throw new Error("No two numbers add up to the target.");
}

const nums = [2, 7, 11, 15];
const target = 9;

try {
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
} catch (error) {
  console.error(error.message);
}
