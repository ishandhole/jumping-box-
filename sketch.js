var canvas;
var music;
var box1, box2,box3,box4;
var ball;

var edges;


function setup(){
    canvas = createCanvas(710,600);
    box1 = createSprite(90,590,150,20);
    box1.shapeColor = "green";

    box2 = createSprite(270,590,150,20);
    box2.shapeColor = "orange";

    box3 = createSprite(450,590,150,20);
    box3.shapeColor = "red";

    box4 = createSprite(630,590,150,20);
    box4.shapeColor = "blue";

    ball = createSprite(random(20,750));
    ball.velocityY = 10;
    ball.velocityX = 10;
    ball.shapeColor = "white";
    ball.scale = 0.4;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    edges = createEdgeSprites();


    if(box1.isTouching(ball)&& ball.bounceOff(box1)){
        ball.shapeColor = "green";
    }
    if(box2.isTouching(ball)&& ball.bounceOff(box2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    if(box3.isTouching(ball)&& ball.bounceOff(box3)){
        ball.shapeColor = "red";
    }
    if(box4.isTouching(ball)&& ball.bounceOff(box4)){
        ball.shapeColor = "blue";
    }
    ball.bounceOff(edges);

   

  
   


}
