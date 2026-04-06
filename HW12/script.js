class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }


}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;

var square1;
var square2;
var speedx = 5;
var speedy = 4;


drawSquare();
setInterval(MoveSecondSquare,1000/60);

function drawSquare()
{
  ctx.clearRect(0,0,800,600);
  square1 = new Square(x,y,30,30,"blue");
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

  square2 = new Square(x2,y2,50,50,"green",);
  ctx.fillStyle = square2.theColor;
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

function drawCollisionSquare()
{
     ctx.clearRect(0,0,800,600);
     square1.height = 5;
     square1.width = 5;
     ctx.fillStyle = square1.theColor;
     ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

     square2.height = 110;
     square2.width = 110;
     ctx.fillStyle = square2.theColor;
     ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);

    });
});


function getKey(event)
{
  
  var didCollide = hasCollided(square1, square2);
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if(!didCollide)
    {
        if(actualLetter == "w")
        {
            moveUp();
        }
        else if(actualLetter == "s")
        {
            moveDown();
        }
        else if(actualLetter == "d")
        {
            moveRight();
        }
        else if(actualLetter == "a")
        {
            moveLeft();
        }
        drawSquare();
        canvas.style.backgroundColor = "white";
    }

    if(didCollide)
    {
        x-=90;
        canvas.style.backgroundColor = "yellow";

        drawCollisionSquare();
        setInterval(drawSquare,1000);
        
    }


}

function moveUp()
{
    y-=16;
    if(y < 0){
        y+=16;
    }
}

function moveDown()
{
    y+=16;
    if(y > canvas.height -30){
        y-=16;
    }
}
function moveLeft()
{
    x-=16;
    if(x < 0){
        x+=16;
    }
}
function moveRight()
{
    x+=16;

    if(x > canvas.width -30){
        x-=16;
    }
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}


function MoveSecondSquare(){
     x2 += speedx;
     y2 += speedy;

     if (x2 + 50 > canvas.width || x2 < 0) {
        speedx *= -1;
       }

        if (y2+ 50 > canvas.height || y2 < 0) {
         speedy *= -1;
         }
         drawSquare();
    }