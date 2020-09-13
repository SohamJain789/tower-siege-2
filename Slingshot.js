class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //load the images from the sprites folder 
        //the slinghshot is a static image as it does not interact with others so we have not created a body of the pyhsics engine for slingshot  
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
      this.sling.bodyA = body
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the slingshot 
        image(this.sling1,200,20);
        image(this.sling2,170,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //set the color of the rubber band by getting the rgb vlues  from colourZilla
            //R=48,G=22,B=8
            stroke(48,22,8);
            //when the bird is in front of the slinshot , the base of the rubber band stays behind 
            //we checked the bird position and the change the placement of the base accordingaly 
            if(pointA.x<220){
            //to give the rubberband effect to change the stroke weights in diffrent situations
            //the rubber band appears thinner when strecthed 
            strokeWeight(7);
            //make the rubber band with the lines 
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            //display the base of the rubber band 
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}