const firstname= "Kadi";
const surname= "Tamm";
const age="20";
const text= "Tere, olen Kadi Tamm!";
const tags= "arendus, veeb"; 
 

 let val


//Text + Text -- concatenation

 val = firstname + ' ' + surname

//append

 val = firstname;
 val += surname;
 val = text + 'Minu töövaldkond on' + tags

//Escaping

 val = 'See on "jutumärkides"';
 val = 'See on \"jutumärkides\"';


// Case

 val = surname.toLowerCase();
 val = surname.toUpperCase();
 val = surname[0];
 val = surname.charAt(2);
 val = surname.charAt(surname.lenght - 1);

//Index of-

 val = surname.indexOf('a');
 val = surname.lastIndexOf('m') //-- viimane sellest tähest

 val = surname.substring(0, 2);
 val = surname.slice(0, 2);

//Split

val = tags.split(',');



 console.log(val);