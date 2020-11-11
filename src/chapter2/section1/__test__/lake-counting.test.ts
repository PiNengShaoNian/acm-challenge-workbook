import { solution } from '../lake-counting'

test('lake-counting正常工作', () => {
  expect(
    solution([
      [...'W........WW.'],
      [...'.WWW.....WWW'],
      [...'....WW...WW.'],
      [...'.........WW.'],
      [...'.........W..'],
      [...'..W......W..'],
      [...'.W.W.....W.'],
      [...'W.W.W.....W.'],
      [...'.W.W......W.'],
      [...'..W.......W.'],
    ])
  ).toBe(3)
})
