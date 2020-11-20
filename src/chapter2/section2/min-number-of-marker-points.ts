/*
直线上有N个点。点i的位置是X,从这N个点中选择若干个,给它们加上标记。
对每一个点,其距离为R以内的区域里必须有带有标记的点
(自己本身带有标记的点,可以认为与其距离为0的地方有一个带有标记的点)。
在满足这个条件的情况下,希望能为尽可能少的点添加标记。请问至少要有多少点被加上标记?
*/

export const solution = (points: number[], r: number): number => {
  let res = 0

  let index = 0

  while (index < points.length) {
    const start = points[index++]

    while (index < points.length && points[index] <= start + r) index++

    const marker = points[index - 1]

    while (index < points.length && points[index] <= marker + r) index++

    res++
  }

  return res
}