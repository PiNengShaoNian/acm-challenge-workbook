export const solution = (nums: number[]): number => {
  if (!nums.length) return 0

  let res = 0
  let dp = Array.from({ length: nums.length }, () => 0)

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }

    res = Math.max(dp[i], res)
  }

  return res
}
