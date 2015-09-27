/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stats;
// GAME VARIABLES
var helloLabel;
var startButton;
var nextButton;
var backButton;
function init() {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counter
    main(); // call main game function
}
// MAIN GAME LOOP
function gameLoop(event) {
    stats.begin(); // start counting
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}
// SETUP GAME STATS
function setupStats() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// EVENT HANDLERS
function clickStartButton(event) {
    helloLabel.text = "Clicked";
}
// FUN HAPPENS HERE
function main() {
    // hello label
    helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel); // add label to the stage
    // start button
    startButton = new objects.Button("StartButton", 320, 340);
    startButton.on("click", clickStartButton, this); // click, mouseover, mouseout = already created enumerations
    stage.addChild(startButton);
}
