var database;
var form,game,player;
var gameState=0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1_img,car2_img,car3_img,car4_img,track_img;

function preload(){
car1_img = loadImage("../images/car1.png")
car2_img = loadImage("../images/car2.png")
car3_img = loadImage("../images/car3.png")
car4_img = loadImage("../images/car4.png")
track_img = loadImage("../images/track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();
game = new Game()
game.getState()
game.start()
   
}

function draw(){
    background("white");
    if (playerCount === 4){
        game.update(1)
    }
    if (gameState === 1){
        clear();
        game.play();
    }
  
}


