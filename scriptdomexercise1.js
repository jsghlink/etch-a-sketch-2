// 1. used classList.add('content') first
const container = document.querySelector('#container');

const divone = document.createElement('div');
divone.classList.add('content');
// divone.classList.toggle('content');
divone.textContent = 'Adding content to a div named - divone.';

container.appendChild(divone);
// 2. The second exercise begins from here

const paraone = document.createElement('p');
paraone.style.cssText = 'color: red;';

// divone.insertBefore(paraone, headerthree);
// divone.insertBefore(paraone, divone.firstElementChild);
// divone.appendChild(paraone);

const headerthree = document.createElement('h3');
headerthree.style.cssText = 'color: blue;';
headerthree.textContent = "I'm a Bluregaard! header!"; // 3. used "" here

container.appendChild(headerthree);
// divone.insertBefore(paraone, divone.lastChild);
container.insertBefore(paraone, headerthree);
paraone.textContent = 'This is red.';

// sub-part 3 begins here
// const divtwo = document.createElement('div');
// divtwo.setAttribute('style', 'border: black; background: pink;');
// container.appendChild(divtwo);

// const headerthree = document.createElement('h3');
// const headerone = document.createElement('h1');
// headerone.textContent = "I'm living in divtwo!"
// // divtwo.appendChild(headerone);

// const paratwo = document.createElement('p');
// paratwo.textContent = 'ME TOO!';
// divtwo.insertBefore(paratwo, headerone);

// container.appendChild(divtwo);





