export const solution = (
  items: [weight: number, value: number][],
  k: number
): number => {
  const isUnitValueValid = (x: number): boolean => {
    let temp: number[] = []

    for (let i = 0; i < items.length; i++) {
      temp[i] = items[i][1] - x * items[i][0]
    }

    temp.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < k; i++) {
      sum += temp[items.length - i - 1]
    }

    return sum >= 0
  }

  let low = 0
  let hi = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < 100; i++) {
    const mid = low + (hi - low) / 2

    const isValid = isUnitValueValid(mid)

    if (isValid) {
      low = mid
    } else {
      hi = mid
    }
  }

  return low
}
