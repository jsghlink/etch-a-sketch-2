const container = document.querySelector('#container');

const divOne = document.createElement('div');

divOne.classList.add('content');
// divOne.classList.toggle('content');
// 1. used classList.add('content') first. Check usage for toggle.

divOne.textContent = 'Adding content to a div named - divOne.';

container.appendChild(divOne);

// 2. Adding <p> to #container div.

const paraOne = document.createElement('p');

paraOne.style.cssText = 'color: red;';

paraOne.textContent = 'This is red.';
// divOne.insertBefore(paraOne, headerThree);
// divOne.insertBefore(paraOne, divOne.firstElementChild);
// divOne.appendChild(paraOne);

const headerThree = document.createElement('h3');

headerThree.style.cssText = 'color: blue;';

headerThree.textContent = "I'm a Bluregaard header!"; // 3. used "" here.

container.appendChild(headerThree); // 4. Last child for container is headerThree.
// divOne.insertBefore(paraOne, divOne.lastChild);

container.insertBefore(paraOne, headerThree); // 5. Order of container elements - divOne, paraOne, headerThree.

// 6. Sub-part 3 begins here - 
const divTwo = document.createElement('div');

divTwo.setAttribute('style', 'border: black; background: pink;');
headerThree.insertAdjacentElement(divTwo);

// const headerThree = document.createElement('h3');
// const headerOne = document.createElement('h1');
// headerOne.textContent = "I'm living in divTwo!"
// // divTwo.appendChild(headerOne);

// const paratwo = document.createElement('p');
// paratwo.textContent = 'ME TOO!';
// divTwo.insertBefore(paratwo, headerOne);

// container.appendChild(divTwo);





