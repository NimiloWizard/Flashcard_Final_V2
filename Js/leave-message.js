
const leaveMessage = document.getElementById('leaveMessage');
const leaveButton = document.getElementById('leaveButton');
const stayButton = document.getElementById('stayButton');


// Handle the "Leave" button click
leaveButton.addEventListener('click', () => {
    // Add your leave page logic here
    window.location.href = 'index.html'; // Replace with your destination URL
});

// Handle the "Stay" button click
stayButton.addEventListener('click', () => {
    leaveMessage.style.display = 'none'; // Hide the custom leave message
    
});