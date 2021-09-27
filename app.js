const  numbers = [43,56,33, 23, 44, 36, 5];
const  numbers2 = new Array(22, 45, 33, 76, 54);

const fruits = ['apple', 'banana', 'orange'];

const mixed = [22, 'tere', true, null, {a:1, b:2}, new Date()];



let val;

//val = numbers.length;                        //massiivi pikkus
//val = Array.isArray(numbers);               //massiivi kontroll
//val = numbers[3];                          //kindel väärtus
//numbers[3] = 100;                         //asendamine
//numbers.unshift(350);                    //lisamine algusesse
//numbers.pop();                          //kustutatakse lõpust
//numbers.shift();                       //kustutatakse algusest
//val = numbers.indexOf(100);           //mitmes on?
//numbers.splice(1, 2);                //lõikamine (mitmes arv, kui palju)
//val = numbers.concat(numbers2);     //ühendamine
//val = numbers.sort(function(x, y){ //sorteerimine
//    return x - y;
//});  
val = numbers.splice(3, false, 100)         
console.log(val);