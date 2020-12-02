export function binarySearch1(numbers: number[], target: number): boolean {
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

export function binarySearch2(numbers: number[], target: number): number {
  if (!numbers.length) return -1
  let low = 0
  let hi = numbers.length - 1

  while (low <= hi) {
    const mid = low + ((hi - low) >> 1)

    if (numbers[mid] === target) return mid
    else if (numbers[mid] > target) {
      hi = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

export const lowerBound = (nums: number[], target: number): number => {
  if (!nums.length) return -1

  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) {
      if (mid + 1 < nums.length && nums[mid + 1] === target) {
        lo = mid + 1
      } else {
        lo = mid
        break
      }
    } else if (nums[mid] > target) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  if (lo >= nums.length) {
    lo = nums.length - 1
  }

  if (lo <= 0 && target < nums[0]) lo = -1

  return lo
}

export const upperBound = (nums: number[], target: number): number => {
  if (!nums.length) return -1

  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) {
      if (mid + 1 < nums.length && nums[mid + 1] === target) {
        lo = mid + 1
      } else {
        lo = mid + 1
        break
      }
    } else if (nums[mid] > target) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  if (lo <= 0 && target < nums[0]) lo = -1

  return lo
}
