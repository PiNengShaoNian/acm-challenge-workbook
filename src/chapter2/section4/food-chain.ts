/*
食物链(POJ 1182)
有N只动物，分别编号为1,2, .., N。
所有动物都属于A, B,C中的其中一种。
已知A吃B.B吃C、C吃A。
按顺序给出下面的两种信息共K条。
·第一种:x和y属于同一种类。
·第二种:x吃y。
然而这些信息有可能会出错。
有可能有的信息和之前给出的信息矛盾,
也有的信息可能给出的x和y不在1,2, ., N的范围内。
求在K条信息中有多少条是不正确的。计算过程中,我们将忽视诸如此类的错误信息。
*/

import { UnionFind } from './union-find'

export const solution = (
  input: [animal1: number, animal2: number, type: 1 | 2][]
): number => {
  let res = 0

  const N = input.length
  const uf = new UnionFind(N * 3)
  for (let i = 0; i < N; i++) {
    let [animal1, animal2, type] = input[i]
    animal1--
    animal2--

    if (animal1 < 0 || animal1 >= N || animal2 < 2 || animal2 >= N) {
      res++
      continue
    }

    if (type === 1) {
      if (
        uf.connected(animal1, animal2 + N) ||
        uf.connected(animal1, animal2 + 2 * N)
      ) {
        res++
      } else {
        uf.union(animal1, animal2)
        uf.union(animal1 + N, animal2 + N)
        uf.union(animal1 + 2 * N, animal2 + 2 * N)
      }
    } else {
      if (
        uf.connected(animal1, animal2) ||
        uf.connected(animal1, animal2 + 2 * N)
      ) {
        uf.union(animal1, animal2 + N)
        uf.union(animal1 + N, animal2 + 2 * N)
        uf.union(animal1 + 2 * N, animal2)
      }
    }
  }

  return res
}
