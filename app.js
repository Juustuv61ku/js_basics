const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const list = document.querySelector('ul')
const clearbtn = document.querySelector('#clear');


form.addEventListener('submit', addTask );
list.addEventListener('click', delTask );
clearbtn.addEventListener('click', delAll );



 function addTask(e){
      console.log(taskInput.value);
      const li = document.createElement('li');
      const list = document.querySelector('ul');
      const link = document.createElement('a');

      li.className = 'collection-item';
      li.appendChild(document.createTextNode(taskInput.value)); 

      link.className = 'secondary-content';
      link.appendChild(document.createTextNode('X'));
      link.setAttribute('href', '#');

      li.appendChild(link);
      list.appendChild(li);

      taskInput.value = '';
      e.preventDefault();
 
 }

function delTask(e) {
     console.log(e.target)     
     if(e.target.textContent.toLowerCase() == 'x'){
          if(confirm('Do you want to remove this task?')){
               e.target.parentElement.remove()
          }
          
     }
}

function delAll() {
     if(confirm('Do you want to remove all tasks?')){
               while(list.firstChild){
          list.removeChild(list.firstChild)
          }
     
     }
}