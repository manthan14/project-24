class dustbin{
    constructor(x,y,width,height){
    
        var options ={
    
            'restitution':1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }
       
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.width,this.height)
        
    }
    
    }
    