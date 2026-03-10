// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, author, year, description, imagePath)
    {
        this.title = title;
        this.author = author;
        this.year = year;
        this.description = description;
        this.imagePath = imagePath;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
         return "Title: " + this.title + "\n" + "Year: " + this.year + "\n" + "Author: " + this.author + "\n" + "Description: " + this.description;
  
    }
    
    showImage()
    {
        return document.getElementById("slideImage").src = myViewFinderArray.imagePath;
    }


    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title;
    }

}

// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("Person Holding There Is No Planet B Poster", "Li-An Lim", '2019', "This photo shows youth participating in a climate change protest in Union Square, San Francisco. I this sign very succinctly describes that climate justice is a group effort that has to be achieved with mutual cooperation.", "PlantetB.jpg");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("A Group of People Holding up Pink Signs", "Gayatri Malhotra", "2021", "This photo shows a women's march in Washington D.C. I like this poster for its simplicity. Issues often get overcomplicated to distract and deter from making progress, so I think it's helpful to have statements like this that are very direct.   ", "womensRights.jpg");
    var myViewFinder2 = new ViewFinder("Grayscale Photo of People Holding a Signage", "Corey Young", "2020", "This photo shows a sign at a BLM protest. This sign reminded me of the MLK quotation, 'justice delayed is justice denied.' It illustrates that the world won't change for the better just because time has passed. For there to be progress, there needs to be people who are willing to take action for the sake of that progress.", "choosing.jpg");
    var myViewFinder3 = new ViewFinder("People Gathering on Street During Daytime", "Jonathan Kemper", "2020", "This shows a Fridays For Future demonstration in Berlin. This is a movement in which students skip classes on Fridays to demand action against climate change. The sign pictured refers to a group, grandmas against extremely far right political positions. I thought this sign at a student protest highlights how important it is to be politically active at any age. ", "rechts.jpg");
    var myViewFinder4 = new ViewFinder("A Crowd of People Holding a Rainbow Flag", "Margaux Bellott", "2019", "This photo shows a Pride parade in Strasbourg, France. While most of these slides show protests, I thought it was important to also show celebration. Political activism doesn't have to be negative, showing appreciation for the good things is important as well. I chose this photo because I think LGBTQ+ events are great examples of activism building community.  ", "pride.jpg");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    // add the second object to the array
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("slide").src = myViewFinderArray[randomNumber].imagePath;

}