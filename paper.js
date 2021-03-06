class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0,
      }


      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){

     

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(5)
      stroke("black")
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  