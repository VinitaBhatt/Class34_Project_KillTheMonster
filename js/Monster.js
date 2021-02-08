class Monster{
    constructor(x,y){
        var options = {
            density :5,
            frictionAir : 0
        }
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;
        this.image = loadImage("images/Monster-01.png");
        World.add(world,this.body);
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y-100    );
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*3,this.radius*3);
        pop();
    }
}