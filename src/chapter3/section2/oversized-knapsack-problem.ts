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

    if (weight > capacity) return

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
    if (!permutation1.length) return -1

    let lo = 0
    let hi = permutation1.length - 1

    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      if (permutation1[mid][0] === weight) {
        if (
          mid + 1 < permutation1.length &&
          permutation1[mid + 1][0] === weight
        ) {
          lo = mid + 1
        } else {
          lo = mid
          break
        }
      } else if (permutation1[mid][0] > weight) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }

    if (lo >= permutation1.length) {
      lo = permutation1.length - 1
    }

    if (lo <= 0 && weight < permutation1[0][0]) lo = -1

    return lo
  }

  ;(function core(n: number, weight: number, value: number) {
    if (n === items.length) {
      let index = lowerBound(capacity - weight)
      if (index === -1) return

      const totalValue = permutation1[index][1] + value

      result = Math.max(result, totalValue)

      return
    }

    if (weight > capacity) return

    core(n + 1, weight, value)
    core(n + 1, weight + items[n][0], value + items[n][1])
  })(items.length >> 1, 0, 0)

  return result
}
  