/*  Variabili
creare 3 variabili ‘nome’, ‘cognome’, ‘eta’ e stampa a console la stringa : Ciao mi chaimo Marco Rossi ed ho 30 anni’
operazioni
   
var name = "Angelo";
var surname = "Monteleone";
var age = 26;
console.log("Ciao mi chiamo " + name + " " + surname + " ed ho " + age + " anni");


 stampa a video il risultato
la somma di 3 numeri

function sum(num1,num2,num3) {
    return num1 + num2 + num3;
}
console.log(sum(1,3,5));
 
la divisione di 3 numeri
 

function div(num1,num2,num3) {
    return num1 / num2 / num3;
}
console.log(div(10,5,2));

 
il resto della divisione tra 10 e 2
 
var mod = 10 % 2;
console.log(mod);


Stringhe
crea una stringa lunga 20 caratteri e stampa a console 
il numero totale
della stringa creata prima,
stampa a video la quinta lettera
crea una stringa “Jiao Mamma” e sostituisci la prima 
lettera con “C”

var string = "Ciao sono Angelo Alb";
console.log(string.length);
var fifthLetter = string[4];
console.log(fifthLetter);
var newString = "Jiao Mamma";
newString = "Ciao Mamma";
console.log(newString);


Array
stampa a video il risultato
crea un array con 8 stringhe
sostituisci il terzo elemento dell’array
 creato prima con “Nonna”
crea un array con array con 2 array annidati 
e tre stringhe, stampa a video solo il secondo
 array annidato stampa a video solo il secondo 
 array annidato


var array = ["Angelo", "Francesco", "Roberto", "Domenico", "Gianni", "Pasquale", "Federico","Peppe"];
array[2] = "Nonna";
console.log(array);

var array2 = [[1],[2],"Ciao","Alberto",25];
console.log(array2[1]);
 
Operazioni & controllo

Aumentare la popolazione Italiana di 1 e stampare il 
risultato a console
La Finlandia ha una popolazione di 6 milioni di abitanti.
 l’italia ha piu abitanti della Finlandia?
  (stampare a video il risultato)
La popolazione media dei paesi è 33 milioni di persone. 
la media italiana è minore rispetto la media generale?
Scrivi su un foglio i risultati delle seguenti operazioni 
e poi eseguile per controllare se il risultato è corretto
'9' - '5';
'19' - '13' + '17'; '19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2; 


var ItalianPop = 60;
ItalianPop++;
console.log(ItalianPop);
var finishPop = 6;
if(ItalianPop > finishPop) {
    console.log("L` italia ha piu` abitanti della finlandia");
} else {
    console.log("L` italia non ha piu` abitanti della finlandia");
}

var averagePop = 33;
if(ItalianPop>finishPop) {
    console.log("la media italiana non e` inferiore alla media dei paesi");
} else {
    console.log("la media italiana non e` inferiore alla media dei paesi");
}
 */

/*  
Prendere decisioni con if
Se la popolazione Italiana è maggiore di 33 milioni, stampa
 a console: "La popolazione dell’ Italia è al di sopra
  della media". Altrimenti, stampa “ La popolazione 
  dell’italia è di {numero-differenza} milioni sotto
   la media '' (numero-differenza è la differenza tra
     33 e la popolazione italiana)
Dopo aver verificato il risultato, modificare la
 popolazione temporaneamente in 13 e poi 130. vedi come
  cambia il risultato e poi rimetti la popolazione
   originale
 */

/*  Esercizio Golf, il Torneo
partita di golf
 stampare a video il vincitore tra Marco, Giovanni e Pippo, dopo aver fatto 5 buche
 per ogni buca definire il par (che sara uguale per ogni
     giocatore) ed i tiri (diversi per ogni sfidante) di
      ogni concorrente
creare una funzione per convertire la stringa in punteggio

es Il vincitore è Pippo con - 6


function golfScore(par, strokes) {
    if(strokes == 1){
      return "Hole-in-one!";
      } 
      else if(strokes <= par - 2) {
      return "Eagle";  
      }
      else if(strokes == par - 1) {
      return "Birdie";  
      }
      else if(strokes == par) {
      return "Par";  
      }
      else if(strokes == par + 1) {
      return "Bogey";  
      }
      else if(strokes == par + 2) {
      return "Double Bogey";  
      }
      else if(strokes >= par + 3) {
      return "Go Home";  
      }
}

var par1 =  3;
var par2 =  5;
var par3 =  5;
var par4 =  6;
var par5 =  7;


var marcoResult = 0;
marcoResult += conversion(par1, 4);

marcoResult += conversion(par2, 2);

marcoResult += conversion(par3, 1);

marcoResult += conversion(par4, 5);

marcoResult += conversion(par5, 7);

var giovanniResult = 0;
giovanniResult += conversion(par1, 3);

giovanniResult += conversion(par2, 3);

giovanniResult += conversion(par3, 3);

giovanniResult += conversion(par4, 2);

giovanniResult += conversion(par5, 1);

var pippoResult = 0;
pippoResult += conversion(par1, 4);

pippoResult += conversion(par2, 4);

pippoResult += conversion(par3, 4);

pippoResult += conversion(par4, 3);

pippoResult += conversion(par5, 4);


function conversion(par, strokes){
    var finalResult = golfScore(par, strokes);
    var newResult = "";
    switch(finalResult){
        case "Hole-in-one!":
            newResult = 3;
            break;
            case "Eagle":
            newResult = 2;
            break;
            case "Birdie":
            newResult = 1;
            break;
            case "Par":
            newResult = 0;
            break;
            case "Bogey":
            newResult = -1;
            break;
            case "Double Bogey":
            newResult = -2;
            break;
            case "Go Home":
            newResult = -3;
            break;
    }
    return newResult;
}

if(marcoResult < giovanniResult && marcoResult < pippoResult) {
    console.log( "Marco e` il vincitore della gara con "+ marcoResult + " punti");
} else if (giovanniResult < marcoResult && giovanniResult < pippoResult) {
    console.log( "Giovanni e` il vincitore della gara con "+ giovanniResult + " punti");
} else {
    console.log( "Pippo e` il vincitore della gara con "+ pippoResult + " punti");
}



/* 
Conteggio delle carte
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

Ad ogni carta viene assegnato un valore secondo la
tabella sottostante. Quando il conteggio è positivo,
 il giocatore dovrebbe puntare alto. Quando il conteggio 
 è zero o negativo, il giocatore dovrebbe puntare basso.

Count   ChangeCards

+1         2, 3, 4, 5, 6
 0          7, 8, 9
-1         10, 'J', 'Q', 'K', 'A'

Scrivi una funzione di conteggio delle carte. la funzione ricevera un parametro, 
che può essere un numero o una stringa, e incrementerà o decrementerà la variabile count globale
in base al valore della carta (vedi tabella). La funzione restituirà quindi una stringa con il
conteggio corrente e la stringa ‘Bet’ se il conteggio è positivo oppure ‘Hold’ se il conteggio è zero o negativo.
Il conteggio corrente e la decisione del giocatore ( Bet o Hold) devono essere separati da un unico spazio.

Output di esempio
-3 Hold
5 Bet

var count = 0;

function cardCounting(par) {
    switch(par) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count ++;
        break; 
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
}
    var string = " Hold";
    if(count > 0) {
        string = " Bet";
        return count + string;
    } else {
        return count + string;
    }
}

console.log(cardCounting(2));
console.log(cardCounting(3));
console.log(cardCounting("J"));
console.log(cardCounting("Q"));
console.log(cardCounting("A"));

/*  
Switch
crea una funzione che riceve in ingresso un parametro e restituisca: rosso se 1, nero se 3,
 blu se 4, verde se 8,9,10 oppure restituisce rosa nel caso non è nessuno dei casi precedenti

function giveElement(par) {
    var result;
    switch(par){
        case 1 :
            result = "rosso";
            break;
            case 3:
            result = "nero";
            break;
            case 4:
            result = "blu";
            break;
            case 8:
            case 9:
            case 10:
            result = "verde";
            break;
            default:
                result = "rosa";
                break;
    }
    return result;
}

console.log(giveElement(11));


calcolatrice, una funzione che vuole come parametri un campo stringa dell’operazione 
(somma, sottrazione, divisione e moltiplicazione) poi due parametri con i numeri su cui operare, 

function calcolating(string, num1, num2) {
    if(string == "somma"){
        return num1 + num2;
    }
    else if(string == "divisione"){
        return num1 / num2;
    }
    else if(string == "moltiplicazione"){
        return num1 * num2;
    }
    else if(string == "sottrazione"){
        return num1 - num2;
    }
}
console.log(calcolating("sottrazione",5,3));
 */

/* Oggetti
creare un oggetto con delle proprieta (inventate da te) e passarlo ad una funzione (inventata da te),
 poi dentro la funzione cambia il valore di una proprieta dell’oggetto ed stampa in console il valore 
 dopo l’esecuzione della funzione ma fuori dalla funzione e vedi se il risultato è quello che pensavi

var person = {
    legs: 2,
    head: 1,
    arms: 2,
    chest:1,
    foot: 2,
    fingers: 5
};

function changeValue(person) {
    person.legs = 3;
    return person;
}
console.log(changeValue(person));
 */

/* 
Crea un oggetto chiamato "myCountry" per un paese di tua scelta, contenente le proprietà 'country', 'capital', 'language', 'population' e 'neighbours'
con l’oggetto creato prima creare una stringa tipo ‘Italia ha 6 milioni di abitanti che parlano italiano, confina con 4 nazioni e la sua capitale è Roma’, e stampa nella console
crea un metodo ‘describe’ che creerà la stessa stringa di prima ma con la keyword this
crea un nuovo metodo ‘checkIsland’ nell’oggetto di prima che creera una nuova proprieta nell’oggetto, se non ha nazioni 'neighbours' sara FALSE altrimenti TRUE


var myCountry = {
    'country': "uk",
    'capital': "London",
    'language': "english",
    'population': 70,
    'neighbours': ["france","scotland"],
    describe:function(){
        return `${this.country} ha ${this.population} milioni di abitanti che parlano ${this.language}, confina con ${this.neighbours} nazioni e la sua capitale è ${this.capital}`
    },
    checkIsland:function(){
        this.island = false;
        if (!this.neighbours.length > 0) {
            this.island = true;
        }
    }
};

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.island);
console.log(myCountry);
 */

/* ESEMPIO DI FOR IN, FOR OF 

var obj = {
    nome: "Luca",
    indirizzo: "via Roma",
    cap: "12345",
}

obj.hasOwnProperty("cap");
console.log(obj.hasOwnProperty("cognome"));

for (var chiave in obj) {
    console.log(chiave);
    if(obj.hasOwnProperty(chiave)){
        console.log(obj[chiave]);
    }
}

for (var valore of obj) {
    console.log(valore);
    }

 */

/* ESERCIZIO FOREACH

var pippo = ['😊','👏','😜'];
stesso procedimento con ES5 
pippo.forEach(function (emoji){
   console.log(emoji);
}) 
pippo.forEach(())
*/

/* ESERCIZIO FREECODECAMP -  SWITCH CON PIU CASES 
 function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;
  }
  // Only change code above this line
  return answer;
}
sequentialSizes(1);
 */

/* ESERCIZIO FREECODECAMP -SWITCH PER SOSTITUIRE 
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }
  
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
*/
//     var name = ["ciao"];
//     function golfScore(par, strokes){
//     name = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "go-Home"];
//     if (par == 1){
//         return name[0];
//     } 
//     else if(strokes <= par-2) {
//         return name[1];
//     } 
//     else if(strokes == par-1){
//         return name[2];
//     } 
//     else if(strokes == par) {
//         return name[3];
//     }
//     else if(strokes == par+1){
//         return name[4];
//     } 
//     else if(strokes == par+2){
//         return name[5];
//     } 
//     else if (strokes >= par+3) {
//         return name[6];
//     } 
// }

/* function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
  case 1:
    answer = "alpha"; 
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1); */
// console.log(golfScore(1,5));
// console.log("ciao");
// console.log(typeof name);

/* ESERCIZIO FREECODECAMP, COME SOSTITUIRE LO SWITCH, CON PROGRAMMAZIONE OGGETTI
function phoneticLookup(val) {

  // Only change code below this line

  //  switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }
  lookup= {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }

  if (lookup[val]) {
    return lookup[val];
    
  }
  else{
return 'pippo'
  }
 

  // Only change code above this line
}

phoneticLookup("charlie");
phoneticLookup("echo");
phoneticLookup("nicola");
 */

/* 
ESERCIZIO FUNZIONE SOMMA TRA NUMERI DENTRO UN ARRAY
function sum(arr){
    var s = 0;
    for(var i=0; i<arr.length; i++) {
        s+= arr[i];
    }
    return s;
}
    var array = [1,2,3,4,5];
    console.log(sum(array));
 */

/* ESERCIZIO FREECODECAMP BLACKJACK 
Ad ogni carta viene assegnato un valore secondo la tabella sottostante. Quando il conteggio è positivo, 
il giocatore dovrebbe puntare alto. 
Quando il conteggio è zero o negativo, il giocatore dovrebbe puntare basso.
Count   ChangeCards

+1         2, 3, 4, 5, 6
 0          7, 8, 9
-1         10, 'J', 'Q', 'K', 'A'

Scrivi una funzione di conteggio delle carte. la funzione ricevera un parametro,
 che può essere un numero o una stringa, e incrementerà o decrementerà la variabile count
  globale in base al valore della carta (vedi tabella). La funzione restituirà quindi una
   stringa con il conteggio corrente e la stringa ‘Bet’ se il conteggio è positivo oppure
    ‘Hold’ se il conteggio è zero o negativo. Il conteggio corrente e la decisione del giocatore 
    ( Bet o Hold) devono essere separati da un unico spazio.

var count = 0;
function countCard(par) {
    switch (par) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
        break;
    }
    var string;

    if (count > 0) {
        string = "Bet";
    } else {
        string = "Hold";
    }
    
    return count + " " + string;
}

console.log(countCard("J"));
console.log(countCard("J"));
console.log(countCard("Q"));
console.log(countCard("K"));
console.log(countCard("A"));








// create 5 sub array in one array

// var myList = [ ["chocolate",3 ],["orange", 6],["apple", 5],["banana", 4],["melon", 1] ];
//  */
//  create a function that print Hi world!

/* function functionReasuble() {
    console.log("Hi World");
}

functionReasuble(); */
//  create a function to create a sum between two numbers

/* 

function functionSum(num1, num2) {
    console.log(num1,num2);
}

functionSum(2,3);
functionSum(4,310);
functionSum(2,25);
functionSum(59,3); */

/* esercizio scope

var outerWear = "T-shirt";

function myOutfit() {
     outerWear = "sweater";
    return outerWear;
}

var ris = myOutfit();
console.log(ris);
 */
// var sum = 0;
// function addThree() {
//     sum = sum + 3
// }
// /**
//  * 
//  * @param {*} arr 
//  * @param {*} item 
//  */
// function nextInLine(arr,item) {
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

/**
 * 
 * @param {*} wasThatTrue 
 */
// function trueOrFalse(wasThatTrue) {
//    if (wasThatTrue) {
//     return "Yes, that was true";
// }
//     return "No, that was false";
// }
// console.log(trueOrFalse(true));

/* 
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, "10"));
  console.log(typeof compareEquality(10, "10"));
  console.log(typeof compareEquality(10, "10") === "string"); */

/*   
var count = 0;
function countCard(par,conta) {
  switch (par) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
          conta++;
      break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
          conta--;
      break;
  }
    var string;
    if (count > 0) {
      string = "Bet";
  } else {
      string = "Hold";
  }
  
  return count + " " + string;
}
console.log(countCard("J"));
console.log(countCard("J"));
console.log(countCard("Q"));
console.log(countCard("K"));
console.log(countCard("A"));
*/

/*
ESERCIZIO LOOP COME PORTARE PARTIRE DA UNO, CON I = 0; 
 var myArray = [];
 for(var i = 0; i < 5; i++) {
     var c = i;
     c++;
     myArray.push(c);
 }
 console.log(JSON.stringify(myArray));

  */
"use strict";