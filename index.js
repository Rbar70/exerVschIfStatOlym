if( 5 > 3 ){
    console.log("is greater than")
}

var cat = "cat"
var cat = "dog"
if (cat.length === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log("is the same")
}
else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log("is NOT allowed to go to the movie")
}

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log("Sorry, we don't like your B in Bobby")
}

if (person.age >= 18 && person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log("Sorry, this movie is rated B18 and not for you.")
}

if (1 === "1") {
    console.log("strict")
}
else if (1 == "1") {
    console.log("loose")
}
else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 == 4) {
    console.log("yes")
}
else {
    console.log("Hell NO")
}

var dog = "dog"

if (typeof dog === "string") {
    console.log("Yes, it is a string")
}
else {
    console.log("No, this is not a string")
}

var truecheck = true

if (typeof truecheck === "boolean") {
    console.log("this is a boolean")
}
else {
    console.log("This is not a boolean")
}

if (typeof dog !== "undefined") {
    console.log("defined")
}
else {
    console.log("undefined")
}

if (typeof mat !== "undefined") {
    console.log("defined")
}
else {
    console.log("undefined")
}







if ("s" > 12) {
    console.log("if greater than")
}
else {
    console.log("Mama told me never to mixed numbers with letters")
}

if ("s" > "w") {
    console.log("greater than")
}
else {
    console.log("Mind your W's")
}

if (10 > 1) {
    console.log("greater than")
}
else {
    console.log("what 10 is greater than 1 its a fact")
}

var myNum = 120140;

if (myNum % 2 === 0) {
    console.log("even")
}
else if (myNum % 2 === 1) {
    console.log("odd")
}
else {
    console.log("not a whole number")
}

var myNum = 874591;
if (myNum % 2 === 0) {
    console.log("even")
}
else if (myNum % 2 === 1) {
    console.log("odd")
}
else {
    console.log("not a whole number")
}
