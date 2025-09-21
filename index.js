

function playgame() {
    userInput = document.getElementById("user-Input").value;
    console.log(userInput);

    botinput = Math.floor(Math.random() * 100) % 3;
    console.log(botinput);

    if (userInput >= 3) {
        console.log("false input");
    }

    else if (userInput == botinput) {
        console.log("Draw");
    } 

    else if (userInput == 0 && botinput == 2) {
        console.log("User Wins");
    }

    
    else if (userInput == 1 && botinput == 0) {
        console.log("User Wins");
    } 
    
    else if (userInput == 2 && botinput == 1) {
        console.log("User Wins");
    } 
    else {
        console.log("Bot Wins");
    }
}

