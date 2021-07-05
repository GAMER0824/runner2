var runner,runnerImg
var path,pathImg

function preload() {
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,340)
  runner.addAnimation("runing",runnerImg)
  runner.scale = 0.08
  
 
 invisibleWall = createSprite(375,340,20,100)
 invisibleWall2 = createSprite(40,340,20,100)
 invisibleWall.visible = false
 invisibleWall2.visible = false


  }

  

function draw() {
  background(0); 
if (path.y > 400) {
    path.y = height / 2
}
drawSprites()


if (mouseX > 0 && mouseX < 400)
  runner.x = mouseX

edges = createEdgeSprites()
runner.collide(edges[0])
runner.collide(edges[1])

runner.bounceOff(invisibleWall);
runner.bounceOff(invisibleWall2);

}
