import { solution } from '../select-nums-sum-equal-to-k'

test('select-nums-sum-equal-to-k正常工作', () => {
  expect(solution([1, 2, 4, 7], 13)).toBeTruthy()
  expect(solution([1, 2, 4, 7], 15)).toBeFalsy()
})
