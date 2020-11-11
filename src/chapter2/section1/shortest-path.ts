import LoopQueue from '../../util/LoopQueue'

type CharType = '#' | '.' | 'S' | 'G'
type Point = [number, number]

export const solution = (
  maze: CharType[][],
  sx: number,
  sy: number,
  gx: number,
  gy: number
): number => {
  if (!maze.length) return 0
  const columns = maze[0].length
  const rows = maze.length
  const distTo: number[][] = Array.from({ length: rows }, () => [])

  const queue = new LoopQueue<Point>()

  distTo[sy][sx] = 0
  queue.enqueue([sy, sx])

  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]

  while (queue.size()) {
    const [row, column] = queue.dequeue()!

    for (const [rowOffset, columnOffset] of directions) {
      const newRow = rowOffset + row
      const newColumn = column + columnOffset

      if (
        newRow >= 0 &&
        newRow < rows &&
        newColumn >= 0 &&
        newColumn < columns &&
        distTo[newRow][newColumn] === undefined &&
        maze[newRow][newColumn] !== '#'
      ) {
        distTo[newRow][newColumn] = distTo[row][column] + 1
        queue.enqueue([newRow, newColumn])
      }
    }
  }

  return distTo[gy][gx] === undefined ? Infinity : distTo[gy][gx]
}
