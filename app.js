const list = document.querySelector('ul');
const taskInput = document.querySelector('#task');


list.addEventListener('click', runEvent )




 function runEvent(e) {
       console.log(`Event is ${e.type}`)
       //something to do
      console.log(e.target.value)
 }

