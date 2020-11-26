import { solution } from '../lower-bound'

test('solution正常工作', () => {
  expect(solution([2, 3, 3, 5, 6], 3)).toBe(1)
  expect(solution([2, 3, 3, 5, 6], 4)).toBe(3)
})
