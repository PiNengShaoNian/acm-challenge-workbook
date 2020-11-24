import path from 'path'
import Graph from '../graph'
import { TwoColor } from '../two-color'

test('能正确地识别二分图', () => {
  let g = new Graph(path.join(__dirname, './bipartite.txt'))
  let twoColor = new TwoColor(g)

  expect(twoColor.isTwoColorable()).toBeTruthy()

  g = new Graph(path.join(__dirname, './not-a-bipartite.txt'))
  twoColor = new TwoColor(g)

  expect(twoColor.isTwoColorable()).toBeFalsy()
})
