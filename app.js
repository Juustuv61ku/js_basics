// deklareerimine

function greeting(firstname, lastname) {
    if(typeof firtname === 'undefined'){
        firstname = 'Carolin'
        lastname = 'Raudam'
    }
    return'Tere,'+ ' ' + firstname + ' ' + lastname;
}

//kasutamine

greet = greeting()
console.log(greet)

//f-on def nagu const

const square = function (number = 3) {
    return Math.pow(number, 2)
};
console.log(sqaure())



(function(){
    console.log('function is ran')
})();


(function(name){
    console.log('Tere,' + name)
}('Carolin')



//f- atribudina
const todoList ={
    add: function(task){
        console.log('Task is added')
    }
    edit: function(oldtask, newtask){
        console.log(`${oldtask} is changed to ${newtask}`)
    }
    delete: function(task){
        console.log(task + 'is deleted')
    }
} 

todoList.add('Study Js')
todoList.edit('Study JS', 'Study typeScript')
todoList.delete('Study Js')

























































































































