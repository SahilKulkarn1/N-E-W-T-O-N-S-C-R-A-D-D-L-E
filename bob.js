class Bob {
constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution : 1,
    }
    this.body = Bodies.circle(x,y,50,options);
    this.radius = radius;
   
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
  
   translate((pos.x,pos.y,this.radius))
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.radius)
    pop();

  }
};