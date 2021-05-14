class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
        this.image = loadImage("Images/wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }
}

/*class Log  {
    constructor (x,y,height,angle) {
        var log_options = { 
            restitution : 0.8 ,
            friction : 1.0 ,
            density : 1.0
        }
        this.width = 20;
        this.height = height;
        this.angle = angle;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height, log_options) ; // create body
          Matter.Body.setAngle(this.body,angle);
          World.add (myWorld, this.body ); // add body to myworld  
          console.log(this.body);
    }
 
    display () {
        var PosX, PosY;
        var angle = this.body.angle ;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        strokeWeight(5);
        stroke("green");
        fill("red");
        translate (PosX , PosY) ;
        angleMode (RADIANS);
        rotate(angle);
        rectMode (CENTER);
        rect (0, 0,this.width, this.height) ;
        pop();
    }
}*/