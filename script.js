/* tombon belul legalabb 10 objectet letrehoz
legyenek userek
minden usernek legyen name kulcse aminekstring legyen az erteke
age kulcsa aminek 10-80 az értééke
legyen poets kulcs ami egy array amiben legalabb 3 allatnev legyen
legyen egy mostrecentpurchase kulcsa a legutobbi vasarllan ami object kell legyen, legyen egy price és egy szin. Legalabb 10 et csinalni ilyen objectbol és berakni az arraybe */

const data = [
    {
        user : "Kálmán Józsi",
        age : 75,
        pets: ["Cirmi", "Mirci", "Shadow"],
        mostRecentPurchase : {
            price:  20000,
            color: "black"
        }
    },
    {
        user : "Tóth Juli",
        age : 44,
        pets: ["Mazsola", "Tetkó", "Kifli"],
        mostRecentPurchase : {
            price:  15000,
            color: "red"
        }
    },
    {
        user : "Kálmán Elek",
        age : 50,
        pets: ["Zacsi", "Sajt", "Árnyék"],
        mostRecentPurchase : {
            price:  18500,
            color: "yellow"
        }
    },
    {
        user : "Örmendi Péter",
        age : 34,
        pets: ["Nudli", "Szőrmók", "Ugri"],
        mostRecentPurchase : {
            price:  12000,
            color: "green"
        }
    },
    {
        user : "Gyors Péter",
        age : 51,
        pets: ["Mazsola", "Mandula", "Fényes"],
        mostRecentPurchase : {
            price:  14550,
            color: "white"
        }
    },
    {
        user : "Körmendi Péter",
        age : 29,
        pets: ["Mazsi", "Körte", "Bundás"],
        mostRecentPurchase : {
            price:  13330,
            color: "yellowgreen"
        }
    },
    {
        user : "Huszár Máté",
        age : 49,
        pets: ["Mirci", "Mimi", "Sédó"],
        mostRecentPurchase : {
            price:  11110,
            color: "blackwhite"
        }
    },
    {
        user : "Fürge Elek",
        age : 45,
        pets: ["Tunya", "Ugri", "Bugri"],
        mostRecentPurchase : {
            price:  14800,
            color: "greenyellow"
        }
    },
    {
        user : "Kelemen József",
        age : 25,
        pets: ["Fürge", "Lanyha", "Dundi"],
        mostRecentPurchase : {
            price:  16660,
            color: "blackyellow"
        }
    },
    {
        user : "Mozsári Krisztina",
        age : 27,
        pets: ["Pocak", "Nyüzsi", "Morgó"],
        mostRecentPurchase : {
            price:  17500,
            color: "greenwhite"
        }
    },
    {
        user : "Lakatos Ferenc",
        age : 41,
        pets: ["Ügyes", "Agyafurt", "Tunya"],
        mostRecentPurchase : {
            price:  13600,
            color: "redwhite"
        }
    },
    {
        user : "Arató Mihály",
        age : 22,
        pets: ["Villám", "Lopakodó", "Figyelő"],
        mostRecentPurchase : {
            price:  17890,
            color: "bluewhite"
        }
    },
    {
        user : "Rögvest Márta",
        age : 33,
        pets: ["Éhenkórász", "Korgó", "Lenyel"],
        mostRecentPurchase : {
            price:  19400,
            color: "blue"
        }
    },
    {
        user : "Rezes Tamás",
        age : 66,
        pets: ["Haspók", "Rosszcsont", "Makacs"],
        mostRecentPurchase : {
            price:  15400,
            color: "blackblue"
        }
    },
    {
        user : "Kimért Júlia",
        age : 32,
        pets: ["Picur", "Pindur", "Mini"],
        mostRecentPurchase : {
            price:  13300,
            color: "blackyellow"
        }
    }
]

//vegigloopolni az objektemen
/* for (let i = 0; i < data.length;i++ ){
    console.log(data[i])
} */

// itt azokra a uzserekere vagyok kivancsi akiknek az age nagyobb mint 60
/* for (let i = 0; i < data.length;i++ ){
    if (data[i].age>=60) {
    console.log(data[i])
    }
} */

/* for (let i = 0; i < data.length;i++ ){
    if (data[i].age>=60 && data[i].mostRecentPurchase.price >= 20000) {
    console.log(data[i])
    }
}
 */
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result  // a result erteket adja vissza. A RETURN AD VISSZA EGY ERTEKET A FÜGGVÉNYBŐL. haa függvénynek kell visszaadnia valamit, kell return legyen benne
}
/* const addTwoNumbersResult = addTwoNumbers(1,2)
console.log("addTwoNumbers:", addTwoNumbersResult) */

function concatenateArray (array) {
    let result = ""   // kell egy változo a stringek összefuzesehez

    array.forEach((string) =>{
        result += string // hozzaadom a result ertekehez a kovetkezo stringet amikor lefut a forEach
    })
    return result //  a nag yfuggvenyben van benne ezért lesz a visszateresi erteke a fuggvenynek

/*     let result = array.join ("-")
    return result */
}

const arrayOfStrings = ["kismacska", "codecool", "javascript", "szerda", "vizsga"]
const concatenateArrayResult = concatenateArray(arrayOfStrings)
// console.log ("concatenateArray:", concatenateArrayResult)

function getOldPeople(arrayOfPeople, minimumAge) {
  arrayOfPeople.map((person) => {
    if (person.age >= minimumAge)
    return person
  })  
}

// itt van egy pushal amit magyarazott, felvetelrol megnez 19:32 korul

/* const oldPeople = getOldPeople(data, 70)
console.log(oldPeople) */

function getRichPeople (arrayOfPeople, minimumValue) {
    let result = arrayOfPeople.filter((person) => person.mostRecentPurchase.price>minimumValue)
    return result  
        // vegrehajt egay call back fuggvenyt mindegyik elemen a tombnek
        // a filter megtudja szurni az arrayt amin futtatjuk olyan feltetel alapjan amit mondok neki
        // ha a callback fuggvenyem visszater egy ertekkel, akkor azt az erteket vissza is adja a filter
        // a filternel erdemes egy soros kodot irni mert a legegyszerub igy
        // szuresrea  filter ea legjobb de mappal is meglehet csinalni
   /*      if(person.mostRecentPurchase.price > minimumValue)
        return person */
/*     return result */
}

    
/* const richPeople = getRichPeople(data, 15000)
console.log(richPeople)
 */
function goodRecommendationFor(arrayOfPeople, newOffer) {
/*     let result = []  // a for loop nem ad vissza erteket ezertkell valtozo
 for (let i = 0; i<arrayOfPeople.length; i++){
    //console.log(arrayOfPeople[i].mostRecentPurchase)
    if(arrayOfPeople[i].mostRecentPurchase.color === newOffer.color &&arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
        result.push(arrayOfPeople[i]["user"]) */
        result = arrayOfPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price) 

        return result
       }
 


const newOffer1 = {
    color: "white",
    price: 8000
}

const newOffer2 = {
    color: "blue",
    price: 15000
}

const goodRecommendation = goodRecommendationFor(data, newOffer1)
console.log(goodRecommendation)


