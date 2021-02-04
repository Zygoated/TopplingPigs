class Bird {
    constructor(x,y) {
        var options ={ 
            'restitution' : 0.5,
            'friction' : 1,
            'density' : 1.5
    }
        this.body=Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        
        World.add(world,this.body);
    }
    display(){
        var posit = this.body.position;
        var angle = this.body.angle;
        posit.x=mouseX;
        posit.y=mouseY;
        push();
        translate(posit.x,posit.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        strokeWeight(3);
        stroke("blue");
        rect(0,0,this.width,this.height);
        pop();

    }

}