
var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var circleArray = [];
var score = 0;

$(document).ready(function(){
    
    setup();  
    drawSquare();
    $(this).keydown(function(event){
        getKey(event);
        
    });
});







function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("obstacles.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
    });

    $.getJSON("collectibles.json", function(data) {
        for(var i = 0; i < data.circles.length; i++)
        {
            circleArray.push(new Circle(data.circles[i].x,data.circles[i].y, data.circles[i].r, data.circles[i].color));
        }
    });
            drawSquare();

    
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    if(char == 38)
    {
        moveUp();
        direction = "up";
    }
    if(char == 40)
    {
        moveDown();
        direction = "down";
    }
    if(char == 37)
    {
        moveLeft();
        direction = "left";
    }
    if(char == 39)
    {
        moveRight();
        direction = "right";
    }





    var test = hasCollided(square1,square2);
    var test2 = false;

    var test2Collect = false;


    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }

    for(var i = 0; i < circleArray.length; i++)
    {

       test2Collect = hasCollected(square1,circleArray[i]);
        if(test2Collect == true)
        {

           break;
    }
}
    



    if(test || test2)
    {
        score--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }


        if(test2Collect)
        {
            score++;
        circleArray.splice([i],1);
        
        }







    drawSquare(); 
    
}

function moveUp()
{
    square1.y-=10;
    if(square1.y<0){
        square1.y+=10;
    }
}
function moveDown()
{
    square1.y+=10;
    if(square1.y> canvas.height - 50){
        square1.y-=10;
    }
}
function moveRight()
{
    square1.x+=10;

    if (square1.x > canvas.width - 50){
        square1.x-=10
    }
}
function moveLeft()
{
    square1.x-=10;
    if(square1.x < 0){
        square1.x +=10
    }
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    for(var i = 0; i < circleArray.length; i++)
    {
    ctx.beginPath();
    ctx.arc(circleArray[i].x, circleArray[i].y, circleArray[i].r, 0, Math.PI * 2);
    ctx.fillStyle = circleArray[i].mainColor;
    ctx.fill();
    ctx.closePath();
    }



    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.fillText("Score: " + score, 10, 50);    

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function hasCollected(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.r)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.r))
    );

}

