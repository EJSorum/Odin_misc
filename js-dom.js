const container = document.querySelector('.container');
// so this connects the container class in the HTML, assigning it to a variable
// all of my stuff will go in this div, so i don't need to type it again
const content = document.createElement('div');
// next we create a new div for the content we're going to add
content.classList.add('content');
// this adds a class to the div called content
// so content is the variable name in the js AND the class name in the HTML we're
// adding
// we are creating a class called content in the variable called content
content.textContent = 'This is the glorious text-content!';
// this adds text to the div
container.appendChild(content);
// this attaches the div to container



// ok so everything takes place in the container div...?
// actually the content div is inside the container div
// and everything i make will go inside the content div

const para = document.createElement("p");
const redText = document.createTextNode("Hey I'm red!");
para.style.color = 'red';
para.appendChild(redText);
container.appendChild(para);

// so create an element("p"), append text (redText) to the element (para), 
// then append the element to the div (container)

const head3 = document.createElement('h3');
const blueText = document.createTextNode("I'm a blue h3!");
head3.style.color = 'blue';
head3.appendChild(blueText);
container.appendChild(head3);


const content2 = document.createElement('div');
content2.style.border = '10px solid black';
content2.style.backgroundColor = 'pink';
const head1 = document.createElement('h1');
const headText = document.createTextNode("I'm in a div");
head1.appendChild(headText);
const para2 = document.createElement('p');
const paraText = document.createTextNode("Me too!")
para2.appendChild(paraText);
content2.appendChild(head1)

// so it really is that complicated. 
// you have to create a div, then an element, then text content
// then append the element to the div, then the text to the element...
container.appendChild(content2);

////////////////////////////////////

//events... three ways to do it (first is just in the html)

// second way
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// the third is the preferred way. you can use the button in multiple places.
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('Hello World');
});

////////////////////

// now i'll do the three methods by using a named function (first
// is in html)

btn3.onclick = alertFunction;
btn4.addEventListener('click', alertFunction);

// so the above two buttons both call this function:

function alertFunction() {
    alert("Yay! You did it!")
}

// i notice i didn't need to attach the elements to a variable....

btn5.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.background = 'blue';
});

// so the parameter e is a callback
// a callback is a function that can be used like a parameter
// 

//////////////////////////////////

// below I will iterate through the 3 Click Me buttons

const buttons = document.querySelectorAll('button');
// so here I grap all of the 'button' tags in the HTML

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
// and above we iterate through each button and add an event
// the event will show the id name of each button element (1, 2, and 3)
// so now all buttons in the html have two events attached to them oopsie




