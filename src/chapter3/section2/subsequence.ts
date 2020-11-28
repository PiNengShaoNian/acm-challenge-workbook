export const solution = (nums: number[], target: number): number => {
  let result = nums.length + 1
  let r = -1
  let l = 0

  let sum = 0
  while (l < nums.length) {
    if (r + 1 < nums.length && sum < target) sum += nums[++r]
    else sum -= nums[l++]

    if (sum >= target) {
      result = Math.min(result, r - l + 1)
    }
  }

  return result
}
