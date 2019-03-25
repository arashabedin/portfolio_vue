



                function startStory(){

     

/*

$('html, body').animate({
   scrollTop: $('#footer').offset().top
}, 'slow');
    
*/

                    document.getElementById("try").style.display="none";
               document.getElementById("pause").style.display="block";
                
                    var txtSubjects = document.getElementById("subjects").value;
                    var txtVerbs1 = document.getElementById("verbs1").value;
                    var txtObjects = document.getElementById("objects").value;
                    var txtPlaces = document.getElementById("places").value;

                   speech = document.getElementById("computer-story");
                  speech.innerHTML = "";
                 var allStory;
                    //Creating some arrays that include data from our text area
                   var subjects = new Array();
                    subjects = txtSubjects.split(",");

                    var verbs1 = new Array();
                    verbs1 = txtVerbs1.split(",");

                    var objects = new Array();
                    objects = txtObjects.split(",");

                    var places = new Array();
                    places = txtPlaces.split(",");


                     
                    var joints =["at" , "right at the top of" , "inside", "beside", "in front of", "behind" ,"exactly inside" , "outside of", "around"];

                    var conjuctors = ["Then", "While", "Because", "Even though", "And suddenly", "But at least" ," " , " ", "And Guess what!.." , "Hmm.. I wonder how" , "And can you believe" , " ", " ", "And Im afraid if"];

                var adverbs = new Array();
                str = "happily, greatfully, joyfully, slowly, , badly, nicely ,eventually, ridiculously , , peacefully, ,sadly , ,unfortunately , dramaticly , badly","passionately";  

                    if(document.getElementById("happy").checked === true){
                             str = "happily, greatfully, joyfully,  nicely, peacefully,fortunately , amazingly";  

                    }
                    else if (document.getElementById("sad").checked === true) {

                           str = "sadly, badly, unfortunately,  unhappily , desperately, ,ridiculously , , unluckily";  
                    }
                     else if (document.getElementById("horror").checked === true) {

                           str = "horribly, badly, disgustingly,  terrifically  , , fearfully , sickly";  
                    }
             adverbs = str.split(",");


                    function sentencesBuilder() {

                         subjectNum = Math.floor(Math.random() * subjects.length);
                         verbs1Num = Math.floor(Math.random() * verbs1.length);
                        objectsNum = Math.floor(Math.random() * objects.length);
                         jointsNum = Math.floor(Math.random() * joints.length);
                         placesNum = Math.floor(Math.random() * places.length);
                         adverbsNum = Math.floor(Math.random() * adverbs.length);
                         conjuctorsNum = Math.floor(Math.random() * conjuctors.length);
                         return subjects[subjectNum] + " " + adverbs[adverbsNum] + " " + verbs1[verbs1Num] + " " + objects[objectsNum]+ " "  + joints[jointsNum] + " " + places[placesNum];
                    }


                    allStory = "Once upon a time " + sentencesBuilder();

                       for (var i = 1; i<1000; i++) {

                            allStory += " , "+ conjuctors[conjuctorsNum] + " " + sentencesBuilder();

                     }



        var myString = allStory;
         myArray = myString.split("");
   

  
                    frameLooper(); 
        
                                       }


function pauseStory(){

    document.getElementById("pause").style.display="none";
    document.getElementById("stop").style.display="block";
   clearTimeout(loopTimer);
    
    
}
function stopStory(){
    
    document.getElementById("stop").style.display="none";
    document.getElementById("try").style.display="block";
    allStory="";
    speech.innerHTML="";
   clearTimeout(loopTimer);
    
    
}
        function frameLooper() {
            if(myArray.length > 0) {
                speech.innerHTML += myArray.shift();
            } else {
                clearTimeout(loopTimer); 
                        return false;
            }
            
            loopTimer = setTimeout('frameLooper()',80);
        }
