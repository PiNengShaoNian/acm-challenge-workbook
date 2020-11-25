import Edge from './Edge'
import EdgeWeightedGraph from './edge-weighted-graph'
import { Kruskal } from './kruskal'

export const solution = (
  n: number,
  m: number,
  r: [number, number, number][]
): number => {
  const graph = new EdgeWeightedGraph(n + m)

  for (let i = 0; i < r.length; i++) {
    const [v1, v2, w] = r[i]

    graph.addEdge(new Edge(v1, v2, -w))
  }

  const k = new Kruskal(graph)

  return (n + m) * 10000 + k.mst().reduce((acc, cur) => acc + cur.weight(), 0)
}
