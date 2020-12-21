class Paper
{
   constructor(x,y,r,height)
   {
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
       this.x = x;
       this.y = y;
       this.r = r;
       this.height = height;
       this.image = loadImage("sprites/paper.png")
       this.body = Bodies.rectangle(this.x,this.y,this.r/2,this.height,options)
       World.add(world,this.body);
   }
   display()
   {
       var paperpos = this.body.position;
       push()
       translate(paperpos.x,paperpos.y);
       rectMode(CENTER)
       imageMode(CENTER)
       image(this.image,this.x,this.y,this.r,this.height)
       pop()
   }
} 