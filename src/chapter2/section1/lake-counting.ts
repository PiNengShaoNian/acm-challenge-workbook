/*
有一个大小为NxM的园子,雨后积起了水。八连通的积水被认为是连接在一起的。
请求出园子里总共有多少水洼? 
(八连通指的是下图中相对w的*的部分)
***
*W*
***

限制条件.
  N, M  <= 100
*/

export const solution = (grid: string[][]): number => {
  if (!grid.length) return 0
  const rows = grid.length
  const columns = grid[0].length
  const dfs = (row: number, column: number) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newColumn = column + i
        const newRow = row + j

        if (
          newColumn >= 0 &&
          newColumn < columns &&
          newRow >= 0 &&
          newRow < rows &&
          grid[newRow][newColumn] === 'W'
        ) {
          grid[newRow][newColumn] = '.'
          dfs(newRow, newColumn)
        }
      }
    }
  }

  let result = 0
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      if (grid[row][column] === 'W') {
        result++
        dfs(row, column)
      }
    }
  }

  return result
}
