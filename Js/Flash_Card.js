
function w3_open() {
  
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = "none";

}

function w3_close() {

  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
  
}

let Delete = document.querySelector('#reset');
Delete.addEventListener('click', clear);

function clear() {                                                       // --------------------------- Clear the LOCAL STORAGE -----------------
    localStorage.clear();
    alert("Data has been cleared.");
}


document.getElementById('home').onclick = function(){
        w3_close() 
}
  // ---------------------------------- Toggle for Dark/Light Mode ---------------------//

  document.getElementById('darkmode-toggle').addEventListener('change', function() {
    
    if(this.checked) {
      
        document.body.style.backgroundColor = 'rgba(36, 36, 36, 0.85)'; // Dark background color with opacity
        document.getElementById("bg_caption").style.color = "white";
       
        
       // Create a new style element for the body::before pseudo-element
        var style = document.createElement("style");
        style.innerHTML = "body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: -1; pointer-events: none; }";

        // Append the style element to the document's head
        document.head.appendChild(style);

    } else {
        document.body.style.backgroundColor = ''; // Reset background color
        
        document.getElementById("bg_caption").style.color = "black";
       

            
        // Remove the style element for body::before if it exists
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


// Function to change the background image based on the option clicked
function changeBackgroundImage(newBackgroundImageUrl) {
  // Set the background image on the page
  document.body.style.background = `url("${newBackgroundImageUrl}")`;

  // Store the new background image URL in localStorage
  localStorage.setItem('background', newBackgroundImageUrl);

 
}


// Example usage with onclick events on 6 images
document.getElementById('background_image1').onclick = function() {
  const backgroundOption1 = 'Images/BACKGROUND1.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption1);
  body.style.backgroundImage = 'url("Images/BACKGROUND1.png")';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

};

document.getElementById('background_image2').onclick = function() {
  const backgroundOption2 = 'Images/BACKGROUND2.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption2);
  body.style.backgroundImage = 'url("Images/BACKGROUND2.png")';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

};

document.getElementById('background_image3').onclick = function() {
  const backgroundOption3 = 'Images/BACKGROUND3.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption3);
  body.style.backgroundImage = 'url("Images/BACKGROUND3.png")';
 document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

};


document.getElementById('background_image4').onclick = function() {
  const backgroundOption4 = 'Images/BACKGROUND4.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption4);
  body.style.backgroundImage = 'url("Images/BACKGROUND4.png")';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
}


document.getElementById('background_image5').onclick = function() {
  const backgroundOption5 = 'Images/BACKGROUND5.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption5);
  body.style.backgroundImage = 'url("Images/BACKGROUND5.png")';
 document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

};


document.getElementById('background_imag6').onclick = function() {
  const backgroundOption6 = 'Images/BACKGROUND6.png'; // Replace with the actual URL
  changeBackgroundImage(backgroundOption6);
  body.style.backgroundImage = 'url("Images/BACKGROUND6.png")';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';

};

/*
function screen_background1(newBackgroundImageUrl){
  
// Set the background of the screen
    
  // document.querySelector('body').style.background = 'url("Images/Homepagebg.png") center center / cover';    
    document.getElementById("bg_caption").style.color = "white";

  
   const backgroundImageUrl = 'Images/BACKGROUND1.png';
  
  
   document.body.style.background = `url("${backgroundImageUrl}")`;

   // Store the background image URL in localStorage
   localStorage.setItem('background', backgroundImageUrl);

   const body = document.body;

   // Set the background image using JavaScript
  // body.style.backgroundImage = 'url("Images/BACKGROUND1.png")';
   body.style.backgroundPosition = 'center center';
   body.style.backgroundSize = 'cover';

      // Update the background image
    document.body.style.backgroundImage = `url("${newBackgroundImageUrl}")`;

    // Update localStorage with the new background URL
    localStorage.setItem('background', newBackgroundImageUrl);


            
}









function screen_background2(){
  
// Set the background of the card

   // document.querySelector('body').style.background = 'url("Images/BACKGROUND2.png") center center / cover';          
    document.getElementById("bg_caption").style.color = "white";    


    document.getElementById("bg_caption").style.color = "white";

    // Set the background image URL
    const backgroundImageUrl = 'Images/BACKGROUND1.png';
   
    // Set the background image using CSS
    document.body.style.background = `url("${backgroundImageUrl}")`;
 
    // Store the background image URL in localStorage
    localStorage.setItem('background', backgroundImageUrl);
 
    const body = document.body;
 
    // Set the background image using JavaScript
    body.style.backgroundImage = 'url("Images/BACKGROUND2.png")';
    body.style.backgroundPosition = 'center center';
    body.style.backgroundSize = 'cover';
 
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

*/
