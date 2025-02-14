/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"]

for (let i = 0; i < 4; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
for (let i = 0; i < 4; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(pets) //per vedere com'è al momento l'array
const first = pets.shift()
pets.push(first)
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]
const licensePlateValue = ["ciao", "wow", "tastiera"]
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateValue[i]
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//nuovo oggetto
const newCar = {
  brand: "Renualt",
  model: "Modus",
  color: "yellow",
  trims: ["titanium", "st", "active"],
  licensePlate: "aaaaaa",
}

//aggiunto oggetto all'array cars
cars.push(newCar)

//rimozione ultimo elemento della prop. trims da ogni car
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
let justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let apice = 0
const numero = 0
while (numericArray[apice] !== 32) {
  console.log(numericArray[apice])
  apice++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
const numbersArray = []
function togliere(n) {
  for (let i = 0; i <= n; i++) {
    charactersArray.shift()
  }
}

togliere(5)
charactersArray.push(
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z"
)

for (let i = 0; i < charactersArray.length; i++) {
  let valore = charactersArray[i]
  switch (valore) {
    case "a":
      numbersArray.push(1)
      break
    case "b":
      numbersArray.push(2)
      break
    case "c":
      numbersArray.push(3)
      break
    case "d":
      numbersArray.push(4)
      break
    case "e":
      numbersArray.push(5)
      break
    case "f":
      numbersArray.push(6)
      break
    case "g":
      numbersArray.push(7)
      break
    case "h":
      numbersArray.push(8)
      break
    case "i":
      numbersArray.push(9)
      break
    case "l":
      numbersArray.push(10)
      break
    case "m":
      numbersArray.push(11)
      break
    case "n":
      numbersArray.push(12)
      break
    case "o":
      numbersArray.push(13)
      break
    case "p":
      numbersArray.push(14)
      break
    case "q":
      numbersArray.push(15)
      break
    case "r":
      numbersArray.push(16)
      break
    case "s":
      numbersArray.push(17)
      break
    case "t":
      numbersArray.push(18)
      break
    case "u":
      numbersArray.push(19)
      break
    case "v":
      numbersArray.push(20)
      break
    case "z":
      numbersArray.push(21)
      break
    default:
      console.log("non riconosco questo valore")
  }
}

console.log(numbersArray)
