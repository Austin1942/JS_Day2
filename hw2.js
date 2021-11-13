//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};
const personFoods = () =>{
    for(let key in person3){
        console.log(key);
        console.log(person3[key]);

}
};
personFoods();
// I think this what you want... Im not sure

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    
    this.printInfo = () =>{
        console.log(`this is ${this.name} they are ${this.age} years old.`);
    }
};
let sam = new Person('sam', 20);
let maggy = new Person('maggy', 21);

let upAge1 = (personUpBy1) =>{
    personUpBy1 = 20;
    
    function addAge1 (){
        return personUpBy1++
    }
    return addAge1
    
};
let upAge3 = (personUpBy3) =>{
    personUpBy3 = 21;
    
    function addAge3 (){
        return personUpBy3 +=3;
    }
    return addAge3
    


};
myUpAge1 = upAge1();
myUpAge3 = upAge3();
console.log(myUpAge1(sam));
console.log(myUpAge1(sam));
console.log(myUpAge1(sam));
console.log(myUpAge3(maggy));
console.log(myUpAge3(maggy));
console.log(myUpAge3(maggy));

// =============Exercise #3 ============//


    //Create a Promised based function that will check a string to determine if it's length is greater than 10.
    //If the length is greater than ten console log "Big word". 
    //If the length of the string is less than 10 console log "Small Number"}
newString= ('TenLetterssss')
function countLength() {
    return new Promise((resolve, reject) => {
    if (newString.length <= 10){
        resolve({
            message: 'Big Word'
        }) 
    }else{
        reject({
            message:'Small Number'
        })
    }
})};

countLength().then((message) => {
    console.log('Success: ' + message)
}).catch ((message) => {
    console.log('Failed' + message)
})
