import IndexMinPQ from '../../util/IndexMinPQ'
import EdgeWeightedGraph from './edge-weighted-graph'

export class Dijkstra {
  private visited: boolean[] = []
  private _distTo: number[]
  constructor(graph: EdgeWeightedGraph, source: number) {
    this._distTo = Array.from({ length: graph.vertices() }, () => Infinity)

    const pq = new IndexMinPQ<number>()
    this._distTo[source] = 0
    pq.insert(source, 0)

    while (pq.size()) {
      const vertex = pq.deleteMin()

      if (this.visited[vertex]) continue

      this.visited[vertex] = true

      for (const edge of graph.adjacent(vertex)) {
        const neighbor = edge.other(vertex)
        const newWeight = this._distTo[vertex] + edge.weight()

        if (newWeight < this._distTo[neighbor]) {
          this._distTo[neighbor] = newWeight

          if (pq.contains(neighbor)) pq.changeKey(neighbor, newWeight)
          else pq.insert(neighbor, newWeight)
        }
      }
    }
  }

  distTo(vertex: number): number {
    return this._distTo[vertex]
  }
}
