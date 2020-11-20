import { solution } from '../fence-repair'

test('能正确的获取切割的最小花销', () => {
  expect(solution([8, 5, 8])).toBe(34)
})
