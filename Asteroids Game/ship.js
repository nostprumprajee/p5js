/*eslint-disable */
function Ship () {
    this.pos = createVector(width / 2, height / 2)
    this.raduis = 20
    this.header = 0
    this.rotation = 0
  
    this.vel = createVector(1, 0)
  
    this.isBoosting = false
  
    this.boosting = function (bool) {
      this.isBoosting = bool
    }
  
    this.update = function () {
      if (this.isBoosting) this.boost() // เป็นจริง boost จะทำงาน
      this.pos.add(this.vel)
      this.vel.mult(0.95)
    }
  
    this.boost = function () {
      let force = p5.Vector.fromAngle(this.header)
      force.mult(0.4)
      this.vel.add(force)
    }
  
    this.render = function () {
      push()
      translate(this.pos.x, this.pos.y)
      rotate(this.header + PI / 2)
      noFill()
      stroke(255)
      triangle(-this.raduis, this.raduis, this.raduis, this.raduis, 0, -this.raduis) // สร้างรูปสามเหลี่ยม
      pop()
    }
  
    this.setRotation = function (value) {
      this.rotation = value
    }
  
    this.turn = function () {
      this.header += this.rotation
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