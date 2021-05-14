class Ground  {
    constructor (x,y,width,height) {
        var ground_options = { 
            isStatic : true 
        }
        this.width = width;
        this.height = height;
          //Create the ground
          this.body = Bodies.rectangle (x,y,this.width,this.height, ground_options) ; // create body
          World.add (myWorld, this.body ); // add body to myworld  
    }

    display () {
        var PosX, PosY;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        fill("brown");
        rectMode (CENTER);
        rect (PosX, PosY,this.width, this.height) ;
        pop();
    }
}