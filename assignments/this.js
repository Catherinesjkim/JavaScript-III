/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* The four rules presented for determining what 'this' in JS points to boil down to one simple questions: What is the calling object?

* 1. Default/Window binding: Is the function called in the global scope? Window binding is like the forest of trees, not sure which one we are pointing at, so we point at the forest. 

* 2. Implicit binding: Is the function called by call(), apply(), bind(), or .speak()? Automatic with objects in methods. When a function is called by a preceding dot, the object before the dot is 'this'. 

* 3. New binding: Is the function called by new? When a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. 

* 4. Explicit binding: Is the function called as a method, ie: obj.func()? When JavaScript's call, apply, or bind method is used, this is explicitly defined. You can force a function call to use a particular object for this binding, without putting a property function reference on the object, so we explicitly say to a function what object it should use for this - mentioned above.

* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greetMe(name) {
  console.log('Hello ' + name);
  console.log(this);
}
// greetMe('Catherine'); // Window

// Principle 2
// code example for Implicit (Automatic) Binding
var greetMe = {
  greeting: 'Hello ',
  speak: function(name) {
    console.log(this.greeting + name);
    console.log(this);
  }
}
greetMe.speak('Catherine');

// Principle 3
// code example for New Binding 
function GreetMe(name) {
  this.greeting = 'Hello ';
  this.name = name;
  this.speak = function() {
    console.log(this.greeting + this.name);
    console.log(this);
  }
};
var greetCatherine = new GreetMe('Catherine');
var greetJustin = new GreetMe('Justin');

// greetCatherine.speak();
// greetJustin.speak();

// Principle 4
// code example for Explicit Binding - Using call/apply/bind
function greet() {
  // console.log(this.name);
}

var person = {
  name: 'Catherine'
}
// greet.call(person);
