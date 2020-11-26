export const solution = (matrix: number[][]): number => {
  let lastOneIndex: number[] = []
  let result = 0
  for (let i = 0; i < matrix.length; i++) {
    lastOneIndex[i] = -1
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        lastOneIndex[i] = j
      }
    }
  }

  const swap = (arr: any[], i: number, j: number): void => {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  for (let i = 0; i < matrix.length; i++) {
    let pos = -1

    for (let j = i; j < matrix.length; j++) {
      if (lastOneIndex[j] <= i) {
        pos = j
        break
      }
    }

    for (let j = pos; j > i; j--) {
      swap(lastOneIndex, j, j - 1)
      result++
    }
  }

  return result
}
