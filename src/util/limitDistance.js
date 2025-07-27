// ((link - anchor).normalize() * distance) + anchor
export function limitDistance(l, a, d, strict = false) {
  if (!strict && l.dist(a) <= d) return
  return l.sub(a).normalize().mult(d).add(a)
}
