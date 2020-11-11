/*
给定整数al、a2、.、an,判断是否可以从中选出若干数,使它们的和恰好为k

限制条件
1 <= n <= 20
-10**8 <= a(i) <= 10 ** 8
-10**8 <= k <= 10 ** 8
*/

export const solution = (numbers: number[], k: number): boolean => {
  const core = (i: number, sum: number): boolean => {
    if (i === numbers.length) return sum === k

    if (core(i + 1, sum)) return true
    if (core(i + 1, sum + numbers[i])) return true

    return false
  }

  return core(0, 0)
}
