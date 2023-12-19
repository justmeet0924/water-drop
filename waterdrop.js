function waterdrop(color){
  
  for(let r=0; r<200; r+=10){
    
    circledrop(r,color);
    
  }
  
}

function circledrop(r,color){
  
  noStroke();
  let num = 20;
  for(let i=0; i<num; i++){
    fill(color);
    let rad = 2*PI*random();
    circle(r*sin(rad),r*cos(rad),100/sqrt(r)*random());
   
  }
  
}


