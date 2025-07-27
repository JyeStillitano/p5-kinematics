import { link } from './sketches/link.js'
import { chain } from './sketches/chain.js'
import { snake } from './sketches/snake.js'
import { fabrik } from './sketches/fabrik.js'
import { gravity } from './sketches/gravity.js'

let sketch = new p5(link, 'sketch-container')

function setSketch(newSketch) {
  if (sketch) sketch.remove()
  sketch = new p5(newSketch, 'sketch-container')
}

document.getElementById('link-button').onclick = () => setSketch(link)
document.getElementById('chain-button').onclick = () => setSketch(chain)
document.getElementById('grub-button').onclick = () => setSketch(snake)
document.getElementById('fabrik-button').onclick = () => setSketch(fabrik)
document.getElementById('gravity-button').onclick = () => setSketch(gravity)
