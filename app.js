console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))



/**begineer level lesson
 * june 10 2024 
 * 
 */

function hoursIntoSeconds(numSecs) {

    return numSecs * 60 *60;

}
console.log(hoursIntoSeconds(8))


function calArea(base,height) {
    return (.5 * base * height)
}
console.log(calArea(200,200))

function appendFrontend(string1){
    let appendStr = 'Frontend'
    return appendFrontend = string1 + appendStr 
    
}
console.log(appendFrontend('apple'))


function sumGreaterThan100(num1, num2) {
    
   if ( num1 + num2 > 100 ) {
    return true
    
   }
    else
    return false
    
}
console.log(sumGreaterThan100(2,50))

function sumGreaterThan100(num1, num2) {
    
   return num1 + num2 > 100 
     
     
 }
 console.log(sumGreaterThan100(2,50))


function lessThanOrEqualToZero(num1) {
return num1 <= 0
}
console.log(lessThanOrEqualToZero(3))

function opossiteBoolean(bool) {
    if (bool === false) {
   return true;
}
else 
return false

}
console.log(opossiteBoolean(false))

// NEXT ONE

function isNotZero(num) {
 if (num != 0) {
    return  true
 }
 else 
 return false

}
console.log(isNotZero(0))

// or below solution is neater and better 

function isNotZero(num) {
    return num != 0
        
   }
   console.log(isNotZero(null))

//////
//calculate the remainder

function calcRemainder(num1, num2 ){

    return num1 % num2

}

console.log(calcRemainder(7, 8)) //rsult 7
console.log(calcRemainder(4, 2)) //rsult 0
console.log(calcRemainder(9, 8)) //rsult 1


// is the number odd - given two numbers return true if the number is odd


function isOdd(number1){
    return number1 % 2 !==0  // any number divided by 2 and result 0 is even 
}
console.log(isOdd(3)) //true
console.log(isOdd(2)) //false
console.log(isOdd(5)) //true

//if a number is even return 1 otherwise return -1
//create a function that takes a number argumnet and returns 1 if tehe number  is even if the number is odd return -1

function booleanInteger(num1) {
    if (num1  % 2 ===0){

        //return num % 2
return 1
}
else 
return -1
}
console.log(booleanInteger(2)); //1
console.log(booleanInteger(3)); // -1
console.log(booleanInteger(50)); //1
console.log(("-------------------------------"))

// or in one line - neater

function booleanIntegr(no1) {
    return no1 % 2 === 0 ? 1 : -1 // ? is like a second return and then the colon means like or 
                                //so it will be something return 1 or return -1
                                
 }
 console.log(booleanIntegr(1)) //-1
 console.log(booleanIntegr(2)) //1
 console.log(booleanIntegr(211)) //-1

 // check if a user is logged in AND subscribed
 // create a function that takes in two strings. if the first string is equal to "LOGGED_IN" AND the second string is
 // equal to SUBSCRIBED return true otherwise return false.

 function isLoggedInAndSubscribed(loggedIn, subscribed) {
   
    return (loggedIn ==='LOGGED_IN') || (subscribed ==='SUBSCRIBED') ? true : false

 }
 console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
 console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
 console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
 




/**
 * let grades = ['A+', 'A','FAIL']
 * for(let i=0; i < grades.length; ++i) {
    console.log(grades[i]);

}
=================================================
function opossiteBoolean(bool) {
     if (bool === false) {
    return true;
}
else 
 return false

}
console.log(opossiteBoolean(true))
 same as above but better 
=========================
function opossiteBoolean(bool) {
   return !bool

}
console.log(opossiteBoolean(true))
=================================================

function sumGreaterThan100(num1, num2) {
    
   if ( num1 + num2 > 100 ) {
    return true
    
   }
    else
    return false
    
}
console.log(sumGreaterThan100(2,50))
same as below - different solution 
function sumGreaterThan100(num1, num2) {
    
   return num1 + num2 > 100 
     
     
 }
 console.log(sumGreaterThan100(2,50))

let dollars
let cents = []
for(let cents)



 * function cToFar(num1, num2) {
return (num1 * 1.8) + 32
return (num2 * 1.8) + 32
}
console.log(cToFar(0, 50))





for (let str=('frontend Simplified' ) {
    console.log(str[5-1])
}

for (let i =1; i<= 20; i++){
    console.log (i)
    if (i % 3===0) {
        console.log(`${i} -> Frontend`)
    }
}


let str = 'Frontend Simplified'


*/


