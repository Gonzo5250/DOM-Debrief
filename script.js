/* Goal: To input a first and last name, store the values and greet the user with the inputted name, replacing the inner HTML of the paragraph with an id of #resultName in our index.html file. */

// Use querySelector to return the first element that matches #firstName to a variable.
let firstName = document.querySelector('#firstName');
// Use querySelector to return the first element that matches #lastName to a variable.
let lastName = document.querySelector('#lastName');
// Use querySelector to return the first element that matches #formName to a variable.
let formName = document.querySelector('#formName');
// Use querySelector to return the first element that matches #resultName to a variable.
let resultName = document.querySelector('#resultName');
// Resource:
// https://www.w3schools.com/jsref/met_document_queryselector.asp



// This function will run when you press the submit button, you will need to fix the function and add an event handler to the submit button.
function functionName(event) {
  // The preventDefault() method prevents the submit button from submitting the form allowing us to remain on page, you can learn more at the URL below.
  // https://www.w3schools.com/jsref/event_preventdefault.asp
  event.preventDefault();
  // Create a variable that stores the values of #firstName.
  let firstNameValue = firstName.value;
  // Create a variable that stores the values of #lastName.
  let lastNameValue = lastName.value;
  // Resource:
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value

  // Replace the inner text of the paragraph with an id of #resultName with a greeting for the user showing both the first and last name. 
  // Example: Hello there David Jeansonne!
  // let paragraph = document.getElementById("resultName").innerText;
  // paragraph.innerText = 'Hello there David Jeansonne!';
  resultName.innerText = "Hello there " + firstNameValue + " " + lastNameValue + "!";
}

// Run 'functionName' when you press the submit button, you will need to add an event handler to the form with an id of #formName.
// document.querySelector('button').addEventListener("click", functionName);
formName.onsubmit = functionName;
