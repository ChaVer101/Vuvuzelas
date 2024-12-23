// Function to play Vuvuzela sound on button click
const vuvuzelaSounds = {
    vuvuzela1: "vuvuzela1.mp3",  
    vuvuzela2: "vuvuzela2.mp3",
    vuvuzela3: "vuvuzela3.mp3",
    
};

// Function to play sound
function playSound(vuvuzelaId) {
    const audio = new Audio(vuvuzelaSounds[vuvuzelaId]);
    audio.play();
}

// Add event listeners to the buttons
document.getElementById("vuvuzela1").addEventListener("click", function() {
    playSound("vuvuzela1");
});

document.getElementById("vuvuzela2").addEventListener("click", function() {
    playSound("vuvuzela2");
});

document.getElementById("vuvuzela3").addEventListener("click", function() {
    playSound("vuvuzela3");
});


