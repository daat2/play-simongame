const game = {
    playerSequence: [], //array containing the generated/random button
    simonSequence: [], //array containing the users selected button
    numLevels: 20,
    turn: 00, //
    active: false,



};
const boardSound = [
    "https://freesound.org/data/previews/151/151022_1838182-lq.mp3",    // blue button
    "https://freesound.org/data/previews/156/156859_2538033-lq.mp3",	// yellow button
    "https://freesound.org/data/previews/171/171495_2437358-lq.mp3",   // green button
    "https://freesound.org/data/previews/191/191591_2437358-lq.mp33",    // orange button
    "https://freesound.org/data/previews/151/151605_57789-lq.mp3",    // winner button
];

let green = document.getElementById("shapeG");
let blue = document.getElementById("shapeB");
let orange = document.getElementById("shapeO");
let yellow = document.getElementById("#shapeY");
//  let onButton =  document.getElementById("#onoffSwitch");
// let displayCount = document.getElementById("displayText");
// let boardSwitch = document.querySelector(".boardSwitch");
let strictButton = document.getElementById("strict");
let startButton = document.getElementById("start");



let power;
let off;
let strict = false;
let on;



// let blueSound = new Audio( "https://freesound.org/data/previews/151/151022_1838182-lq.mp3")
//  let yellowSound = new Audio ("https://freesound.org/data/previews/156/156859_2538033-lq.mp3")  
// let greenSound = new Audio ("https://freesound.org/data/previews/171/171495_2437358-lq.mp3" )
// let orangeSound = new Audio ("https://freesound.org/data/previews/191/191591_2437358-lq.mp33")
// let winSound = new Audio ( "https://freesound.org/data/previews/151/151605_57789-lq.mp3")


$(".boardSwitch").on("click", function () {
    if (power == off) {
        $("#displayText").css("opacity", "0.1");
        power = on;
    }
    else if (power == on) {
        displayText.innerHTML = "--";
        power = off;
    };

});
strictButton.addEventListener('click', (event) => {
    if (power == on) {
        if (strict = false) {
            $("#strictButton").css("background", "coral");
            $("#strictButton").addClass("fa fa-check");
            strict = "on";
        }
        else if (power == off) {
            (strict == true)
            $("#strictButton").css("background", "violet");
            $("#strictButton").removeClass("fa fa-check");
            strict = off;
        };
    };
});
startButton.addEventListener('click', (event) => {
  if (power ==on ) {
    $("#startButton").css("background", "Tomato");
      on = true ;
        displayText.innerHTML =1;
  
  }
});