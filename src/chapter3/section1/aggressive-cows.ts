export const solution = (positions: number[], c: number): number => {
  let low = 0
  let hi = Number.MAX_SAFE_INTEGER
  positions.sort((a, b) => a - b)
  const isDistanceValid = (distance: number): boolean => {
    let curPos = positions[0]
    let count = 1
    for (let i = 1; i < positions.length; i++) {
      if (positions[i] - curPos >= distance) {
        count++
        curPos = positions[i]

        if (count >= c) break
      }
    }

    return count >= c
  }

  for (let i = 0; i < 100; i++) {
    const mid = low + Math.floor((hi - low) / 2)

    const isValid = isDistanceValid(mid)

    if (isValid) {
      low = mid
    } else {
      hi = mid - 1
    }
  }

  return low
}
