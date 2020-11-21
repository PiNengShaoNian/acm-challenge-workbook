import { solution, solution1, solution2 } from '../knapsack-problem1'

test('能求出完全背包问题的正确答案', () => {
  expect(solution([4, 5, 3], [3, 4, 2], 7)).toBe(10)
  expect(solution1([4, 5, 3], [3, 4, 2], 7)).toBe(10)
  expect(solution2([4, 5, 3], [3, 4, 2], 7)).toBe(10)
})
