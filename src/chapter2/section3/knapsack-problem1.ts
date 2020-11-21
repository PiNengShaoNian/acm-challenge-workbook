export const solution = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  const dp = Array.from({ length: values.length + 1 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  )

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      for (let k = 0; k * weights[i] <= j; k++) {
        dp[i + 1][j] = Math.max(
          dp[i + 1][j],
          dp[i][j - k * weights[i]] + values[i] * k
        )
      }
    }
  }

  return dp[values.length][capacity]
}

export const solution1 = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  const dp = Array.from({ length: values.length + 1 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  )

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) {
        dp[i + 1][j] = dp[i][j]
      } else {
        dp[i + 1][j] = Math.max(dp[i][j], dp[i + 1][j - weights[i]] + values[i])
      }
    }
  }

  return dp[values.length][capacity]
}

export const solution2 = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  const dp = Array.from({ length: 2 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  )

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) {
        dp[(i + 1) & 1][j] = dp[i & 1][j]
      } else {
        dp[(i + 1) & 1][j] = Math.max(
          dp[i & 1][j],
          dp[(i + 1) & 1][j - weights[i]] + values[i]
        )
      }
    }
  }

  return dp[values.length & 1][capacity]
}
