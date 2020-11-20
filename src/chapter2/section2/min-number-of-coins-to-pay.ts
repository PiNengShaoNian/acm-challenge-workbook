/*
硬币问题
"有1元、5元、10元、50元、100元、500元的硬币各C1. C5, C10, C50, C100、 C500枚。现在要用这些硬币来支付A元,
最少需要多少枚硬币?假定本题至少存在一种支付方案。
*/

export const solution = (
  values: number[],
  count: number[],
  price: number
): number => {
  if (values.length !== count.length) return -1

  let res = 0
  for (let i = values.length - 1; i >= 0; i--) {
    if (price === 0) break
    const c = Math.min(Math.floor(price / values[i]), count[i])
    price -= c * values[i]
    res += c
  }

  return res
}
