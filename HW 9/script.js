
var allWellness = new Array();
class WellnessInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

var allQuotes = new Array();
class QuotationInfo{
    constructor(selector, quote){
        this.selector = selector;
        this.quote = quote;

    }

}
  

    
    


function initializeArray()
{

    var sky = new WellnessInfo("#image-container", "./imgs/bluesky.jpg");
    allWellness.push(sky);
    var paper = new WellnessInfo("#image-container", "./imgs/journal.jpg");
    allWellness.push(paper);
    var cup = new WellnessInfo("#image-container", "./imgs/teacup.jpg");
    allWellness.push(cup);
    var meditate = new WellnessInfo("#image-container", "./imgs/meditation.jpg");
    allWellness.push(meditate);


}

function createTextArray()
{
    var quote1 = new QuotationInfo("#quotation-container", "Every morning we are born again. What we do today is what matters most");
    allQuotes.push(quote1);
    var quote2 = new QuotationInfo("#quotation-container", "Nothing can harm you as much as your own thoughts unguarded");
    allQuotes.push(quote2);
    var quote3 = new QuotationInfo("#quotation-container", "Be where you are; otherwise you will miss your life");
    allQuotes.push(quote3);
    var quote4 = new QuotationInfo("#quotation-container", "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment");
    allQuotes.push(quote4);
    var quote5 = new QuotationInfo("#quotation-container", "Quiet the mind and the soul will speak");
    allQuotes.push(quote5);
    var quote6 = new QuotationInfo("quotation-container", "Your purpose in life is to find your purpose, and give your whole heart and soul to it");
    allQuotes.push(quote6);

}

$(document).ready(function(){
    initializeArray();
    createTextArray();
    console.log(allQuotes[0].quote);

  console.log(allWellness.length);
    console.log(allWellness[0].toString());
    console.log(allWellness[0].theSelector);
    console.log(allWellness[0].theImagePath);

    
   // $(allWellness[0].theSelector).attr("src", allWellness[0].imagePath);

     
        var index = -1;

    function getRandomPosition() {
        var maxX = $(window).width() - $("#image-container").width();
        var maxY = $(window).height() - $("#image-container").height();

        return {
            left: Math.random() * maxX,
            top: Math.random() * maxY
        };
    }

    function changeImage() {
        $("#image-container").fadeOut(800, function() {

            index = (index + 1 ) % allWellness.length;
            $(this).attr("src", allWellness[index].imagePath);

            // move to random position
            var pos = getRandomPosition();
            $(this).css({
                left: pos.left + "px",
                top: pos.top + "px"
            });

        }).fadeIn(800).animate({left: '+=250'},2000);
    }

  var index1 = -1;
    function showNextText() {
       $("#quotation-container").fadeOut(800, function() {
        index1 = (index1 + 1 ) % allQuotes.length;
            console.log(index1);
            $(this).text(allQuotes[index1].quote);

            // move to random position
            var pos = getRandomPosition();
            $(this).css({
                left: pos.left + "px",
                top: pos.top + "px"
            });

        }).fadeIn(800).animate({left: '+=100px'},2000);

    }

  // Array of shape types
  let shapes = ["circle", "square", "triangle"];
  let currentIndex = 0;

  // Create initial shape
  let $shape = $("<div></div>").addClass("shape");
  $("#canvas").append($shape);

  function updateShape() {
    // Remove old shape classes
    $shape.removeClass("circle square triangle");

    // Add new shape class
    $shape.addClass(shapes[currentIndex]);

    // Reset position
    $shape.css({ top: 100, left: 0 });

    // Animate movement
    $shape.animate({ left: 550 }, 2000, function () {
      // After movement, switch to next shape
      currentIndex = (currentIndex + 1) % shapes.length;
      updateShape();
    });
  }

  // Start animation loop
  


    


    $("button").click(function(){
       
        $(".stuff").fadeOut();


      //     setInterval(moveSquare, 1000);

           setInterval(changeImage, 2500);

           setInterval(showNextText, 3500);

           updateShape();

  // $(allWellness[0].theSelector).fadeOut(1000).fadeIn(1000); 
  // $(allWellness[1].theSelector).attr("src", allWellness[1].imagePath);
 //  $(allWellness[1].theSelector).fadeOut(1000).fadeIn(1000);


           

        
    });
});

//function moveSquare()
//{
  //  $("#square").animate({left:350}).animate({top:400}).animate({left:100}).animate({top:300},1000).animate({ left: "500px", top: "350px" }, 1000);
//$("#circle").animate({left:550}).animate({top:400}).animate({left:300}).animate({top:300},1000).animate({ left: "500px", top: "350px" }, 1000);
   // $("#triangle").animate({left:750}).animate({top:400}).animate({left:500}).animate({top:300},1000).animate({ left: "500px", top: "350px" }, 1000);
//}

