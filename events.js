const div = document.querySelector('.container');

const head = document.createElement('h1');
head.textContent ='shopping List';

div.insertAdjacentElement("beforebegin", head)



const clearBtn = document.querySelector('.btn');


//inline html-js event listener 
function onClear () {
    alert('Deleted items')
}

//javaScript event listener 

//clearBtn.onClick = function () {
    //alert('clear shopping list')
//}
 //the following is the ideal eventlistener to use you can use it to create as many events as you want unlike the the first option
//generally the syntax for event listeners is .addeventListener('event', arrow/anon function)

//clearBtn.addEventListener('click',  () => alert('Clear Items') ) //function() {
    //alert('Clear items');
//}) 

//clearBtn.addEventListener('click',  () => console.log('Clear Items') )

//you can also use a function name instead of arrow function 
//do not invoke the function () cause it'll get executed immediately yet we want it executed after click event
clearBtn.addEventListener('click', onClear);

//you can remove an event after a set time of duration using async function setTimeout
//document.getElementById("myButton").removeEventListener( "click", myFunction );
//syntax - setTimeout(function, time)
//for the time the event will be removed immediately upon reload after the set time has lapsed if its 5000===5seconds

setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

//you can create a self executing event with the setTimeout function . the .click is the event itself

//setTimeout(() => clearBtn.click(), 5000)

/*const items = document.querySelector('ul');

const cart = document.createElement('button')
cart.textContent='Cart'

items.appendChild(cart);
 
function clearItems () {
    const items = document.querySelector('ul');
    items.remove();
}

cart.addEventListener('click', clearItems);*/

function clearItems () {
    const items = document.querySelector('ul');
    items.remove();
}

const list = document.querySelector('ul'); 

const cart = document.createElement('button');
cart.textContent ='Add to Cart';

list.insertAdjacentElement('beforebegin', cart);

cart.addEventListener('click', clearItems );

//mouse events 


const logo = document.querySelector('img');
const myClick = () => console.log('click event');
const double = () => { document.body.style.backgroundColor ='purple'}

//1 - click
logo.addEventListener('click', myClick);

//2 - double click, denoted as dblclick(not in camelCase)
logo.addEventListener('dblclick', double)

//3 - context menu. its basically right click cause that what happens when you right click, menu shows up
const onRightClick = () => console.log("You've submitted");
document.querySelector('.submit').addEventListener('contextmenu', onRightClick);

//4 - mousedown -(when you left click)
// occurs when the left mouse button is pressed down while the pointer is inside the element.


const onMouseDown = () => console.log('Mouse down event');

document.querySelector('.submit').addEventListener('mousedown',onMouseDown );

document.querySelector('h1').addEventListener('mousedown', onMouseDown)

// 5 - mouseup - (when you left click and release)
//mouseup event occurs when a mouse button is released over an element/while the pointer is located inside it/ .

// note that a global const can be use inside a function 
const paragraph = document.querySelector('p')
const onMouseUp = () => paragraph.style.color = 'blue';
const moseDown = () => paragraph.style.color = 'red';


paragraph.addEventListener('mouseup' , onMouseUp);
paragraph.addEventListener('mousedown', moseDown);

//6 - mouseover - when the mouse is placed over an element 
const overmouse = () => {
    document.querySelector('img').style.height = '500px';
}
logo.addEventListener('mouseover', overmouse);

//7 mouseout - is essentially to undo the mouseover

const outMouse =() => { 
    document.querySelector('img').style.height = '300px';
};

logo.addEventListener('mouseout', outMouse);

//8 - dragstart - event occurs when the user starts to drag a selection.

const onDragStart = () => console.log('drag start event initiated')
logo.addEventListener('dragstart', onDragStart);

//drag - fired for contnious drag, it goes on for as long as you're dragging the element
const dragEvent = () => console.log('the drag is continous')
logo.addEventListener('drag', dragEvent);

//9 drag end - ends the drag start.fired of when the dragstart ends

const dragEnd = () => console.log('The drag has ended');
logo.addEventListener('dragend', dragEnd);