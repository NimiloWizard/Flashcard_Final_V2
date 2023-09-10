
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


document.getElementById("revealButton").addEventListener("click", revealElements);
  

function revealElements() {
  if (areElementsHidden) {

      let elementsToReveal = document.querySelectorAll(".element-to-hide");
      elementsToReveal.forEach(element => {
         
          element.style.display = "block"; 
         
      });

      areElementsHidden = false;
      
  }
}

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

let nextButton = document.querySelector("#nextButton")
nextButton.addEventListener("click", showNextCard);

function showNextCard(){

    let card = document.querySelector(".card:last-child");
   
    card.style.animation = "swap 500ms forwards"; 
  
  
    setTimeout(() => {
      card.style.animation = "";
      stack.prepend(card);

     
       // Hide the elements after the card swap
       let elementsToHide = document.querySelectorAll(".element-to-hide");
       elementsToHide.forEach(element => {
         element.style.display = "none";
       });
       areElementsHidden = true;
       previousCard = card;

    }, 500);

}

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


  
}

let widthScreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (widthScreen <= 765) {

  
  
  let bg_hide_Image = document.querySelector("#bg_hide_Image");
  bg_hide_Image.addEventListener("click", hide_screen_gallery);

      function hide_screen_gallery(){
        console.log('It trigger')
        document.getElementById("bg_caption").style.display = "none";
        document.getElementById("screen_back_image").style.display = "none";
        document.getElementById("bg_hide_Image").style.display = "none";
        document.getElementById("col-1").style.display = "none";

      
        
        var x = document.getElementsByClassName("bg_hide_Image");
      
      }

        function scrollElementDown(elementId, scrollAmount) {
        const element = document.getElementById(elementId);
            if (element) {
                element.scrollTop = 50;
            }
       }
    
       // Usage
         scrollElementDown('card', 300); // Replace 'yo


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



         // Assuming 'element' is the element you want to scroll
          let element = document.getElementsByname('visible');

          // Perform your specific action (e.g., after a button click, a timeout, etc.)
          function performSpecificAction() {
            // Your specific action here

            // Automatically scroll up
            element.scrollTop -= 100; // Adjust the value as needed
          }

          // Call the function when needed
          performSpecificAction();


      w3_close()  //toggle aup the navbar after making a selection

   }
  
// ----------------------Closing the Card Image Gallery--------------------------------//
      

          let hide_Image = document.querySelector("#hide_Image");
                hide_Image.addEventListener("click", hide_card_gallery);
                
                function hide_card_gallery(){
                  document.getElementById("background_caption").style.display = "none";
                  document.getElementById("card_back_image").style.display = "none";
                  document.getElementById("hide_Image").style.display = "none";
                
             
                  
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

      revealButton.style.background = 'linear-gradient(to right, #64350c, gray)';
      prevButton.style.background =   'linear-gradient(to right, #64350c, gray)';
      nextButton.style.background =   'linear-gradient(to right, #64350c, gray)';
  
    // set the color of the text of the button
      revealButton.style.color ='black';
      prevButton.style.color = 'white';
      nextButton.style.color = 'white';
    
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

        revealButton.style.background = 'linear-gradient(to right, #78a6f5, white)';
        prevButton.style.background =   'linear-gradient(to right, #78a6f5, white)';
        nextButton.style.background =   'linear-gradient(to right, #78a6f5, white)';

        

        // set the color of the text of the button
        revealButton.style.color ='black';
        prevButton.style.color = 'white';
        nextButton.style.color = 'white';
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

   revealButton.style.background = 'linear-gradient(to right, lightblue, gray)';
   prevButton.style.background =   'linear-gradient(to right, lightblue, gray)';
   nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

   // set the color of the text of the button
   revealButton.style.color ='black';
   prevButton.style.color = 'white';
   nextButton.style.color = 'white';

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

      revealButton.style.background = 'linear-gradient(to right, lightblue, gray)';
      prevButton.style.background =   'linear-gradient(to right, lightblue, gray)';
      nextButton.style.background =   'linear-gradient(to right, lightblue, gray)';

      // set the color of the text of the button
      revealButton.style.color ='black';
      prevButton.style.color = 'white';
      nextButton.style.color = 'white';
 
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
  
        revealButton.style.background = 'linear-gradient(to right, green, white)';
        prevButton.style.background =   'linear-gradient(to right, green, white)';
        nextButton.style.background =   'linear-gradient(to right, green, white)';
  
        // set the color of the text of the button
        revealButton.style.color ='black';
        prevButton.style.color = 'white';
        nextButton.style.color = 'white';
   
      
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

      revealButton.style.background = 'linear-gradient(to right, #64350c, lightblue)';
      prevButton.style.background =   'linear-gradient(to right, #64350c, lightblue)';
      nextButton.style.background =   'linear-gradient(to right, #64350c, lightblue)';

      // set the color of the text of the button
      revealButton.style.color ='black';
      prevButton.style.color = 'white';
      nextButton.style.color = 'white';
  
}


