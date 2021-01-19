// console.log("Ciao Mondo");
/*
var eta;
console.log(eta);
var c = "I am a";
c = c + " String!";
console.log(c);

var myStr = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);
*/

// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
// console.log(myStr);

// var ris = 1 + "";
// console.log(ris);

// Setup
// var lastNameLength = 0;
// var lastName = "Lovelace";

// // Only change code below this line

// lastNameLength = lastName.length;
// console.log(
//   "Il numero totale di caratteri della parola " +
//     lastName +
//     " è: " +
//     lastNameLength
// );

// var c = 3
// var b = 2
// c = b

// c**3 // = c*c*c

/**
 * ESERCIZIO BMI
 */
/*
BMI
bmi = mass/altezza ** 2 
bmi = mass/ altezza * altezza

Marco peso 78, altezza kg 1.69 m
Giovanni peso 92 kg, altezza 1.95 m

1. salvare i valori di marco e giovanni in variabili ( nome in camelCase )
2. calcolare il loro BMI con la formula e salvarlo in variabili
3. stampare a console i risultati per Marco e Giovanni con un solo console.log👇🏼
BMI di Marco è: 78
BMI di Giovanni è: 60

*/

// definisco le variabili massa ed altezza
// var massMarco = 78;
// var altezzaMarco = 1.69;

// var massGiovanni = 92;
// var altezzaGiovanni = 1.95;

// var massMarco = 60;
// var altezzaMarco = 1.69;

// var massGiovanni = 40;
// var altezzaGiovanni = 1.95;

// // definisco i BMI

// var BMIMarco = massMarco / altezzaMarco ** 2;
// var BMIGiovanni = massGiovanni / (altezzaGiovanni * altezzaGiovanni);

// // Stampo a console i BMI
// var mess =
//   "BMI di Marco è: " + BMIMarco + "\n\nBMI di Giovanni è: " + BMIGiovanni;

// console.log(mess, mess.length);
// console.log(mess, "La prima lettera è :" + 2 + mess[0]);

// // Setup
// var myStr = "Jello World";

// // Only change code below this line
// myStr[0] = "Hello World"; // non funziona perche è immutabile
// // Only change code above this line
// console.log(myStr);

/**
 * ARRAY
 */
// var myArray = [18, 64, 99];
// console.log("Array Prima della modifica della prima cella :", myArray);

// // Only change code below this line
// myArray[0] = 45;
// console.log("Array Dopo la modifica della prima cella :", myArray); // console per debugger e vedere il valore delle variabili

// var arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];
// arr[3]; // equals [[10,11,12], 13, 14]
// arr[3][0]; // equals [10,11,12]
// arr[3][0][1]; // equals 11

// var arrFiglio = arr[3];
// console.log("figlio :", arrFiglio);
// var arrFiglioDiFiglio = arrFiglio[0];
// console.log("figlio di figlio:", arrFiglioDiFiglio);

// var myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// Only change code below this line
// var removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray);
// console.log(myArray);

// Setup
// var myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// console.log(myArray);

// // Only change code below this line
// var removedFromMyArray = myArray.shift();
// console.log(removedFromMyArray);
// console.log(myArray);

// var myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// console.log(myArray); //[["John", 23],["dog", 3],]
// myArray.shift();
// console.log(myArray); //[["dog", 3]]
// myArray.unshift(["Paul", 35]);
// console.log(myArray); //[["Paul", 35],["dog", 3]]

// reusableFunction();

// function reusableFunction() {
//   console.log("Hi World");
//   console.log("Hi Nicola");
// }

// function functionWithArgs(num1, num2) {
//   console.log(num1 + num2);
// }

// functionWithArgs(2, 2);
// functionWithArgs(2, 2);
// functionWithArgs(2, 4);
// functionWithArgs(7, 2);
// functionWithArgs(2, 3);
// functionWithArgs(5, 5);
// functionWithArgs(2, 6);
// functionWithArgs(2, 7);

/**
 * ESERCIZIO BMI
 */
/*
BMI
bmi = mass/altezza ** 2 
bmi = mass/ altezza * altezza

Marco peso 78, altezza kg 1.69 m
Giovanni peso 92 kg, altezza 1.95 m

1. salvare i valori di marco e giovanni in variabili ( nome in camelCase )
2. calcolare il loro BMI con la formula e salvarlo in variabili
3. stampare a console i risultati per Marco e Giovanni con un solo console.log👇🏼
BMI di Marco è: 78
BMI di Giovanni è: 60

*/

// // definisco le variabili massa ed altezza
// var massMarco = 78;
// var altezzaMarco = 1.69;

// var massGiovanni = 92;
// var altezzaGiovanni = 1.95;

// // var massMarco = 60;
// // var altezzaMarco = 1.69;

// // var massGiovanni = 40;
// // var altezzaGiovanni = 1.95;

// // definisco i BMI

// var BMIMarco = massMarco / altezzaMarco ** 2;
// var BMIGiovanni = massGiovanni / (altezzaGiovanni * altezzaGiovanni);

// // Stampo a console i BMI
// var mess =
//   "BMI di Marco è: " + BMIMarco + "\n\nBMI di Giovanni è: " + BMIGiovanni;

// var pesoMarco = 78;
// var pesoGiovanni = 92;

// var altezzaMarco = 1.69;
// var altezzaGiovanni = 1.95;

// var bmiM = massa(pesoMarco, altezzaMarco);
// var bmiG = massa(pesoGiovanni, altezzaGiovanni);

// var bmiMString = "questo è la massa di Marco" + bmiM;
// var bmiGString = "\nquesto è la massa di giovanni" + bmiG;

// var mess =
//   "La massa di Marco è:" +
//   bmiMString +
//   "\nLa massa di Giovanni è:" +
//   bmiGString;

// console.log(
//   mess,
//   "la prima lettera è:" + mess[0],
//   "\nl'ultima lettera è:" + mess.length[-1]
// );

// console.log(bmiM);
// console.log(bmiG);

// function massa(peso, altezza) {
//   var risultato = peso / altezza ** 2;
//   return risultato;
// }

/**
 * Scope
 */

// // Declare the myGlobal variable below this line
// var myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   oopsGlobal = 5;
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun2();

// Setup
// var outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line

//   var outerWear = "sweater";

//   // Only change code above this line
//   return outerWear;
// }

// var ris = myOutfit();
// console.log(ris);
// console.log(outerWear);

// Setup
// var sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line

// function addFive() {
//   sum = sum + 5;
// }
// // Only change code above this line

// addThree();
// console.log(addFive());

/**
 * nextInLine esercizio return
 */

/**
 * aggiungo l'item alla dine dell'array e rimuovo il primo elemento e lo ritorno
 * @param {*} arr  deve contenere un'array
 * @param {*} item deve essere un numero
 */
// function nextInLine(arr, item) {
//   item = 5;
//   arr.push(item);
//   return arr.shift();
// }

// // Setup
// var testArr = [1, 2, 3, 4, 5]; // var testArr = 00045 passo la reference dell'array
// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, num));
// console.log("After: " + JSON.stringify(testArr));

/**
 * sezione IF
 *
 */

// function trueOrFalse(wasThatTrue) {
//   // Only change code below this line
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }

//   return "No, that was false";
//   // Only change code above this line
// }

// console.log(trueOrFalse(-7));

// Setup
// function compareEquality(a, b) {
//   if (a === b) {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// // compareEquality(10, "10");
// var ris = typeof compareEquality(10, "10");
// console.log(typeof compareEquality(10, "10") === "string");

// GOLF esercizio

// function golfScore(par, stroke) {
//   var name = [
//     "Hole in one",
//     "Eagle",
//     "Birdie",
//     "Par",
//     "Bogey",
//     "Double Bogey",
//     "go Home",
//   ];
//   if (stroke == 1) return name[0];
//   //1
//   else if (stroke <= par - 2) return name[1];
//   //-2
//   else if (stroke == par - 1) return name[2];
//   //-1
//   else if (stroke == par) return name[3];
//   //0
//   else if (stroke == par + 1) return name[4];
//   //1
//   else if (stroke == par + 2) return name[5];
//   //2
//   else if (stroke >= par + 3) return name[6]; //3

//   return "Change Me";
// }

// console.log(golfScore(10, 5));
// console.log(golfScore(4, 1));
// console.log(golfScore(4, 10));

/**
 * partita di golf
 * stampare a video il vincitore tra Marco, Giovanni e Pippo, dopo aver fatto 10 buche
 * per ogni buca definire il par( che sara uguale per ogni buca) ed i tiri ( diversi per ogni sfidante) di ogni concorrente
 */

// var parBuca1 = 4;
// var parBuca2 = 6;
// var parBuca3 = 2;
// var parBuca4 = 3;
// var parBuca5 = 7;

// var punteggioMarco = 0;
// var punteggioGiovanni = 0;
// var punteggioPippo = 0;

// punteggioMarco += punteggioBuca(parBuca1, 5);
// punteggioGiovanni += punteggioBuca(parBuca1, 2);
// punteggioPippo += punteggioBuca(parBuca1, 1);

// punteggioMarco += punteggioBuca(parBuca2, 2);
// punteggioGiovanni += punteggioBuca(parBuca2, 4);
// punteggioPippo += punteggioBuca(parBuca2, 7);

// punteggioMarco += punteggioBuca(parBuca3, 3);
// punteggioGiovanni += punteggioBuca(parBuca3, 6);
// punteggioPippo += punteggioBuca(parBuca3, 2);

// punteggioMarco += punteggioBuca(parBuca4, 5);
// punteggioGiovanni += punteggioBuca(parBuca4, 8);
// punteggioPippo += punteggioBuca(parBuca4, 10);

// punteggioMarco += punteggioBuca(parBuca5, 2);
// punteggioGiovanni += punteggioBuca(parBuca5, 8);
// punteggioPippo += punteggioBuca(parBuca5, 4);

// if (punteggioMarco > punteggioGiovanni && punteggioMarco > punteggioPippo) {
//   console.log("Marco ha perso con il punteggio di: " + punteggioMarco);
// }

// function punteggioBuca(parBuca, colpi) {
//   var punteggioStrin = golfScore(parBuca, colpi);
//   var punteggioNumero;

//   switch (punteggioStrin) {
//     case "Hole in one":
//       punteggioNumero = -3;
//       break;
//     case "Eagle":
//       punteggioNumero = -2;
//       break;
//     case "Birdie":
//       punteggioNumero = -1;

//       break;
//     case "Par":
//       punteggioNumero = 0;

//       break;
//     case "Bogey":
//       punteggioNumero = 1;

//       break;
//     case "Double Bogey":
//       punteggioNumero = 2;

//       break;
//     case "go Home":
//       punteggioNumero = 3;
//       break;
//   }

//   return punteggioNumero;
// }

/**
 * switch con piu case senza break
 * @param {*} val
 */

// function sequentialSizes(val) {
//   var answer = "";
//   // Only change code below this line
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);
