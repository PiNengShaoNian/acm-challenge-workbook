import UF from '../../model/UF'

export class UnionFind implements UF {
  private size: number[] = []
  private id: number[] = []
  private _count: number = 0

  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.size[i] = 0
      this.id[i] = i
    }
    this._count = size
  }
  count(): number {
    return this._count
  }

  find(site: number): number {
    if (this.id[site] === site) return site
    else {
      return (this.id[site] = this.find(this.id[site]))
    }
  }

  connected(site1: number, site2: number): boolean {
    return this.find(site1) === this.find(site2)
  }

  union(site1: number, site2: number): void {
    const leaderId1 = this.find(site1)
    const leaderId2 = this.find(site2)

    if (leaderId2 === leaderId1) return

    this._count--
    if (this.size[leaderId1] < this.size[leaderId2]) {
      this.id[site1] = leaderId2
    } else {
      this.id[site2] = leaderId1

      if (this.size[leaderId1] === this.size[leaderId2]) {
        this.size[leaderId1]++
      }
    }
  }
}
