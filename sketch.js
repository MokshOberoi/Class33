//Namespacing
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Render = Matter.Render; 
const Constraint = Matter.Constraint;

var myEngine, myWorld, ground ;
var box1 , box2 , box3 , box4 , box5;
var ground ;
var pig1 , pig2 ;
var log1 , log2 , log3 , log4 ;
var bird ;
var bgImage, bg ;
var platform ;
var constrainedLog ;
var slingshot ;
var gamestate = "onsling";
var score = 0 ;

function preload(){

    //bgImage = loadImage("Images/bg.png");

    getbgImage();

}

function setup() {
  createCanvas(1200,400);
  
  var num = 10;   // numbers
  console.log (num);

  var text = "CODING CLASS";   //string
  console.log(text);

  var decision = true;  // boolean
  console.log (decision);

  var object ;   // undefined
  console.log(object);

  object = null ;  // null
  console.log(object);

  var arr1 = [2, 5, 1, 9];
  console.log (arr1);
  console.log (arr1[0]);
  console.log (arr1[1]);
  console.log (arr1[arr1.length]);
  console.log (arr1[arr1.length-1]);

  arr1.push (21);
  arr1.push (7);
  console.log(arr1);

  arr1.pop ();
  console.log(arr1);

  var arr2 = [[1,5],[2,6],[3,7]];
  console.log(arr2);
  console.log(arr2[0],[0])

  //Create engine and world
  myEngine = Engine.create (); 
  myWorld = myEngine.world ;

  /*var render = Render.create({
	  element: document.body,
	  engine: myEngine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });*/

  ground = new Ground (600,height,1200,20);

  platform = new Ground(150,305,300,170);

  box1 =  new Box (700,320,70,70);

  box2 = new Box (920,320,70,70);

  pig1 = new Pig(810,350);

  log1 = new Log(810,260,300,PI/2);

  box3 = new Box (700,240,70,70);

  box4 = new Box (920,240,70,70);

  pig2 = new Pig(810,220);

  log2 = new Log(810,180,300,PI/2);

  box5 = new Box (810,160,70,70);

  log3 = new Log(760,120,150,PI/7);

  log4 = new Log(870,120,150,-PI/7);

  bird = new Bird(200,250,50,50);

  //constrainedLog = new Log(230,180,80,PI/2);

  slingshot = new Slingshot(bird.body,{x:200,y:50});

  //Render.run (render);

  console.log(log4);

}

function draw() {
  //Display the objects
  if (bgImage){
      background(bgImage);
  }      
  Engine.update (myEngine);

  textSize(30);
  text("Score : " + score , width-300,50);

  box1.display ();
  ground.display();
  box2.display();
  pig1.display();
  pig1.score();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  pig2.score();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  platform.display();
  //constrainedLog.display();
  slingshot.display();

  
  


  //drawSprites();

}

//create keyPressed function here
function keyPressed(){
  if (keyCode === 32){
      Matter.Body.setPosition(bird.body,{x:200,y:50})
      slingshot.attach(bird.body);
      bird.trajectory=[];
  }
}

//Move the bird when the mouse is dragged
function mouseDragged(){
  if ( gamestate !== "launched" ){
       Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
  }
}

//Release the bird when mouse is released
function mouseReleased(){
    slingshot.release();
    gamestate = "launched";
}

// #A67035
//166,112

async function getbgImage () {

  var myResponse = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  console.log (myResponse);
  var responseJSON = await myResponse.json ();

  var hour = responseJSON.datetime.slice(11,13);

 // console.log ( responseJSON);
  //console.log ( responseJSON.datetime);
  console.log ("HOUR :"+ hour);

  if ( hour >= 06 && hour <= 16 ){
      bg = "Images/bg.png";

  } else {
          bg = "Images/bg2.jpg";
  }
  bgImage = loadImage(bg);
}