/*eslint-disable */
var ship
function setup () {
  createCanvas(windowWidth, windowHeight) // สร้าง container เพื่อทำการเเสดงผล
  ship = new Ship()
}

function draw () {
  background(51)
  ship.render() // เรียกการทำงานของ function this.render
}


// class

function Ship () {
  this.pos = createVector(width / 2, height / 2)
  this.raduis = 20

  this.render = function () {
    translate(this.pos.x, this.pos.y)
    triangle(-this.raduis, this.raduis, this.raduis, this.raduis, 0, -this.raduis) // สร้างรูปสามเหลี่ยม
  }

}