class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 300
        }

        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;

            push();
            stroke(48,22,8);
            strokeWeight(0);
            line(pointB.x,pointB.y, pointA.x,pointA.y);
            pop();
        }
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

}