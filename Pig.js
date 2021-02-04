class Pig {
    constructor(x,y) {
        var options ={ 
            'restitution' : 0.9,
            'friction' : 0.2,
            'density' : 0.9
    }
        this.body=Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;
        
        World.add(world,this.body);
    }
    display(){
        var posit = this.body.position;
        var angle = this.body.angle;
        push();
        translate(posit.x,posit.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();

    }

}