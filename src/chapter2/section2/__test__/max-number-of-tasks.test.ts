import { solution } from '../max-number-of-tasks'

test('能算出最大的任务数量', () => {
  expect(solution([1, 2, 4, 6, 8], [3, 5, 7, 9, 10])).toBe(3)

  expect(solution([1, 2, 5], [7, 4, 6])).toBe(2)
  expect(solution([1, 2, 3], [3, 4, 5])).toBe(1)
})
