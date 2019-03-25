/*function EvalSound(soundobj) {
var thissound=document.getElementById(soundobj);
try {
thissound.Play();
}
catch (e) {
thissound.DoPlay();

}
}*/
           
           
           
           
           
           
           
var alefba = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" );
var points = 0;




function startgame() {
    
  document.getElementById("replay").onclick = function() {
    
     document.getElementById("gamefinisher").style.display="none";  
        startgame();
     points = 0;
     document.getElementById("totalpoints").innerHTML = points;
    }
    
     
    
var count = 20;
document.getElementById("timer").innerHTML = count;  
var counter = setInterval(timer, 1000);   
    
function timer(){
count -= 1;
if (count <= 0){

  
    
    if(points < 100){

     document.getElementById("gamefinisher").style.display="inherit";
     document.getElementById("result").innerHTML = "You Lost! Your score is" + " " + points;

//window.alert("You lost! your score is " + points);
}
    else {
        
    document.getElementById("gamefinisher").style.display="inherit";
    document.getElementById("result").innerHTML = "You Won! Your score is" + " " + points;

    //window.alert("You Won! your score is " + points);
    }
  
       clearInterval(counter);
    
   // location.reload();
       return;
   
      
    
}


    document.getElementById("timer").innerHTML = count;  
   
}
start();

}


function start() {
    



    document.getElementById("startbutton").style.display= "none";
    document.getElementById("timer-area").style.display= "initial";
   
    
    var leftletter = Math.floor(Math.random() * 26);
    var middleletter = Math.floor(Math.random() * 26);
    var rightletter = Math.floor(Math.random() * 26);

    
    
    document.getElementById("left").innerHTML = alefba[leftletter];
    document.getElementById("right").innerHTML = alefba[rightletter];    
    document.getElementById("middle").innerHTML = alefba[middleletter];    
    
    
    
    if(leftletter == rightletter || rightletter == middleletter || leftletter == middleletter ) {
    start();
    }
    
    
    
    
    document.getElementById("left-div").onclick = function() {
    if( ((leftletter <= middleletter) && (leftletter >= rightletter)) || ((leftletter >= middleletter) && (leftletter <= rightletter))   ){   
 //EvalSound('good');    
    points += 10;
    document.getElementById("totalpoints").innerHTML = points;    
     }
    else {  
    points -= 10;
    document.getElementById("totalpoints").innerHTML = points;  
   //EvalSound('bad');
    }
    start();
        
    };

    
    
    
    document.getElementById("middle-div").onclick = function() {
    if( ((leftletter <=  middleletter) && (middleletter <= rightletter)) || ((leftletter >= middleletter) && (middleletter >= rightletter))  ){

    //EvalSound('good');        
    points += 10;
    document.getElementById("totalpoints").innerHTML = points;        
     }
    else {
    points -= 10;
    document.getElementById("totalpoints").innerHTML = points;     
//EvalSound('bad');
    }
    start();
    };
    
    
    

    document.getElementById("right-div").onclick = function() {
    if( ((leftletter <= rightletter) && (middleletter >= rightletter)) || ((leftletter >= rightletter) && (middleletter <= rightletter))  ){ 
  // EvalSound('good');        
    points += 10;    
    document.getElementById("totalpoints").innerHTML = points;        
     }
    else {
    points -= 10;
    document.getElementById("totalpoints").innerHTML = points;         
   //EvalSound('bad');
    }
    start();
    };
   

}
