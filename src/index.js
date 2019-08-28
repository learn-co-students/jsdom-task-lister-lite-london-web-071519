document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addDivsToList()

});

const ul = document.querySelector('ul')

const form = document.querySelector('#create-task-form')

let liDivNumber = 0

form.addEventListener('submit', function(e) {
  e.preventDefault();
  createItem(form[0].value);
  //clear form
  e.target.reset();
});

// add 3 divs to list
function addDivsToList() {
  let divLow = document.createElement('div')
  divLow.setAttribute("id", "divLow")

  let divMed = document.createElement('div')
  divMed.setAttribute("id", "divMed")

  let divHigh = document.createElement('div')
  divHigh.setAttribute("id", "divHigh")
  
  ul.append(divHigh, divMed, divLow)
}

//function that appends list items
function createItem(text) {
  let div = document.createElement('div')
  let li = document.createElement('li');
  let initialDiv = document.querySelector('div#divLow')
  div.setAttribute('id', `div-${liDivNumber}`)
  li.innerText = text;
  li.style.color = 'green'

  div.append(li, createPrioritySelector(), createDeleteButton())
  liDivNumber++;
  initialDiv.append(div)
  ul.append(initialDiv);
}

//function that creates a button
function createDeleteButton() {
  let button = document.createElement('button')
  button.innerText = 'Done'
    button.addEventListener('click', function(e) {
      (e.target.parentNode).remove()
    });
  return button;
}

//create a dropdown
function createPrioritySelector() {
  let selector = document.createElement('select')
  let optionLow = document.createElement('option')
  optionLow.innerText = "Low"; 
  let optionMed = document.createElement('option')
  optionMed.innerText = "Medium"; 
  let optionHigh = document.createElement('option')
  optionHigh.innerText = "High"; 
  selector.append(optionLow, optionMed, optionHigh)

  let listItems = document.querySelectorAll('ul > div')
  
  selector.addEventListener('change', function(e) {
    if (e.currentTarget.value === "Low") {
      e.target.parentNode.firstChild.style.color = 'green'
      let divLow = document.querySelector("div#divLow")
      divLow.append(e.target.parentNode)
      // ul.insertBefore(e.target.parentNode, e.target.parentNode)
    } else if (e.currentTarget.value === "Medium") {
      e.target.parentNode.firstChild.style.color = 'orange'
      let divMed = document.querySelector("div#divMed")
      divMed.append(e.target.parentNode)
    } else if (e.currentTarget.value === "High") {
      e.target.parentNode.firstChild.style.color = 'red'
      let divHigh = document.querySelector("div#divHigh")
      divHigh.append(e.target.parentNode)
    }
  });

  return selector;
}
///////////

// function sortSelection() {
//   let listItems = document.querySelectorAll('ul > div')
//     for (let i = 0; i < listItems.length; i++) {
//       if (listItems[i].firstChild.style.color === 'green') {
//         ul.insertBefore(listItems[i], ul.firstchild)
//       } else if (listItems[i].firstChild.style.color === 'red') {
//         ul.append(listItems[i])
//       }
//   }
// }