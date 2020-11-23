import Comparable from './Comparable'

export default interface Map<
  Key extends number | string | Comparable<Key>,
  Value
> {
  delete(key: Key): void
  contains(key: Key): boolean
  get(key: Key): Value | null
  put(key: Key, value: Value): void
  size(): number
  isEmpty(): boolean
}
