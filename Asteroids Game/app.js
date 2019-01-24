/*eslint-disable */
var ship
var asteroids = []
function setup () {
  createCanvas(windowWidth, windowHeight) // สร้าง container เพื่อทำการเเสดงผล
  ship = new Ship()
  for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroids())
  }
}

function draw () {
  background(51)
  ship.render() // เรียกการทำงานของ function this.render
  ship.turn()
  ship.update()
  ship.edges()

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render()
    asteroids[i].update()
    asteroids[i].edges()
  }
}


function keyReleased () {
  ship.setRotation(0)
  ship.boosting(false)
}

function keyPressed () {
  if (keyCode === RIGHT_ARROW) ship.setRotation(0.1)
  else if (keyCode === LEFT_ARROW) ship.setRotation(-0.1)
  else if (keyCode === UP_ARROW) ship.boosting(true) // กด boost เมื่อกดลูกศรขึ้นเท่านั้น
}
