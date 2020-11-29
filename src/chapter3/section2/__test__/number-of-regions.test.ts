import { solution } from '../number-of-regions'

test('能正确地求出区域的数量', () => {
  expect(
    solution(
      [0, 0, 3, 8, 9],
      [5, 9, 3, 8, 9],
      [3, 7, 0, 0, 5],
      [3, 7, 9, 4, 9],
      10,
      10
    )
  ).toBe(6)
}, 4)
