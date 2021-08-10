const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;

var bg = "sunrise.png";

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(time>=12){
        text("Time : "+ time%12 + " PM", 50,100);
    }else if(time==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ time%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){
    
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    console.log(response);

    var responseJson = await response.json();
    console.log(responseJson);

    var datetime = responseJson.datetime;
    console.log(datetime);

    var time = datetime.slice(11,13);
    console.log(time);
    
    if( time > 15 && time < 19){
        bg = "sunrise.png";
    }
    else{
        bg = "sunset.png";
    }
    
    backgroundImg = loadImage(bg);

}
