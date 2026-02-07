
function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Skills are important. Choose your profession.";
        document.getElementById("choice1").innerHTML = "Doctor";
        document.getElementById("choice2").innerHTML = "Rocket scientist";
    }
    else if (choice == 2 && answer2 == "No") { 
        document.getElementById("story").innerHTML = "Maybe life here isn't so bad after all." + "<br><br>Does the trail really call to you?";
        document.getElementById("choice1").innerHTML = "Yes! West it is!";
        document.getElementById("choice2").innerHTML = "No. Let's stay home.";
    }
    else if (choice == 1 && answer1 == "Doctor") {
        document.getElementById("story").innerHTML = "Nice to meet you, Doc. Timing is important. It is now May." +  "<br><br>Should the wagon train leave now?";
        document.getElementById("choice1").innerHTML = "Leave now";
        document.getElementById("choice2").innerHTML = "Wait a little longer";
    }
    else if (choice == 2 && answer2 == "Rocket scientist") {
        document.getElementById("story").innerHTML = "It's 1854, you are not rocket scientist. Try again, funny guy.";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "I refuse";
    }
    else if (choice == 1 && answer1 == "Leave now") {
        document.getElementById("story").innerHTML = "You set off. Things go smoothly until you reach a rather deep river crossing." +  "<br><br>Should you leave some supplies behind to lighten the load or ford the river as is? ";
        document.getElementById("choice1").innerHTML = "Ford now";
        document.getElementById("choice2").innerHTML = "Abandon supplies";
    }
    else if (choice == 2 && answer2 == "Wait a little longer") {
        document.getElementById("story").innerHTML = "It's now June." + "<br><br>Should we leave yet?";
        document.getElementById("choice1").innerHTML = "Leave now";
        document.getElementById("choice2").innerHTML = "Wait some more";
    }

    else if (choice == 2 && answer2 == "Wait some more") {
        document.getElementById("story").innerHTML = "It is now July. There is no way you'll complete the journey before the winter snow." +  "<br><br>You might as well restart next year.";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "I refuse";
    }

    else if (choice == 1 && answer1 == "Ford now") {
        document.getElementById("story").innerHTML = "Your wagon tips over and your supplies float down the river." + "<br><br>You must go back home with a returning wagon train and try again next year.";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "I refuse";
    }

    else if (choice == 2 && answer2 == "Abandon supplies") {
        document.getElementById("story").innerHTML = "You make it across the river. You have just enough supplies to complete your journey. It's time to start your new life." + "<br><br>Congratulations!";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "End";
    }

else if (choice == 1 && answer1 == "Restart") {
        document.getElementById("story").innerHTML = "It's 1854. You and your family have decided to make the trek out west in search of a better life." + "<br><br>The journey will be treacherous, but it may just be the new start you need. Will you continue?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
}
else if (choice == 2 && answer2 == "I refuse") {
        document.getElementById("story").innerHTML = "Ok. Maybe the Oregon trail isn't for you. Good luck out there, cowboy.";
}
else if (choice == 2 && answer2 == "No. Let's stay home.") {
        document.getElementById("story").innerHTML = "Ok. Maybe the Oregon trail isn't for you. Good luck out there, cowboy.";
        document.getElementById("choice1").innerHTML = "";
        document.getElementById("choice2").innerHTML = "";
}

}