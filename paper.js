class paper{
    constructor(x,y,width,height){
    
        var options ={
    isStatic:false,
    restitution:0.3,
    density:1.2,
            
            
            
        }
        this.body=Bodies.circle(x,y,width,height,options);
        World.add(world,this.body);
    }
       
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("pink");
    rect(pos.x,pos.y,this.width,this.height)
        
    }
    
    }
    