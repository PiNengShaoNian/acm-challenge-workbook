import { solution, solution1, solution2 } from '../knapsack-problem'

test('能算出最大价值', () => {
  expect(solution([3, 2, 4, 2], [2, 1, 3, 2], 5)).toBe(7)
  expect(solution1([3, 2, 4, 2], [2, 1, 3, 2], 5)).toBe(7)
  expect(solution2([3, 2, 4, 2], [2, 1, 3, 2], 5)).toBe(7)
})
