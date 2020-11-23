import Comparable from '../../model/Comparable'
import Map from '../../model/Map'

class TreeNode<Key, Value> {
  public left: TreeNode<Key, Value> | null = null
  public right: TreeNode<Key, Value> | null = null
  constructor(public key: Key, public value: Value) {}
}

export class BSTMap<Key extends string | number | Comparable<Key>, Value>
  implements Map<Key, Value> {
  private root: null | TreeNode<Key, Value> = null
  private _size: number = 0

  delete(key: Key): void {
    if (!this.contains(key)) return

    this.root = this._delete(this.root!, key)
    this._size--
  }

  private _delete(
    root: TreeNode<Key, Value>,
    key: Key
  ): TreeNode<Key, Value> | null {
    const cmp = this.compare(key, root.key)

    if (cmp < 0) {
      root.left = this._delete(root.left!, key)
    } else if (cmp > 0) {
      root.right = this._delete(root.right!, key)
    } else {
      if (!root.right) {
        return root.left
      }

      if (!root.left) {
        return root.right
      }

      const node = this._min(root.right)
      root.key = node.key
      root.value = node.value

      root.right = this._deleteMin(root.right)
    }

    return root
  }

  private _deleteMin(root: TreeNode<Key, Value>): null | TreeNode<Key, Value> {
    if (!root.left) return root.right

    root.left = this._deleteMin(root.left)

    return root
  }

  contains(key: Key): boolean {
    return this.get(key) !== null
  }

  get(key: Key): Value | null {
    const node = this._get(this.root, key)

    if (node) return node.value
    else return null
  }

  private _get(
    root: TreeNode<Key, Value> | null,
    key: Key
  ): TreeNode<Key, Value> | null {
    if (!root) return null

    const cmp = this.compare(key, root.key)

    if (cmp === 0) return root
    else if (cmp < 0) return this._get(root.left, key)
    else return this._get(root.right, key)
  }

  put(key: Key, value: Value): void {
    this.root = this._put(this.root, key, value)
  }

  private _put(
    root: null | TreeNode<Key, Value>,
    key: Key,
    value: Value
  ): TreeNode<Key, Value> {
    if (!root) {
      this._size++
      return new TreeNode(key, value)
    }

    const cmp = this.compare(key, root.key)

    if (cmp === 0) {
      root.value = value
    } else if (cmp < 0) {
      root.left = this._put(root.left, key, value)
    } else {
      root.right = this._put(root.right, key, value)
    }

    return root
  }

  private compare(a: Key, b: Key): number {
    if (typeof a === 'string') {
      if (a === b) return 0
      return a > b ? 1 : -1
    } else if (typeof a === 'number') {
      return a - (b as number)
    } else {
      return (a as Comparable<Key>).compareTo(b)
    }
  }

  min(): null | Key {
    if (this.isEmpty()) return null

    return this._min(this.root!).key
  }

  _min(root: TreeNode<Key, Value>): TreeNode<Key, Value> {
    if (!root.left) return root

    return this._min(root.left)
  }

  size(): number {
    return this._size
  }
  isEmpty(): boolean {
    return this._size === 0
  }
}
