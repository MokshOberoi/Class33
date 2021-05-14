class Slingshot {
    constructor(bodyX,pointY){
        var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 10
        }
    
        this.slingshot = Constraint.create(options);
        World.add(myWorld,this.slingshot);
        //Load the images for the slingshot
        this.sling1 = loadImage("Images/sling1.png");
        this.sling2 = loadImage("Images/sling2.png");
        this.sling3 = loadImage("Images/sling3.png");


    }
    display(){
        var pointA,pointB;
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if (this.slingshot.bodyA != null ){
            pointA = this.slingshot.bodyA.position ;
            pointB = this.slingshot.pointB;
            push();
            strokeWeight(5);
            stroke(166,112,53);
            //Move the wooden piece to the right side when the bird is on the right
            if (pointA.x < 220){
                //line(pointA.x,pointA.y,pointB.x,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }  else {
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+20,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }

    }

    //Function for releasing the bird
    release(){
        this.slingshot.bodyA = null ;
    }

    attach(body){
        this.slingshot.bodyA = body; 
        gamestate = "onsling";
    }

}  
 

