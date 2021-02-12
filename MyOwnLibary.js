function isTouching(object1,object2) { //passing arguments
    if(object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.x - object2.x < object1.width/2 + object2.width/2  &&
      object2.y-object1.y<object1.height/2+object2.height/2 &&
      object1.y-object2.y<object1.height/2+object2.height/2){
        
        return true;
        //return "it is touching";
        // object2.shapeColor = "red";
        // object1.shapeColor = "red";
    }
    else{
  
        return false;
        //return "it is not touching";
      // object2.shapeColor = "green";
      // object1.shapeColor = "green";
    }
  }