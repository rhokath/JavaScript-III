/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* All depends on where the function is invoked.
* 1. There is impplicit binding which is automatic with objects and methods. Look to the left of the dot when calling a function and it will tell you what this is referring to. 
* 2. There is explicit binding which means your telling a function in the global scope which would normally bind to the window object to bind to a specific object. You can use .call .apply or .bind.
* 3. There is new binding which happens when you use a object constructor function and the 'new' keyword when making a new object which tells this to bind to the new object.
* 4. There is window binding which is if you invoke a function when it has a this keyword but nothing to the left of the dot and no call/apply/bind the this will refer to the window object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    // let sayName = function(){
    //     "use strict";
    //     console.log(this.age);
    // };
    // let me = {
    //     name: "Kathryn"
    // };
    // sayName();
//to avoid binding can utilize "use strict" which will throw error
// Principle 2

// code example for Implicit Binding
const animal = {
    name: "Horse",
    treat: "carrots",
    loves: function(){
        return `${this.name} loves ${this.treat}`;
    }
};


// Principle 3

// code example for New Binding
const Person = function(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
};
let sally = new Person("Sally", 25, "5'8")

// Principle 4

// code example for Explicit Binding

const dog = {
    name: "Rufus"
}

const humans = ["Whitney", "Britney", "Miley"];

function lovesPeople(person1, person2, person3){
    return `Hello my name is ${this.name} and I love mostly ${person1} then ${person2} and sometimes ${person3}`;   
}

console.log(lovesPeople.call(dog, ...humans));