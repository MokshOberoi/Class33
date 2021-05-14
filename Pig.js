class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("Images/enemy.png");

        this.visibility = 255 ;
    }
    display(){
        
        //console.log("SPEED :" + this.body.speed);
        if (this.body.speed < 3){
            super.display();
        }   else{
            // do nothing
            World.remove(myWorld,this.body);
            push()
            tint(255,this.visibility);
            imageMode (CENTER);
            image(this.image,this.body.position.x,this.body.position.y,50,50) ;
            pop()
            this.visibility = this.visibility - 5;
        }
    }
    score(){
            if (this.visibility<0 && this.visibility>-1005){
                score++ ;
            }


    }
}

/*class Pig  {
    constructor (x,y) {
        var box_options = { 
            restitution : 0.8 ,
            friction : 0.3 ,
            density : 1.0 
        }
        this.width = 50;
        this.height = 50;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height, box_options) ; // create body
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
        stroke("white");
        fill("black");
        translate (PosX , PosY) ;
        angleMode (RADIANS);
        rotate(angle);
        rectMode (CENTER);
        rect (0, 0,this.width, this.height) ;
        pop();
    }
}*/