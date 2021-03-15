
class Box{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            friction:1,
            density:1,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        
    }
    display(){
        var pos = this.body.position;
        fill("red");
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}