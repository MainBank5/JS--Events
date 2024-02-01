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

//practice

const drg = () => console.log('my drag');
const drgend = () => console.log('end of my drag');
const drug = () => console.log('its continous');

paragraph.addEventListener('dragstart', drg);
paragraph.addEventListener('dragend', drgend);
paragraph.addEventListener('drag', drug);

//event objects - helps us access some details about the event that caused your function to be executed

const subBtn = document.querySelector('.submit');
const evenOb = (e) => {
    console.log(e.target);
    e.target.style.backgroundColor='green';
};
const evenT = (e) => console.log(e.currentTarget);

subBtn.addEventListener('click', evenOb) //function(e) {
    //console.log(e)
//})

subBtn.addEventListener('click', evenT);

/*
 1. e.target - shows the specific element that triggered the event
 2. e.current shows the element that the event is attached to (its similar to e.target in some cases)
 */
//the difference between the two is in event bubling which is visible in a nested element. see this

//document.body.addEventListener('click', function(e){
    //console.log(e.target);
    //console.log(e.currentTarget);
//});

/* 3 type - shows the type of event that was triggered either click, dblclick, mousedown/up/over/out, 
contenxtmenu etc */
const evenTy = (e) => console.log(e.type);

subBtn.addEventListener('click', evenTy);

//4. timeStamp - shows the time the event was triggered 

const time = (e) => console.log(e.timeStamp);

subBtn.addEventListener('click', time);

/* 5. clientX - the horizontal position of the cursor/mouse click relative to the window/viewport from the left side
6. clientY - the vertical position of the mouse click relative to the /viewport/window from the top

7. offsetY -The distance of an object's bottom edge from its parent container’s top edge
in other words mouse click y position relative to the element.

8. offfsetX - The distance of an object's right edge from it's parent container's left edge.
 in other words mouse click X position relative to the element.

9. pageX- almost similar to client, but it returns in pixels the x position of the mouse click 
relative to the page
pageX: Returns the number of pixels that the document has been scrolled horizontally;
this value includes any scroll bars and paddings.

10. pageY - it returns in pixels the x position of the mouse click 
relative to the page

the difference between pagey/x and clientx/y is that the later returns coordinates relative to the viewport. 
The viewport is stationary. The former return cordinates in pixels relative to the page/docoment
hence the values do change when you resize the document/page.

11.screenX - shows the X position of the mouse click relative to the screen/entire monitor 
12. screenY - shows the Y position of the mouse click relative to the screen/entire monitor
*/

logo.addEventListener('click', function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);

});

//to prevent default behaviour we use preventdefault method on e. 
//if you have a link on your html the default behaviour on clicking the link is that it takes you to the linked page
//you can prevent this using the .preventdeault() method;

document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault();

    console.log('the link was clicked');
});

/*Keyboard events - fired off by the keyboard
1. keypress - when you press any key on the selected element
2. keyup - just like mousedown its fired when you release a key
3. keydown - the even is fired as long as the keys remain down. once u stop the event ends
*/

const onKeyPress = (e) => console.log('keypress event fired')
//document.querySelector('.input').addEventListener('keypress', onKeyPress)

const keyUp = (e) => console.log('Key released, keyup event fired!')
//document.querySelector('.input').addEventListener('keyup', keyUp)

const onKeyDown = (e) => console.log('Keydown event');
document.querySelector('.input').addEventListener('keydown', onKeyDown);

//when you want to know the specific key pressed you can do this

const specific = (e) => {
    //1.key
    console.log(e.key);
    //document.querySelector('h1').textContent = e.key;
    if(e.key === 'Enter') {
        alert("You have entered");
    }

    //2. keycodes
    //https://www.toptal.com/developers/keycode/table
    if (e.keyCode === 38) {
        alert('You pressed the arrowup')
    }

    //3. code
    console.log(e.code)

    if(e.code === 'Digit2') {
        console.log('you pressed 2')
    }

    //to see which key is pressed down repeatedly 
    if (e.repeat) {
        console.log("You're holding down " + e.key)
    }

    //to see if shift key is presseddown returns true/false
    console.log( "Shift: " + e.shiftKey);
    console.log( "Control: " + e.ctrlKey);
    console.log( "Alt: " + e.altKey);

    if (e.shiftKey && e.key === "K") {
        console.log('You hit shift + K')
    }
};
document.querySelector('.input').addEventListener('keydown', specific)

const input = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const headingOne = document.getElementById('heading-one');

//the ideal event listener for inputs fields/forms is 'input'. you can also use keydown but input is more ideal
//this because an event like keydown may not work on input fields such as a select list

const onInput = (e) => {
    console.log('input');
    console.log(e.target.value); 
    //headingOne.textContent = e.target.value;
}

input.addEventListener('input', onInput);

//priorityInput.addEventListener('input', onInput)
//you can also use change for select option field forms
priorityInput.addEventListener('change', onInput);

//for checkbox forms, we use the checked on the event object to determine whether it's true or false
const onChecked = (e) => {
    console.log(e.target.checked)
    const isChecked = e.target.checked;
    headingOne.textContent = isChecked ? 'Checked' : 'notChecked';
};

checkBox.addEventListener('input', onChecked);

//focus and blur event listeners for inputs 

const onFocus = (e) => {
    console.log('input is focused');
    input.style.outlineStyle = 'solid';
    input.style.outlineWidth = '4px';
    input.style.outlineColor = 'green';
};

input.addEventListener('focus', onFocus)

const onBlur = (e) => {
    console.log('its out of focus');
    input.style.outlineStyle = 'none';
} 

input.addEventListener('blur', onBlur);

//submit event listener 

function onSubmit (e) {
    e.preventDefault()
    console.log('submit')

   const itemsInput = document.getElementById('item-input').value;
   const prior = document.getElementById('priority-input').value;

   if(itemsInput === '' || prior === '0') {
    alert("please fill all fields");
    return;
   }

   console.log(itemsInput, prior);
}


const form = document.getElementById('myForm')
form.addEventListener('submit' , onSubmit);

//form data - creates a new instance of an empty formdata object that can be used to store key/values pairs
// the form passed in the brackets is the const form - a global variable
const onSubmit2 = (e) => {
    e.preventDefault();
    
//this creates a Formdata from the html form.FormData is an object {key:value} pay attention to the uppercase 
  const formData = new FormData (form);
  console.log(formData);

    //an alternative to using .value to get the user input 
    // cont variable = form.get('name string')
    const lulu = formData.get('itemz');
    const selection = formData.get('priority');
    console.log(lulu, selection);

    //you can also use the .entries method which returns an iterator. loop the iterator to get the user input
    const entries = formData.entries()
    console.log(entries);

    for (let entry of entries) {
        console.log(entry)
    }

    
};

form.addEventListener('submit' ,onSubmit2);


//event bubbling - happens when a targeted element receives an event, and that event bubbles up/transimmitted/ propagated 
//to its parent and ancestor elements in the DOM tree until it gets to the root element.
//picture an arrow moving from the targeted element upwards to the parent
const inputB = document.getElementById('item-input');
inputB.addEventListener('click', () => {
    alert("parent div was clicked")
})


const pay = document.getElementById('payments');
pay.addEventListener('click', () => {
    alert('you are proceeding to payments')
});

//the event is fired on the checkout button, then propageted to upwards to the parent. 
//in the process of propagation any other parent that has the same event type is also fired/activated
//in this case the checkout button is event is activated and then its propagated upwards, 
//where it also activates the 'go to cart' which also has the same event type of click 

//better demonstration of event bubbling 

const parentBub = document.getElementById('parent');
parentBub.addEventListener('click', function() {
    alert(`this is a parent`);
})

//you can stop this event transmission/propagation to other elements using e.stopPropagation
const childEvn = document.getElementById('child');

childEvn.addEventListener('click', (e) => {
    alert (`this is a child`);
    e.stopPropagation()
})


//event delegation 
//-  attaching one listener to multiple children at once instead of attaching them individually
//1- the basic way - attaching to each child individually 

const markt = document.querySelectorAll('.goods');

//markt.addEventListener('click', (e) => console.log(e.target))
/*markt.forEach((item) => {
    item.addEventListener('click', (e)=> e.target.remove());
})*/

//2 delegation - attaching a single event listener to a parent element and then target which child gets affected by the event 

 const carier = document.querySelector('.groceries');
 carier.addEventListener('click', (e) => { 
    if(e.target.className === "goods") {
        e.target.remove()
    }
    
 });

//window object events 

/*window.addEventListener('resize', () => {
    document.getElementById('screen').textContent = `Windows Resized ${window.innerWidth} X ${window.innerHeight}`
});

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollY} X ${window.scrollX}`)

    if(window.scrollY > 100) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } 
    else{
        document.body.style.backgroundColor = 'White'
        document.body.style.color = 'black'
    }
})*/

