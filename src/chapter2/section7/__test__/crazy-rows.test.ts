import { solution } from '../crazy-rows'

test('crazy-rows正常工作', () => {
  expect(
    solution([
      [1, 1, 1, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [1, 0, 0, 0],
    ])
  ).toBe(4)
  expect(
    solution([
      [1, 0],
      [1, 1],
    ])
  ).toBe(0)
  expect(
    solution([
      [0,0,1],
      [1,0,0],
      [0,1,0],
    ])
  ).toBe(2)
})
