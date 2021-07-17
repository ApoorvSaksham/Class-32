class Slingshot{
    constructor(body1, point2){
   
        var optionsC = {

            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        

        this.pointB = point2;
        this.chain = Constraint.create(optionsC);
        World.add(world,this.chain);

    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        
    if(this.chain.bodyA){
    
var pointA = this.chain.bodyA.position;
var pointB = this.pointB;

push()
strokeWeight(5);
stroke(48,22,8);
if(pointA.x<220){
    strokeWeight(7);
    line(pointA.x-20, pointA.y, pointB.x-25, pointB.y);
    line(pointA.x-20, pointA.y, pointB.x+20,pointB.y);
    image(this.sling3,pointA.x-30,pointA.y-15,15,30);
}
else{
    strokeWeight(3);
line(pointA.x+20, pointA.y, pointB.x-25, pointB.y);
line(pointA.x+20, pointA.y, pointB.x+20,pointB.y);
image(this.sling3,pointA.x+25,pointA.y-15,15,30);
}

pop();
    }
    }
fly(){
    this.chain.bodyA = null;
}

attach(body1){
    this.chain.bodyA = body1;
}
}