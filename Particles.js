class Particle{
    constructor(x , y ){
        var options = {
            restitution : 0.4
        }
        this.r = 10
        this.body = Bodies.circle(x , y , this.r , options);
        this.colour = color(random(0 , 255) , random(0 , 255) , random(0 , 255));
        World.add(world , this.body);

    }
    display(x , y , width , height){
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x , pos.y);
     rotate(angle);
     noStroke();
     fill(this.colour);
     ellipseMode(RADIUS);
     ellipse(pos.x ,pos.y ,this.r);   
     pop(); 
    }
}