class Slingshot{
constructor(bodyA,pointB){
var options={
  bodyA:bodyA,
  pointB:pointB,
  length:10,
  stiffness:0.04

}
this.pointB=pointB
this.sling=Constraint.create(options);

World.add(world,this.sling);
}
display(){
  if(this.sling.bodyA){
 var pointA=this.sling.bodyA.position;
 var pointB=this.pointB;

 push();
 strokeWeight(2.5);
 line(pointA.x,pointA.y,pointB.x,pointB.y);
 pop();
}
}
fly(){
  this.sling.bodyA=null;
}
}