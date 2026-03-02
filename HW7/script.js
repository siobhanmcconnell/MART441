// create an array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
// create a variable with the blank image name
var blankImagePath = "flower.jpg";
// create a empty array for the actual images
var firstNumber = -1;
var secondNumber = -1;

var player = {"firstname":"", "lastname":"", "age":"", "turns":""};
var actualImages = new Array();
var attempts = 0;
var correct = 0;
    
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{
    // create an array of actual images
    var actualImagePath = ["pear.jpg", "peach.jpg", "apple.jpg", "lemon.jpg", "orange.jpg", "strawberry.jpg" ];
    // create another array to make sure the images only get added twice
    var count = [0,0,0,0,0,0];
    // create a while statement to check to see if our actual image array is full
    while(actualImages.length < 12)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}
function flipImage(number)
{

    // make the second image appear
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
        attempts=attempts+1;
    console.log(attempts);
        
    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    
    }

    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
        correct = correct+1;
       // console.log(correct);

        if (correct > 5){
            updatePlayer();
            gameWin();
        }
    } 
   

}

function gameWin()
{
    window.location = "end_page.html";
}


function imagesDisappear()
{

   //console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{

    if (document.getElementById("txtFirstName").value == "" || document.getElementById("txtLastName").value == "" || document.getElementById("txtAge").value == "") {
        window.alert("please fill in the textboxes");
        window.location = "start_page.html";
    }

    else if (document.getElementById("txtFirstName").value != "" && document.getElementById("txtLastName").value != "" && document.getElementById("txtAge").value != ""){
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
    //console.log(firstName);
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));



    window.location = "memory_matching.html";}

}

  

function updatePlayer()
{
    var attemptNumber = attempts;
    player.turns = attemptNumber;
    localStorage.setItem("playerInfo", JSON.stringify(player));

}

        

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    document.getElementById("endInformation").innerHTML = (player.firstname) + " " + (player.lastname) + ", age " + (player.age) + ", " + "turns taken: " + (player.turns);

   // console.log(document.getElementById("age"))
 
}