import { limitDistance } from '../util/limitDistance.js'

export const link = (p5) => {
  let link
  let anchor
  const maxDist = window.innerWidth > 500 ? 250 : 100

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.noCursor()

    link = p5.createVector(0, 0)
    anchor = p5.createVector(0, 0)
  }

  p5.drawJoint = (x, y, r) => {
    p5.fill(0, 0)
    p5.strokeWeight(2)
    p5.circle(x, y, r)
    p5.strokeWeight(10)
    p5.circle(x, y, 1)
  }

  p5.draw = () => {
    // Draw Background
    p5.background(220)

    // Input
    anchor.set(p5.mouseX, p5.mouseY)

    // ============= Anchor =================
    // Draw Anchor
    p5.drawJoint(anchor.x, anchor.y, maxDist * 2)

    // =============== Link =================
    // Limit Distance
    limitDistance(link, anchor, maxDist)
    p5.drawJoint(link.x, link.y, maxDist * 2)

    // =============== Distance ==============
    // Distance Text
    p5.textSize(48)
    p5.strokeWeight(1)
    let distance = anchor.dist(link)
    p5.text(distance.toFixed(0), anchor.x, anchor.y)

    // Draw Distance Line
    p5.stroke('black')
    p5.fill('white')
    p5.strokeWeight(2)
    p5.line(anchor.x, anchor.y, link.x, link.y)
  }
}
