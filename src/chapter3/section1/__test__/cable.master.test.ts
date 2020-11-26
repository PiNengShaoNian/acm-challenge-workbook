import { solution } from '../cable-master'

test('能求出最大长度', () => {
  expect(solution([8.02, 7.43, 4.57, 5.39], 11)).toBeCloseTo(2)
})
