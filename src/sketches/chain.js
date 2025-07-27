import { limitDistance } from '../util/limitDistance.js'

export const chain = (p5) => {
  const d = window.innerWidth > 500 ? 100 : 50
  const numLinks = 5
  let anchor
  let links = []

  function drawJoint(x, y, r) {
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

    anchor = p5.createVector(0, 0)
  }

  p5.draw = () => {
    // Draw Background
    p5.background(220)

    // Input
    anchor.set(p5.mouseX, p5.mouseY)

    // ============= Anchor =================
    // Draw Anchor
    drawJoint(anchor.x, anchor.y, d * 2)

    // =============== Link =================
    // Limit Distance
    for (let i = 0; i < numLinks; i++) {
      let l = links[i]
      let p = i === 0 ? anchor : links[i - 1]

      limitDistance(l, p, d)
      drawJoint(l.x, l.y, d * 2)
    }
  }
}
