class Umbrella{
    constructor(x,y,r){
    var options={
      isStatic: true 
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r,options)
    }  
}