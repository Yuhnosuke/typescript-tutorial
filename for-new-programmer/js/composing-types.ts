type MyBool = true | false

function getLength(obj: string | string[]): number {
  return obj.length
}

function wrapInArray(obj: string | string[]): string[] {
  if (typeof obj === 'string') {
    return [obj]
  }
  return obj
}

type StringArray = Array<String>
type NumberArray = Array<Number>
type ObjectWithNameArray = Array<{name: string}>

interface BackPack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

declare const backPack: BackPack<string>

const object = backPack.get()
// backPack.add(123)

interface Point {
  x: number
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

const point = { x: 23, y: 34 }
logPoint(point)

const point3 = { x: 1, y: 2, z: 3}
logPoint(point3)

const rec = { x: 1, y: 2, width: 3, height: 4 }
logPoint(rec)

const color = { hex: '#123ABC' }
// logPoint(color)

class VirtualPoint {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const newPoint = new VirtualPoint(12, 13)
logPoint(newPoint)
