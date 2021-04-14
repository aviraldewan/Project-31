class Particle
{
    constructor(x,y,r)
    {
        var options={
            isStatic: false,
            restitution: 0.04
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(x,y,this.radius);
        pop();
    }
}