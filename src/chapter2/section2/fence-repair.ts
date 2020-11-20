/*
农夫约翰为了修理栅栏,要将一块很长的木板切割成N块。
准备切成的木板的长度为L1、L2、.、Lw,
未切割前木板的长度恰好为切割后木板长度的总和。
每次切断木板时,需要的开销为这块木板的长度。
例如长度为21的木板要切成长度为5、8、8的三块木板。
长21的木板切成长为13和8的板时,开销为21,再将长度为13的板切成长度为5和8的板时,开销是13,于是合计开销是34,
请求出按照目标要求将木板切割完最小的开销是多少。
*/

export const solution = (lengths: number[]): number => {
  let res = 0

  let N = lengths.length

  const swap = (i: number, j: number): void => {
    const temp = lengths[i]
    lengths[i] = lengths[j]
    lengths[j] = temp
  }

  while (N > 1) {
    let mii1 = 0
    let mii2 = 1

    if (lengths[mii1] > lengths[mii2]) swap(mii1, mii2)

    for (let i = 2; i < N; i++) {
      if (lengths[i] < lengths[mii1]) {
        mii2 = mii1
        mii1 = i
      } else if (lengths[i] < lengths[mii2]) {
        mii2 = i
      }
    }

    const t = lengths[mii1] + lengths[mii2]

    res += t

    if (mii1 === lengths.length - 1) swap(mii1, mii2)

    lengths[mii1] = t
    lengths[mii2] = lengths[N - 1]
    N--
  }

  return res
}
