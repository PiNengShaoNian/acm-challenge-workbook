/*
你的朋友提议玩一个游戏:将写有数字的n个纸片放入口袋中,
你可以从口袋中抽取4次纸片,每次记下纸片上的数字后都将其放回口袋中。
如果这4个数字的和是m,就是你赢,否则就是你的朋友赢。
你挑战了好几回,结果一次也没赢过,
于是怒而撕破口袋,取出所有纸片,检查自己是否真的有赢的可能性。
请你编写一个程序,判断当纸片上所写的数字是k,k2 ,k时,是否存在抽取4次和为m的方案。
如果存在,输出Yes;否则,输出No.

限制条件.
1 <= n <= 50
1 <= m <= 10**8
1 <= k(i) <= 10**8
*/

import { binarySearch1 } from '../util/binary-search'

//四层循环 时间复杂度 O(n**4)
export const solution1 = (n: number, m: number, k: number[]): boolean => {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        for (let d = 0; d < n; d++) {
          if (k[a] + k[b] + k[c] + k[d] === m) return true
        }
      }
    }
  }

  return false
}

//最后一层循环用二分查找代替，时间复杂度 O(n**3 logn)
export const solution2 = (n: number, m: number, k: number[]): boolean => {
  k.sort((a, b) => a - b)
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        if (binarySearch1(k, m - k[a] - k[b] - k[c])) return true
      }
    }
  }

  return false
}

//通过先将两个内层循环可能的所有和枚举出来，在通过上一题的思路能将复杂度降到O(n**2 logn)
export const solution3 = (n: number, m: number, k: number[]): boolean => {
  const sumOfCAndD = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sumOfCAndD.push(k[i] + k[j])
    }
  }

  sumOfCAndD.sort((a, b) => a - b)

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      if (binarySearch1(sumOfCAndD, m - k[a] - k[b])) return true
    }
  }

  return false
}
