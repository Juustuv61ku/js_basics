let date = new Date();

let daynr = date.getDay();


switch (daynr){
    case 1:
    console.log('Täna on esmaspäev.')
    break;

    case 2:
    console.log('Täna on teisipäev.')
    break;
 
    case 3:
    console.log('Täna on kolmapäev.')
    break;

    case 4:
    console.log('Täna on neljapäev.')
    break;

    case 5:
     console.log('Täna on reede.') 
      break;

    case 6:
    console.log('Täna on laupäev.')
    break;

    case 7:
    console.log('Täna on pühapäev.')
    break;
}