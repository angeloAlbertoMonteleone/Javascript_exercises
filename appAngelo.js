// console.log("Ciao Mondo");
// alert("Ciao");




/* function functionBmi (num1, num2) {
    var bmi = num1 / num2 ** 2;
    return bmi;
}

var massaMarco = 78;
var altezzaMarco = 1.68;

var massaGiovanni = 78;
var altezzaGiovanni = 1.95;
functionBmi(massaMarco, altezzaMarco);
functionBmi(massaGiovanni, altezzaGiovanni);
 */
/* DRY
Don t 
repeat 
yourself */



// BMI 
// bmi = mass/altezza ** 2
// bmi = mass/altezza* altezza

/* 
Marco 78 kg, 1.69 m
Giovanni 92 kg, 1.95 m */
/* 

1. salvare i valori di marco e giovanni in variabili
2. calcolare il loro BMI con la formula e salvarlo in variabili */
/* 3. stampare a console i risultati per Marco e Giovanni
 */
// var massaMarco = 78;
// var massaGiovanni = 92;

// var altezzaMarco = 1.68;
// var altezzaGiovanni = 1.95;

// var bmiMarco = 0;
// bmiMarco = massaMarco / altezzaMarco** 2;

// var bmiGiovanni = 0;
// bmiGiovanni = massaGiovanni / altezzaGiovanni** 2;

// console.log("il BMI di Giovanni e`: " + bmiGiovanni + "\n\nil BMI di Marco e`: "+ bmiMarco);





/* esercizio1 */

/* creare 3 variabili ‘nome’, ‘cognome’, ‘eta’ e stampa a console la stringa : Ciao mi chaimo Marco Rossi ed ho 30 anni’ */

// var nome = "Marco";
// var cognome = "Rossi";
// var eta = 30;

// console.log("Ciao mi chiamo " + nome + " " + cognome + " ed ho " + eta + " anni");





/* esercizio2 

var number1 = 1;
var number2 = 10;
var number3 = 5;

var sum = number1 + number2 + number3;
console.log(sum);
 */




 /* esercizio3 */ 

// crea una stringa lunga 20 caratteri e stampa a console il numero totale

// var string = "Ciao sono Angelo !!!"
// console.log(string.length);



/* esercizio4 */


// var arr = ["Angelo", "Federico", "Gianni", "Nicola", "Raffaele", "Pasquale", "Simone", "Gianfranco"];
// arr[2] = "Nonna";
// console.log(arr);


/* esercizio5 */

// var arr = [  [  ["Angelo", 25] , ["Roberto", 26], "first","second", "third"  ]  ];
// console.log(arr[0][1]);



/* esercizio6 */

/* crea una stringa “Jiao Mamma” e sostituisci la prima lettera con “C” */

// var string = "Jiao Mamma";
// string = string.replace(string[0],"C");
// console.log(string);




/* esercizio7 

Aumentare la popolazione Italiana di 1 e stampare il risultato a console 

var italianPopulation = 60360000;
italianPopulation++ ;
console.log(italianPopulation);
 */




/* esercizio8 

La Finlandia ha una popolazione di 6 milioni di abitanti. 
l’italia ha piu abitanti della Finlandia? (stampare a video il risultato)*/

/* var finnishPopulation = 6000000;
var italianPopulation = 60360000;

if (italianPopulation > finnishPopulation) {
    console.log("L`italia ha piu` abitanti della finlandia con: " + italianPopulation);
} else {
    console.log("L`italia non ha piu` abitanti della finlandia")
} */


/* esercizio9 

La popolazione media dei paesi è 33 milioni di persone. la media italiana è minore rispetto la media generale? 

    function averagePop(italianPopulation,avaragePopulation) {
        return italianPopulation + avaragePopulation;
    }

    // var average = 33000000;
    // var italian = 60360000;
    console.log(averagePop(italian,average));

    function functionPop(italianPopulation,avaragePopulation) {
        if (italianPopulation < avaragePopulation) {
            return "le media italiana e` minore rispetto la media generale";
        }
        else if (italianPopulation > avaragePopulation){
            return "le media italiana e` maggiore rispetto la media generale";
        }
            else {
                return "le media italiana e` uguale alla media generale";
            }
    }
    var average = 33000000;
    var italian = 60360000;
    console.log(functionPop(italian,average));



/* 
var avaragePopulation = 30000000;
var italianPopulation = 60360000;

if (italianPopulation < avaragePopulation) {
    console.log(true);
}
else {
    console.log(false);
}
 */


 /*  esercizio 10 
 Scrivi su un foglio i risultati delle seguenti operazioni e poi eseguile per controllare se il risultato è corretto */
/* '9' - '5';
'19' - '13' + '17'; '19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2; */



// function subtraction(num1,num2) {
//     return num1 - num2;
// }
// console.log(subtraction("9","5"));


// function subEsum(num1, num2, num3) {
//     return num1 - num2 + num3;
// }
// console.log(subEsum("19","13","17"));
// console.log(subEsum("19","13",17));


// function condiction(num1, num2) {
//     return num1>num2;
// }
// console.log(condiction("123", 57));


// function condictions(num1,num2) {
//     if (num1 < num2) {
//         return num1 + " è minore di " + num2;
//     }
//     else if (num1 > num2) {
//         return num1 + " è maggiore di " + num2;
//     }
//     else {
//         return num1 + " è uguale a " + num2;
//     }
// }

// console.log(condictions("123",57));


// function subSum(num1, num2, num3,num4, num5, num6) {
//     var sumAndSub = num1 + num2 + num3 + num4 - num5 - num6;
//     return sumAndSub; 
// }

// console.log(subSum(5,6,"4",9,4,2)); 




/* esercizio11
Se la popolazione del tuo paese è maggiore di 33 milioni,
 stampa a console: "La popolazione dell’Italia è al di sopra della media".
  Altrimenti, stampa “ La popolazione dell’italia è di {numero-differenza}milioni sotto la media '' 
  (numero-differenza è la differenza tra 33 e la popolazione italiana)
 */


/* function subtraction(num1, num2) {
    return num1 - num2;
}

var myCountry = 64360000;
var average = 33000000;

average = 13
if (myCountry > average) {
    console.log("La popolazione dell’Italia è al di sopra della media");
}
else {
    console.log("La popolazione dell’Italia è di " + subtraction(average,myCountry) + " milioni sotto la media ");
}
 */

/* ESERCIZIO12 NICOLA GOLF*/
/* 
        function definePar(par, punteggio) {
        
            if (punteggio == 1) {
                return "Hole-in-one!" ; 
            }
            else if (punteggio <= (par -2)) {
                return "Eagle";
            }
            else if (punteggio <= (par -1)) {
                return "Birdie";
            }
            else if (punteggio == par) {
                return "Par";
            }
            else if (punteggio == (par +1)) {
                return "Bogey";
            }
            else if (punteggio == (par +2)) {
                return "Double Bogey";
            }
            else if (punteggio >= (par +3)) {
                return "Go Home!";
            }        
        }

var parBuca1 = 4;
var parBuca2 = 6;
var parBuca3 = 2;
var parBuca4 = 3;
var parBuca5 = 7;

var punteggioMarco = 0;
var punteggioGiovanni = 0;
var punteggioPippo = 0;

punteggioMarco+= defineResult(parBuca1, 8);
punteggioGiovanni+= defineResult(parBuca1, 4);
punteggioPippo+= defineResult(parBuca1, 3);

punteggioMarco+= defineResult(parBuca2, 4);
punteggioGiovanni+= defineResult(parBuca2, 3);
punteggioPippo+= defineResult(parBuca2, 4);

punteggioMarco+= defineResult(parBuca3, 5);
punteggioGiovanni+= defineResult(parBuca3, 1);
punteggioPippo+= defineResult(parBuca3, 2);

punteggioMarco+= defineResult(parBuca4, 1);
punteggioGiovanni+= defineResult(parBuca4, 3);
punteggioPippo+= defineResult(parBuca4, 1);

punteggioMarco+= defineResult(parBuca5, 3);
punteggioGiovanni+= defineResult(parBuca5, 2);
punteggioPippo+= defineResult(parBuca5, 4);

if (punteggioMarco < punteggioGiovanni && punteggioMarco < punteggioPippo) {
    console.log("il vincitore e` Marco con il punteggio di: " + punteggioMarco);
}
else if (punteggioGiovanni < punteggioMarco && punteggioGiovanni < punteggioPippo) {
    console.log("il vincitore e` Giovanni con il punteggio di: " + punteggioGiovanni);
} else {
    console.log("il vincitore e` Pippo con il punteggio di: " + punteggioPippo);
}


function defineResult(par, punteggio) {
    var risultato = definePar(par, punteggio);
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    var newString ;
    switch(risultato) {
        case names[0] :
            newString = 1;
        break;
        case names[1] :
            newString = -2;
        break;
        case names[2] :
            newString = -1;
        break;
        case names[3] :
            newString = 0;
        break;
        case names[4] :
            newString = +1;
        break;
        case names[5] :
            newString = +2;
        break;
        case names[6] :
            newString = +3;
        break;
    }
    return newString;
}




 */
/* ESERCIZIO12
ESERCIZIO GOLF
 stampare a video il vincitore tra Marco, Giovanni e Pippo, dopo aver fatto 10 buche
 per ogni buca definire il par ed i tiri (diversi per ogni sfidante) di ogni concorrente
creare una funzione per convertire la stringa in punteggio

es Il vincitore è Pippo con - 6
    */

    // var golfHoles = ["hole1","hole2","hole3","hole4","hole5","hole6","hole7","hole8","hole9","hole10"];


//     function averageCalculator(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10) {
//         var sum = 0;
//         var average = 0;
//         sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
//         average = sum/10;
//         return average;
//     }

//     var MarcoPar = averageCalculator(5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
//     var giovanniPar = averageCalculator(1,4,2,3,2,2,3,3,2,1);
//     var pippoPar = averageCalculator(1,1,1,1,1,1,1,1,1,1);


//     function definePar(par, strokes) {
        
//         if (strokes === 1) {
//             return "Hole-in-one!" ; 
//         }
//         else if (strokes <= (par -2)) {
//             return "Eagle";
//         }
//         else if (strokes <= (par -1)) {
//             return "Birdie";
//         }
//         else if (strokes === par) {
//             return "Par";
//         }
//         else if (strokes >= (par +1)) {
//             return "Bogey";
//         }
//         else if (strokes >= (par +2)) {
//             return "Double Bogey";
//         }
//         else if (strokes >= (par +3)) {
//             return "Go Home!";
//         }        
//     }

    
// var marcoResultLetter = definePar(5, MarcoPar);
// var giovanniResultLetter = definePar(5, giovanniPar);
// var pippoResultLetter = definePar(5, pippoPar);
    

//     function convertString(result) {

//     var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
//     var newString = "";
//     switch(result) {
//         case names[0] :
//            newString = 1;
//         break;
//         case names[1] :
//             newString = -2;
//         break;
//         case names[2] :
//             newString = -1;
//         break;
//         case names[3] :
//             newString = 0;
//         break;
//         case names[4] :
//             newString = +1;
//         break;
//         case names[5] :
//             newString = +2;
//         break;
//         case names[6] :
//             newString = +3;
//         break;
//     }
//     return newString;
// }
 
// var marcoResultNumber = convertString(marcoResultLetter);
// var giovanniResultNumber = convertString(giovanniResultLetter);
// var pippoResultNumber = convertString(pippoResultLetter);

// if (marcoResultNumber < giovanniResultLetter && marcoResultNumber < pippoResultNumber) {
//     console.log("il vincitore e` Marco con il punteggio di: " + marcoResultNumber);
// } 
// else if (giovanniResultLetter < marcoResultNumber && giovanniResultNumber < pippoResultNumber) {
//     console.log("il vincitore e` Giovanni con il punteggio di: " + giovanniResultNumber);

// } else {
//     console.log("il vincitore e` Pippo con il punteggio di: " + pippoResultNumber);
// }


/* ESERCIZIO 13
crea una funzione che riceve in ingresso un parametro e restituisca: 
rosso se 1, nero se 3, blu se 4, verde se 8,9,10 oppure restituisce rosa
 nel caso non è nessuno dei casi precedenti
 

 function switchFun(par) {
    switch (par) {
        case 1: 
            par = "rosso";
            break;
        case 3:
            par = "nero";
            break;
        case 4:
            par = "blu";
            break;
        case 8:
        case 9:
        case 10:
            par = "verde";
            break;
        default:
            par = "rosa";
            break;
    }
    return par;
 }

console.log(switchFun(2));
 */


/* ESERCIZIO 14
calcolatrice, una funzione che vuole come parametri un campo 
stringa dell’operazione (somma, sottrazione, divisione e moltiplicazione) 
poi due parametri con i numeri su cui operare, 

function calculator(string, num1, num2) {
    var result = " ";
    switch (string) {
        case "sum":
            result = num1 + num2; 
            break;
        case "subt":
            result = num1 - num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        case "mult":
            result = num1 * num2;
            break;
            default:
            result = `inserisci una risposta valida tra: 
                -somma,
                -sottrazione,
                -divisione,
                -moltiplicazione`;
    }
    return result;
}

console.log(calculator("mult",3,4))
 */



/* ESERCIZIO 15 OGGETTI-1
creare un oggetto con delle proprieta (inventate da te) e passarlo ad una funzione (inventata da te),
poi dentro la funzione cambia il valore di una proprieta 
dell’oggetto ed stampa in console il valore dopo l’esecuzione della funzione
 ma fuori dalla funzione e vedi se il risultato è quello che pensavi

var persona = {
    gambe: 2,
    testa: 1,
    braccia: 2,
    cuore: 1
}

function check() {
    persona["braccia"] = 4;
    return persona; 
}

console.log(check(persona));




/* ESERCIZIO 15 OGGETTI-2
Crea un oggetto chiamato "myCountry" per un paese di tua scelta, 
contenente le proprietà 'country', 'capital', 'language', 'population' e 'neighbours';

con l’oggetto creato prima creare una stringa tipo ‘Italia ha 6 milioni di abitanti che parlano italiano,
confina con 4 nazioni e la sua capitale è Roma’, e stampa nella console

crea un metodo ‘describe’ che creerà la stessa stringa di prima ma con la keyword this

crea un nuovo metodo ‘checkIsland’ nell’oggetto di prima che creera una nuova proprieta 
nell’oggetto, se non ha nazioni 'neighbours' sara FALSE altrimenti TRUE


var myCountry = {
    'country': 'germany',
    'capital': 'berlin',
    'language': 'german',
    'population': '83.02',
    'neighbours': ['Denmark', 'Poland', 'Czech Republic', 'Switzerland','Austria', 'France', 'Belgium', 'Luxembourg', 'Netherlands'],
    'describe': function () {
       return `${this.country} ha ${this.population} milioni di abitanti che parlano ${this.language},confina con ${this.neighbours} e la sua capitale è ${this.capital}`;      
    },
    'checkIsland': function() {
        this.island = false;
        if(!this.neighbours) {
            this.island = true;
        }
        /* if(!this.neighbours){
            this.island = true;
            return
        } else {
            this.island = false;
        } 
    }
}
 console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.island);
console.log(myCountry);
 */










 

/* ESERCIZIO 16 LOOP
crea un’array di 20 elementi utilizzando il ciclo while ogni elemento


var arr = [];
var i = 0;
while(i < 20) {
    i++;
    arr.push(i);
}

console.log(arr);


crea un’array di 1000 elementi con il ciclo for


var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push(i);
}
console.log(arr);



stampa  a video i primi 100 elementi dell’arre creato nella sezione prima


var arr = [];

for(var i = 0; i < 1000; i++){
    arr.push(i);
}


function creareArrMilleEStampaCento(){
var array = [];
    for (var i = 0; i < 1000; i++) {
        array.push(i);
        if (i < 100) {
            console.log(arr[i]);
        }
    }
    return array;
}

var arrayMille = creareArrMilleEStampaCento();

function stampaPrimiCento(arr){
    for (let c = 0; c < arr.length; c++) {
        if (c < 100) {
            console.log(arr[c]);
        }
        return;
    }
}

stampaPrimiCento(arrayMille);

function stampaPrimiCentoArray(){
    for(let c = 0; c < 100; c++) {
        console.log(arr[c]);
    }
}

stampaPrimiCentoArray(arrayMille);
*/

/* VISUALIZZA A CONSOLE ARRAY ANNIDATI 
var array1 = [['1','2','3','4','5'],['b','c','d','e'],['💪🏼','🔥','💣','🚀']]

for (var i = 0; i < array1.length; i++) {
    for(var c = 0; c < array1[i].length; c++) {
        console.log(JSON.stringify(array1[i][c]));
    }
}


var array2 = [['1','2','3','4','5'],[['😊','👏','😜'],'c','d','e'],["s",'🔥','💣','🚀']];

for (var i = 0; i < array2.length; i++) {
    for(var c = 0;c < array2[i].length; c++) {
        if(Array.isArray(array2[i][c])){
            for(var e = 0; e < array2[i][c].length; e++){
                console.log((array2[i][c][e]));
            }
        }
    }
}


var array3 = [['1','2','3','4','5'],[['😊',['😊'],'😜'],'c','d','e'],["s",'🔥','💣','🚀']];

for (var i = 0; i < array3.length; i++){
    for(var a = 0; a <array3[i].length; a++){
        if(Array.isArray(array3[i][a])) {
            for(var e = 0; e < array3[i][a].length; e++) {
                if(Array.isArray(array3[i][a][e])) {
                    for(var u = 0; u < array3[i][a][e].length; u++){
                        console.log(array3[i][a][e][u]);
                    }
                }
            }
        }
    }
}
*/




/* ESERCIZIO 17 SU METODI DI ARRAY SU ES6  
1.	creare un’array e modificare tutti i valori con un metodo dell’array
2.	sempre con l’array creato prima, stampare a video tutti i suoi valori utilizzando un metodo dell’array 
3.	creare un’oggetto con un metodo che accetta una funzione di callback che una volta chiamata stampa a video tutti i suoi parametri
4.	creare un metodo nell’oggetto di prima che una volta chiamato stampa una stringa che usa i parametri dell’oggetto pero usando il template literal (novita di es6)

esercizio 1-2

const arr = ['🔥','💣','🚀','😊','👏','😜'];

arr.map(value => value+= "👍");
arr.forEach(value => console.log(value));




esercizio 3

let emoji = {
    arr: ['🔥','💣','🚀','😊','👏','😜'],
    forEach(fn){
        for (let value of this.arr) {
            fn(value, index, array);
        }
    }
}

emoji.forEach(emoji => console.log(emoji));



esercizio 4
creare un metodo nell’oggetto di prima,che una volta chiamato stampa una stringa che usa i parametri dell’oggetto pero usando il template literal (novita di es6)


let emoji = {
    arr: ['🔥','💣','🚀','😊','👏','😜'],
    forEach: function(fn){
        for (const value of this.arr) {
            fn(value);
        }
    }
}
emoji.nome = "Angelo";
emoji.descrizioneObj = () => {
    return `Ciao mi chiamo ${this.nome} el il mio array ${JSON.stringify(emoji.arr)} di emoji e bellissimo`;
}
console.log(emoji.descrizioneObj());

 */

/* ESERCIZIO 18

1.	creare un’array di numeri (almeno 10/15) e salvare in una variabile la somma di tutti i numeri utilizzando la tecnica che preferisci
2.	creare un’array con 20 valori  e stampare a video i valori utilizzando il metodo foreach e passare come callback un’ arrow function

1.

const arr = [1,2,4,10,20,30,7,8,34,100];
const fun = (prev, curr) => prev + curr;
const arrSum = arr.reduce(fun,0);
console.log(arrSum)

2.

const secondArr = [45,50,20,10,20,30,7,8,34,30,50,20,'🤣','❤','😊','👏','😁','🤞','😜','Angelo'];
const printValues = (value, index, array) => console.log(value);
secondArr.forEach(printValues);
*/

// const words = ['Ciao','Raffaele','Ciao','Angelo'];
// const firstTwo = words.filter(value => value.length >= 8 || value.length <= 4);
// console.log(firstTwo);

// const values = [1,3,4,5,6,7,8,9,10];
// const firstValues = values.slice(3,9);
// console.log(firstValues);

 

/* ESERCIZIO 19

1.	let buttom = 23, top = 4 invertire il valore delle due variabili usando la tecnica del destructoring
2.	creare un’array di 20 passarla ad una funzione che rimuovere i primi 7 e ritorna il resto in un’array usando la tecnica del destructoring
3.	creare due moduli js e nel primo creare tutte le operazioni di una calcolatrice somma, sottrazione, divisione, moltiplicazione  nel secondo modulo importare le funzioni moltiplicazione per moltiplicare due numeri e stampare a console il risultato 

1. 
let ro = 23,
let top = 4;
[ro,top] = [top,ro];

console.log(ro);
console.log(top);

2.
const arr = [45,50,20,10,20,30,7,8,34,30,50,20,'🤣','❤','😊','👏','😁','🤞','😜','Angelo'];

const removeValue = (arrExample) => {
    let newArr = arrExample.slice(7,20);
    [...arrExample] = newArr;
    return newArr;
}
console.log(removeValue(arr));

*/


/* 
Interview exercise 

const funzione = () => {
    let array = [];
    for(let i = 2; i <= 10; i++) {
        array.push(i);
    }
    const min = Math.min(...array); 
    const max = Math.max(...array);
    console.log(min , max);
}

funzione(); */


