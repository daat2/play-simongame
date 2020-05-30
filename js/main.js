const game = {
    playerSequence: [],   //array containing the users selection
    // simonSequence: [], //array containing generated random buttons
    numLevels: 20,
    // turn: 00, //



};
// const boardSound = [
//     "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
//     "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
//     "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
//     "https://freesound.org/data/previews/191/191591_2437358-lq.mp3",    // orange button
//     "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
// ];

let green = document.getElementById("shapeG");
let blue = document.getElementById("shapeB");
let orange = document.getElementById("shapeO");
let yellow = document.getElementById("shapeY");
let onButton = document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");
let displayCountMemory = document.getElementById("displayCount");

//Variables

let power = false;
let playerSequence = [];
let displayCount = 1;
let strict = false;
let simonCount; //computer turn
let intervalId = 0;
let clearIntervalId
let noise;
// let activeRunning = false;
let activeMemory;
let trackCount; //keep track of turn
// let memoryArray=[];
let flash;
let sound = true;
let win;

// let clearColor;
let flashTracker;
let gameStatus; // To check players performance (true or false)
// let newAudio;
let playGame; // start of the game 
let onoffSwitch = false; //power button on or off function

let blueSound = new Audio("https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
let yellowSound = new Audio("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")
let greenSound = new Audio("https://freesound.org/data/previews/171/171495_2437358-lq.mp3")
let orangeSound = new Audio("https://freesound.org/data/previews/191/191591_2437358-lq.mp3")
let winSound = new Audio("https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$("#onoffSwitch").click(function () {
    if (power == false) {
        $("#displayText").text("ON");
        power = true;
        console.log(power);
     
    }
    else {

        $("#displayText").text("OFF");
        power = false;
        strict = false;
        console.log(power);



    }
});

//Strict button function

$("#strictButton").click(function () {
    if (power == true) {
        if (strict == false) {
            $("#strictButton").css("background", "coral");
            $("#strictButton").addClass("fa fa-check");
            strict = true;
            console.log(strict);

        }

        else if (strict == true) {
            $("#strictButton").css("background", "white");
            $("#strictButton").removeClass("fa fa-check");
            $("#startButton").css("background", "red")
            $("#displayText").text("1");


            strict = false;
            console.log(strict);
        }
    }


    $("#startButton").click(function () {
        if (power || win) {
            play(sound);
        };
    });

   

    //function to start the game
    function play(sound) {
        flashTracker = [];
        flash = 0;
        intervalId = 0;
        win = false;
        displayCount = 1;
        displayCountMemory.innerHTML = 1;
        gameStatus = true;
        for (var i = 0; i < 20; i++) {
            flashTracker.push(Math.floor(Math.random() * 4) + 1);
            console.log(flashTracker);
        }
        simonCount = true;
        intervalId = setInterval(gameCount, 1000);

        function gameCount() {
            power = false;
            if (flash == displayCount) {
                clearInterval(intervalId);
                simonCount = false;
                clearColor();
                power = true;
            
        }
        if (simonCount) {
            clearColor();
            setTimeout(() => {
                if (flashTracker[flash] == 1) fOne();
                if (flashTracker[flash] == 2) fTwo();
                if (flashTracker[flash] == 3) fThree();
                if (flashTracker[flash] == 4) fFour();
                flash++;
            }, 300);
        }
    }
}
})

function fOne() {
    if (noise) {
        let audio = document.getElementById("soundB");
       audio.play(sound);
    }
         noise = true;
    $("#shapeB").css ("background-color","red");
    }
debugger;

 function fTwo() {
    if (noise) {
        let audio = document.getElementById("soundY");
       audio.play(sound);
    }
         noise = true;
    $("#shapeY").css ("background-color","HotPink"); //#FF69B4
    }


 function fThree() {
    if (noise) {
        let audio = document.getElementById("soundG");
       audio.play(sound);
    }
         noise = true;
    $("#shapeG").css ("background-color","LawnGreen"); //#7CFC00
    }

function fFour() {
    if (noise) {
        let audio = document.getElementById("soundO");
       audio.play(sound);
    }
         noise = true;
    $("#shapeO").css ("background-color","Indigo"); //#4B0082
    }


    function clearColor() {
        shapeB.style.backgroundColor = "blue";
    }
 function clearColor() {
        shapeY.style.backgroundColor = "yellow";
    }
 function clearColor() {
        shapeG.style.backgroundColor = "green";
    }

     function clearColor() {
        shapeO.style.backgroundColor = "orange";
    }


    function flashLight() {
        shapeB.style.backgroundColor = "lightblue"
    }

     
    function flashLight() {
        shapeY.style.backgroundColor = "lightyellow";
    }
   
   
    function flashLight() {
        shapeG.style.backgroundColor = "SpringGreen" //#00FF7F
    }


    function flashLight() {
        shapeO.style.backgroundColor = "OrangeRed" //#FF4500
    }
 function check(){
     if(playerSequence[playerSequence.length -1]!== flashTracker[playerSequence.length -1])
gameStatus =false;
if (playerSequence.length== 20 && gamestatus){
    WinGame();
    
}
 }

    $("#shapeB").click(function() {
        if (power){
            playerSequence.push(1);
        check();
        fOne();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 200);

        }
    }
})

