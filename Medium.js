
/**medium level lesson
 * june 10 2024 
 * 
 */

/**falsy or truthy
 * given two values, return the first one if it is falsy, otherwise return the second one
 * 
 */

console.log(("-------------------------------"));

function filterOutFalsy (val1, val2) {

    if (val1 == !! 0){
        return val1
    }
       else
       return val2 
    
   
}
console.log(filterOutFalsy(true,"dog"))
console.log(("-------------------------------"));


// return the length of a given array 
// given an array, return its length
function arrLength(arr1) {
    return arr1.length 
}
console.log(arrLength([3, 2, 0, 6, 8, 7]))

console.log(("-------------------------------"));
//given an array return the first element 

function lastElement(array) {
    return array[array.length -1]  //parameter[parameter.length -1] this will give us the last element of the array without specifying the index

}

console.log(lastElement([3, 2, 0, 6, 8]))
console.log(lastElement(['dog','cat','ball']))
console.log(lastElement([null, 5, false]))

console.log(("-------------------------------"));

// find the sum of an array
// given an array, return the sum of every element

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum

}
console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))


// add up the numbers from a signle number
// given a number, add up all the numbers from one to the number that is given
// an inpu of 4 will give you 1+2+3+4 which equals 10

function progressiveSum(arr)  {
    let sum = 0
    for (let i = 1; i <= arr; i++){
        sum = sum + i
    }
        return sum
}
console.log(progressiveSum(3))
console.log(progressiveSum(600))

// calculate the  time 
//given a number in seconds, return this number in mm:ss format 

function calcTime(seconds) {
    let timerMins = Math.floor(seconds / 60); //It basically rounds down a number to its nearest integer
    let timerSecs = seconds % 60; //givs the result from minutes into secs - how much remains after dividing minutes by 60 secs

    if (timerMins.toString().length ===1){ // only if timer Mins = to 1 digit
        timerMins = '0' + timerMins // adds 0 before the beginning of the minutes result
}

return timerMins + ':' + timerSecs // adds : between minutes and seconds
}
console.log(calcTime(400));
console.log(calcTime(4200));
console.log(calcTime(708));

//Q7. find the largest number 
//given an array of numbers, return the largest number of that array

function getMax(array) {

    let max = array[0]; // max starts at index 0 in this case 5
  
    for (let i = 0; i <= array.length; i++){ // i can be started at 0 or 1 because above we already looked at index 0
        if (array[i] >max){ // now looks at array list and if the number is bigger than original number at index 0("5")
            max = array[i]; // then i becomes the new max
        }    
     }
     return max  
}
console.log(getMax([5, 100, 0]))

// reverse a string
//given a string, return the reversed s(tring 
/** 
function reverseString(arr){
    let srt1 = arr[0];
    for (let i = 0 - 1; i>= 0; i--) {
       if (arr[i] > srt1);
    }
    
    return str1
}
console.log(reverseString('abcd'))*/


// q8.  reverse a string
//given a string, return the reversed string 

//using an incrementing for loop
function reverseString(str){
    reversedString = ''; // starting string empty
    for (let i =0; i < str.length; i++){
        // this is how you loop through every character in a string
        reversedString = str[i] + reversedString; // THE LETTER WE ARE CURRENTLY ON TO THE BEGGINING OF THE STRING
    }
    return reversedString
    
}
console.log(reverseString('abc'))
console.log(("-------------------------------"));

//doing the same as above using the array reverse property

function reversString(str){
    return str.split('').reverse().join('') // split converts a string into an array. split needs to used as an 
    // empty string. 'a', 'b', 'c' reverse reverses the array we are working on 'c','b','a'
    // join removes the quotes from reverse result (joins it -- cba) - join- array to string
    
}

console.log(reversString('abc'))
console.log(reversString('Betsy'))
console.log(reversString('Giovanna'))

console.log(("-------------------------------"));

//turning every element in an arra into 0 
// given an array of elements, return the same length array filled with 0's
// solving using for loop
function convertToZeros(arr) {
for (i=0; i < arr.length; ++i) { // always use this line to go thorugh each element in the array
    arr[i] = 0
}
    return arr
}
console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//using array.fill

function convrtToZero(arr) {
    return  new Array(arr.length).fill(0); // fills the new array with 0s

}
console.log(convrtToZero([1, 2, 3]))

//using array map - lets you map over every element on the array 
function contToZero(arr) {
    return arr.map(elem => 0); // map converts every single element of the array into 
    //whatever is on the right hand side of arrow function 

}
console.log(contToZero([1,2,3,4]))

//using array map - lets you map over every element on the array with brackets after arrow function
function contToZeero(arr) {
    return arr.map(elem => { // if the curly bracket is not used the system understand there is a return value
        return 0 // if we use curly bracket we need to the word return
    }); // map converts every single element of the array into 
    //whatever is on the right hand side of arrow function 

}
console.log(contToZeero([1,2,3,4,5])) //> (5) [0, 0, 0, 0, 0]

console.log(("-------------------------------"));

// 10. filter out all the apples
//given an array of fruits, if it is an apple remove it from the array.

function removeApples(fruits) { 
    let newFruits = []
    for (let i = 0; i < fruits.length; ++i) {
        if (fruits[i] !== 'Apple') {  // newFruits is created without value ==apple
            newFruits.push(fruits[i]);
        }
    }
    return newFruits;    
}
console.log(removeApples(['banana', 'Apple', 'Orange']))

//using array fill property 

function removeApple(fruits) { 
    return fruits.filter(elem => elem !== 'Apple') // show anything on the right of the arrow function except Apple
    //if element equal to apple , remove it - elem could be any other word
    // if using curly brackets we need to return, no invisible return
}
console.log(removeApples(['banana', 'Apple', 'coconut', 'cherry']))

console.log(("-------------------------------"));

//q 11. filter out all the falsy values

//given an array of values, filter out all the falsy values and only return the truthy values 
//val1 == !! 0

function filterOutFals(falsyVals) {
    return falsyVals.filter(elems => !!elems === true) // !!elems ===true - if this value is true
    
}
console.log(filterOutFals(["", [], NaN, 0, null, undefined, "0"]))

//using for loop


console.log(("-------------------------------"));

//q 12. truthy to true, Falsy to false
//given an array of truthy and falsy values, return the same array of elements nto its boolean values 

function convertToBoolean(BoolVals){
    return BoolVals.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, "David", "", []]))
console.log(("-------------------------------"));
console.log(("-----------JUNE 11--------------------"));
//finding the sum
    function arrSum2(arr){
        let sum = 0
        for (let i=0; i < arr.length; ++i){
           
            sum = sum + arr[i];
        }
            return sum
    }
    console.log(arrSum2([2,2,2,2]))
    console.log('-----------------------------')

    //finding the progressive sum

    function proSum(arr){
        let sum = 0
        for (let i=1; i <= arr; ++i){ // starting at 1 removes index 0 
           console.log(i) // display 1 2 3 4
            sum = sum + i

        }
            return sum
    }
    console.log(proSum([4])) // display 10

    console.log('-----------------------------')

      //finding the time in minutes

      function calTime(secnds) {
        let timrminuts = Math.floor(secnds / 60);
        let timrSecons = secnds % 60
        if (timrminuts.toString().length ===1) {
            timrminuts = '0' + timrminuts
        }
          
            return timrminuts + ':' + timrSecons
    }
    console.log(calTime([69]))
    console.log('-----------------------------')

    //q7  find the largest number - same as line 96 

    function gtMax(array) {
        let Maxx = array[0]
        for (let i=0; i <= array.length; ++i) {
            if (array[i] > Maxx){
                Maxx = array[i]
               
            }
        }
        return Maxx
    }
    console.log(gtMax([12, 10, -20, 40]))

    //q8 - reverse a string - same as line 126 
    //using array reverse property

    function revString(str2){
        return str2.split('').reverse().join('')
    }
console.log(revString('abc'))

function revString3(str2){
    return str2.reverse().join('')
}
console.log(revString3(['betsy','and','giovanna']))
//using incrementing loop 
/** 
function revString(str2){
    newStr2 = ''
    for (let i=1; i < str.toString.length; ++i)
    return str2.split('').reverse().join('')
}
console.log(revString(('abc','ac')))*/

//q9 - turn every element of the array into 0 
//using array 'map'
function ConvtToZero(arr){
    return arr.map(elem=> '0') // to the left of 0 there is an ivisible return elem => return '0'
}
console.log(ConvtToZero([12, 16]))

//using array 'fill'
function conToZero(arr5){
    return new Array(arr5.length).fill(0)

}
console.log(conToZero([12, 16,3]))

//q.10 filter out the apple

function remApples(strFruits){

    return strFruits.filter(elem => elem !== 'apple') //elem !== 'apple = if element is not equal to apple 
   
}
console.log(remApples(['apple', 'orange','coconut', 'mango']))

//q .11 filter out all the falsy values

function foFalsy(arr6){
     return arr6.filter(elem => !!elem === true)  //!!elem === true =  is this value true 
       
    }
    console.log(foFalsy(['apple', 'orange','coconut', 'mango', [], null, false,"", "0"]))

//using for loop

    function fFalsy(arra){
        arra2 = []
        for (let i =0; i < arra.length; ++i){
            if(!!arra[i] === true)
                arra2.push(arra[i])
        }
        return arra2
    }
    console.log(fFalsy(['apple', 'orange','coconut', 'mango', [], null, false,"", "0"]))

    //q. 12 truthy to true ,falsy to false

    function ctoBoolean(arr9){
        return arr9.map(elem => !!elem === true )
//   return arr.map(elem=> '0')
    }
    console.log(ctoBoolean(['apple', 'orange', false,'coconut', 'mango', [], null,"", "0"]))


    