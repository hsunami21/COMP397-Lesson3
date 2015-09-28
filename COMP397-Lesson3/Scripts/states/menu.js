// MENU STATE
var states;
(function (states) {
    // FUN HAPPENS HERE
    function menu() {
        scene = new createjs.Container();
        // hello label
        helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
        scene.addChild(helloLabel); // add label to the stage
        // start button
        startButton = new objects.Button("StartButton", 320, 340);
        startButton.on("click", clickStartButton, this); // click, mouseover, mouseout = already created enumerations
        scene.addChild(startButton);
        stage.addChild(scene);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map