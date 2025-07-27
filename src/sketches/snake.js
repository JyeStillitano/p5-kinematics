import { limitDistance } from '../util/limitDistance.js'

export const snake = (p5) => {
  const d = 100
  const n = 15
  let anchor
  let links = []

  function drawJoint(x, y, r) {
    p5.fill(0, 0) // alpha
    //p5.fill('Tan')
    p5.strokeWeight(1)
    p5.circle(x, y, r / 2)
    p5.strokeWeight(10)
    p5.circle(x, y, 1)
  }

  function drawBackground() {
    p5.background(220)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.noCursor()

    // Create links
    for (let i = 0; i < n; i++) {
      links.push(p5.createVector(0, 0))
    }

    anchor = p5.createVector(0, 0)
  }

  p5.draw = () => {
    drawBackground()

    // Limit Distances
    anchor.set(p5.mouseX, p5.mouseY)
    for (let i = 0; i < n; i++) {
      let s = (n - i) / n
      let l = links[i]
      let p = i === 0 ? anchor : links[i - 1]

      limitDistance(l, p, d * s)
    }

    // Draw
    for (let i = n - 1; i >= 0; i--) {
      let s = (n - i) / n
      let l = links[i]

      drawJoint(l.x, l.y, d * s * 3) // Link
    }
    drawJoint(anchor.x, anchor.y, d * 2) // Anchor
  }
}
