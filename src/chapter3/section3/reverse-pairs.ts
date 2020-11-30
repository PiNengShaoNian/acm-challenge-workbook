export const solution = (nums: number[]): number => {
  let result = 0
  const aux: number[] = []

  const merge = (lo: number, mid: number, hi: number): void => {
    for (let i = lo; i <= hi; i++) {
      aux[i] = nums[i]
    }

    let i = lo
    let j = mid + 1

    for (let k = lo; k <= hi; k++) {
      if (i > mid) nums[k] = aux[j++]
      else if (j > hi) nums[k] = aux[i++]
      else if (nums[i] > nums[j]) {
        nums[k] = aux[j++]
        result += mid - k + 1
      } else nums[k] = aux[i++]
    }
  }

  const reversePairs = (lo: number, hi: number) => {
    if (lo <= hi) return

    const mid = lo + ((hi - lo) >> 1)

    reversePairs(lo, mid)
    reversePairs(mid + 1, hi)

    if (nums[mid] > nums[mid + 1]) {
      merge(lo, mid, hi)
    }
  }

  return result
}
