window.addEventListener("load", (event) => {
  console.log("Your page is fully loaded.");
  alert("HOLA DEA\n");
  // introaudio.autoplay();
  // introaudio.play();
  //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
});

// let containerDiv = document.querySelector('mainsquarescontainer');
let containerDiv = document.querySelector('.mainsquarescontainer'); 
// problem identified on 16-06. On second thought, check querySelector syntax
let userValue = document.getElementById('inputgridsize-id');
let userSubmit = document.getElementById('usersubmit-id');
let promptText = document.getElementById('warnprompt-id');
let copyInput = document.getElementById('copyinput-id');
let clearButton = document.getElementById('clearbutton-id');

userValue.addEventListener('focus', inputDisclaimer);
userValue.addEventListener('keyup', duplicatingGridInfo);
userSubmit.addEventListener('click', makeSquares);
clearButton.addEventListener('click', clearSquares);

makeSquares();
drawInk();

function duplicatingGridInfo() {
  let userGrid = userValue.value;
  copyInput.textContent = "x " + userGrid + " squares";
}

function inputDisclaimer() {
  promptText.textContent = "Entered number must be between 2 to 20!"; 
}

function makeSquares() {
  let number = userValue.value;
  if(number < 0 || number > 20 || isNaN(number)) {
      promptText.textContent = "Make sure it's a number from 2 to 20!";
      // promptText.textContent = "Make sure it's a number from 2 to 99!"; changed this on 16-06
  } else {
  promptText.textContent = "";
  copyInput.textContent = "";
  userValue.value = "";
  containerDiv.innerHTML = "";
  if (number == 0 || number > 20 || number == "") {
      for(let i = 0; i < 10; i++) {
          let row = document.createElement('div');
          row.classList.add('row');
          containerDiv.appendChild(row);
          for(let k = 0; k < 10; k++) {
              let column = document.createElement('div');
              column.classList.add('column')
              row.appendChild(column);
          }
          } 
      }   else {
      for(let i = 0; i < number; i++) { // AB-brackets can be added here
          let row = document.createElement('div');
          row.classList.add('row');
          containerDiv.appendChild(row);
          //row.setAttribute('style', 'display: flex; justify-content: center; align-items-center; width:100%; flex-wrap: wrap; flex: 1; '); // AB-testing setAttribute on row(s) here
          for(let k = 0; k < number; k++) {
              let column = document.createElement('div');
              column.classList.add('column')
              row.appendChild(column);
              //column.setAttribute('style', 'flex: 1; border: 1px solid blue;'); // AB-testing setAttribute on columns(s) here
      }
  }
}
}
//call draw function here to allow drawing after new grid is made
drawInk();
}

function drawInk() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
      columns[i].addEventListener("mouseover", changeColor);
      // columns[i].addEventListener("mousedown", changeColor); AB-think on this
      }
    

    function changeColor() {
      let blackRadio = document.getElementById('black-pen');
      let redRadio = document.getElementById('red-pen');
      // let blueRadio = document.getElementById('blue-pen');
      let rainbow = document.getElementById('rainbow');
      let eraserRadio = document.getElementById('eraser'); 
      
      if (blackRadio.checked) {
          this.style.backgroundColor = '#2e2b2b';
      } else if (redRadio.checked) {
          this.style.backgroundColor = '#da2d2d'; // ; was missing earlier
      }
      //  else if (blueRadio.checked) {
      //     this.style.backgroundColor = "#3f33dd"; JavaScript is and interpreted language. Rainbow and eraser were not working because of being unable to process this line.
      // } 
      else if (eraserRadio.checked) {
          this.style.backgroundColor = ''; // ; was missing earlier
      } else if (rainbow.checked) {
          let randomColor = Math.floor(Math.random()*16777215).toString(16);
          this.style.backgroundColor = "#" + randomColor;
      }
  }
}

function clearSquares() {
  let columns = document.getElementsByClassName("column");
  for (let i = 0; i < columns.length; i++) {
      columns[i].style.backgroundColor = '';
  }
  }

  

      
    

  

//   function makeSquares() {
//     let number = userValue.value;
//     if(number < 0 || number > 99 || isNaN(number)) {
//         promptText.textContent = "Try entering a number from 2 to 99!";
//     } 
//     else {
//     promptText.textContent = "";
//     copyInput.textContent = "";
//     userValue.value = "";
//     container.innerHTML = "";
//     }
//     if (number == 0 || number > 99 || number == "") {
//         for(let i = 0; i < 10; i++) {
//             let row = document.createElement('div');
//             row.classList.add('row');
//             container.appendChild(row);
//             for(let j = 0; j < 10; j++) {
//                 let column = document.createElement('div');
//                 column.classList.add('column')
//                 row.appendChild(column);
//             }
//             } 
//         }   
//         else {
//         for(let i = 0; i < number; i++) {
//             let row = document.createElement('div');
//             row.classList.add('row');
//             container.appendChild(row);
//             for(let j = 0; j < number; j++) {
//                 let column = document.createElement('div');
//                 column.classList.add('column')
//                 row.appendChild(column);
//         }
//     }
// }
// }

// drawInk();















//   function makeSquares2() {
//     let container = document.querySelector('.squarescontainer');
//     let squares = container.querySelectorAll("div");
//     squares.forEach((div) => div.remove());

//     // container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
//     // container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

//     let amount = size * size;
//     for (let i = 0; i < amount; i++) {
//     let square = document.createElement("div");
//     square.classList.add("cell");
//     container.style.backgroundColor = "#e0e0e0";
//     //Set up “hover” effect so the divs change color using JavaScript
//     square.addEventListener("mouseover", colorSquare);
//     container.insertAdjacentElement("beforeend", square);
//   }
// }
  

//   function changeSize(input) {
//     input >= 2 && input <= 100 ? populateContainer(input) : console.log("input error! to many or to few squares");
//   };

//   function colorSquare() {
//     color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
//   }
  
//   function changeColor(choice) {
//     color = choice;
//   }








//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// let buttonforsquares = document.getElementById("setresetid");
// let n; // should it be const?

// // Adding an event listener to button
// buttonforsquares.addEventListener("click", (event) => {
//     n = prompt("Enter your desired number of squares...\n", "Enter 2 or more");
//     console.log(`You have selected ${n} squares\n`);

//     // console.log("audio to be paused");
//     // // introaudio.autoplay();
//     // introaudio.pause();
//     // //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
//   }); 

//   function promptForSquares() {
//     n = prompt("Enter your desired number of squares...\n", "Enter 2 or more");
//     if (n >=2 && n <=100) {
      
//     }
//     else {
//       console.log("Input error! Enter a value between the specified numbers!");
//     }

//   }


































































































// TAYLOR SWIFT VERSION BEGINS HERE
// window.addEventListener("load", (event) => {
//   console.log("Your page is fully loaded.");
//   alert("HOLA DEA\n");
//   // introaudio.autoplay();
//   // introaudio.play();
//   //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
// });

// let containerDiv = document.querySelector('.mainsquarescontainer');
// let userValue = document.getElementById('inputgridsize-id');
// let userSubmit = document.getElementById('usersubmit-id');
// let promptText = document.getElementById('warnprompt-id');
// let copyInput = document.getElementById('copyinput-id');
// let clearButton = document.getElementById('clearbutton-id');

// userValue.addEventListener('focus', inputDisclaimer);
// userValue.addEventListener('keyup', duplicatingGridInfo);
// userSubmit.addEventListener('click', makeSquares);
// clearButton.addEventListener('click', clearSquares);

// makeSquares();
// drawInk();

// function duplicatingGridInfo() {
//   let userGrid = userValue.value;
//   copyInput.textContent = "x " + userGrid + " squares";
// }

// function inputDisclaimer() {
//   promptText.textContent = "Entered number must be between 2 to 99!"; 
// }

// function makeSquares() {
//   let number = userValue.value;
//   if(number < 0 || number > 99 || isNaN(number)) {
//       promptText.textContent = "Make sure it's a number from 2 to 99!";
//   } else {
//   promptText.textContent = "";
//   copyInput.textContent = "";
//   userValue.value = "";
//   containerDiv.innerHTML = "";
//   if (number == 0 || number > 99 || number == "") {
//       for(let i = 0; i < 10; i++) {
//           let row = document.createElement('div');
//           row.classList.add('row');
//           containerDiv.appendChild(row);
//           for(let k = 0; k < 10; k++) {
//               let column = document.createElement('div');
//               column.classList.add('column')
//               row.appendChild(column);
//           }
//           } 
//       }   else {
//       for(let i = 0; i < number; i++) { // brackets can be added here
//           let row = document.createElement('div');
//           row.classList.add('row');
//           containerDiv.appendChild(row);
//           for(let k = 0; k < number; k++) {
//               let column = document.createElement('div');
//               column.classList.add('column')
//               row.appendChild(column);
//       }
//   }
// }
// }
// //call draw function here to allow drawing after new grid is made
// drawInk();
// }

// function drawInk() {
//   let columns = document.getElementsByClassName("column");
//   for (let i = 0; i < columns.length; i++) {
//       columns[i].addEventListener("mouseover", changeColor);
//       }
    

//     function changeColor() {
//       let blackRadio = document.getElementById('black-pen');
//       let redRadio = document.getElementById('red-pen');
//       // let blueRadio = document.getElementById('blue-pen');
//       let rainbow = document.getElementById('rainbow');
//       let eraserRadio = document.getElementById('eraser'); 
      
//       if (blackRadio.checked) {
//           this.style.backgroundColor = '#2e2b2b';
//       } else if (redRadio.checked) {
//           this.style.backgroundColor = '#da2d2d'; // ; was missing earlier
//       }
//       //  else if (blueRadio.checked) {
//       //     this.style.backgroundColor = "#3f33dd"; JavaScript is and interpreted language. Rainbow and eraser were not working because of being unable to process this line.
//       // } 
//       else if (eraserRadio.checked) {
//           this.style.backgroundColor = ''; // ; was missing earlier
//       } else if (rainbow.checked) {
//           let randomColor = Math.floor(Math.random()*16777215).toString(16);
//           this.style.backgroundColor = "#" + randomColor;
//       }
//   }
// }

// function clearSquares() {
//   let columns = document.getElementsByClassName("column");
//   for (let i = 0; i < columns.length; i++) {
//       columns[i].style.backgroundColor = '';
//   }
//   }