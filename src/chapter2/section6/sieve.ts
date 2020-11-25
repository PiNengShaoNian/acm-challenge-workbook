export class Seive {
  private _isPrime: boolean[] = []
  private _prime: number[] = []
  private _primeCount = 0
  constructor(n: number) {
    this._isPrime = Array.from({ length: n + 1 }, () => true)

    this._isPrime[1] = this._isPrime[0] = false

    for (let i = 2; i <= n; i++) {
      if (this._isPrime[i]) {
        this._prime.push(i)

        for (let j = 2 * i; j <= n; j += i) {
          this._isPrime[j] = false
        }
      }
    }
  }

  isPrime(num: number): boolean {
    return this._isPrime[num]
  }

  prime(): number[] {
    return this._prime
  }

  primeCount(): number {
    return this._primeCount
  }
}

const s = new Seive(100)

console.log(s.prime())
