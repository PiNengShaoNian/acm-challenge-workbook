export const solution = (str1: string, str2: string): number => {
  const core = (endIndex1: number, endIndex2: number): number => {
    if (endIndex1 < 0 || endIndex2 < 0) return 0

    if (str1[endIndex1] === str2[endIndex2])
      return 1 + core(endIndex1 - 1, endIndex2 - 1)
    else {
      return Math.max(
        core(endIndex1, endIndex2 - 1),
        core(endIndex1 - 1, endIndex2)
      )
    }
  }

  return core(str1.length - 1, str2.length - 1)
}

export const solution1 = (str1: string, str2: string): number => {
  const dp: number[][] = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  )

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        dp[i + 1][j + 1] = Math.max(dp[i][j] + 1, dp[i + 1][j], dp[i][j + 1])
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }

  return dp[str1.length][str2.length]
}
