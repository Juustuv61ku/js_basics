let val;


const li = document.createElement('li');


li.className = 'collection-item';

li.appendChild(document.createTextNode('Study JS element creation'));

const ul = document.querySelector('ul');

ul.appendChild(li);

console.log(li)

//kodune töö Loo link X näitamiseks
const a= document.createElement('a');
a.className='secondary-content';
a.appendChild(document.createTextNode('X'))
li.appendChild(a)