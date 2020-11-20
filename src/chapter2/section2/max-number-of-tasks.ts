/*
区间调度问题有n项工作,每项工作分别在s,时间开始,在1时间结束。
对于每项工作,你都可以选择参,与与否。
如果选择了参与,那么自始至终都必须全程参与。此外,参与工作的时间段不能重叠
(即使是开始的瞬间和结束的瞬间的重叠也是不允许的)。

·你的目标是参与尽可能多的工作,那么最多能参与多少项工作呢?
*/

export const solution = (s: number[], t: number[]): number => {
  if (s.length !== t.length) return -1

  let res = 0
  const tasks: [number, number][] = Array.from({ length: s.length }, (_, i) => [
    s[i],
    t[i],
  ])

  tasks.sort((a, b) => a[1] - b[1])

  let end = -1
  for (let i = 0; i < tasks.length; i++) {
    const [s, t] = tasks[i]

    if (s > end) {
      res++
      end = t
    }
  }

  return res
}
