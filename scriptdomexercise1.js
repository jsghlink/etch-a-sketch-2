//  container = document.querySelector('#container');

// const divOne = document.createElement('div');

// divOne.classList.add('content');
// // divOne.classList.toggle('content');
// // 1. used classList.add('content') first. Check usage for toggle.

// divOne.textContent = 'Adding content to a div named - divOne.';

// container.appendChild(divOne);

// // 2. Adding <p> to #container div.

// const paraOne = document.createElement('p');

// paraOne.style.cssText = 'color: red;';

// paraOne.textContent = 'This is red.';
// // divOne.insertBefore(paraOne, headerThree);const
// // divOne.insertBefore(paraOne, divOne.firstElementChild);
// // divOne.appendChild(paraOne);

// const headerThree = document.createElement('h3');

// headerThree.style.cssText = 'color: blue;';

// headerThree.textContent = "I'm a Bluregaard header!"; // 3. used "" here.

// container.appendChild(headerThree); // 4. Last child for container is headerThree.
// // divOne.insertBefore(paraOne, divOne.lastChild);

// container.insertBefore(paraOne, headerThree); // 5. Order of container elements - divOne, paraOne, headerThree.

// ------------------------------------------------------------------------------------------

// 6. Sub-part 3 begins here - 

 container = document.querySelector('#container');

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
// divOne.insertBefore(paraOne, headerThree);const
// divOne.insertBefore(paraOne, divOne.firstElementChild);
// divOne.appendChild(paraOne);

const headerThree = document.createElement('h3');

headerThree.style.cssText = 'color: blue;';

headerThree.textContent = "I'm a Bluregaard header!"; // 3. used "" here.

container.appendChild(headerThree); // 4. Last child for container is headerThree.
// divOne.insertBefore(paraOne, divOne.lastChild);

container.insertBefore(paraOne, headerThree); // 5. Order of container elements - divOne, paraOne, headerThree.

const divTwo = document.createElement('div');
divTwo.classList.add('frontier');


divTwo.setAttribute('style', 'background-color:pink; border:1px solid black;');

container.appendChild(divTwo);

// 7. Operations here - 

// const headerThree = document.createElement('h3');

const headerOne = document.createElement('h1');
headerOne.textContent = "I'm living in divTwo!";
// // divTwo.appendChild(headerOne);

const paraTwo = document.createElement('p');
paraTwo.textContent = 'ME TOO!';

// divTwo.insertBefore(headerOne, paraTwo);

// divTwo.appendChild(paraTwo);
divTwo.appendChild(headerOne);
divTwo.appendChild(paraTwo);

const headerTwo = document.createElement('h2');
headerTwo.textContent = "I'm an h2 who's living in divTwo!";

divTwo.appendChild(headerTwo); // 8. Testing appendChild

// const divTwo = document.createElement('div');
// divTwo.classList.add('frontier');
// divTwo.setAttribute('style', 'background-color:pink; border:1px solid black;');

// const headerOne = document.createElement('h1');
// headerOne.textContent = "I'm living in divTwo!";
// divTwo.appendChild(headerOne);

// const paraTwo = document.createElement('p');
// paraTwo.textContent = 'ME TOO!';
// divTwo.insertBefore(headerOne, paraTwo);

// container.appendChild(divTwo);
