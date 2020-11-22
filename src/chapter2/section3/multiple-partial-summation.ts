export const solution = (
  nums: number[],
  counts: number[],
  target: number
): boolean => {
  const dp: (0 | 1)[][] = Array.from({ length: nums.length + 1 }, () => [])

  dp[0][0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      for (let k = 0; k <= counts[i] && k * nums[i] <= j; k++) {
        dp[i + 1][j] |= dp[i][j - k * nums[i]]
      }
    }
  }

  return !!dp[nums.length][target]
}
