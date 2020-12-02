import { solution } from '../kth-number'

test('能正确求出给定范围内的第k大数字', () => {
  expect(
    solution(
      [1, 5, 2, 6, 3, 7, 4],
      [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
      ]
    )
  ).toEqual([5, 6, 3])
})
