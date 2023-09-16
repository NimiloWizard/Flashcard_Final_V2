
function w3_open() {
  
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";

}

function w3_close() {

  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  
}



let previousCard = null;
let areElementsHidden = true; // Track the elements' hidden state

let stack = document.querySelector(".stack");
let cards = document.querySelectorAll(".card");
let currentCardIndex = 0;

[...stack.children].reverse().forEach(card => stack.append(card));


// -----------------------------  Reveal Element Button --------------------------------//

document.getElementById("revealButton").addEventListener("click", revealElements);

const audiorevealButton = document.getElementById('revealButton');
const audioPlayerreveal = document.getElementById('audiorevealButton');
// Add a click event listener to the button
audiorevealButton.addEventListener('click', function() {
     audioPlayerreveal.play();
});

function revealElements() {

  if (areElementsHidden) {

      let elementsToReveal = document.querySelectorAll(".element-to-hide");
      elementsToReveal.forEach(element => {
         
          element.style.display = "block"; 
         
      });

      areElementsHidden = false;
      
  }
}
 
// -----------------------------   Previous Element Button --------------------------------//
document.addEventListener('DOMContentLoaded', function() {
  const audioprevButton = document.getElementById('prevButton');
  const audioPlayerprev = document.getElementById('audioprevButton');
  // Add a click event listener to the button
  audioprevButton.addEventListener('click', function() {
       audioPlayerprev.play();
  });
  
});

let prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", showPreviousCard);


function showPreviousCard() {

  if (previousCard) {
    
       previousCard.style.animation = "slideIn";
      
      setTimeout(() => {
        
          previousCard.style.animation = " ";
          stack.appendChild(previousCard); // Append the previous card back
         
          // Hide the elements after the card swap
          let elementsToHide = document.querySelectorAll(".element-to-hide");
          elementsToHide.forEach(element => {
            element.style.display = "none";
            });

      }, 200);
      areElementsHidden = true;
  }
}



// -----------------------------  NExt Element Button --------------------------------//

let nextButton = document.querySelector("#nextButton")
nextButton.addEventListener("click", showNextCard);


const audionextButton = document.getElementById('nextButton');
const audioPlayernext = document.getElementById('audionextButton');
// Add a click event listener to the button
audionextButton.addEventListener('click', function() {
  audioPlayernext.play();
});

function showNextCard(){

    let card = document.querySelector(".card:last-child");
   
    let elementsToHide = document.querySelectorAll(".element-to-hide");
    elementsToHide.forEach(element => {
      element.style.display = "none";
    });

    card.style.animation = "swap 500ms forwards"; 
  
  
    setTimeout(() => {
      card.style.animation = "";
      stack.prepend(card);

     
       // Hide the elements after the card swap
      
       areElementsHidden = true;
       previousCard = card;

    }, 500);

}

  // ------------------------------------Audio Player ----------------------------------- //

       
               // Get references to the image and audio elements
           const audioButtonOnyomi = document.getElementById('audioButtonOnyomi');
           const audioPlayerOnyomi = document.getElementById('audioPlayerOnyomi');
          
            // Add a click event listener to the image
              audioButtonOnyomi.addEventListener('click', function() {
                // Check if the audio is paused, if so, play it; otherwise, pause it
           //     if (audioPlayerOnyomi.paused) {
                  audioPlayerOnyomi.play();
                 // audioButtonOnyomi.src = 'pause-button.png'; // Change the image to a pause button
           //     } else {
            //      audioPlayerOnyomi.pause();
                 // audioButtonOnyomi.src = 'play-button.png'; // Change the image back to a play button
           //     }
           
        
              });

           const audioButtonKunyomi = document.getElementById('audioButtonKunyomi');
           const audioPlayerKunyomi = document.getElementById('audioPlayerKunyomi');
           // Add a click event listener to the image
             audioButtonKunyomi.addEventListener('click', function() {
             // Check if the audio is paused, if so, play it; otherwise, pause it
           //  if (audioPlayerKunyomi.paused) {
               audioPlayerKunyomi.play();
              // audioButtonKunyomi.src = 'pause-button.png'; // Change the image to a pause button
           //  } else {
          //     audioPlayerKunyomi.pause();
              // audioButtonKunyomi.src = 'play-button.png'; // Change the image back to a play button
        //     }

             });




  // ---------------------------------- Toggle for Dark/Light Mode ---------------------//
  document.getElementById('darkmode-toggle').addEventListener('change', function() {
    
    if(this.checked) {
       
        document.body.style.backgroundColor = 'rgba(36, 36, 36, 0.85)'; // Dark background color with opacity
        document.getElementById("bg_caption").style.color = "white";
        document.getElementById("background_caption").style.color = "white";
        
       // Create a new style element for the body::before pseudo-element
        var style = document.createElement("style");
        style.innerHTML = "body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: -1; pointer-events: none; }";

        // Append the style element to the document's head
        document.head.appendChild(style);

    } else {
        document.body.style.backgroundColor = ''; // Reset background color
        
        document.getElementById("bg_caption").style.color = "black";
        document.getElementById("background_caption").style.color = "black";

            
        // Remove the style element for body::before if it exists
        var styleElement = document.querySelector('style');
        if (styleElement) {
            styleElement.parentNode.removeChild(styleElement);
        }

    }

 });
  // ---------------------------------- Toggle for Dark/Light Mode Only/No Image ---------------------//
  document.getElementById('darkmode-toggle-N0-Image').addEventListener('change', function() {  
          if(this.checked) {
            document.body.style.background = "";
            document.body.style.backgroundColor = '#242424';
          } else {
            document.body.style.background = "";
            document.body.style.backgroundColor =  'white';

            var styleElement = document.querySelector('style');
            if (styleElement) {
                styleElement.parentNode.removeChild(styleElement);
            }

          }
  });


// ----------------- Toggle to Show Image Gallery for screen background change------------------//     

function open_screenGallery(bg_hide_Image) {
  var x = document.getElementsByClassName("bg_hide_Image");
  for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("bg_visible"); // Remove the visible class from all elements
  }
      
  

  var elementToShow = document.getElementById(bg_hide_Image);
  elementToShow.classList.add("bg_visible"); // Add visible class to the selected element

  var divElement = document.getElementById("col-1");
  divElement.style.display = "block";  

  var captionElement = document.getElementById("bg_caption");
  captionElement.style.display = "block"; // or "initial" based on your design
                    
  var Show_screenImageGallery = document.getElementById("screen_back_image");
  Show_screenImageGallery.style.display = "grid"; // or "initial" based on your design       

  var close_screenButton = document.getElementById("bg_hide_Image");
  close_screenButton.style.display = "block";      
    

  w3_close()  //toggle aup the navbar after making a selection
}


// ----------------------Closing the Screen Image Gallery--------------------------------//


let bg_hide_Image = document.querySelector("#bg_hide_Image");
bg_hide_Image.addEventListener("click", hide_screen_gallery);

function hide_screen_gallery(){
  document.getElementById("bg_caption").style.display = "none";
  document.getElementById("screen_back_image").style.display = "none";
  document.getElementById("bg_hide_Image").style.display = "none";
  document.getElementById("col-1").style.display = "none";

  
}





// ----------------------setting up Image Gallery for Screen Image change--------------------------------//



function screen_background1(){
  
// Set the background of the screen
    
    document.querySelector('body').style.background = 'url("Images/BACKGROUND1.png") center center / cover';    
    document.getElementById("bg_caption").style.color = "white";
            
}
function screen_background2(){
  
// Set the background of the card

    document.querySelector('body').style.background = 'url("Images/BACKGROUND2.png") center center / cover';          
    document.getElementById("bg_caption").style.color = "white";    
}

function screen_background3(){
  
// Set the background of the card

    document.querySelector('body').style.background = 'url("Images/BACKGROUND3.png") center center / cover';          
     document.getElementById("bg_caption").style.color = "white";        
}

function screen_background4(){
  
// Set the background of the card

    document.querySelector('body').style.background = 'url("Images/BACKGROUND4.png") center center / cover';          
     document.getElementById("bg_caption").style.color = "white";         
}

function screen_background5(){
  
// Set the background of the card

    document.querySelector('body').style.background = 'url("Images/BACKGROUND5.png") center center / cover';          
    document.getElementById("bg_caption").style.color = "white";         
}

function screen_background6(){
  
// Set the background of the card

    document.querySelector('body').style.background = 'url("Images/BACKGROUND6.png") center center / cover';          
    document.getElementById("bg_caption").style.color = "white";         
}
