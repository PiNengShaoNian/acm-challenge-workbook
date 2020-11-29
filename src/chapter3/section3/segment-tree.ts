type Merger<T> = (a: T, b: T) => T
export default class SegmentTree<T> {
  private data: T[] = []
  private tree: T[] = []
  private merger: Merger<T>
  constructor(data: T[], merger: Merger<T>) {
    for (let i = 0; i < data.length; i++) {
      this.data[i] = data[i]
    }

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

  get(index: number): T {
    return this.tree[index]
  }

  set(index: number, value: T): void {
    this.data[index] = value

    this._set(0, 0, this.data.length - 1, index, value)
  }

  private _set(
    rootIndex: number,
    l: number,
    r: number,
    index: number,
    value: T
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

  query(l: number, r: number): T {
    return this._query(0, 0, this.data.length - 1, l, r)
  }

  private _query(
    rootIndex: number,
    l: number,
    r: number,
    queryL: number,
    queryR: number
  ): T {
    if (l === queryL && r === queryR) return this.tree[rootIndex]

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
