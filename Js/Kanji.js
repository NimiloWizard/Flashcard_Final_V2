
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

// ----------------------------- Home Scree --------------------------------------------//

const homebutton = document.getElementById('home');
homebutton.addEventListener('click', function() {
  w3_close();
 
    leaveMessage.style.display = 'block';
    setupLeaveMessage();

  
});

/*
const homebutton = document.getElementById('home');
homebutton.addEventListener('click', function() {

window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); // Cancel the event
  e.returnValue = ''; // Required for modern browsers

  // Prompt the user with a confirmation dialog
  const confirmationMessage = 'Are you sure you want to leave this page?';

    return confirmationMessage;
   
});
   w3_close() 

});

*/
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

 //  ----------------------------------------Settings ---------------------------------------
    const Buttonsettings = document.getElementById('settings')
    Buttonsettings.addEventListener('click', function(){
      document.getElementById("stack").style.marginTop = '30%';
      document.getElementById("card").style.marginTop = '30%';
    });

  // ------------------------------------Audio Playaer ----------------------------------- //

       
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
  divElement.style.marginBottom = "300px"; 

  var captionElement = document.getElementById("bg_caption");
  captionElement.style.display = "block"; // or "initial" based on your design
                    
 // var Show_screenImageGallery = document.getElementById("screen_back_image");
//  Show_screenImageGallery.style.display = "grid"; // or "initial" based on your design       

  var close_screenButton = document.getElementById("bg_hide_Image");
  close_screenButton.style.display = "block";      
    

  
  w3_close()  //toggle aup the navbar after making a selection

  
 

}
   function disableElement() {
                    
          const elementToDisablerevealButton = document.getElementById('revealButton');
          const elementToDisableprevButton = document.getElementById('prevButton');
          const elementToDisablenextButton = document.getElementById('nextButton');
          elementToDisablerevealButton.disabled = true; // Disable the element
          elementToDisableprevButton.disabled = true; // Disable the element
          elementToDisablenextButton.disabled = true; // Disable the element

          elementToDisablerevealButton.style.cursor = 'not-allowed'; // Disable the element
          elementToDisableprevButton.style.cursor = 'not-allowed';  // Disable the element
          elementToDisablenextButton.style.cursor = 'not-allowed';  // Disable the element

                             
          const audioButtonOnyomi = document.getElementById('audioButtonOnyomi');
          const audioPlayerOnyomi = document.getElementById('audioPlayerOnyomi');
           // Add a click event listener to the image
            audioButtonOnyomi.addEventListener('click', function() {
                audioPlayerOnyomi.pause();
            });
            audioButtonOnyomi.style.cursor = 'not-allowed';
        
        
          const audioButtonKunyomi = document.getElementById('audioButtonKunyomi');
          const audioPlayerKunyomi = document.getElementById('audioPlayerKunyomi');
          // Add a click event listener to the image
          audioButtonKunyomi.addEventListener('click', function() {
            audioPlayerKunyomi.pause();
          });
          audioButtonKunyomi.style.cursor = 'not-allowed';
         
   } 

     const change_screen_backgroundanimate = document.getElementById('change_screen_background');
     const elementToAnimate = document.getElementById('stack');
      
      change_screen_backgroundanimate.addEventListener('click', () => {
        elementToAnimate.style.animation = 'moveDown .3s forwards'; // Apply the animation
       
      });
      
      const ButtonsAnimate = document.getElementById('change_screen_background');  // Apply the animation
      
      const elementToAnimatereveal =  document.getElementById('revealButton');
      const elementToAnimateprev = document.getElementById('prevButton');
      const elementToAnimatenext = document.getElementById('nextButton');
      
      ButtonsAnimate.addEventListener('click', () => {
        elementToAnimatereveal.animation = 'moveDownButtons  .3s forwards';
        elementToAnimateprev.animation = 'moveDownButtons  .3s forwards';
        elementToAnimatenext.animation = 'moveDownButtons  .3s forwards';
      });



  
          const disableButtons = document.getElementById('change_screen_background');
          disableButtons.addEventListener('click', disableElement);


           const myButton = document.getElementById('revealButton');
            const customAlert = document.getElementById('customAlert');
    
            myButton.addEventListener('mouseenter', function() {
                if (myButton.disabled) {
                    customAlert.style.display = 'block';
                }
            });
            myButton.addEventListener('mouseleave', function() {
              if (myButton.disabled) {
                  customAlert.style.display = 'none';
              }
            });
            myButton.addEventListener('click', function() {
              if (myButton.disabled) {
                  customAlert.style.display = 'block';
              }
            });
           
            myButton.addEventListener('touchend', function() {
            if (myButton.disabled) {
                customAlert.style.display = 'none';
            }
            });
  
          const OkButton = document.getElementById('ok')
           OkButton.addEventListener('click', function(){
             customAlert.style.display = 'none';
           });

// ----------------------Closing the Screen Image Gallery--------------------------------//


let bg_hide_Image = document.querySelector("#bg_hide_Image");
bg_hide_Image.addEventListener("click", hide_screen_gallery);

function hide_screen_gallery(){
  document.getElementById("bg_caption").style.display = "none";
  document.getElementById("screen_back_image").style.display = "none";
  document.getElementById("bg_hide_Image").style.display = "none";
  document.getElementById("col-1").style.display = "none";

   const elementToDisablerevealButton = document.getElementById('revealButton');
  const elementToDisableprevButton = document.getElementById('prevButton');
  const elementToDisablenextButton = document.getElementById('nextButton');
  elementToDisablerevealButton.disabled = false; // Disable the element
  elementToDisableprevButton.disabled = false; // Disable the element
  elementToDisablenextButton.disabled = false; // Disable the element

  elementToDisablerevealButton.style.cursor = 'pointer'; // Disable the element
  elementToDisableprevButton.style.cursor = 'pointer';  // Disable the element
  elementToDisablenextButton.style.cursor = 'pointer';  // Disable the element

  const audioPlayer1 = document.getElementById('audioButtonOnyomi');
  const audioPlayer2 = document.getElementById('audioButtonKunyomi');

       
  const audioButtonOnyomi = document.getElementById('audioButtonOnyomi');
  const audioPlayerOnyomi = document.getElementById('audioPlayerOnyomi');
   // Add a click event listener to the image
    audioButtonOnyomi.addEventListener('click', function() {
        audioPlayerOnyomi.play();
    });
    audioButtonOnyomi.style.cursor = 'pointer';


  const audioButtonKunyomi = document.getElementById('audioButtonKunyomi');
  const audioPlayerKunyomi = document.getElementById('audioPlayerKunyomi');
  // Add a click event listener to the image
  audioButtonKunyomi.addEventListener('click', function() {
    audioPlayerKunyomi.play();
  });
  audioButtonKunyomi.style.cursor = 'pointer';
 
  customAlertRemove.style.display = 'none';
  
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


// ----------------- Toggle to Show Image Gallery for Card background change------------------//     

      function open_cardGallery(hide_Image) {
        var x = document.getElementsByClassName("hide_Image");
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("visible"); // Remove the visible class from all elements
        }
      

      var elementToShow = document.getElementById(hide_Image);
      elementToShow.classList.add("visible"); // Add visible class to the selected element

      var divElement = document.getElementById("col-3");
      divElement.style.display = "block";  
      

      var captionElement = document.getElementById("background_caption");
      captionElement.style.display = "block"; // or "initial" based on your design
                        
     var Show_cardImageGallery = document.getElementById("card_back_image");
     Show_cardImageGallery .style.display = "grid"; // or "initial" based on your design       

      var close_cardButton = document.getElementById("hide_Image");
      close_cardButton.style.display = "block";      

      const overlay = document.querySelector('.overlayCardscreen');   //card screen overlay
      overlay.style.display = 'block';

        
   w3_close() 
            



        
         // Assuming 'element' is the element you want to scroll
          let element = document.getElementsByname('card_back_image');

          // Perform your specific action (e.g., after a button click, a timeout, etc.)
          function performSpecificAction() {
            // Your specific action here

            // Automatically scroll up
            element.scrollTop -= 100; // Adjust the value as needed
          }

          // Call the function when needed
          performSpecificAction();

    
       //toggle aup the navbar after making a selection

   }
     

// ----------------------Closing the Card Image Gallery--------------------------------//
      

          let hide_Image = document.querySelector("#hide_Image");
                hide_Image.addEventListener("click", hide_card_gallery);
                
                function hide_card_gallery(){
                  document.getElementById("background_caption").style.display = "none";
                  document.getElementById("card_back_image").style.display = "none";
                  document.getElementById("hide_Image").style.display = "none";
                
                  const overlay = document.querySelector('.overlayCardscreen');   //card screen overlay
                  overlay.style.display = 'none';
                  
              }
              
          let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          
          if (screenWidth <= 765) {
                 
                  
                  
                  let hide_Image = document.querySelector("#hide_Image");
                  hide_Image.addEventListener("click", hide_card_gallery);

                      function hide_card_gallery(){
                        console.log('It trigger')
                        document.getElementById("background_caption").style.display = "none";
                        document.getElementById("card_back_image").style.display = "none";
                        document.getElementById("hide_Image").style.display = "none";
                        document.getElementById("col-3").style.display = "none";

                       
                        
                        var x = document.getElementsByClassName("hide_Image");
                       
                      }

                     
            
                        function scrollElementDown(elementId, scrollAmount) {
                        const element = document.getElementById(elementId);
                        if (element) {
                            element.scrollTop = 30;
                        }
                    }
                    
                    // Usage
                    scrollElementDown('card', 200); // Replace 'yo

            
            }
        
     

// ----------------------setting up Image Gallery for background change--------------------------------//



function background1(){
      
   // Set the background of the card
      const elements = document.querySelectorAll('.backgoundeffect'); 
       elements.forEach(function(element) {
          element.style.background = 'url("Images/BACKGROUND1.png") center center / cover';
      });
    
    // set the background color of the button
      const revealButton = document.querySelector('#revealButton');
      const prevButton = document.querySelector('#prevButton');
      const nextButton = document.querySelector('#nextButton');

     
      prevButton.style.background =   'linear-gradient(to right,  #64350c,gray )';
      revealButton.style.background = 'linear-gradient(to right,  gray, #64350c,  gray)';
      nextButton.style.background =   'linear-gradient(to right, gray, #64350c)';
  
    // set the color of the text of the button
    //  revealButton.style.color ='black';
    //  prevButton.style.color = 'white';
    //  nextButton.style.color = 'white';
    
}


function background2(){

        // Set the background of the card
        const elements = document.querySelectorAll('.backgoundeffect');
        elements.forEach(function(element) {
            element.style.background = 'url("Images/BACKGROUND2.png") center center / cover';
        });

        // set the background color of the button
        const revealButton = document.querySelector('#revealButton');
        const prevButton = document.querySelector('#prevButton');
        const nextButton = document.querySelector('#nextButton');

        
        prevButton.style.background =   'linear-gradient(to right, #78a6f5, white)';
        revealButton.style.background = 'linear-gradient(to right, white, #78a6f5, white)';
        nextButton.style.background =   'linear-gradient(to right, white, #78a6f5)';

        

        // set the color of the text of the button
       // revealButton.style.color ='black';
       // prevButton.style.color = 'white';
       // nextButton.style.color = 'white';
}


function background3(){
  // Set the background of the card
  const elements = document.querySelectorAll('.backgoundeffect');
  elements.forEach(function(element) {
      element.style.background = 'url("Images/BACKGROUND3.png") center center / cover';
  });
 
   // set the background color of the button
   const revealButton = document.querySelector('#revealButton');
   const prevButton = document.querySelector('#prevButton');
   const nextButton = document.querySelector('#nextButton');

   
   prevButton.style.background =   'linear-gradient(to right, gray, lightblue)';
   revealButton.style.background = 'linear-gradient(to right, lightblue, gray, lightblue)';
   nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

   // set the color of the text of the button
  // revealButton.style.color ='black';
  // prevButton.style.color = 'white';
   //nextButton.style.color = 'white';

}


function background4(){
       
  // Set the background of the card
      const elements = document.querySelectorAll('.backgoundeffect');
      elements.forEach(function(element) {
          element.style.background = 'url("Images/BACKGROUND4.png") center center / cover';
      });

          // set the background color of the button
      const revealButton = document.querySelector('#revealButton');
      const prevButton = document.querySelector('#prevButton');
      const nextButton = document.querySelector('#nextButton');

      
      prevButton.style.background =   'linear-gradient(to right, gray, lightblue)';
      revealButton.style.background = 'linear-gradient(to right, lightblue, gray, lightblue)';
      nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

      // set the color of the text of the button
     // revealButton.style.color ='black';
     // prevButton.style.color = 'white';
     // nextButton.style.color = 'white';
 
}


function background5(){
  
      // Set the background of the card
      const elements = document.querySelectorAll('.backgoundeffect');
      elements.forEach(function(element) {
          element.style.background = 'url("Images/BACKGROUND5.png") center center / cover';
      });

        // set the background color of the button
        const revealButton = document.querySelector('#revealButton');
        const prevButton = document.querySelector('#prevButton');
        const nextButton = document.querySelector('#nextButton');
  
        
        prevButton.style.background =   'linear-gradient(to right,  green, white)';
        revealButton.style.background = 'linear-gradient(to right, white, green,white)';
        nextButton.style.background =   'linear-gradient(to right, white, green)';
  
        // set the color of the text of the button
       // revealButton.style.color ='black';
       // prevButton.style.color = 'white';
       // nextButton.style.color = 'white';
   
      
}


function background6(){
      
      // Set the background of the card
      const elements = document.querySelectorAll('.backgoundeffect');
      elements.forEach(function(element) {
          element.style.background = 'url("Images/BACKGROUND6.png") center center / cover';
      });

      // set the background color of the button
      const revealButton = document.querySelector('#revealButton');
      const prevButton = document.querySelector('#prevButton');
      const nextButton = document.querySelector('#nextButton');

      
      prevButton.style.background =   'linear-gradient(to right, #64350c, lightblue)';
      revealButton.style.background = 'linear-gradient(to right,lightblue, #64350c,lightblue)';
      nextButton.style.background =   'linear-gradient(to right, lightblue, #64350c)';

      // set the color of the text of the button
     // revealButton.style.color ='black';
     // prevButton.style.color = 'white';
      //nextButton.style.color = 'white';
  
}

//  ------------------------------------ Default Card background color ------------------
     
     function open_Defaultbackground() {

      const elements = document.querySelectorAll('.backgoundeffect');
      elements.forEach(function(element) {
          element.style.background = 'linear-gradient(245.59deg, #070707 0%, #fcfbfbf7 50.53%, #0f0f0f 90.52%)';
     
          w3_close()
        });

        const prevButton = document.querySelector('#prevButton');
        prevButton.style.background =   'linear-gradient(245.59deg, #e9e9e7 0%, #a1a19e 28.53%, #747373 75.52%)';
        const revealButton = document.querySelector('#revealButton');
        revealButton.style.background =   'linear-gradient(245.59deg, #e9e9e7 0%, #a1a19e 28.53%, #747373 75.52%)';
        const nextButton = document.querySelector('#nextButton');
        nextButton.style.background =   'linear-gradient(245.59deg, #e9e9e7 0%, #a1a19e 28.53%, #747373 75.52%)';
        
        
    }
// -------------------------------------Activate Drawing Panel --------------------------

document.getElementById('Activate_Wrting_checkbox').addEventListener('change', function() {
  if (!this.checked) {
      // If the checkbox is not checked, hide the feature
      document.getElementById("Feature_Drawing").style.visibility = "hidden";
      w3_close();

      // Check if certain elements are visible before triggering #Lefttab click
      if ($("#DrawingContainer").is(":visible") && $("#drawing-area").is(":visible") && $("#eraser").is(":visible") && $("#undoLast").is(":visible") && $("#color-picker").is(":visible")) {
          // Trigger a click event on #Lefttab
          $("#Lefttab").click();
      }
  } else {
      // If the checkbox is checked, show the feature and close the menu
      document.getElementById("Feature_Drawing").style.visibility = "visible";
      w3_close();
  }
});

// -----------------------  Toggle to Activate/Deactivae Click Sound --------------------
    
document.addEventListener("DOMContentLoaded", function() {
  // Get the checkbox element
  const myCheckbox = document.getElementById("Activate_ClickSound_checkbox");

  // Set it as checked
  myCheckbox.checked = true;
});

document.getElementById('Activate_ClickSound_checkbox').addEventListener('change', function() {
 
      // Get the audio element by its ID for REVEAL BUTTON
 const audioPlayerRevealMute_Unmute = document.getElementById("audiorevealButton");
 const audioPlayerPrevMute_Unmute = document.getElementById("audioprevButton");
 const audioPlayerNextMute_Unmute = document.getElementById("audionextButton");

  if (!this.checked) {
       // If the checkbox is not checked, Deactivate CLICK SOUND
       // Function to mute the audio
       function muteAudioreveal() {
            audioPlayerRevealMute_Unmute.muted = true;
       }
       function muteAudioprev() {
        audioPlayerPrevMute_Unmute.muted = true;
      }
      function muteAudionext() {
        audioPlayerNextMute_Unmute.muted = true;
      }
      // Mute the audio
        muteAudioreveal();      
        muteAudioprev(); 
        muteAudionext(); 

  } else {

      // If the checkbox is  checked, Activate CLICK SOUND
       // Function to unmute the audio
       function unmuteAudioreveal() {
        audioPlayerRevealMute_Unmute.muted = false;
      }
      function unmuteAudioprev() {
        audioPlayerPrevMute_Unmute.muted = false;
      }
      function unmuteAudionext() {
        audioPlayerNextMute_Unmute.muted = false;
      }


      // Unmute the audio
      unmuteAudioreveal();
      unmuteAudioprev();
      unmuteAudionext();
  }
});

      
// -------------------------------------- Set Up and Show Drawing Feature ---------------------------------

 
 
$(document).ready(function() {
  $("#Lefttab").click(function() {
      $("#DrawingContainer").toggleClass("hideDrawing_visible");
      $("#drawing-area").toggleClass("hideDrawing_visible"); // Toggle the 'visible' class
      $("#eraser").toggleClass("hideDrawing_visible");
      $("#undoLast").toggleClass("hideDrawing_visible");
      $("#color-picker").toggleClass("hideDrawing_visible");
   });
  
});



//--------------------------------------- Drawing Action -------------------------
// JavaScript code for handling finger drawing

// ...

const drawingArea = document.getElementById('drawing-area');
const ctx = drawingArea.getContext('2d');


// Get the color picker input element
const colorPicker = document.getElementById('color-picker');

// Set up drawing properties
ctx.lineWidth = 3;
ctx.strokeStyle = colorPicker.value; // Initialize the stroke color
ctx.strokeStyle = 'black';
ctx.strokeStyle = colorPicker.value; // Initialize the stroke color
ctx.lineCap = 'round';

// Event listener to update the stroke color when the color picker value changes
colorPicker.addEventListener('input', () => {
    ctx.strokeStyle = colorPicker.value;
});

let drawing = false;
let lastX = 0;
let lastY = 0;

// Maintain a history of drawing actions
const history = [];
let currentStep = -1;

// Event listeners for touch events
drawingArea.addEventListener('touchstart', startDrawing);
drawingArea.addEventListener('touchmove', draw);

// Event listener to stop drawing when the user lifts their finger
drawingArea.addEventListener('touchend', () => {
    drawing = false;
    // Save the current state to the history
    saveDrawingState();
});

// Function to start drawing
function startDrawing(e) {
    drawing = true;
    const touch = e.touches[0];
    lastX = touch.clientX - drawingArea.getBoundingClientRect().left;
    lastY = touch.clientY - drawingArea.getBoundingClientRect().top;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
}

// Function to draw lines as the user moves their finger
function draw(e) {
    if (!drawing) return;
    const touch = e.touches[0];
    const x = touch.clientX - drawingArea.getBoundingClientRect().left;
    const y = touch.clientY - drawingArea.getBoundingClientRect().top;
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
}

// Function to save the current drawing state to the history
function saveDrawingState() {
    if (currentStep < history.length - 1) {
        // If we're not at the most recent step, remove all future steps
        history.splice(currentStep + 1);
    }
    // Push a copy of the current canvas data to the history
    history.push(drawingArea.toDataURL());
    currentStep = history.length - 1;
}

// Function to undo all drawing actions
function undo() {
  if (currentStep > 0) {
        currentStep--;
        const img = new Image();
        img.src = history[currentStep];
        img.onload = () => {
            ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
            ctx.drawImage(img, 0, 0);
        };
  }
  else if (currentStep <= 0){
        currentStep--;
       
            ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
           
        
  }

    
}



// Event listener for the undo button
const undoButton = document.getElementById('undoLast');
undoButton.addEventListener('click', undo);

// Function to clear the entire canvas
function eraseAll() {
    ctx.clearRect(0, 0, drawingArea.width, drawingArea.height);
    saveDrawingState(); // Save the cleared state to the history
}

// Event listener for the clear button
const clearButton = document.getElementById('eraser');
clearButton.addEventListener('click', eraseAll);

var  canvasDrawing = document.getElementById('drawing-area');      
var ctxtDrawing = canvasDrawing.getContext('2d');
function  SlideOpen() {                                           //erase upon toggle
    ctxtDrawing.clearRect(0, 0,  canvasDrawing.width,  canvasDrawing.height);
}



      
