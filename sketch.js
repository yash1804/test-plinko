const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var ground;
var particle;
var line;

var score = 0;
var count = 0;
var divisionHeight=300;
var gameState = start;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,480,10);
  leftWall = new Ground(0,400,7,800);
  line = new Line(400,450,800,10);
  rightWall = new Ground(800,400,7,800);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 35; j <=width-5; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 35; j <=width-5; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
 text("SCORE:"+score,20,30);
 textSize(30)
  text(" 300 ", 10, 600);
  text(" 200 ", 85, 600);
  text(" 100 ",165, 600);
  text(" 500 ",245, 600);
  text(" 200 ",325, 600);
  text(" 300 ",405, 600);
  text(" 100 ",485, 600);
  text(" 300 ",565, 600);
  text(" 200 ",645, 600);
  text(" 500 ",725, 600);

  Engine.update(engine);
  
  line.display();
  leftWall.display();
  rightWall.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if ( gameState =="end") {
    
      textSize(70);
      if(score < 501){
      fill("red");
      text("Bad Luck...", 220, 250);
      }
      else if(score <1001 && score > 501){ 
      fill("pink");
      text("nice!", 300, 250);
      }
      else if(score <1501 && score > 1001){
      fill("cyan");
      text("Amazing!", 230, 250);
      }
      else if(score <2001 && score > 1501){
         fill("green");
         text("MASTER!!", 235, 250);
      }
      else if(score < 2501 && score > 2001){
         textSize(50);
         fill("orange");
         text("OMG you've scored the max points in the game!!!", 10,250)
      }
      

}

if(particle!=null)
{
   particle.display();
    
    if (particle.body.position.y>650)
    {
          if (particle.body.position.x < 81) 
          {
              score=score + 300;      
              particle=null;
              if ( count>= 5) gameState ="end";                          
          }


          else if (particle.body.position.x < 161 && particle.body.position.x > 80 ) 
          {
                score = score + 200;
                particle=null;
                if ( count>= 5) gameState ="end";

          }
          else if (particle.body.position.x < 241 && particle.body.position.x > 160 )
          {
                score = score + 100;
                particle=null;
                if ( count>= 5)  gameState ="end";

          }      
          else if(particle.body.position.x <321 && particle.body.position.x > 240){
                score = score + 500
                particle=null
                if (count>=5) gameState = "end"
          }
          else if(particle.body.position.x <401 && particle.body.position.x > 320){
                score = score + 200
                particle=null
                if (count>=5) gameState = "end"
          }
          else if (particle.body.position.x <481 && particle.body.position.x > 400){
             score = score + 300
             particle=null
             if (count>=5) gameState = "end"
          }
          else if (particle.body.position.x <561 && particle.body.position.x > 480){
             score = score + 100
             particle=null
             if (count>=5) gameState = "end"
          }
          else if (particle.body.position.x <641 && particle.body.position.x > 560){
            score = score + 300
            particle=null
            if (count>=5) gameState = "end"
         }
         else if (particle.body.position.x <721 && particle.body.position.x > 640){
            score = score + 200
            particle=null
            if (count>=5) gameState = "end"
         }
         else if (particle.body.position.x <801 && particle.body.position.x > 720){
            score = score + 500
            particle=null
            if (count>=5) gameState = "end"
         }
         
    }
 
  }
 
}

 






function mousePressed()
{
if(gameState!=="end")
{
    count++;
   particle=new Particle(mouseX, 10, 10, 10); 
}   
}
