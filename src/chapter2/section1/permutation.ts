const permutation = (n: number): string[] => {
  const used: boolean[] = []
  const perm: number[] = []
  const res: string[] = []
  const core = (i: number): void => {
    if (i === n) {
      res.push(perm.join(''))
      return
    }

    for (let num = 0; num < n; num++) {
      if (used[num]) continue

      perm[i] = num
      used[num] = true
      core(i + 1)
      used[num] = false
    }
  }

  core(0)
  return res
}
