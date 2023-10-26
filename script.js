/*let variable = 10
variable = 20
// itt a valtozo barmi lehet kesobb

const variable2 = 50
// variable2 = 100 //constot nem lehet valtoztatni = el

let array = [1, 2, 3]
array = [4, 5, 6]
array.push(10)
// ha arraynak tomb volt a kezdoerteke mindig tomb lesz

const array2 = [10,20,30]
//array2 = [40,50,60]
array2.push(100)
array2[0] = 11
// a const azt tiltja meg hogy = jellel uj értéket adjak, nem tilt meg mindent

console.log(array2) */


/*const arr = ["kiss béla", "nagy józsi", "tóth jános"]

for (let i=0;i<arr.length; i++) {
    console.log(arr[i])
}

let lettersLength = 0
 arr.forEach((value, index,) => {
    console.log("at index: ", index, "is:" ,value)
    console.log(`at index: ${index + 1} is: ${value}`) // template literal, ${jsExpression} <-- template literal expression
    lettersLength += value.length
})
// ez abban mas asima forhoz kepst hogy nincs szukseg indexelésre, index nelkul minden elemen lefuttatja ugyanazt a fuggvenyt
// callack fugvennyel mukodik aminek legalabb egy elemet meadunk, atveszi a tomb aktualis elemet
// megadhatok masodik parametert pl index

//For , for each boven eleg ha tudjuk, de tudhatjuk a tobbit is , de erdemes egy kettot kimaxolni

let mapResult = arr.map((value, index) => {
    console.log(`at index: ${index + 1} is: ${value}`)
    //return value.charAt(0)
    return value.length
})

console.log("forEachReasult:", lettersLength)  // ezesetben visszaadja a lettersLength-et de nem magatol ad erteket hanem a letterLength-nek az értékét változtatta,
console.log("mapResult:", mapResult)

//a for eachnak nincs visszateresi erteke csak lefuttatja a callback fuggvenyt minden elemen, soha nem kell elkerni a visszateres erteket mert nincs

// a map var egy visszateresi erteket a callback fuggvenybol,mindig van vcisszateresi erteke, mindig ugyanannyi elemu tombot ad ahany elemu tombon lefuttattam. Mindegyik callbackbol var egy visszateresi erteket, pl beadom hogy return index, akkor az indexeket adja vissza, ha beadom h value.charAt(0) akk az elso betuket kuldi vissza
//A map ad vissza erteket magatl is 

for (const value of arr ) {
    console.log(`for of:' ${value}`)
}
// a for ofban nincsenek indexek (butitott for of)


for (let i = 0 ;i < arr[0].length;i++) {
    console.log(arr[0][i])
}

// arrayek , loopolasokbol ksézül !!!! */

