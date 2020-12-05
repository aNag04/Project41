class Drops{
    constructor(x,y,r){
      var options={
        restitution :0.4 ,
        friction:0.1
      }  
    this.r = r
this.body = Bodies.circle(x,y,this.r,options)  }

updateDrops(){
    if(this.x>150){
        this.create(drops)
    }
    World.add(world, this.body); 
}
display(){
    ellipse(0,0,this.r,this.r)
    ellipseMode(RADIUS)
}
}