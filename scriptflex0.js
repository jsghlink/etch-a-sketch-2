let buttonforsquares = document.getElementById("setresetid");
let n; // should it be const?

// Adding an event listener to button
buttonforsquares.addEventListener("click", (event) => {
    n = prompt("Enter your desired number of squares...\n", "Enter 2 or more");
    console.log(`You have selected ${n} squares\n`);

    // console.log("audio to be paused");
    // // introaudio.autoplay();
    // introaudio.pause();
    // //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
  }); 