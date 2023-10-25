let obj = {
    key1: "value",
    key2: 100,
    key3: true,
    key4: ["one", "two", "three", "four"],
    key5: {
        nestedKey: "nested value",
        nestedKey2: 200,
        nestedKey3: false,
        nestedKey4: ["ein", "zwei", "drei"],
        nestedKey5: {nestedKey: "hello"}
        // nested azt jelent hogy egy masik erteken belul van
    }
}

//console.log(obj)
/* console.log(obj)
console.log(obj.key4)
console.log(obj["key4"]) // bracket notationnal is megkapom, de ezesetben idezojelbe kell raknom a key-t
console.log(obj["key4"][2])
// objekteken nem loopolunk hanem kiiratjuk az egész objektet

// tudok iteralni a key4 en is
for ( let i=0;i<obj.key4.length;i++) {
    console.log(obj.key4[i])
}

//Map,elni is tudok:
obj.key4.map((value) => {
    console.log(value)
}) */

//console.log(obj.key5.nestedKey4[1])
/* console.log(obj.key5.nestedKey5.nestedKey)
console.log(obj["key5"]["nestedKEy4"][1]) */

/* console.log(Object.keys(obj)) // ezaltal vegigiteralok az objecten */

const objectKeys = Object.keys(obj)
objectKeys.forEach((key)=> {
   // console.log(obj[key])  // dot notationnal stringet nem lehet megadni, idezojelben sem mert akkor azta kulcsot keresi nem a kulcsot
    console.log(key,obj[key])
})

