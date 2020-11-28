export const solution = (
  A: number[],
  B: number[],
  C: number[],
  D: number[]
): number => {
  const map = new Map<number, number>()
  let result = 0
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const sum = A[i] + B[j]

      if (map.has(sum)) map.set(sum, map.get(sum)! + 1)
      else map.set(sum, 1)
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (map.has(-C[i] - D[j])) result += map.get(-C[i] - D[j])!
    }
  }

  return result
}
