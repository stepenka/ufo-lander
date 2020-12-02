let elevation = -300
let grassImage
let barkImage
let leavesImage
let starsImage
let moonImage
let starsAngle = 0
let ufoAngle = 0

function preload() {
  grassImage = loadImage('grass.png')
  barkImage = loadImage('bark.png')
  leavesImage = loadImage('leaves.png')
  starsImage = loadImage('stars.png')
  moonImage = loadImage('moon.png')
}

function setup() {
  createCanvas(700, 700, WEBGL)
  noStroke()
}

function draw() {
  background('black');
  directionalLight(255, 255, 255, 1, 1, -1)
  pointLight(255, 255, 255, 0, elevation-30, 0)
  drawGround()
  drawUfo()
  drawTreeOne()
  drawTreeTwo()
  drawTreeThree()
  drawTreeFour()
  drawStars()
  drawMoon()
  elevation += 1
  if (elevation === 190) {
    noLoop()
  }
}

function drawGround() {
  push()
  texture(grassImage)
  spotLight(255, 255, 255, 0, elevation, 0, 0, 1, 0, Math.PI/6, 3)
  translate(0, 200, 0)
  rotateX(Math.PI/2)
  plane(1000, 550)  
  pop()
}

function drawUfo() {
  push()
  translate(0, elevation, 0)
  rotateY(ufoAngle)
  scale(1, 0.25, 1)
  specularMaterial('lightblue')
  sphere(80)
  translate(0, -80, 0)
  scale(1, 4, 1)
  specularMaterial(0,0,0,50)
  sphere(40)
  translate(0, 35, 0)
  emissiveMaterial('white')
  sphere(10)
  translate(0,-50,0)
  ufoAngle += 0.01
  pop()
}

function drawTreeOne(){
  push()
  texture(barkImage)
  translate(-220,150,-200)
  cylinder(20, 150)
  texture(leavesImage)
  translate(0,-140,0)
  sphere(75)
  pop()
}

function drawTreeTwo(){
  push()
  texture(barkImage)
  translate(220,150,-200)
  cylinder(20, 150)
  texture(leavesImage)
  translate(0,-140,0)
  sphere(75)
  pop()
}

function drawTreeThree(){
  push()
  texture(barkImage)
  translate(220,150,200)
  cylinder(20, 150)
  texture(leavesImage)
  translate(0,-140,0)
  sphere(75)
  pop()
}

function drawTreeFour(){
  push()
  texture(barkImage)
  translate(-220,150,200)
  cylinder(20, 150)
  texture(leavesImage)
  translate(0,-140,0)
  sphere(75)
  pop()
}

function drawStars(){
  push()
  texture(starsImage)
  rotateZ(starsAngle)
  translate(0,-150,-250)
  plane(1000, 1000)
  starsAngle +=0.0002
  pop()
}

function drawMoon(){
 push()
 texture(moonImage)
 translate(350,-400,-200)
 sphere()
 pop()
}
