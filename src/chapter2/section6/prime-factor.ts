const primeFactor = (n: number): Record<number, number> => {
  const result: Record<number, number> = {}

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result[i] ?? (result[i] = 0)

      result[i]++

      n /= i
    }
  }

  return result
}