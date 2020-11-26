import { solution } from '../aggressive-cows'

test('能求出最大距离', () => {
  expect(solution([1, 2, 8, 4, 9], 3)).toBe(3)
  expect(solution([1, 2, 3], 3)).toBe(1)
})
