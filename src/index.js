document.addEventListener("DOMContentLoaded", () => {
 // your code here
 function addBullet(myText, priority, id) {
   // let todoList = document.querySelector('#list')
   let todoList = document.querySelector('#tasks')
   let newBullet = document.createElement("LI")
   newBullet.innerText = myText
   let deleteButton = document.createElement("BUTTON")
   deleteButton.innerText = 'x'
   deleteButton.id = id
   deleteButton.addEventListener('click', () => {
   newBullet.remove()
   })
   newBullet.append(deleteButton)
   
   todoList.append(newBullet)
   if (priority == 'High') {
     newBullet.style.color = "red"}
   else if ( priority == "Medium") {
     newBullet.style.color = "orange"}
   else { newBullet.style.color = "green"}
  
   let items = [...tasks.children]
   items.sort((a, b) =>  a.style.color - b.style.color);
   for (i=0; i<tasks.children.length; i++) {

   }
   
 }
 let submissionClick = document.querySelector('#create-task-form')
 submissionClick.addEventListener("submit", function(e) {
   e.preventDefault();
   // debugger;
   let tasks = document.querySelector('#tasks')
   let totalLICount = tasks.children.length
   let inputText = e.target[0].value
   let priority = e.target[1].value
   addBullet(inputText, priority, totalLICount++);
 })
 //get value
  document.getElementById("High").style.color = "white"
 //get text
});

// htmlcollection --> array 

