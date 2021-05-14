class BaseClass  {
    constructor (x,y,width,height,angle) {
        var options = { 
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("images/base.png")
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height,options) ; // create body
          World.add (myWorld, this.body ); // add body to myworld  
          console.log(this.body);
    }

    display () {
        var PosX, PosY;
        var angle = this.body.angle ;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        translate (PosX , PosY) ;
        angleMode (RADIANS);
        rotate(angle);
        imageMode (CENTER);
        image(this.image,0, 0,this.width, this.height) ;
        pop();
    }
}