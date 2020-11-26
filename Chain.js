class Chain {
    constructor(o1, o2, num,num1){
        this.offsetX = num;
        this.offsetY = num1;
        var options = {
            bodyA: o1, 
            bodyB: o2,
            stiffness:0.5,
            // length:10,
            
            pointB : {x : this.offsetX , y: this.offsetY}
        }

        this.chain = Constraint.create(options)
        World.add(world, this.chain);
    }
    display(){
    var pos = this.chain.bodyA.position;
    var pos1 = this.chain.bodyB.position;
    stroke(218,186,96)
    strokeWeight(5)
    line(pos.x, pos.y,pos1.x+this.offsetX, pos1.y + this.offsetY);
    }
}
