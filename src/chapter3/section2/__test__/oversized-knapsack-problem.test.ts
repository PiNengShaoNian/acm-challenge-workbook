import { solution } from '../oversized-knapsack-problem'

test('能找在指定重量范围内找到，最大价值', () => {
  expect(
    solution(
      [
        [2, 3],
        [1, 2],
        [3, 4],
        [2, 2],
      ],
      5
    )
  ).toBe(7)
})
