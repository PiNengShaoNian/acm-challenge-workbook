export const solution = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  let res = 0

  const core = (i: number, remaining: number): number => {
    let res = 0

    if (i === values.length) return 0
    else if (remaining < weights[i]) {
      res = core(i + 1, remaining)
    } else {
      res = Math.max(
        core(i + 1, remaining),
        core(i + 1, remaining - weights[i]) + values[i]
      )
    }

    return res
  }

  res = core(0, capacity)

  return res
}

export const solution1 = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  const dp: number[][] = Array.from({ length: values.length + 1 }, () => [])
  let res = 0

  const core = (i: number, remaining: number): number => {
    if (dp[i][remaining] !== undefined) return dp[i][remaining]
    let res = 0

    if (i === values.length) return 0
    else if (remaining < weights[i]) {
      res = core(i + 1, remaining)
    } else {
      res = Math.max(
        core(i + 1, remaining),
        core(i + 1, remaining - weights[i]) + values[i]
      )
    }

    return (dp[i][remaining] = res)
  }

  res = core(0, capacity)

  return res
}

export const solution2 = (
  values: number[],
  weights: number[],
  capacity: number
): number => {
  if (values.length !== weights.length) return -1

  const dp: number[][] = Array.from({ length: values.length + 1 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  )

  for (let i = values.length - 1; i >= 0; i--) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) {
        dp[i][j] = dp[i + 1][j]
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j - weights[i]] + values[i])
      }
    }
  }

  return dp[0][capacity]
}
