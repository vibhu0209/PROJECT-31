const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var plinkos = [];
var divisions = [];
var particles = [];
var divisionsHeight = 300;
var ground;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2 , height , width,20);
  

    for(var a = 0; a <=width; a += 80){
      divisions.push(new Division(a, height-divisionsHeight/2, 10, divisionsHeight));
    }

    for(var b = 40; b<= width; b = b + 50){
      plinkos.push(new Plinko(b , 75))
    }
    for(var c = 15; c<= width-10; c = c+50){
      plinkos.push(new Plinko(c ,125))
    }
    for(var d = 40; d<= width-10; d = d+50){
      plinkos.push(new Plinko(d ,175))
    }
   
    
  } 
function draw() { 
  if(frameCount % 40 === 0){
    particle = new Particle(random(120, 500), 0);
    particles.push(particle);
  }

  background(0);
   Engine.update(engine);

   ground.display();  

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  
}