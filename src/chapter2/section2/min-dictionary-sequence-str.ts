/*
给定长度为N的字符串s,要构造一个长度为N的字符串T。起初, T是一个空串,
随后反复进行下列任意操作。
.从S的头部删除一个字符,加到T的尾部.
.从S的尾部删除一个字符,加到T的尾部.

目标是要构造字典序 尽可能小的字符串T
*/

export const solution = (str: string): string => {
  let res = ''

  while (str.length) {
    let cutLeft: boolean = true
    for (let i = 0; i < str.length >> 1; i++) {
      if (str[i] < str[str.length - i - 1]) {
        cutLeft = true
        break
      } else if (str[i] > str[str.length - i - 1]) {
        cutLeft = false
        break
      }
    }
    if (cutLeft) {
      res += str.substr(0, 1)
      str = str.slice(1)
    } else {
      res += str.substr(str.length - 1, 1)
      str = str.slice(0, str.length - 1)
    }
  }

  return res
}

export const solution1 = (str: string): string => {
  let res = ''
  let startIndex = 0
  let endIndex = str.length - 1

  while (startIndex <= endIndex) {
    let cutLeft = true

    for (let i = 0; startIndex + i <= endIndex; i++) {
      if (str[startIndex + i] < str[endIndex - i]) {
        cutLeft = true
        break
      } else if (str[startIndex + i] > str[endIndex - i]) {
        cutLeft = false
        break
      }
    }

    if (cutLeft) res += str[startIndex++]
    else res += str[endIndex--]
  }

  return res
}
