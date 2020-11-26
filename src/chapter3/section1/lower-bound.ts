export const solution = (nums: number[], k: number): number => {
  let low = 0
  let hi = nums.length
  while (low < hi) {
    const mid = low + ((hi - low) >> 1)

    if (nums[mid] >= k) {
      hi = mid
    } else {
      low = mid + 1
    }
  }

  return low
}

