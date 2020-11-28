import { solution } from '../subsequence'

test(
  '能求出目标最短子序列长度',
  () => {
    expect(solution([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)).toBe(2)

    expect(solution([1, 2, 3, 4, 5], 11)).toBe(3)
  },
  2 * 1000
)
