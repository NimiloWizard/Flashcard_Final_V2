$(document).ready(function(){       
  $(window).scroll(function() {
      if (this.scrollY > 400) {
          $('#col-3 #arrow #arrowUp').hide(); // Use hide() method
      } else { // Show the element if not beyond 100px
          $('#col-3 #arrow #arrowUp').show();
      }
  });
});


function w3_open() {
  
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";

}

function w3_close() {

  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  
}


// -------------------SAVE & RESTORE LAST PAGE WHERE THE USER LEFT OFF ---------------

function saveLastVisitedPage() {
  const currentPage = window.location.href;
  localStorage.setItem("lastVisitedPage", currentPage);
}

// Function to redirect to the last visited page
function redirectToLastVisitedPage() {
  const lastVisitedPage = localStorage.getItem("lastVisitedPage");
  if (lastVisitedPage) {
      window.location.href = lastVisitedPage;
  }
}


/* ------------------------------ Kanji Image Flip -------------------------------- */ 





document.getElementById("stack").addEventListener("click", function (event) {

  event.preventDefault(); // Prevent the default focus behavior

  if (event.target.classList.contains("front-image")) {
      // Toggle the visibility of the clicked front image and its sibling back image
      event.target.style.display = "none";
      event.target.nextElementSibling.style.display = "block";
      element.blur();
  } else if (event.target.classList.contains("back-image")) {
      // Toggle the visibility of the clicked back image and its previous sibling front image
      event.target.style.display = "none";
      event.target.previousElementSibling.style.display = "block";
      element.blur();
  }
  document.getElementById("stack").blur();
});


// ----------------------------- Card Stack setup --------------------

let shownCards = [];
let previousCard = null;
let areElementsHidden = true; // Track the elements' hidden state

let stack = document.querySelector(".stack");
let cards = document.querySelectorAll(".card");
let currentCardIndex = 0;

[...stack.children].reverse().forEach(card => stack.append(card));

// ----------------------------- Reveal Element Button --------------------------------//

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

// ----------------------------- Previous Element Button --------------------------------//

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
  if (shownCards.length > 0) {
    let lastShownCard = shownCards.pop(); // Remove the last card from the shownCards array
    lastShownCard.style.animation = "slideIn";

    setTimeout(() => {
      lastShownCard.style.animation = "";
      stack.appendChild(lastShownCard); // Append the last shown card back

      // Hide the elements after the card swap
      let elementsToHide = document.querySelectorAll(".element-to-hide");
      elementsToHide.forEach(element => {
        element.style.display = "none";
      });

    }, 200);

    areElementsHidden = true;
  }
}


// ----------------------------- Next Element Button --------------------------------//

let nextButton = document.querySelector("#nextButton")
nextButton.addEventListener("click", showNextCard);

const audionextButton = document.getElementById('nextButton');
const audioPlayernext = document.getElementById('audionextButton');
// Add a click event listener to the button
audionextButton.addEventListener('click', function() {
  audioPlayernext.play();
});

function showNextCard() {
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

    // Add the card to the shownCards array
    addCardToShownCards(card);
  }, 500);
}

// Function to add a card to the shownCards array
function addCardToShownCards(card) {
  shownCards.push(card);
}



 //  ----------------------------------------Settings ---------------------------------------
    const Buttonsettings = document.getElementById('settings')
    Buttonsettings.addEventListener('click', function(){
      document.getElementById("stack").style.marginTop = '22%';
      document.getElementById("card").style.marginTop = '22%';
    });

  // ------------------------------------Audio Playaer ----------------------------------- //



  const audioButtonOnyomi = document.getElementById('audioButtonOnyomi');
  const audioPlayerOnyomi = document.getElementById('audioPlayerOnyomi');
  
  const audioButtonKunyomi = document.getElementById('audioButtonKunyomi');
  const audioPlayerKunyomi = document.getElementById('audioPlayerKunyomi');
  
  // Function to stop both audio players
  function stopBothAudioPlayers() {
    if (!audioPlayerOnyomi.paused) {
      audioPlayerOnyomi.pause();
      audioPlayerOnyomi.currentTime = 0; // Reset audio to the beginning
    }
    if (!audioPlayerKunyomi.paused) {
      audioPlayerKunyomi.pause();
      audioPlayerKunyomi.currentTime = 0; // Reset audio to the beginning
    }
  }
  
  // Add a click event listener to the Onyomi audio button
  audioButtonOnyomi.addEventListener('click', function() {
    stopBothAudioPlayers(); // Stop the other audio if it's playing
    audioPlayerOnyomi.play();
  });
  
  // Add a click event listener to the Kunyomi audio button
  audioButtonKunyomi.addEventListener('click', function() {
    stopBothAudioPlayers(); // Stop the other audio if it's playing
    audioPlayerKunyomi.play();
  });
  

// ----------------------setting up Image Gallery for Screen Image change--------------------------------//



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
          let element = document.getElementsByName('card_back_image');

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
        
     

// ----------------------setting up Image Gallery for  Card background change--------------------------------//

// Function to change the background image based on the option clicked

function changeCardBackground(KanjinewCardBackgroundImageUrl) {
 
  // Set the background for all cards in the stack
  const elements = document.querySelectorAll('.kanjibackgoundeffect');
  elements.forEach(function(element) {
      element.style.background = `url("${KanjinewCardBackgroundImageUrl}") center center / cover`;
  });

  // Store the selected background image URL in local storage
  localStorage.setItem('Kanjicardbackground', KanjinewCardBackgroundImageUrl);
}
  

// Example usage with onclick events on 6 images
  document.getElementById('background_image1').onclick = function() {
  const backgroundOption1 = 'Images/BACKGROUND1.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption1);

  const revealButton = document.querySelector('#revealButton');
  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');
 
  prevButton.style.background =   'linear-gradient(to right,  #64350c,gray )';
  revealButton.style.background = 'linear-gradient(to right,  gray, #64350c,  gray)';
  nextButton.style.background =   'linear-gradient(to right, gray, #64350c)';

};


document.getElementById('background_image2').onclick = function() {
  const backgroundOption2 = 'Images/BACKGROUND2.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption2);


    // set the background color of the button
    const revealButton = document.querySelector('#revealButton');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');

    
    prevButton.style.background =   'linear-gradient(to right, #78a6f5, white)';
    revealButton.style.background = 'linear-gradient(to right, white, #78a6f5, white)';
    nextButton.style.background =   'linear-gradient(to right, white, #78a6f5)';

};
document.getElementById('background_image3').onclick = function() {
  const backgroundOption3 = 'Images/BACKGROUND3.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption3);
  

   // set the background color of the button
   const revealButton = document.querySelector('#revealButton');
   const prevButton = document.querySelector('#prevButton');
   const nextButton = document.querySelector('#nextButton');

   
   prevButton.style.background =   'linear-gradient(to right, gray, lightblue)';
   revealButton.style.background = 'linear-gradient(to right, lightblue, gray, lightblue)';
   nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

};

document.getElementById('background_image4').onclick = function() {
  const backgroundOption4 = 'Images/BACKGROUND4.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption4);
 

  // set the background color of the button
  const revealButton = document.querySelector('#revealButton');
  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');

  
  prevButton.style.background =   'linear-gradient(to right, gray, lightblue)';
  revealButton.style.background = 'linear-gradient(to right, lightblue, gray, lightblue)';
  nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

};
document.getElementById('background_image5').onclick = function() {
  const backgroundOption5 = 'Images/BACKGROUND5.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption5);
  

   // set the background color of the button
   const revealButton = document.querySelector('#revealButton');
   const prevButton = document.querySelector('#prevButton');
   const nextButton = document.querySelector('#nextButton');

   
   prevButton.style.background =   'linear-gradient(to right,  green, white)';
   revealButton.style.background = 'linear-gradient(to right, white, green,white)';
   nextButton.style.background =   'linear-gradient(to right, white, green)';

};
document.getElementById('background_image6').onclick = function() {
  const backgroundOption6 = 'Images/BACKGROUND6.png'; // Replace with the actual URL
  changeCardBackground(backgroundOption6);
  

    // set the background color of the button
    const revealButton = document.querySelector('#revealButton');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');

    
    prevButton.style.background =   'linear-gradient(to right, #64350c, lightblue)';
    revealButton.style.background = 'linear-gradient(to right,lightblue, #64350c,lightblue)';
    nextButton.style.background =   'linear-gradient(to right, lightblue, #64350c)';


};

  

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
      document.getElementById("Feature_Drawing").style.position = "fixed";
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


/*
      
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
*/
/*


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
*/

/*
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
*/
   /*
      const ButtonsAnimate = document.getElementById('change_screen_background');  // Apply the animation
      
      const elementToAnimatereveal =  document.getElementById('revealButton');
      const elementToAnimateprev = document.getElementById('prevButton');
      const elementToAnimatenext = document.getElementById('nextButton');
      
      ButtonsAnimate.addEventListener('click', () => {
        elementToAnimatereveal.animation = 'moveDownButtons  .3s forwards';
        elementToAnimateprev.animation = 'moveDownButtons  .3s forwards';
        elementToAnimatenext.animation = 'moveDownButtons  .3s forwards';
      });
*/
/*
  
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

*/
