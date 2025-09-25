function playgame() {
    userInput = document.getElementById("user-Input").value;
    console.log(userInput);

    botinput = Math.floor(Math.random() * 100) % 3;
    console.log(botinput);

    if (userInput >= 3 ) {
        status = `<span>False input</span>`;
    }

    else if (userInput === "") {
        status = `<span>False input</span>`;
    } 

    else if (userInput < 0) {
        status = `<span>False input</span>`;
    } 

    else if (userInput == botinput) {
        status = `<span>Drawn</span>`;
    } 

    else if (userInput == 0 && botinput == 2) {
        status = `<span>User Wins</span>`;
    }

    
    else if (userInput == 1 && botinput == 0) {
        status = `<span>User Wins</span>`;
    } 
    
    else if (userInput == 2 && botinput == 1) {
        status = `<span>User Wins</span>`;
    } 
    else {
        status = `<span>Bot Wins</span>`;
    }
    document.getElementById('result').innerHTML = `Total is: <b>${status}</b>`;
    document.getElementById('bot').innerHTML = `Bot is: <b>${botinput}</b>`;
    ;
}

