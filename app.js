let myName = 'Ckelsie';
console.log(myName);

const numberOfStates = 50;
console.log(numberOfStates);

let answer= 5+4;
console.log(answer); //answer adds 5 and 4

function sayHello(){
    console.log('Hello World!'); //function sayHello logs Hello World! when called
}
sayHello(); //call sayHello function


function checkAge(name, age) { 
    if (age < 21) { 
        console.log("Sorry " + name + ", you are not old enough to view this page!"); //if age is less than 21, message shows
    } else {
        console.log("Welcome " + name + "."); //if age is over 21, message shows
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

const favVeggies = ["asparagus", "avacado", "broccoli", "lima beans"]; //array of favorite vegetables

for(let i = 0; i< favVeggies.length; i++){ 
    console.log(favVeggies[i]); //prints favorite vegetables in order from 0. by looping until it gets to the end of the list
}

//Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
     //   Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.

     const people = [
        {name:"John", age:50},
        {name:"Kelly", age:20},
        {name:"Zach", age:18},
        {name:"Caroline", age:67},
        {name:"David", age:30}];
        
        
        //for(let i =0; i < people.length; i++){
         //   console.log(people[i]);
       // }
        
function checkAge(name, age) {
    if (age < 21) {
            console.log("Sorry " + name + ", you are not old enough to view this page!");
    } else {
            console.log("Welcome " + name + ".");
            }