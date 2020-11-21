import { solution, solution1 } from '../longest-common-subsequence'

test('能够找到最长公共子序列', () => {
  expect(solution('abcd', 'becd')).toBe(3)
  
  expect(solution1('abcd', 'becd')).toBe(3)
})
