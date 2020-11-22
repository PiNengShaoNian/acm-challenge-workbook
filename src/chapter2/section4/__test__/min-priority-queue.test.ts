import generateArr from '../../../util/generateArr'
import { MinPriorityQueue } from '../min-priority-queue'

test('min-heap工作正常', () => {
  const testArr = generateArr(3000, (i) => i, true)
  const pq = new MinPriorityQueue<number>()
  for (let i = 0; i < testArr.length; i++) {
    pq.insert(testArr[i])
  }

  testArr.sort((a, b) => a - b)

  for (let i = 0; i < testArr.length; i++) {
    expect(pq.deleteMin()).toBe(testArr[i])
  }

  expect(pq.size()).toBe(0)
})
