import { letExample } from "./let_module"

letExample()
function loadEx(){
  clear()
}

/**
 * Classes, super, static
 * */

/*
class Dog {
  constructor(){
    this.name = "Puppy"
  }

  say(){
    console.log( this.name + ' say hi')
  }

  bark(){
    console.log("woff woff")
  }

  static whoIam( ){
    console.log( "I'm the " +this.name+ " class" )
  }
}  

let Billo = new Dog()
Billo.say()
Dog.whoIam()

class Labrador extends Dog{
  constructor(name){
    super()
    this.name = name
    this.type = "labrador"
  }  

  say(){
    console.log( this.name + ' say hi, I\'m a ' + this.type)
  }
}

let Fido = new Labrador("Fido")
Fido.bark()
Fido.say()
*/

/**
 * Template strings
 * */

// Multiline strings
console.log(`In es5 this is
 not legal.`)

// String interpolation
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)

/**
 * Arrow functions
 * */
var sum = (a, b = 6) => (a + b);

var square = (b) => {
      return b * b;
};

console.log(sum(1,9));
