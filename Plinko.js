class Plinko{
    constructor(x , y ){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10
        this.body = Bodies.circle(x , y , this.r , options);
        World.add(world , this.body);

    }
    display(x , y , width , height){
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x , pos.y);
     rotate(angle);
     noStroke();
     fill(255);
     ellipseMode(RADIUS);
     ellipse(pos.x ,pos.y ,this.r);   
     pop(); 
    }
}