import { upperBound } from '../../util/binary-search'

export const solution = (
  nums: number[],
  queries: [l: number, r: number, k: number][]
): number[] => {
  const bucketSize = 1000
  const result: number[] = []
  const buckets: number[][] = Array.from(
    { length: Math.floor(nums.length / bucketSize) + 1 },
    () => []
  )
  const sortedNums: number[] = []
  for (let i = 0; i < nums.length; i++) {
    sortedNums.push(nums[i])
    buckets[Math.floor(i / bucketSize)].push(nums[i])
  }

  sortedNums.sort((a, b) => a - b)

  for (let i = 0; i <= Math.floor(nums.length / bucketSize); i++) {
    buckets[i].sort((a, b) => a - b)
  }

  for (let i = 0; i < queries.length; i++) {
    const [l, r, k] = queries[i]

    let lo = 0
    let hi = nums.length - 1

    while (lo <= hi) {
      const mid = lo + ((hi - lo) >> 1)
      const midValue = sortedNums[mid]

      let tempL = l - 1
      let tempR = r
      let count = 0

      while (tempL < tempR && tempL % bucketSize !== 0)
        if (nums[tempL++] <= midValue) count++
      while (tempL < tempR && tempR % bucketSize !== 0)
        if (nums[--tempR] <= midValue) count++

      while (tempL < tempR) {
        count += upperBound(buckets[Math.floor(tempL / bucketSize)], midValue)
        tempL += bucketSize
      }

      if (count === k) {
        result.push(midValue)
        break
      } else if (count > k) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }
  }

  return result
}
