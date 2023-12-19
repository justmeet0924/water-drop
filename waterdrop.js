function waterdrop(x,y,R,color){
  
  for(let r=0; r<R; r+=10){
    
    circledrop(x,y,r,color);
    
  }
  
}

function circledrop(x,y,r,color){
  
  noStroke();
  let num = 20;
  for(let i=0; i<num; i++){
    fill(color);
    let rad = 2*PI*random();
    circle(x+r*sin(rad),y+r*cos(rad),100/sqrt(r)*random());
   
  }
  
}
