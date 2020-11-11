import { solution1, solution2, solution3 } from '../cast-lots'

test('cast-lots工作正常', () => {
  expect(solution1(3, 10, [1, 3, 5])).toBeTruthy()
  expect(solution1(3, 9, [1, 3, 5])).toBeFalsy()
  expect(solution2(3, 10, [1, 3, 5])).toBeTruthy()
  expect(solution2(3, 9, [1, 3, 5])).toBeFalsy()

  expect(solution3(3, 10, [1, 3, 5])).toBeTruthy()
  expect(solution3(3, 9, [1, 3, 5])).toBeFalsy()
  expect(solution3(7, 29, [1, 2, 3, 4, 5, 6, 7])).toBeFalsy()
})
