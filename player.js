class Player{
    constructor(x,y){
    var options = {
    'restitution':2,          
}
this.body = Bodies.circle(x, y, 10);
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("white");
    strokeWeight(3);
    ellipse(0, 0, 20, 20);
    pop();
  }

}