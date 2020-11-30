type Merger<T> = (a: T, b: T) => T
export default class SegmentTree {
  private data: number[] = []
  private tree: number[] = []
  private lazy: number[] = []
  private merger: Merger<number>
  constructor(data: number[], merger: Merger<number>) {
    for (let i = 0; i < data.length; i++) {
      this.data[i] = data[i]
    }
    this.lazy = Array.from({ length: data.length * 4 }, () => 0)

    this.merger = merger

    this.buildTree(0, 0, data.length - 1)
  }

  private buildTree(rootIndex: number, l: number, r: number): void {
    if (l === r) {
      this.tree[rootIndex] = this.data[l]
      return
    }

    const leftChildIndex = this.leftChildIndex(rootIndex)
    const rightChildIndex = this.rightChildIndex(rootIndex)
    const mid = l + ((r - l) >> 1)

    this.buildTree(leftChildIndex, l, mid)
    this.buildTree(rightChildIndex, mid + 1, r)

    this.tree[rootIndex] = this.merger(
      this.tree[leftChildIndex],
      this.tree[rightChildIndex]
    )
  }

  private leftChildIndex(rootIndex: number): number {
    return rootIndex * 2 + 1
  }

  private rightChildIndex(rootIndex: number): number {
    return rootIndex * 2 + 2
  }

  get(index: number): number {
    return this.tree[index]
  }

  set(index: number, value: number): void {
    this.data[index] = value

    this._set(0, 0, this.data.length - 1, index, value)
  }

  update(l: number, r: number, increment: number): void {
    this._update(0, 0, this.data.length - 1, l, r, increment)
  }

  private pushDown(rootIndex: number, l: number, r: number): void {
    if (this.lazy[rootIndex] === 0) return

    this.lazy[this.leftChildIndex(rootIndex)] += this.lazy[rootIndex]
    this.lazy[this.rightChildIndex(rootIndex)] += this.lazy[rootIndex]
    this.tree[rootIndex] += (r - l + 1) * this.lazy[rootIndex]
    this.lazy[rootIndex] = 0
  }

  private _update(
    rootIndex: number,
    l: number,
    r: number,
    updateL: number,
    updateR: number,
    increment: number
  ): void {
    this.pushDown(rootIndex, l, r)

    if (updateR < l || updateL > r) return

    if (l >= updateL && r <= updateR) {
      this.lazy[rootIndex] = increment
      this.pushDown(rootIndex, l, r)
      return
    }

    const mid = l + ((r - l) >> 1)

    const leftChildIndex = this.leftChildIndex(rootIndex)
    const rightChildIndex = this.rightChildIndex(rootIndex)

    this._update(leftChildIndex, l, mid, updateL, updateR, increment)
    this._update(rightChildIndex, mid + 1, r, updateL, updateR, increment)

    this.tree[rootIndex] = this.merger(
      this.tree[leftChildIndex],
      this.tree[rightChildIndex]
    )
  }

  private _set(
    rootIndex: number,
    l: number,
    r: number,
    index: number,
    value: number
  ) {
    if (l === r) {
      this.tree[rootIndex] = value
      return
    }

    const mid = l + ((r - l) >> 1)

    const leftChildIndex = this.leftChildIndex(rootIndex)
    const rightChildIndex = this.rightChildIndex(rootIndex)

    if (index >= mid + 1) {
      this._set(rightChildIndex, mid + 1, r, index, value)
    } else {
      this._set(leftChildIndex, l, mid, index, value)
    }

    this.tree[rootIndex] = this.merger(
      this.tree[leftChildIndex],
      this.tree[rightChildIndex]
    )
  }

  query(l: number, r: number): number {
    return this._query(0, 0, this.data.length - 1, l, r)
  }

  private _query(
    rootIndex: number,
    l: number,
    r: number,
    queryL: number,
    queryR: number
  ): number {
    if (l === queryL && r === queryR) return this.tree[rootIndex]

    this.pushDown(rootIndex, l, r)
    const mid = l + ((r - l) >> 1)

    const leftChildIndex = this.leftChildIndex(rootIndex)
    const rightChildIndex = this.rightChildIndex(rootIndex)

    if (queryL >= mid + 1) {
      return this._query(rightChildIndex, mid + 1, r, queryL, queryR)
    } else if (queryR <= mid) {
      return this._query(leftChildIndex, l, mid, queryL, queryR)
    } else {
      return this.merger(
        this._query(leftChildIndex, l, mid, queryL, mid),
        this._query(rightChildIndex, mid + 1, r, mid + 1, queryR)
      )
    }
  }
}
