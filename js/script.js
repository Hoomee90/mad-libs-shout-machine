// UI logic

function getAndSetMadLibValues() {
  const person1Input = document.getElementById("person1Input").value;
  const person2Input = document.getElementById("person2Input").value;
  const animalInput= document.getElementById("animalInput").value;
  const exclamationInput = document.getElementById("exclamationInput").value;
  const verbInput = document.getElementById("verbInput").value;
  const nounInput = document.getElementById("nounInput").value;

  document.querySelector("span#person1a").innerText = person1Input;
  document.querySelector("span#person1b").innerText = person1Input;
  document.querySelector("span#person1c").innerText = person1Input;
  document.querySelector("span#person2a").innerText = person2Input;
  document.querySelector("span#person2b").innerText = person2Input;
  document.querySelector("span#animal").innerText = animalInput;
  document.querySelector("span#verb").innerText = verbInput;
  document.querySelector("span#noun").innerText = nounInput;
  document.querySelector("span#exclamation").innerText = exclamationInput;
}

function getAndSetShoutMachineValues() {
  const shoutInput = document.getElementById("shoutInput").value;

  document.querySelector("span#shout").innerText = shoutInput;
}

// create onsubmit handler
function setFormSubmissionEventHandler() {
  let form1 = document.querySelector("#form1");
  let form2 = document.querySelector("#form2");
  form1.onsubmit = function(event) {
    event.preventDefault();
    getAndSetMadLibValues();
    document.querySelector("div#story").removeAttribute("class");
  }
  form2.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShoutMachineValues();
    document.querySelector("div#shouter").removeAttribute("class");
  }
}

window.onload = function() {
  setFormSubmissionEventHandler();
}