/* esercizio1 */

/* creare 3 variabili ‘nome’, ‘cognome’, ‘eta’ e stampa a console la stringa : Ciao mi chaimo Marco Rossi ed ho 30 anni’ */

// var nome = "Marco";
// var cognome = "Rossi";
// var eta = 30;

// console.log(
//   "Ciao mi chiamo " + nome + " " + cognome + " ed ho " + eta + " anni"
// );

// /* esercizio2 */

// var number1 = 1;
// var number2 = 10;
// var number3 = 5;

// var sum = number1 + number2 + number3;
// console.log(sum);

// /* esercizio3 */
// // crea una stringa lunga 20 caratteri e stampa a console il numero totale

// var string = "Ciao sono Angelo !!!";

// console.log(string.length);

/* esercizio4 */

// var arr = [
//   "Angelo",
//   "Federico",
//   "Gianni",
//   "Nicola",
//   "Raffaele",
//   "Pasquale",
//   "Simone",
//   "Gianfranco",
// ];
// arr[2] = "Nonna";
// console.log(arr);

/* esercizio5 */

// var arr = [[["Angelo", 25], ["Roberto", 26], "first", "second", "third"]];
// console.log(arr[0][1]);

// /**
//  * Stringhe n3
//  */
// var value = "Jiao Mamma";
// value = "Ciao Mamma";

// value[0] = "C";
// console.log(value);

/* esercizio11 
Se la popolazione del tuo paese è maggiore di 33 milioni, 
stampa a console: "La popolazione dell’Italia è al di sopra della media". 
Altrimenti, stampa “ La popolazione dell’italia è di {numero-differenza}milioni sotto la media '' 
(numero-differenza è la differenza tra 33 e la popolazione italiana) 
*/

// function subtraction(num1, num2) {
//   return num1 - num2;
// }

// var myCountry = 64360000;
// var average = 33000000;

// //average = 13
// if (myCountry > average) {
//   console.log("La popolazione dell’Italia è al di sopra della media");
// } else {
//   console.log(
//     "La popolazione dell’Italia è di " +
//       subtraction(average, myCountry) +
//       " milioni sotto la media "
//   );
// }
// function checkAverage(myCountry, average) {
//   if (myCountry > average) {
//     console.log("La popolazione dell’Italia è al di sopra della media");
//     return;
//   }
//   console.log(
//     "La popolazione dell’Italia è di " +
//       subtraction(average, myCountry) +
//       " milioni sotto la media "
//   );
// }

// checkAverage(myCountry, average);

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); // '617'
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143




var size = 8; //this is the variable setting
var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);