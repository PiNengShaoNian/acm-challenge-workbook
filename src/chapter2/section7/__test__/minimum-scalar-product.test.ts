import { solution } from '../minimum-scalar-product'

test('minimum-scalar-product正常工作', () => {
  expect(solution([1, 3, -5], [-2, 4, 1])).toBe(-25)
  expect(solution([1, 2, 3, 4, 5], [1, 0, 1, 0, 1])).toBe(6)
})
