 // tüübiteisendus

  let val;

//number -> string

  val = String(555);
  val = String(4+4);
  val = String(5.6);

// Boolean
  val = String(true);
  val = String(false);

// Object -> String
  val = String(new Date ());

//Array -> String
  val = String([1, 2, 3, 4, 5])

// toString
  val = (5).toString()

//String -> Number
  val = Number('5');
  val = Number('6.7'); 
  val = Number(true);
  val = Number(false); //--> annab 0
  val = Number(null);
  val = Number('tere'); //--> ei saa
  val = [1, 2, 3]       //--> ei saa





 console.log(typeof val);
 console.log(val);