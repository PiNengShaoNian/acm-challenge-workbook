import { solution } from '../min-number-of-coins-to-pay'

test('能正确的算出硬币数量', () => {
  expect(solution([1, 5, 10, 50, 100, 500], [3, 2, 1, 3, 0, 2], 620)).toBe(6)
})
