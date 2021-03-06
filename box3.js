class BOX3{
    constructor(x, y, width, height) {
        var options = {
            'isStatic' : false,
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        stroke("BLACK");
        fill(0,130,114);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}