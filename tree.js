class Tree{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.object = loadImage("sprite/tree.png");
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        var angle = this.body.angle;;
        rotate(angle);
        imageMode(CENTER);
        image(this.object, 0, 0, this.width, this.height);
        pop();
    }
}