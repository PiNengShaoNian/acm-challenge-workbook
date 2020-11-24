import Graph from './graph'
const RED = true

export class TwoColor {
  private graph: Graph
  private _isTwoColorable: boolean = true
  private _colors: boolean[] = []
  private visited: boolean[] = []
  constructor(graph: Graph) {
    this.graph = graph

    for (let vertex = 0; vertex < graph.vertices(); vertex++) {
      if (!this.visited[vertex]) if (this.dfs(vertex, RED)) break
    }
  }

  dfs(vertex: number, color: boolean): boolean {
    this.visited[vertex] = true
    this._colors[vertex] = color

    for (const neighbor of this.graph.adjacent(vertex)) {
      if (!this.visited[neighbor]) {
        if (this.dfs(neighbor, !color)) return true
      } else if (this._colors[vertex] === this._colors[neighbor]) {
        this._isTwoColorable = false
        return true
      }
    }

    return false
  }

  colors(): boolean[] {
    return this._colors
  }

  isTwoColorable() {
    return this._isTwoColorable
  }
}
