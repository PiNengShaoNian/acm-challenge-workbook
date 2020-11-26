export const solution = (v1: number[], v2: number[]): number => {
  v1.sort((a, b) => a - b)

  v2.sort((a, b) => b - a)

  let result = 0

  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i]
  }

  return result
}
