let my = 'Ckelsie';
console.log(my);

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
        console.log("Sorry " +  + ", you are not old enough to view this page!"); //if age is less than 21, message shows
    } else {
        console.log("Welcome " +  + "."); //if age is over 21, message shows
    }
}
checkAge("Charles", 21);    //call checkAge function
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

const favVeggies = ["asparagus", "avacado", "broccoli", "lima beans"]; //array of favorite vegetables

for(let i = 0; i< favVeggies.length; i++){ 
    console.log(favVeggies[i]); //prints favorite vegetables in order from 0. by looping until it gets to the end of the list
}


    


let ary  = [                            //array of people's names and ages
    {name : "John", age: 50},
    {name : "Kelly", age: 20},
    {name : "Zach", age: 18},
    {name : "Caroline", age: 67},
    {name : "David", age: 30}];
        

function checkAge(ary){                 //checkAge function goes through array
}for(let i = 0; i < ary.length ; i++)   //starts at index 0 and loops through the length of the array
    if (ary[i].age<21){console.log("Sorry " + ary[i].name + ", you are not old enough to view this page!"); //if age is less than 21, message shows
    } for(let i = 0; i < ary.length ; i++)      //starts looping at 0 index through length of array
        if (ary[i].age>21){console.log("Welcome " + ary[i].name + "."); //if age is over 21, message shows
            
        }
checkAge();     //call the function





 

function getLength(string){                 // function getLength takes arguement
    return "string.toString"}              // turns any arguement into a string
var evenOrOdd = "string.length";               //number of characters in string renamed as evenOrOdd variable
    if ( evenOrOdd % 2 == 0){console.log("The world is nice and even!");        // if the string is divided by 2 and has a remainder of 0, it is even.
}   else 
    {console.log("The world is an odd place!");         //if false leaves odd message
}


getLength("Hello World");                   //call the function