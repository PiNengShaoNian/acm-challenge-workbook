import { solution } from '../min-refueling-times'

test('能正确求出最小加油次数', () => {
  expect(
    solution(25, 10, [
      [10, 10],
      [14, 5],
      [20, 2],
      [21, 4],
    ])
  ).toBe(2)
})
