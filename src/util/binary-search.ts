export default function binarySearch(
  numbers: number[],
  target: number
): boolean {
  if (!numbers.length) return false
  let low = 0
  let hi = numbers.length - 1

  while (low <= hi) {
    const mid = low + ((hi - low) >> 1)

    if (numbers[mid] === target) return true
    else if (numbers[mid] > target) {
      hi = mid - 1
    } else {
      low = mid + 1
    }
  }

  return false
}
