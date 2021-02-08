class Hero{
    constructor(x,y){
        var options = {
            density :1,
            frinctionAir : 1
        }
        this.body = Bodies.circle(x,y,200,options);
        this.radius = 200;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world,this.body);
    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.radius*2,this.radius);
    }
}