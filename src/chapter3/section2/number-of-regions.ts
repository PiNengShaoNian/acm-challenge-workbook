import { binarySearch2 } from '../../util/binary-search'

export const solution = (
  x1: number[],
  x2: number[],
  y1: number[],
  y2: number[],
  w: number,
  h: number
): number => {
  const directions: [y: number, x: number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const compress = (x1: number[], x2: number[]): number => {
    let xs: number[] = []
    for (let i = 0; i < x1.length; i++) {
      for (let j = -1; j <= 1; j++) {
        const newX1 = x1[i] + j
        const newX2 = x2[i] + j

        if (newX1 >= 0 && newX1 < w) {
          xs.push(newX1)
        }
        if (newX2 >= 0 && newX2 < w) {
          xs.push(newX2)
        }
      }
    }

    const set = new Set(xs)
    xs = Array.from(set).sort((a, b) => a - b)

    for (let i = 0; i < x1.length; i++) {
      x1[i] = binarySearch2(xs, x1[i])
      x2[i] = binarySearch2(xs, x2[i])
    }

    return xs.length
  }

  w = compress(x1, x2)
  h = compress(y1, y2)

  const fld: boolean[][] = Array.from({ length: 500 * 6 }, () =>
    Array.from({ length: 500 * 6 }, () => false)
  )

  for (let i = 0; i < x1.length; i++) {
    for (let x = x1[i]; x <= x2[i]; x++) {
      for (let y = y1[i]; y <= y2[i]; y++) {
        fld[x][y] = true
      }
    }
  }

  let result = 0

  const dfs = (x: number, y: number): void => {
    const stack: [x: number, y: number][] = []

    stack.push([x, y])
    fld[y][x] = true

    while (stack.length) {
      const [curx, cury] = stack.pop()!

      for (let i = 0; i < 4; i++) {
        const [yOffset, xOffset] = directions[i]
        const newY = yOffset + cury
        const newX = xOffset + curx

        if (
          newY >= 0 &&
          newY < h &&
          newX >= 0 &&
          newX < w &&
          fld[newY][newX] === false
        ) {
          stack.push([newX, newY])
          fld[newY][newX] = true
        }
      }
    }
  }

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      if (fld[y][x]) continue
      dfs(x, y)
      result++
    }
  }

  return result
}
