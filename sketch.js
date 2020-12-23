var particles = [];
var plinkos = [];
var divisions = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisionHeight = 300;



function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(240,height,480,20);

}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(1); 
    ground.display(); 
    for (var k = 0; k <= width; k = k + 80){
      divisions.push(new Divisions(k, height + divisionHeight/2, 10, divisionHeight))
    }
    for (var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }
    for (var j = 40; j <= width; j = j + 50){
      plinkos.push(new Plinko(j,75,10))
    }
    for (var j = 15; j <= width + 10; j = j + 50){
      plinkos.push(new Plinko(j,175,10))
    }
    for (var j = 0; j < divisions.length; j++){
      plinkos[j].display();
    } 
    if(frameCount%60===0){
      particles.push(new particles(random(width/2-10, width/2+10),10,10))
    }
}