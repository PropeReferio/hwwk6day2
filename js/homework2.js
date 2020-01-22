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
}

function showFaves(indi){
    console.log('Her favorite pizzas:');
    for(i=0;i<indi.pizza.length;i++){
        console.log(indi.pizza[i]);
    }
    console.log('\nHer favorite tacos:');
    console.log(indi.tacos);
    console.log('\nHer favorite burgers:');
    console.log(indi.burgers);
    console.log('\nHer favorite ice cream:');
    for(i=0;i<indi.ice_cream.length;i++){
        console.log(indi.ice_cream[i]);
    }
    console.log('\nHer favorite shakes:');
    for(i=0;i<Object.keys(indi).length;i++){
        console.log(Object.values(Object.values(indi)[4][0])[i]);
    }
}


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


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;

    this.tellMe = () => {
        console.log(`Their name is ${this.name} and they are ${this.age} years old.`);
    }
    this.addAge = () => {
        this.age++
        return `${this.name} is another year older. Now they are ${this.age} years old.`;
    }
}

let me = new Person('Bo', 29);
let teacher = new Person('Joel', 29);
teacher.addAge();
teacher.addAge();
teacher.addAge();
let fred = new Person("Fred", 26);
let bob = new Person("Bob", 23);