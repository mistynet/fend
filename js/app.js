/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let nav = document.querySelector(".navbar");

//Get the button
const mybutton = document.querySelector("#myButton");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = () => scrollFunction();

scrollFunction = () => {
  const selectedLink = document.querySelector('data-id');
  buildDisplay(selectedLink);
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topFn = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  //Set up a method to build our display.
  const buildDisplay = (link) => {
    console.log(`buildDispaly: ${link}`);
  };
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
console.log(nav)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
