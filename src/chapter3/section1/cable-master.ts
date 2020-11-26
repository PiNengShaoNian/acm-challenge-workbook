export const solution = (lengths: number[], k: number) => {
  let low = 0
  let hi = Number.MAX_SAFE_INTEGER

  const isLengthValid = (length: number): boolean => {
    let count = 0

    for (let i = 0; i < lengths.length; i++) {
      count += Math.floor(lengths[i] / length)
    }

    return count >= k
  }

  for (let i = 0; i < 100; i++) {
    const mid = low + (hi - low) / 2

    const isValid = isLengthValid(mid)

    if (isValid) {
      low = mid
    } else {
      hi = mid - 1
    }
  }

  return low
}
