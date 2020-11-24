import Comparable from '../../model/Comparable'
import { MinPriorityQueue } from '../section4/min-priority-queue'
import EdgeWeightedGraph from './edge-weighted-graph'

class Distance implements Comparable<Distance> {
  constructor(public vertex: number, public distance: number) {}
  equals(that: Distance): boolean {
    return this === that
  }

  compareTo(that: Distance): number {
    return this.distance - that.distance
  }
}

export class Dijkstra {
  private visited: boolean[] = []
  private _distTo: number[]
  private _distTo2: number[]
  constructor(graph: EdgeWeightedGraph, source: number) {
    this._distTo = Array.from({ length: graph.vertices() }, () => Infinity)
    this._distTo2 = Array.from({ length: graph.vertices() }, () => Infinity)

    const pq = new MinPriorityQueue<Distance>()
    this._distTo[source] = 0
    pq.insert(new Distance(0, 0))

    while (pq.size()) {
      const { vertex, distance } = pq.deleteMin()!

      if (this._distTo2[vertex] < distance) continue

      for (const edge of graph.adjacent(vertex)) {
        const neighbor = edge.other(vertex)
        const newWeight = distance + edge.weight()

        if (newWeight < this._distTo[neighbor]) {
          this._distTo[neighbor] = newWeight

          pq.insert(new Distance(neighbor, newWeight))
        }

        if (
          newWeight < this._distTo2[neighbor] &&
          newWeight > this._distTo[neighbor]
        ) {
          this._distTo2[neighbor] = newWeight
          pq.insert(new Distance(neighbor, newWeight))
        }
      }
    }
  }

  distTo(vertex: number): number {
    return this._distTo[vertex]
  }
}
