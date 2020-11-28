export const solution = (pages: number[]): number => {
  let result = pages.length + 1
  let all = new Set<number>()

  for (let i = 0; i < pages.length; i++) {
    all.add(pages[i])
  }
  let num = 0
  const n = all.size
  let l = 0
  let r = -1
  const map = new Map<number, number>()

  while (l < pages.length) {
    if (r + 1 < pages.length && num < n) {
      if (map.has(pages[++r])) {
        map.set(pages[r], map.get(pages[r])! + 1)
      } else {
        num++
        map.set(pages[r], 1)
      }
    } else {
      const count = map.get(pages[l])!
      const newCount = count - 1

      if (newCount <= 0) {
        map.delete(pages[l])
        num--
      } else {
        map.set(pages[l], newCount)
      }

      l++
    }

    if (num >= n) {
      result = Math.min(result, r - l + 1)
    }
  }

  return result
}
