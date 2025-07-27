import { limitDistance } from '../util/limitDistance.js'

export const fabrik = (p5) => {
  const d = 50
  const numLinks = 5
  let anchorA
  let anchorB
  let links = []

  function drawCursor() {
    p5.fill('DarkGrey')
    p5.strokeWeight(2)
    p5.stroke('DarkGrey')

    p5.circle(p5.mouseX, p5.mouseY, 30)
  }

  function drawJoint(x, y, r) {
    p5.stroke('Black')
    p5.fill(0, 0)
    p5.strokeWeight(2)
    p5.circle(x, y, r)
    p5.strokeWeight(10)
    p5.circle(x, y, 1)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.noCursor()

    for (let i = 0; i < numLinks; i++) {
      links.push(p5.createVector(0, 0))
    }

    anchorA = p5.createVector(0, 0)
    anchorB = p5.createVector(window.innerWidth / 2, window.innerHeight / 2)
  }

  p5.draw = () => {
    // Draw Background
    p5.background(220)

    // Input
    anchorA.set(p5.mouseX, p5.mouseY)
    anchorB.set(window.innerWidth / 2, window.innerHeight / 2)

    // ============= Anchor =================
    // Draw Anchor
    //drawJoint(anchorA.x, anchorA.y, d * 2)
    drawCursor()
    drawJoint(anchorB.x, anchorB.y, d * 2)

    // =============== Link =================
    // Limit Distance to Mouse
    for (let i = 0; i < numLinks; i++) {
      let l = links[i]
      let p = i === 0 ? anchorA : links[i - 1]

      limitDistance(l, p, d, true)
      //drawJoint(l.x, l.y, d * 2)
    }

    // Limit Distance to Centre
    for (let i = numLinks - 1; i >= 0; i--) {
      let l = links[i]
      let p = i === numLinks - 1 ? anchorB : links[i + 1]

      limitDistance(l, p, d, true)
      //drawJoint(l.x, l.y, d * 2)
    }

    links.forEach((l) => drawJoint(l.x, l.y, d * 2))
  }
}
