/*eslint-disable */
var s
var scl = 20
var item
function setup () {
  createCanvas(600, 600)
  s = new Snack()
  frameRate(10)
  itemLocation()
}


function draw () {
  background(51)
  s.update()
  s.show()

  if (s.eat(item)) {
    itemLocation()
  }

  fill(51, 204, 51)
  rect(item.x, item.y, scl, scl)
}


function itemLocation () {
  var cols = floor(width / scl)
  var rows = floor(height / scl)

  item = createVector(floor(random(cols)), floor(random(rows)))
  item.mult(scl)
}

function keyPressed () {
  if(keyCode === UP_ARROW) s.dir(0, -1)
  else if(keyCode === DOWN_ARROW) s.dir(0, 1)
  else if(keyCode === RIGHT_ARROW) s.dir(1, 0)
  else if(keyCode === LEFT_ARROW) s.dir(-1, 0)
}

function Snack () {
  this.x = 0
  this.y = 0


  this.Xspeed = 1
  this.Yspeed = 0

  this.tail = []
  this.total = 0

  this.update = function () {

    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1]
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y)

    this.x = this.x + this.Xspeed * scl
    this.y = this.y + this.Yspeed * scl

    this.x = constrain(this.x, 0, width - scl)
    this.y = constrain(this.y, 0, height - scl)
  }

  this.show = function () {
    fill(255)
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl)
    }
    fill(255)
    rect(this.x, this.y, scl, scl)
  }

  this.dir = function (x, y) {
    this.Xspeed = x
    this.Yspeed = y
  }

  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      this.total++
      return true
    }
    else return false
  }
}