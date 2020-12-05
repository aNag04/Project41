var canvas;
var thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var walkingMan1,walkingMan2,walkingMan3,walkingMan4;
var walkingMan5,walkingMan6,walkingMan7,walkingMan8;
var maxDrops = 100;
var rain;
createCanvas(150,120,50,50)

function preload(){
    thunderImg1 = loadImage("../thunderbolt/1.png");
    thunderImg2 = loadImage("../thunderbolt/2.png");
    thunderImg3 = loadImage("../thunderbolt/3.png");
    thunderImg4 = loadiMage("../thunderbolt/4.png");
    
    walkingMan1 = loadImage("../Walking Frame/walking_1.png");
    walkingMan2 = loadImage("../Walking Frame/walking_2.png");
    walkingMan3 = loadImage("../Walking Frame/walking_3.png");
    walkingMan4 = loadImage("../Walking Frame/walking_4.png");
    walkingMan5 = loadImage("../Walking Frame/walking_5.png");
    walkingMan6 = loadImage("../Walking Frame/walking_6.png");
    walkingMan7 = loadImage("../Walking Frame/walking_7.png");
    walkingMan8 = loadImage("../Walking Frame/walking_8.png");
}
for(var i =0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}

function setup(){
umbrella = new Umbrella();   
    
}
if(this.rain.position.y>height){
    Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
}

function draw(){
    umbrella.display();
    updateDrops();    
}   

