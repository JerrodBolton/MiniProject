// alert("I'm not ready for this at all")

// the first thing that I have to do is make a function that way when they hit the buttus

// function main();{
    // questionP();
// }

function questionP() {
  //   while howYouFeel isn't X,Y,Z
  let doneQ = true;

  while (doneQ === true) {
  let x = "High";
  let y = "Medium";
  let z = "Low";
  let q = "quiz" || "quit";
  // I made a prompt that way I can see how they feel about coding so far.
  let howYouFeel = prompt(
    `How confidence level about doing code do you feel ${x}, ${y}, ${z}, or ${q} if you would like to quit the your journal entry.`
  ).toUpperCase();  
  // this is just so I can see that it work of nnt
  // console.log(howYouFeel);
    if (howYouFeel === "Q"){
     doneQ = false;  
    alert("Thanks!!! So much for your contribution");

  }
  // Good for here!!! 
     else {
        
      if(howYouFeel === "HIGH"){
        
        alert("I'm so happy you feel that way");
        doneQ = false; 
      }
      else if (howYouFeel === "MEDIUM"){
        // this is going to pop up and say something to the person who's do
        alert("I hop you feel better and more confident about the code that you writer");
      }

      
     }
 }

questionP();