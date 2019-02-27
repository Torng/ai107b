function f (x,y) { return -1*(x*x -2*x + y*y +2*y - 8) }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.01
var num = 0.0
var dy = 0.01
function hillClimbing (f, x , y) {
  while (true) {
    console.log('f(%s,%s)=%s', x.toFixed(4),y.toFixed(4), f(x,y).toFixed(4))
    if (f(x + dx,y) >= f(x,y)) {
      x = x + dx
      num = f(x + dx,y)
    } else if (f(x - dx,y) >= f(x)) {
      x = x - dx
      num = f(x - dx,y)
    }else if (f(x,y-dy) >= f(x)) {
      y = y-dy
      num = f(x,y-dy)
    }else if (f(x,y+dy) >= f(x)) {
      y = y +dy
      num = f(x ,y+dy)
    }else {
       break
    }
  }
}

hillClimbing(f,1.0,-1.0)
console.log(num)