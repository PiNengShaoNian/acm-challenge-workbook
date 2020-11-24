import EdgeWeightedGraph from './edge-weighted-graph'

export class BellmanFord {
  private _distTo: number[]
  constructor(graph: EdgeWeightedGraph, source: number) {
    this._distTo = Array.from({ length: graph.vertices() }, () => Infinity)
    this._distTo[source] = 0

    let update = true
    while (true) {
      update = false

      for (let vertex = 0; vertex < graph.vertices(); vertex++) {
        for (const edge of graph.adjacent(vertex)) {
          const to = edge.other(vertex)

          const newWeight = this._distTo[to] + edge.weight()

          if (newWeight < this._distTo[to]) {
            this._distTo[to] = newWeight
            update = true
          }
        }
      }

      if (!update) break
    }
  }

  distTo(vertex: number): number {
    return this._distTo[vertex]
  }
}
