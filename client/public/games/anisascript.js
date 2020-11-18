// Declare variables and capture imput
const aggettivo = prompt ( "What is your favourite adjective?");
const sostantivo = prompt ( "with what animal do you identify the most?");
const food = prompt ( "What is a food you eat everyday?");
const aggettivo2 = prompt ( "Tell me a positive adjective");
const food2 = prompt ( "What is a food that you love?");


// combine the imput with other words to create a story

const fiaba = `<p>Once upon a time there was a ${aggettivo} ${sostantivo}, who was very fed up of eating ${food} everyday. 
Yes, it was delicious, but after a while he was feeling like trees of ${food} were growing inside his stomach. 
${sostantivo}' s mother was very strict and the only thing she let her children eat was ${food}.</p> 
One day, while walking into the woods, ${sostantivo}  met a ${aggettivo2} fairy. Whilst flapping her wings, the ${aggettivo2}
fairy asked to the ${sostantivo} what his biggest wish was. The ${sostantivo} started to think about all the food 
that he was not allowed to eat: pizza, gnocchi, sushi, spezzatino and many more. In that moment he was reminded of a wonderful advertisement he had seen on tv: 10 layer gigantic ${food2}.
He exactly knew what he wanted, extra large delicious ${food2}. In not time, the ${aggettivo2} fairy fullfilled his wish and tons and tons of ${food2} where falling from the sky. From that moment on, ${sostantivo} didn't have to worry about eating ${food} everyday. A mountain of ${food2}
was there in the woods, waiting for him, anytime. That is how ${sostantivo} died because of diabetes.`;
 

document.querySelector('#content').innerHTML = fiaba;


// Once upon a time there was a (aggettivo) (sostantivo), who was very fed up of eating (food) everyday.
//Yes, it was delicious, but after a while he was feeling like trees of (food) were growing inside his stomach.
// (sostantivo)'s mommy was very strict and the only thing she let her children eat was (food).
// One day, while walking into the woods, (sostantivo) met a (aggettivo2) fairy. Whilst flapping her wings, the (aggettivo2)
//fairy asked to (sostantivo) what his biggest wish was. (sostantivo) started to think about all the food 
//that he was not allowed to eat: pizza, gnocchi, sushi, spezzatino and many more. In that moment he was reminded of a wonderful advertisement he had seen on tv: 10 layer gigantic (food2).
//He knew exactly knew what he wanted, extra large delicious (food2). In not time, the (aggettivo2) fairy fullfilled his wish. 
//Tons and tons of ( food2) where falling from the sky. From that moment on, (sostantivo) didn't have to worry about eating rice. a mountain of (food2)
//was there in the woods, waiting for him anytime. That is how (sostantivo) died because of diabetes. 

// display the story as a <p> inside the element