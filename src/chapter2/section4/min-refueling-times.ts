/*
Expedition (POJ 2431)
你需要驾驶一辆卡车行驶L单位距离。最开始时,卡车上有P单位的汽油。
卡车每开1单位,距离需要消耗1单位的汽油。
如果在途中车上的汽油耗尽,卡车就无法继续前行,因而无法到达终点。
在途中一共有N个加油站。第i个加油站在距离起点Ai单位距离的地方,最多
可以给卡车加Bi单位汽油。
假设卡车的燃料箱的容量是无限大的,无论加多少油都没有问"题。
那么请问卡车是否能到达终点?如果可以,最少需要加多少次油?
如果可以到达终点,输出最少的加油次数,否则输出-1.
*/

import { MaxPriorityQueue } from './max-priority-queue'

export const solution = (
  distance: number,
  init: number,
  stations: [stationPosition: number, fuel: number][]
): number => {
  let curPosition = 0
  let tank = init
  stations[stations.length] = [distance, 0]
  let N = stations.length

  const maxPQ = new MaxPriorityQueue<number>()
  let res = 0
  for (let i = 0; i < N; i++) {
    const [stationPosition, fuel] = stations[i]
    const d = stationPosition - curPosition

    while (tank - d < 0) {
      if (maxPQ.isEmpty()) return -1
      tank += maxPQ.deleteMax()
      res++
    }

    tank -= d
    curPosition = stationPosition
    maxPQ.insert(fuel)
  }

  return res
}
