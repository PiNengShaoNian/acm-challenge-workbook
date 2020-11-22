import Comparable from '../../model/Comparable'

export class MinPriorityQueue<Key extends number | string | Comparable<Key>> {
  private pq: Key[] = []
  private N = 0

  isEmpty(): boolean {
    return this.N === 0
  }

  size(): number {
    return this.N
  }

  insert(key: Key): void {
    this.pq[++this.N] = key

    this.swim(this.N)
  }

  deleteMin(): Key | null {
    if (this.isEmpty()) return null
    const min = this.pq[1]

    this.exch(1, this.N--)
    this.pq.length = this.N + 1
    this.sink(1)

    return min
  }

  sink(index: number): void {
    while (2 * index <= this.N) {
      let j = 2 * index

      if (j < this.N && this.less(j + 1, j)) {
        j++
      }

      if (this.less(index, j)) break

      this.exch(j, index)

      index = j
    }
  }

  swim(index: number): void {
    while (index > 1 && this.less(index, index >> 1)) {
      this.exch(index, index >> 1)
      index >>= 1
    }
  }

  less(a: number, b: number): boolean {
    if (typeof this.pq[a] === 'string' || typeof this.pq[a] === 'number') {
      return this.pq[a] < this.pq[b]
    } else {
      return (this.pq[a] as Comparable<Key>).compareTo(this.pq[b]) < 0
    }
  }

  exch(i: number, j: number): void {
    const t = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = t
  }
}
