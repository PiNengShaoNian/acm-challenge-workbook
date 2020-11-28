import { solution } from '../maximum-unit-value'

test('能求出最大单位重量价值', () => {
  expect(
    solution(
      [
        [2, 2],
        [5, 3],
        [2, 1],
      ],
      2
    )
  ).toBeCloseTo(0.75)
})
