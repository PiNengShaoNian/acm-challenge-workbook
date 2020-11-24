import { MinPriorityQueue } from '../section4/min-priority-queue'
import Edge from './Edge'
import EdgeWeightedGraph from './edge-weighted-graph'

export class Prim {
  private _mst: Edge[] = []
  private visited: boolean[] = []

  constructor(graph: EdgeWeightedGraph) {
    const minPQ = new MinPriorityQueue<Edge>()

    this.visited[0] = true
    for (const edge of graph.adjacent(0)) {
      minPQ.insert(edge)
    }

    while (minPQ.size()) {
      const edge = minPQ.deleteMin()!

      const vertex1 = edge.either()
      const vertex2 = edge.other(vertex1)

      if (this.visited[vertex1] && this.visited[vertex2]) continue

      this._mst.push(edge)

      const nextVertex = this.visited[vertex1] ? vertex2 : vertex1

      for (const edge of graph.adjacent(nextVertex)) {
        minPQ.insert(edge)
      }
    }
  }

  mst() {
    return this._mst
  }
}
