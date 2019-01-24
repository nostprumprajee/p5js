/*eslint-disable */

function Asteroids () {
    this.pos = createVector(random(width), random(height))
    this.raduis = random(15, 50)
    this.total = floor(random(5, 15))
    this.offset = []
    this.vel = p5.Vector.random2D()
  
    for (var i = 0; i < this.total; i++) {
      this.offset[i] = random(-5, 5)
    }
  
    this.update = function () {
      this.pos.add(this.vel)
    }
  
    this.total = floor(random(5, 15))
    this.render = function () {
      push()
      stroke(255)
      noFill()
      translate(this.pos.x, this.pos.y)
      // ellipse(0, 0, this.raduis * 2)
      beginShape()
      for (var i = 0; i < this.total; i++) {
        let angle = map(i, 0, this.total, 0, TWO_PI)
        let x = (this.raduis + this.offset[i]) * cos(angle)
        let y = (this.raduis + this.offset[i]) * sin(angle)
        vertex(x, y)
      }
      endShape(CLOSE)
      pop()
    }
  
    this.edges = function () {
      if (this.pos.x > width + this.raduis) {
        this.pos.x = -this.raduis
      } else if (this.pos.x < -this.raduis) {
        this.pos.x = width + this.raduis
      } else if (this.pos.y > height + this.raduis) {
        this.pos.y = -this.raduis
      } else if (this.pos.y < -this.raduis) {
        this.pos.y = height + this.raduis
      }
    }
  }