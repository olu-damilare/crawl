import { createConnection } from 'mysql';

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) {
   
      throw err;
     
    }
  document.writ("Connected!");
});


// var num = 1

// do{
//     var isPrimeCounter = 0;
//     for (let index = 1; index <= Math.sqrt(num); index++) {
//             if(num % index == 0)
//                  isPrimeCounter++;  
//     }
//     if(isPrimeCounter == 1){
//         document.write(num);
//     }
//         num++;
// }while(num <= 10)
