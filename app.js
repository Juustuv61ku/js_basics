const form = document.querySelector('form');
const taskInput = document.querySelector('#task');



//taskInput.addEventListener('keydown', runEvent )
//taskInput.addEventListener('keyup', runEvent )
//taskInput.addEventListener('keypress', runEvent )


//taskInput.addEventListener('focus', runEvent )
//taskInput.addEventListener('blur', runEvent )

//taskInput.addEventListener('cut', runEvent )
//taskInput.addEventListener('paste', runEvent )

taskInput.addEventListener('input', runEvent )



 function runEvent(e) {
       console.log(`Event is ${e.type}`)
       //something to do
      console.log(e.target.value)
 }

