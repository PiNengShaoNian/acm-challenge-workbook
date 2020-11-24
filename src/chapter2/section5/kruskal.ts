import { UnionFind } from '../section4/union-find'
import Edge from './Edge'
import EdgeWeightedGraph from './edge-weighted-graph'

export class Kruskal {
  private _mst: Edge[] = []
  constructor(graph: EdgeWeightedGraph) {
    const edges = [...graph.edges()]
    const uf = new UnionFind(graph.vertices())
    edges.sort((a, b) => a.compareTo(b))

    for (const edge of edges) {
      const vertex1 = edge.either()
      const vertex2 = edge.other(vertex1)

      if (!uf.connected(vertex1, vertex2)) {
        this._mst.push(edge)
        uf.union(vertex2, vertex1)
      }
    }
  }

  mst(): Edge[] {
    return this._mst
  }
}
