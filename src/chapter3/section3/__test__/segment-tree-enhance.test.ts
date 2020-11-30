import SegmentTree from '../segment-tree-enhance'

test('SegmentTree测试', () => {
  const testArr = [-2, 0, 3, -5, 2, -1]
  const tree = new SegmentTree(testArr, (a, b) => a + b)

  expect(tree.query(0, 2)).toBe(1)
  expect(tree.query(0, 3)).toBe(-4)

  tree.set(0, 5)

  expect(tree.query(0, 2)).toBe(8)
  expect(tree.query(0, 3)).toBe(3)
  tree.update(0, 3, 1)
  expect(tree.query(0, 3)).toBe(7)
})
