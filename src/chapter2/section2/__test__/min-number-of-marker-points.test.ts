import { solution } from '../min-number-of-marker-points'

test('能算出最小标记数量', () => {
  expect(solution([1, 7, 15, 20, 30, 50], 10)).toBe(3)
})
