export const solution = (
  items: [weight: number, value: number][],
  capacity: number
): number => {
  const n2 = items.length >> 1
  let result = 0
  const permutation1: [weight: number, value: number][] = []

  const initPermutation1 = (n: number, weight: number, value: number) => {
    if (n === n2) {
      permutation1.push([weight, value])
      return
    }

    initPermutation1(n + 1, weight, value)
    initPermutation1(n + 1, weight + items[n][0], value + items[n][1])
  }

  initPermutation1(0, 0, 0)

  permutation1.sort((a, b) => a[0] - b[0])

  let m = 1

  for (let i = 1; i < permutation1.length; i++) {
    if (permutation1[m - 1][1] < permutation1[i][1]) {
      permutation1[m++] = permutation1[i]
    }
  }

  permutation1.length = m

  const lowerBound = (weight: number): number => {
    let low = 0
    let hi = permutation1.length

    while (low < hi) {
      const mid = low + ((hi - low) >> 1)

      if (permutation1[mid][0] > weight) {
        hi = mid
      } else {
        low = mid + 1
      }
    }

    return low
  }

  return result
}
