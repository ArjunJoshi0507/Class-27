class Chain {
    constructor(body1,body2){
        var opt = {
            bodyA : body1,
            bodyB : body2,
            lenght : 40,
            stiffness : 0.4
        }
        this.body = Constraint.create(opt)
        World.add(world,this.body);
        console.log(this.body); 
}
display(){
    var bd1 = this.body.bodyA.position
    var bd2 = this.body.bodyB.position
    strokeWeight(4);
    line(bd1.x,bd1.y,bd2.x,bd2.y)
}
}